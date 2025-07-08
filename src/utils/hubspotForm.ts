
// Simple function to open HubSpot form in new tab
export const openHubSpotForm = () => {
  console.log('Opening HubSpot form in new tab...');
  window.open('https://rb238.share.hsforms.com/2w0KNy7GMQne0Y7eGnEKADw', '_blank');
};

// Export for potential other form types
export const openAgentForm = () => {
  // Could be used for different forms with different IDs
  openHubSpotForm(); // For now, same implementation
};
