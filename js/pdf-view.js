// Set up PDF.js
    pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
    
    // Main viewer functionality
    document.addEventListener('DOMContentLoaded', function() {
      const pdfUrl = 'https://anki1kr.github.io/html/programs/project_file/c.pdf';
      const container = document.getElementById('pdf-container');
      const loadingIndicator = document.getElementById('loading-indicator');
      const zoomInBtn = document.getElementById('zoom-in');
      const zoomOutBtn = document.getElementById('zoom-out');
      const zoomLevel = document.getElementById('zoom-level');
      const topBtn = document.getElementById('top-btn');
      
      let pdfDoc = null;
      let scale = getInitialScale(); // Use responsive initial scale
      let rendering = false;
      
      // Get device pixel ratio for higher resolution rendering
      const pixelRatio = window.devicePixelRatio || 1;
      
      // Function to determine initial scale based on screen width
      function getInitialScale() {
        const width = window.innerWidth;
        if (width <= 576) return 1.0;
        if (width <= 768) return 1.2;
        if (width <= 992) return 1.3;
        return 1.5; // Default for larger screens
      }
      
      // Function to update zoom level display
      function updateZoomLevel() {
        zoomLevel.textContent = `${Math.round(scale * 100)}%`;
      }
      
      // Function to calculate optimal scale for container width
      function getOptimalScale(page) {
        const viewport = page.getViewport({ scale: 1 });
        const containerWidth = container.clientWidth;
        // Use 90% of container width to give some margin
        const optimalScale = (containerWidth * 0.9) / viewport.width;
        
        // Limit the scale to reasonable bounds
        return Math.min(Math.max(optimalScale, 0.5), 2.5);
      }
      
      // Function to render all pages of the PDF
      async function renderPDF(useOptimalScale = false) {
        if (rendering) return;
        rendering = true;
        
        // Show loading indicator
        loadingIndicator.style.display = 'block';
        
        // Clear existing pages
        container.innerHTML = '';
        
        try {
          // Determine if we need to adjust scale for first page
          if (useOptimalScale && pdfDoc.numPages > 0) {
            const firstPage = await pdfDoc.getPage(1);
            const newScale = getOptimalScale(firstPage);
            scale = newScale;
            updateZoomLevel();
          }
          
          // Loop through each page and render it
          for (let pageNum = 1; pageNum <= pdfDoc.numPages; pageNum++) {
            const page = await pdfDoc.getPage(pageNum);
            
            // Create a wrapper div for the page
            const wrapper = document.createElement('div');
            wrapper.className = 'page-wrapper';
            
            // Get viewport with scale
            const viewport = page.getViewport({ scale });
            
            // Create canvas with higher resolution using pixel ratio
            const canvas = document.createElement('canvas');
            canvas.className = 'pdf-page';
            const context = canvas.getContext('2d');
            
            // Scale for higher resolution
            const scaledViewport = page.getViewport({ 
              scale: scale * pixelRatio 
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
            pageNumberDiv.textContent = `Page ${pageNum} of ${pdfDoc.numPages}`;
            wrapper.appendChild(pageNumberDiv);
            
            // Add the wrapper to the container
            container.appendChild(wrapper);
            
            // Render the page content with higher resolution
            await page.render({
              canvasContext: context,
              viewport: scaledViewport,
              enableWebGL: true,
              renderInteractiveForms: false
            }).promise;
          }
        } catch (error) {
          console.error('Error rendering PDF:', error);
          loadingIndicator.textContent = 'Error loading PDF. Please try again.';
        } finally {
          // Hide loading indicator
          loadingIndicator.style.display = 'none';
          rendering = false;
        }
      }
      
      // Load the PDF
      async function loadPDF() {
        try {
          loadingIndicator.style.display = 'block';
          // Add cMapUrl option for better text rendering
          const loadingTask = pdfjsLib.getDocument({
            url: pdfUrl,
            cMapUrl: 'https://cdn.jsdelivr.net/npm/pdfjs-dist@3.11.174/cmaps/',
            cMapPacked: true
          });
          
          pdfDoc = await loadingTask.promise;
          await renderPDF(true); // Use optimal scale for initial render
        } catch (error) {
          console.error('Error loading PDF:', error);
          loadingIndicator.textContent = 'Failed to load PDF document.';
        }
      }
      
      // Event listeners
      zoomInBtn.addEventListener('click', () => {
        scale += 0.25;
        updateZoomLevel();
        renderPDF();
      });
      
      zoomOutBtn.addEventListener('click', () => {
        if (scale > 0.5) {
          scale -= 0.25;
          updateZoomLevel();
          renderPDF();
        }
      });
      
      topBtn.addEventListener('click', () => {
        // Scroll PDF container to top
        container.scrollTo({ top: 0, behavior: 'smooth' });
        
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
            scale += 0.25;
            updateZoomLevel();
            renderPDF();
            e.preventDefault();
          } else if (e.key === '-' || e.key === '_') {
            if (scale > 0.5) {
              scale -= 0.25;
              updateZoomLevel();
              renderPDF();
            }
            e.preventDefault();
          } else if (e.key === 'Home') {
            container.scrollTo({ top: 0, behavior: 'smooth' });
            e.preventDefault();
          } else if (e.key === 'End') {
            container.scrollTo({ top: container.scrollHeight, behavior: 'smooth' });
            e.preventDefault();
          }
        }
      });
      
      // Handle window resize with debounce
      let resizeTimer;
      window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
          if (pdfDoc) renderPDF(true); // Use optimal scale on resize
        }, 300);
      });
      
      // Prevent common methods for downloading
      function setupSecurity() {
        // Disable right-click
        document.addEventListener('contextmenu', e => e.preventDefault());
        
        // Disable keyboard shortcuts for saving/printing
        document.addEventListener('keydown', e => {
          if (e.ctrlKey && ['s', 'p', 'u', 'a'].includes(e.key.toLowerCase())) {
            e.preventDefault();
            return false;
          }
          
          if (e.key === 'F12' || e.keyCode === 123) {
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
      
      // Initialize everything
      updateZoomLevel();
      setupSecurity();
      loadPDF();
    });