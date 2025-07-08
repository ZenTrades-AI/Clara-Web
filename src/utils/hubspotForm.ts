
// Function to open HubSpot form in modal popup on same page
export const openHubSpotForm = () => {
  console.log('Opening HubSpot form in modal popup...');
  
  // Check if modal already exists and remove it
  const existingModal = document.getElementById('hubspot-modal');
  if (existingModal) {
    existingModal.remove();
  }

  // Create modal overlay
  const modalOverlay = document.createElement('div');
  modalOverlay.id = 'hubspot-modal';
  modalOverlay.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    box-sizing: border-box;
  `;

  // Create modal content container
  const modalContent = document.createElement('div');
  modalContent.style.cssText = `
    position: relative;
    width: 100%;
    max-width: 800px;
    max-height: 90%;
    background: white;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
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
    font-size: 24px;
    font-weight: bold;
    color: #666;
    cursor: pointer;
    z-index: 10000;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    transition: all 0.2s ease;
  `;

  closeButton.onmouseover = () => {
    closeButton.style.backgroundColor = '#f3f4f6';
    closeButton.style.color = '#000';
  };

  closeButton.onmouseout = () => {
    closeButton.style.backgroundColor = 'transparent';
    closeButton.style.color = '#666';
  };

  // Create iframe for HubSpot form
  const iframe = document.createElement('iframe');
  iframe.src = 'https://rb238.share.hsforms.com/2w0KNy7GMQne0Y7eGnEKADw';
  iframe.style.cssText = `
    width: 100%;
    height: 600px;
    border: none;
    border-radius: 8px;
  `;

  // Close modal function
  const closeModal = () => {
    modalOverlay.remove();
  };

  // Add event listeners
  closeButton.addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
      closeModal();
    }
  });

  // Add escape key listener
  const handleEscape = (e) => {
    if (e.key === 'Escape') {
      closeModal();
      document.removeEventListener('keydown', handleEscape);
    }
  };
  document.addEventListener('keydown', handleEscape);

  // Assemble modal
  modalContent.appendChild(closeButton);
  modalContent.appendChild(iframe);
  modalOverlay.appendChild(modalContent);
  document.body.appendChild(modalOverlay);

  // Prevent body scroll when modal is open
  document.body.style.overflow = 'hidden';

  // Restore body scroll when modal is closed
  const originalCloseModal = closeModal;
  const enhancedCloseModal = () => {
    document.body.style.overflow = '';
    originalCloseModal();
  };

  closeButton.onclick = enhancedCloseModal;
  modalOverlay.onclick = (e) => {
    if (e.target === modalOverlay) {
      enhancedCloseModal();
    }
  };
};

// Export for potential other form types
export const openAgentForm = () => {
  // Could be used for different forms with different IDs
  openHubSpotForm(); // For now, same implementation
};
