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
      let scale = 1.5;
      let rendering = false;
      
      // Get device pixel ratio for higher resolution rendering
      const pixelRatio = window.devicePixelRatio || 1;
      
      // Function to update zoom level display
      function updateZoomLevel() {
        zoomLevel.textContent = `${Math.round(scale * 100)}%`;
      }
      
      // Function to render all pages of the PDF
      async function renderPDF() {
        if (rendering) return;
        rendering = true;
        
        // Show loading indicator
        loadingIndicator.style.display = 'block';
        
        // Clear existing pages
        container.innerHTML = '';
        
        try {
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
          await renderPDF();
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
        container.scrollTo({ top: 0, behavior: 'smooth' });
      });

      // Add event listener for Back to Top button
      topBtn.addEventListener('click', () => {
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
          if (pdfDoc) renderPDF();
        }, 200);
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