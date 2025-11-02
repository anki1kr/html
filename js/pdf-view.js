
pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';

// Main viewer functionality
class PDFViewer {
  constructor(options) {
    // Required options
    this.pdfUrl = options.pdfUrl;
    
    // Elements
    this.container = document.getElementById('pdf-container');
    this.loadingIndicator = document.getElementById('loading-indicator');
    this.zoomInBtn = document.getElementById('zoom-in');
    this.zoomOutBtn = document.getElementById('zoom-out');
    this.zoomLevel = document.getElementById('zoom-level');
    this.topBtn = document.getElementById('top-btn');
    
    // State
    this.pdfDoc = null;
    this.scale = this.getInitialScale();
    this.rendering = false;
    this.pixelRatio = window.devicePixelRatio || 1;
    
    // Initialize
    this.init();
  }
  
  init() {
    this.updateZoomLevel();
    this.setupEventListeners();
    this.setupSecurity();
    this.loadPDF();
  }
  
  // Function to determine initial scale based on screen width
  getInitialScale() {
    const width = window.innerWidth;
    if (width <= 576) return 1.0;
    if (width <= 768) return 1.2;
    if (width <= 992) return 1.3;
    return 1.5; // Default for larger screens
  }
  
  // Function to update zoom level display
  updateZoomLevel() {
    this.zoomLevel.textContent = `${Math.round(this.scale * 100)}%`;
  }
  
  // Function to calculate optimal scale for container width
  getOptimalScale(page) {
    const viewport = page.getViewport({ scale: 1 });
    const containerWidth = this.container.clientWidth;
    // Use 90% of container width to give some margin
    const optimalScale = (containerWidth * 0.9) / viewport.width;
    
    // Limit the scale to reasonable bounds
    return Math.min(Math.max(optimalScale, 0.5), 2.5);
  }
  
  // Function to render all pages of the PDF
  async renderPDF(useOptimalScale = false) {
    if (this.rendering) return;
    this.rendering = true;
    
    // Show loading indicator
    this.loadingIndicator.style.display = 'block';
    
    // Clear existing pages
    this.container.innerHTML = '';
    
    try {
      // Determine if we need to adjust scale for first page
      if (useOptimalScale && this.pdfDoc.numPages > 0) {
        const firstPage = await this.pdfDoc.getPage(1);
        const newScale = this.getOptimalScale(firstPage);
        this.scale = newScale;
        this.updateZoomLevel();
      }
      
      // Loop through each page and render it
      for (let pageNum = 1; pageNum <= this.pdfDoc.numPages; pageNum++) {
        const page = await this.pdfDoc.getPage(pageNum);
        
        // Create a wrapper div for the page
        const wrapper = document.createElement('div');
        wrapper.className = 'page-wrapper';
        
        // Get viewport with scale
        const viewport = page.getViewport({ scale: this.scale });
        
        // Create canvas with higher resolution using pixel ratio
        const canvas = document.createElement('canvas');
        canvas.className = 'pdf-page';
        const context = canvas.getContext('2d');
        
        // Scale for higher resolution
        const scaledViewport = page.getViewport({ 
          scale: this.scale * Math.max(this.pixelRatio, 2) // Ensure at least 2x resolution
        });
        
        // Set canvas dimensions - physical pixels
        canvas.height = scaledViewport.height;
        canvas.width = scaledViewport.width;
        
        // Set display size - CSS pixels
        canvas.style.width = `${viewport.width}px`;
        canvas.style.height = `${viewport.height}px`;
        
        // Add the canvas to the wrapper
        wrapper.appendChild(canvas);
        
        // Create page number indicator and add to wrapper (not to canvas)
        const pageNumberDiv = document.createElement('div');
        pageNumberDiv.className = 'pdf-page-number';
        pageNumberDiv.textContent = `Page ${pageNum} of ${this.pdfDoc.numPages}`;
        wrapper.appendChild(pageNumberDiv);
        
        // Add the wrapper to the container
        this.container.appendChild(wrapper);
        
        try {
          // Render the page content with higher resolution
          await page.render({
            canvasContext: context,
            viewport: scaledViewport,
            enableWebGL: true,
            renderInteractiveForms: false
          }).promise;
        } catch (renderError) {
          console.error(`Error rendering page ${pageNum}:`, renderError);
          
          // Add error message to the page
          const errorMsg = document.createElement('div');
          errorMsg.style.position = 'absolute';
          errorMsg.style.top = '50%';
          errorMsg.style.left = '50%';
          errorMsg.style.transform = 'translate(-50%, -50%)';
          errorMsg.style.color = 'red';
          errorMsg.style.background = 'rgba(255,255,255,0.8)';
          errorMsg.style.padding = '10px';
          errorMsg.style.borderRadius = '5px';
          errorMsg.textContent = `Error loading page ${pageNum}`;
          wrapper.appendChild(errorMsg);
        }
      }
    } catch (error) {
      console.error('Error processing PDF:', error);
      this.loadingIndicator.textContent = 'Error loading PDF. Please try again.';
    } finally {
      // Hide loading indicator
      this.loadingIndicator.style.display = 'none';
      this.rendering = false;
    }
  }
  
