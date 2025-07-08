
// Function to load HubSpot script dynamically
const loadHubSpotScript = (): Promise<void> => {
  return new Promise((resolve, reject) => {
    // Check if script is already loaded
    if (window.hbspt?.forms) {
      resolve();
      return;
    }

    // Check if script is already in the DOM
    const existingScript = document.querySelector('script[src*="js.hsforms.net"]');
    if (existingScript) {
      // Script exists but might not be loaded yet
      existingScript.addEventListener('load', () => resolve());
      existingScript.addEventListener('error', () => reject());
      return;
    }

    // Create and load the script
    const script = document.createElement('script');
    script.src = 'https://js.hsforms.net/forms/v2.js';
    script.async = true;
    script.onload = () => {
      console.log('HubSpot script loaded successfully');
      resolve();
    };
    script.onerror = () => {
      console.error('Failed to load HubSpot script');
      reject();
    };
    
    document.head.appendChild(script);
  });
};

// Function to open HubSpot form in modal popup on same page
export const openHubSpotForm = () => {
  // Remove any existing modals first
  const existingModal = document.getElementById('hubspot-modal-overlay');
  if (existingModal) {
    existingModal.remove();
  }

  // Create modal overlay
  const overlay = document.createElement('div');
  overlay.id = 'hubspot-modal-overlay';
  overlay.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999999;
    backdrop-filter: blur(5px);
  `;

  // Create modal content
  const modal = document.createElement('div');
  modal.id = 'hubspot-modal-content';
  modal.style.cssText = `
    background: white;
    border-radius: 12px;
    padding: 40px 30px 30px 30px;
    max-width: 900px;
    width: 90%;
    max-height: 80vh;
    overflow-y: auto;
    position: relative;
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
  `;

  // Create close button
  const closeButton = document.createElement('button');
  closeButton.innerHTML = '×';
  closeButton.style.cssText = `
    position: absolute;
    top: 15px;
    right: 20px;
    background: none;
    border: none;
    font-size: 28px;
    cursor: pointer;
    color: #666;
    width: 35px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    transition: background-color 0.2s;
  `;

  closeButton.addEventListener('mouseenter', () => {
    closeButton.style.backgroundColor = '#f0f0f0';
  });

  closeButton.addEventListener('mouseleave', () => {
    closeButton.style.backgroundColor = 'transparent';
  });

  // Create form container that will hold the HubSpot form
  const formContainer = document.createElement('div');
  formContainer.id = 'hubspot-form-target';
  formContainer.style.cssText = `
    width: 100%;
    min-height: 200px;
  `;

  // Create loading indicator
  const loadingIndicator = document.createElement('div');
  loadingIndicator.innerHTML = 'Loading form...';
  loadingIndicator.style.cssText = `
    text-align: center;
    padding: 40px;
    color: #666;
  `;
  formContainer.appendChild(loadingIndicator);

  // Close modal function
  const closeModal = () => {
    overlay.remove();
    document.body.style.overflow = 'auto';
  };

  // Event listeners
  closeButton.addEventListener('click', closeModal);
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      closeModal();
    }
  });

  // Prevent modal content clicks from closing modal
  modal.addEventListener('click', (e) => {
    e.stopPropagation();
  });

  // Assemble modal
  modal.appendChild(closeButton);
  modal.appendChild(formContainer);
  overlay.appendChild(modal);

  // Prevent body scroll
  document.body.style.overflow = 'hidden';

  // Add modal to page
  document.body.appendChild(overlay);

  // Load HubSpot script and initialize form
  loadHubSpotScript()
    .then(() => {
      console.log('Creating HubSpot form in modal...');
      
      // Clear loading indicator
      formContainer.innerHTML = '';
      
      try {
        window.hbspt!.forms.create({
          region: 'na1',
          portalId: '45865556',
          formId: 'c3428dcb-b18c-4277-b463-b7869c42800f',
          target: '#hubspot-form-target',
          onFormReady: () => {
            console.log('HubSpot form is ready in modal');
          },
          onFormSubmitted: () => {
            console.log('HubSpot form submitted');
            // Close modal after successful submission
            setTimeout(() => {
              closeModal();
            }, 2000);
          }
        });
      } catch (error) {
        console.error('Error creating HubSpot form:', error);
        formContainer.innerHTML = '<p style="padding: 20px; text-align: center; color: #666;">Unable to load form. Please try again later.</p>';
      }
    })
    .catch((error) => {
      console.error('Failed to load HubSpot:', error);
      formContainer.innerHTML = '<p style="padding: 20px; text-align: center; color: #666;">Unable to load form. Please check your internet connection and try again.</p>';
    });
};

// Export for potential other form types
export const openAgentForm = () => {
  // Remove any existing modals first
  const existingModal = document.getElementById('agent-modal-overlay');
  if (existingModal) {
    existingModal.remove();
  }

  // Create modal overlay
  const overlay = document.createElement('div');
  overlay.id = 'agent-modal-overlay';
  overlay.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999999;
    backdrop-filter: blur(5px);
  `;

  // Create modal content
  const modal = document.createElement('div');
  modal.id = 'agent-modal-content';
  modal.style.cssText = `
    background: white;
    border-radius: 12px;
    padding: 40px 30px 30px 30px;
    max-width: 900px;
    width: 90%;
    max-height: 80vh;
    overflow-y: auto;
    position: relative;
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
  `;

  // Create close button
  const closeButton = document.createElement('button');
  closeButton.innerHTML = '×';
  closeButton.style.cssText = `
    position: absolute;
    top: 15px;
    right: 20px;
    background: none;
    border: none;
    font-size: 28px;
    cursor: pointer;
    color: #666;
    width: 35px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    transition: background-color 0.2s;
  `;

  closeButton.addEventListener('mouseenter', () => {
    closeButton.style.backgroundColor = '#f0f0f0';
  });

  closeButton.addEventListener('mouseleave', () => {
    closeButton.style.backgroundColor = 'transparent';
  });

  // Create form container that will hold the HubSpot form
  const formContainer = document.createElement('div');
  formContainer.id = 'agent-form-target';
  formContainer.style.cssText = `
    width: 100%;
    min-height: 200px;
  `;

  // Create loading indicator
  const loadingIndicator = document.createElement('div');
  loadingIndicator.innerHTML = 'Loading form...';
  loadingIndicator.style.cssText = `
    text-align: center;
    padding: 40px;
    color: #666;
  `;
  formContainer.appendChild(loadingIndicator);

  // Close modal function
  const closeModal = () => {
    overlay.remove();
    document.body.style.overflow = 'auto';
  };

  // Event listeners
  closeButton.addEventListener('click', closeModal);
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      closeModal();
    }
  });

  // Prevent modal content clicks from closing modal
  modal.addEventListener('click', (e) => {
    e.stopPropagation();
  });

  // Assemble modal
  modal.appendChild(closeButton);
  modal.appendChild(formContainer);
  overlay.appendChild(modal);

  // Prevent body scroll
  document.body.style.overflow = 'hidden';

  // Add modal to page
  document.body.appendChild(overlay);

  // Load HubSpot script and initialize form
  loadHubSpotScript()
    .then(() => {
      console.log('Creating Agent HubSpot form in modal...');
      
      // Clear loading indicator
      formContainer.innerHTML = '';
      
      try {
        window.hbspt!.forms.create({
          region: 'na1',
          portalId: '45865556',
          formId: 'be1824d6-c6db-41c7-8b17-62e65b7f5662',
          target: '#agent-form-target',
          onFormReady: () => {
            console.log('Agent HubSpot form is ready in modal');
          },
          onFormSubmitted: () => {
            console.log('Agent HubSpot form submitted');
            // Close modal after successful submission
            setTimeout(() => {
              closeModal();
            }, 2000);
          }
        });
      } catch (error) {
        console.error('Error creating Agent HubSpot form:', error);
        formContainer.innerHTML = '<p style="padding: 20px; text-align: center; color: #666;">Unable to load form. Please try again later.</p>';
      }
    })
    .catch((error) => {
      console.error('Failed to load HubSpot for Agent form:', error);
      formContainer.innerHTML = '<p style="padding: 20px; text-align: center; color: #666;">Unable to load form. Please check your internet connection and try again.</p>';
    });
};
