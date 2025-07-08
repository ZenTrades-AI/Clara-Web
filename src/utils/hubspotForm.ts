
declare global {
  interface Window {
    hbspt: any;
  }
}

export const openHubSpotForm = () => {
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
    z-index: 9999;
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

  // Assemble modal
  modal.appendChild(closeButton);
  modal.appendChild(formContainer);
  overlay.appendChild(modal);
  document.body.appendChild(overlay);

  // Create HubSpot form
  if (window.hbspt && window.hbspt.forms) {
    window.hbspt.forms.create({
      region: 'na1',
      portalId: '45865556',
      formId: 'c3428dcb-b18c-4277-b463-b7869c42800f',
      target: '#hubspot-form-target',
      onFormSubmitted: () => {
        // Auto-close modal after 2 seconds
        setTimeout(() => closeModal(), 2000);
      }
    });
  } else {
    // Fallback if HubSpot script not loaded
    formContainer.innerHTML = '<p style="text-align: center; color: #6b7280;">Loading form...</p>';
    console.error('HubSpot forms script not loaded');
  }
};

// Export for potential other form types
export const openAgentForm = () => {
  // Could be used for different forms with different IDs
  openHubSpotForm(); // For now, same implementation
};