  // Load the PDF
  async loadPDF() {
    try {
      this.loadingIndicator.style.display = 'block';
      // Add cMapUrl option for better text rendering
      const loadingTask = pdfjsLib.getDocument({
        url: this.pdfUrl,
        cMapUrl: 'https://cdn.jsdelivr.net/npm/pdfjs-dist@3.11.174/cmaps/',
        cMapPacked: true
      });
      
      this.pdfDoc = await loadingTask.promise;
      await this.renderPDF(true); // Use optimal scale for initial render
    } catch (error) {
      console.error('Error loading PDF:', error);
      this.loadingIndicator.textContent = 'Failed to load PDF document.';
    }
  }
  
  setupEventListeners() {
    // Zoom in button
    this.zoomInBtn.addEventListener('click', () => {
      this.scale += 0.25;
      this.updateZoomLevel();
      this.renderPDF();
    });
    
    // Zoom out button
    this.zoomOutBtn.addEventListener('click', () => {
      if (this.scale > 0.5) {
        this.scale -= 0.25;
        this.updateZoomLevel();
        this.renderPDF();
      }
    });
    
    // Back to top button
    this.topBtn.addEventListener('click', () => {
      // Scroll PDF container to top
      this.container.scrollTo({ top: 0, behavior: 'smooth' });
      
      // Also scroll page to the top if needed
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
    
    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
      if (e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA') {
        if (e.key === '+' || e.key === '=') {
          this.scale += 0.25;
          this.updateZoomLevel();
          this.renderPDF();
          e.preventDefault();
        } else if (e.key === '-' || e.key === '_') {
          if (this.scale > 0.5) {
            this.scale -= 0.25;
            this.updateZoomLevel();
            this.renderPDF();
          }
          e.preventDefault();
        } else if (e.key === 'Home') {
          this.container.scrollTo({ top: 0, behavior: 'smooth' });
          e.preventDefault();
        } else if (e.key === 'End') {
          this.container.scrollTo({ top: this.container.scrollHeight, behavior: 'smooth' });
          e.preventDefault();
        }
      }
    });
    
    // Handle window resize with debounce
    let resizeTimer;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        if (this.pdfDoc) this.renderPDF(true); // Use optimal scale on resize
      }, 300);
    });
  }
  
  setupSecurity() {
    // Disable right-click
    document.addEventListener('contextmenu', e => e.preventDefault());
    
    // Disable keyboard shortcuts for saving/printing
    document.addEventListener('keydown', e => {
      if (e.ctrlKey && ['s', 'p', 'u', 'a'].includes(e.key.toLowerCase())) {
        e.preventDefault();
        return false;
      }
      
      if (e.key === 'F12') {
        e.preventDefault();
        return false;
      }
    });
    
    // Disable dragging
    document.addEventListener('dragstart', e => {
      e.preventDefault();
      return false;
    });
  }
}

// Initialize the PDF viewer when the script loads
document.addEventListener('DOMContentLoaded', function() {
  // Check if window.pdfViewerOptions is defined (should be set in the HTML)
  if (window.pdfViewerOptions && window.pdfViewerOptions.pdfUrl) {
    // Create new viewer with the provided options
    window.pdfViewer = new PDFViewer(window.pdfViewerOptions);
  } else {
    console.error('PDF Viewer Error: pdfViewerOptions not defined. Please set pdfUrl in your HTML.');
    
    // Show error in the loading indicator if it exists
    const loadingIndicator = document.getElementById('loading-indicator');
    if (loadingIndicator) {
      loadingIndicator.textContent = 'Error: PDF URL not provided. Please check your configuration.';
      loadingIndicator.style.display = 'block';
    }
  }
});
document.addEventListener('DOMContentLoaded', function() {
            const fullscreenBtn = document.getElementById('fullscreen-btn');
            const pdfViewer = document.getElementById('pdf-viewer');

            if (fullscreenBtn && pdfViewer) {
                fullscreenBtn.addEventListener('click', function() {
                    if (!document.fullscreenElement) {
                        // Enter fullscreen
                        if (pdfViewer.requestFullscreen) {
                            pdfViewer.requestFullscreen();
                        } else if (pdfViewer.mozRequestFullScreen) {
                            pdfViewer.mozRequestFullScreen();
                        } else if (pdfViewer.webkitRequestFullscreen) {
                            pdfViewer.webkitRequestFullscreen();
                        } else if (pdfViewer.msRequestFullscreen) {
                            pdfViewer.msRequestFullscreen();
                        }
                        fullscreenBtn.textContent = '⛶ Exit Fullscreen';
                    } else {
                        // Exit fullscreen
                        if (document.exitFullscreen) {
                            document.exitFullscreen();
                        } else if (document.mozCancelFullScreen) {
                            document.mozCancelFullScreen();
                        } else if (document.webkitExitFullscreen) {
                            document.webkitExitFullscreen();
                        } else if (document.msExitFullscreen) {
                            document.msExitFullscreen();
                        }
                        fullscreenBtn.textContent = '⛶ Fullscreen';
                    }
                });

                // Listen for fullscreen changes to update button text
                document.addEventListener('fullscreenchange', function() {
                    if (!document.fullscreenElement) {
                        fullscreenBtn.textContent = '⛶ Fullscreen';
                    }
                });
                document.addEventListener('webkitfullscreenchange', function() {
                    if (!document.webkitFullscreenElement) {
                        fullscreenBtn.textContent = '⛶ Fullscreen';
                    }
                });
                document.addEventListener('mozfullscreenchange', function() {
                    if (!document.mozFullScreenElement) {
                        fullscreenBtn.textContent = '⛶ Fullscreen';
                    }
                });
            }
        });