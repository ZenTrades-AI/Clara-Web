
// HubSpot form configuration interface
interface HubSpotFormConfig {
  region: string;
  portalId: string;
  formId: string;
  target: string;
  onFormReady?: () => void;
  onFormSubmitted?: () => void;
}

// HubSpot global object interface
interface HubSpotGlobal {
  forms: {
    create: (config: HubSpotFormConfig) => void;
  };
}

// Extend the Window interface to include hbspt
declare global {
  interface Window {
    hbspt?: HubSpotGlobal;
  }
}

export {};
