
export const showHubSpotGuide = () => {
  // Remove any existing modals first
  const existingModal = document.getElementById('hubspot-guide-modal-overlay');
  if (existingModal) {
    existingModal.remove();
  }

  // Create modal overlay
  const overlay = document.createElement('div');
  overlay.id = 'hubspot-guide-modal-overlay';
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
  modal.id = 'hubspot-guide-modal-content';
  modal.style.cssText = `
    background: white;
    border-radius: 12px;
    padding: 40px 30px 30px 30px;
    max-width: 1000px;
    width: 95%;
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
  `;

  closeButton.addEventListener('mouseenter', () => {
    closeButton.style.backgroundColor = '#f0f0f0';
  });

  closeButton.addEventListener('mouseleave', () => {
    closeButton.style.backgroundColor = 'transparent';
  });

  // Create content container
  const contentContainer = document.createElement('div');
  contentContainer.innerHTML = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333;">
      <h1 style="color: #1a1a1a; margin-bottom: 20px; font-size: 24px; font-weight: bold;">Complete HubSpot Popup Form Implementation Guide</h1>
      
      <h2 style="color: #e53e3e; margin: 20px 0 10px 0; font-size: 18px; font-weight: bold;">STEP 1: Add HubSpot Scripts to HTML</h2>
      <p>Add these scripts to your index.html file in the &lt;head&gt; section:</p>
      <pre style="background: #f5f5f5; padding: 15px; border-radius: 5px; overflow-x: auto; margin: 10px 0;"><code>&lt;script src="https://js.hsforms.net/forms/embed/45865556.js" defer&gt;&lt;/script&gt;
&lt;script charset="utf-8" type="text/javascript" src="//js.hsforms.net/forms/embed/v2.js"&gt;&lt;/script&gt;</code></pre>
      <p><strong>Note:</strong> Replace 45865556 with your actual HubSpot Portal ID.</p>

      <h2 style="color: #e53e3e; margin: 20px 0 10px 0; font-size: 18px; font-weight: bold;">STEP 2: Create TypeScript Definitions</h2>
      <p>Create file src/types/hubspot.d.ts:</p>
      <pre style="background: #f5f5f5; padding: 15px; border-radius: 5px; overflow-x: auto; margin: 10px 0;"><code>declare global {
  interface Window {
    hbspt: {
      forms: {
        create: (options: {
          region: string;
          portalId: string;
          formId: string;
          target: HTMLElement | string;
          onFormReady?: () => void;
          onFormSubmitted?: () => void;
          onFormDefinitionFetchError?: (error: any) => void;
        }) => void;
      };
    };
  }
}

export {};</code></pre>

      <h2 style="color: #e53e3e; margin: 20px 0 10px 0; font-size: 18px; font-weight: bold;">STEP 3: Create the Main Utility File</h2>
      <p>Create file src/utils/hubspotForm.ts with the complete implementation...</p>
      
      <h2 style="color: #e53e3e; margin: 20px 0 10px 0; font-size: 18px; font-weight: bold;">STEP 4: Use in Your Components</h2>
      <pre style="background: #f5f5f5; padding: 15px; border-radius: 5px; overflow-x: auto; margin: 10px 0;"><code>import { Button } from '@/components/ui/button';
import { openHubSpotForm } from '@/utils/hubspotForm';

const YourComponent = () => {
  return (
    &lt;Button onClick={openHubSpotForm}&gt;
      Get Demo
    &lt;/Button&gt;
  );
};</code></pre>

      <h2 style="color: #e53e3e; margin: 20px 0 10px 0; font-size: 18px; font-weight: bold;">STEP 5: Customize Your HubSpot Settings</h2>
      <p>You need to replace these values with your own:</p>
      <ul style="margin: 10px 0; padding-left: 20px;">
        <li><strong>Portal ID:</strong> Replace '45865556' with your HubSpot Portal ID</li>
        <li><strong>Form ID:</strong> Replace 'c3428dcb-b18c-4277-b463-b7869c42800f' with your HubSpot Form ID</li>
        <li><strong>Region:</strong> Keep 'na1' for North America, change to 'eu1' for Europe</li>
      </ul>

      <h3 style="color: #1a1a1a; margin: 15px 0 10px 0; font-size: 16px; font-weight: bold;">How to Find Your HubSpot Credentials:</h3>
      <ul style="margin: 10px 0; padding-left: 20px;">
        <li><strong>Portal ID:</strong> Go to HubSpot → Settings → Account Defaults</li>
        <li><strong>Form ID:</strong> Go to HubSpot → Marketing → Forms → Select your form → Get embed code → Copy the form ID from the code</li>
      </ul>

      <h2 style="color: #e53e3e; margin: 20px 0 10px 0; font-size: 18px; font-weight: bold;">Key Features This Implementation Provides:</h2>
      <ul style="margin: 10px 0; padding-left: 20px;">
        <li>✅ Modal popup with dark backdrop</li>
        <li>✅ Responsive design (works on mobile)</li>
        <li>✅ Click outside to close</li>
        <li>✅ Close button with hover effects</li>
        <li>✅ Auto-close after form submission</li>
        <li>✅ Prevents body scroll when open</li>
        <li>✅ Error handling if HubSpot fails to load</li>
        <li>✅ Loading states and retries</li>
        <li>✅ Console logging for debugging</li>
      </ul>

      <h2 style="color: #e53e3e; margin: 20px 0 10px 0; font-size: 18px; font-weight: bold;">Example Button Implementations:</h2>
      <pre style="background: #f5f5f5; padding: 15px; border-radius: 5px; overflow-x: auto; margin: 10px 0;"><code>// Get Demo Button
&lt;Button onClick={openHubSpotForm}&gt;
  Book a Demo
&lt;/Button&gt;

// Get Started Button  
&lt;Button onClick={openHubSpotForm}&gt;
  Get Started
&lt;/Button&gt;

// Contact Us Button
&lt;Button onClick={openHubSpotForm}&gt;
  Contact Us
&lt;/Button&gt;</code></pre>

      <div style="margin-top: 30px; padding: 20px; background: #e8f5e8; border-radius: 8px; border-left: 4px solid #38a169;">
        <p style="margin: 0; font-weight: bold;">Copy this entire explanation to your other project and ask the AI to implement it exactly as described. Make sure to update the Portal ID and Form ID with your own HubSpot credentials.</p>
      </div>
    </div>
  `;

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
  modal.appendChild(contentContainer);
  overlay.appendChild(modal);

  // Prevent body scroll
  document.body.style.overflow = 'hidden';

  // Add modal to page
  document.body.appendChild(overlay);
};
