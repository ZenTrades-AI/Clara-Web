
import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';

interface HubSpotFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

declare global {
  interface Window {
    hbspt: any;
  }
}

const HubSpotFormModal = ({ isOpen, onClose }: HubSpotFormModalProps) => {
  const [formLoaded, setFormLoaded] = useState(false);

  useEffect(() => {
    if (isOpen && window.hbspt) {
      // Clear any existing form
      const formContainer = document.getElementById('hubspot-form-container');
      if (formContainer) {
        formContainer.innerHTML = '';
        
        // Create the form using your shortcode format
        const formDiv = document.createElement('div');
        formDiv.className = 'hs-form-frame';
        formDiv.setAttribute('data-region', 'na1');
        formDiv.setAttribute('data-form-id', 'c3428dcb-b18c-4277-b463-b7869c42800f');
        formDiv.setAttribute('data-portal-id', '45865556');
        
        formContainer.appendChild(formDiv);
        
        // Trigger HubSpot to process the form
        if (window.hbspt.forms) {
          window.hbspt.forms.create({
            region: "na1",
            portalId: "45865556",
            formId: "c3428dcb-b18c-4277-b463-b7869c42800f",
            target: formDiv,
          });
        }
        
        setFormLoaded(true);
      }
    }
  }, [isOpen]);

  const handleClose = () => {
    setFormLoaded(false);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-md w-full max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-clara-navy font-montserrat">
            Book Your Demo
          </DialogTitle>
          <DialogDescription className="text-gray-600">
            Fill out the form below to schedule your personalized demo
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <div id="hubspot-form-container" className="min-h-[400px]">
            {!formLoaded && (
              <div className="flex items-center justify-center h-32">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-clara-red"></div>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default HubSpotFormModal;
