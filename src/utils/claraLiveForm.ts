
import React from 'react';
import { createRoot } from 'react-dom/client';
import { ClaraLiveForm } from '@/components/ClaraLiveForm';

export const openClaraLiveForm = () => {
  // Remove any existing modals first
  const existingModal = document.getElementById('clara-live-modal-overlay');
  if (existingModal) {
    existingModal.remove();
  }

  // Create modal overlay
  const overlay = document.createElement('div');
  overlay.id = 'clara-live-modal-overlay';
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

  // Create modal content container
  const modal = document.createElement('div');
  modal.id = 'clara-live-modal-content';
  modal.style.cssText = `
    background: white;
    border-radius: 12px;
    padding: 0;
    max-width: 500px;
    width: 90%;
    max-height: 90vh;
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
    z-index: 10;
  `;

  // Add hover effects to close button
  closeButton.addEventListener('mouseenter', () => {
    closeButton.style.backgroundColor = '#f0f0f0';
  });
  closeButton.addEventListener('mouseleave', () => {
    closeButton.style.backgroundColor = 'transparent';
  });

  // Create container for React form
  const formContainer = document.createElement('div');
  formContainer.id = 'clara-live-form-container';

  // Close modal function
  const closeModal = () => {
    overlay.remove();
    document.body.style.overflow = 'auto';
  };

  // Event listeners for closing
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

  // Assemble modal structure
  modal.appendChild(closeButton);
  modal.appendChild(formContainer);
  overlay.appendChild(modal);

  // Prevent body scroll when modal is open
  document.body.style.overflow = 'hidden';

  // Add modal to page
  document.body.appendChild(overlay);

  // Render React component in the modal
  const root = createRoot(formContainer);
  root.render(React.createElement(ClaraLiveForm, { onClose: closeModal }));
};
