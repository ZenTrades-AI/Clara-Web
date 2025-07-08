
declare global {
  interface Window {
    hbspt: any;
  }
}

// Function to load HubSpot script dynamically if not already loaded
const loadHubSpotScript = (): Promise<void> => {
  return new Promise((resolve, reject) => {
    console.log('Loading HubSpot script...');
    
    // Check if script is already loaded
    if (window.hbspt && window.hbspt.forms) {
      console.log('HubSpot script already loaded');
      resolve();
      return;
    }

    // Check if script tag already exists
    const existingScript = document.querySelector('script[src*="js.hsforms.net"]');
    if (existingScript) {
      console.log('HubSpot script tag exists, checking if loaded...');
      
      // If script exists and hbspt is available, resolve immediately
      if (window.hbspt && window.hbspt.forms) {
        console.log('HubSpot script already available');
        resolve();
        return;
      }
      
      // Remove existing script and create new one
      console.log('Removing existing script and creating new one...');
      existingScript.remove();
    }

    // Create and load the script
    console.log('Creating new HubSpot script tag...');
    const script = document.createElement('script');
    script.src = 'https://js.hsforms.net/forms/embed/v3.js';
    script.defer = true;
    
    script.onload = () => {
      console.log('HubSpot script tag loaded, waiting for initialization...');
      // Wait a bit for HubSpot to initialize
      setTimeout(() => {
        if (window.hbspt && window.hbspt.forms) {
          console.log('HubSpot forms ready');
          resolve();
        } else {
          console.error('HubSpot script loaded but forms not available after timeout');
          reject(new Error('HubSpot script loaded but forms not available'));
        }
      }, 1000);
    };
    
    script.onerror = () => {
      console.error('Failed to load HubSpot script');
      reject(new Error('Failed to load HubSpot script'));
    };
    
    document.head.appendChild(script);
  });
};

export const openHubSpotForm = async () => {
  console.log('Opening HubSpot form...');
  
  // Create modal overlay
  const overlay = document.createElement('div');
  overlay.id = 'hubspot-modal-overlay';
  overlay.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(4px);
    z-index: 99999;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
  `;

  // Create modal content
  const modal = document.createElement('div');
  modal.style.cssText = `
    background: white;
    border-radius: 12px;
    max-width: 500px;
    width: 100%;
    max-height: 80vh;
    overflow-y: auto;
    position: relative;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  `;

  // Create close button
  const closeButton = document.createElement('button');
  closeButton.innerHTML = '✕';
  closeButton.style.cssText = `
    position: absolute;
    top: 16px;
    right: 16px;
    background: none;
    border: none;
    font-size: 20px;
    cursor: pointer;
    z-index: 10;
    padding: 8px;
    border-radius: 50%;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #6b7280;
    transition: all 0.2s ease;
  `;

  // Close button hover effect
  closeButton.onmouseenter = () => {
    closeButton.style.backgroundColor = '#f3f4f6';
    closeButton.style.color = '#374151';
  };
  closeButton.onmouseleave = () => {
    closeButton.style.backgroundColor = 'transparent';
    closeButton.style.color = '#6b7280';
  };

  // Create form container
  const formContainer = document.createElement('div');
  formContainer.id = 'hubspot-form-target';
  formContainer.style.cssText = `
    padding: 24px;
    padding-top: 48px;
  `;

  // Function to close modal
  const closeModal = () => {
    console.log('Closing modal...');
    if (overlay && overlay.parentNode) {
      overlay.parentNode.removeChild(overlay);
    }
  };

  // Close button event
  closeButton.onclick = closeModal;

  // Close on overlay click
  overlay.onclick = (e) => {
    if (e.target === overlay) {
      closeModal();
    }
  };

  // Close on escape key
  const handleEscape = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeModal();
      document.removeEventListener('keydown', handleEscape);
    }
  };
  document.addEventListener('keydown', handleEscape);

  // Show loading initially
  formContainer.innerHTML = '<div style="text-align: center; padding: 40px; color: #6b7280;"><div style="display: inline-block; width: 20px; height: 20px; border: 3px solid #f3f3f3; border-top: 3px solid #3498db; border-radius: 50%; animation: spin 1s linear infinite;"></div><p style="margin-top: 16px;">Loading form...</p></div><style>@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }</style>';

  // Assemble modal
  modal.appendChild(closeButton);
  modal.appendChild(formContainer);
  overlay.appendChild(modal);
  document.body.appendChild(overlay);
  
  console.log('Modal created and added to DOM');

  try {
    // Load HubSpot script and create form
    await loadHubSpotScript();
    
    console.log('Creating HubSpot form...');
    // Clear loading and create form
    formContainer.innerHTML = '';
    window.hbspt.forms.create({
      region: 'na1',
      portalId: '45865556',
      formId: 'c3428dcb-b18c-4277-b463-b7869c42800f',
      target: '#hubspot-form-target',
      onFormSubmitted: () => {
        console.log('Form submitted successfully');
        // Show success message
        formContainer.innerHTML = '<div style="text-align: center; padding: 40px; color: #059669;"><div style="font-size: 48px; margin-bottom: 16px;">✓</div><h3 style="margin: 0 0 8px 0; color: #111;">Thank you!</h3><p style="margin: 0; color: #6b7280;">We\'ll be in touch soon.</p></div>';
        // Auto-close modal after 3 seconds
        setTimeout(() => closeModal(), 3000);
      },
      onFormReady: () => {
        console.log('HubSpot form is ready');
      }
    });
  } catch (error) {
    console.error('Error loading HubSpot form:', error);
    formContainer.innerHTML = `
      <div style="text-align: center; padding: 40px; color: #dc2626;">
        <div style="font-size: 48px; margin-bottom: 16px;">⚠️</div>
        <h3 style="margin: 0 0 8px 0; color: #111;">Form unavailable</h3>
        <p style="margin: 0 0 16px 0; color: #6b7280;">Please try again later or contact us directly.</p>
        <button 
          onclick="window.open('mailto:contact@yourcompany.com', '_blank')" 
          style="background: #dc2626; color: white; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer;"
        >
          Contact Us
        </button>
      </div>
    `;
  }
};

// Export for potential other form types
export const openAgentForm = () => {
  // Could be used for different forms with different IDs
  openHubSpotForm(); // For now, same implementation
};
