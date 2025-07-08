
import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

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
    if (isOpen && window.hbspt && !formLoaded) {
      // Clear any existing form
      const formContainer = document.getElementById('hubspot-form-container');
      if (formContainer) {
        formContainer.innerHTML = '';
      }

      // Create the form
      window.hbspt.forms.create({
        region: "na1",
        portalId: "45865556",
        formId: "c3428dcb-b18c-4277-b463-b7869c42800f",
        target: '#hubspot-form-container',
        onFormReady: () => {
          setFormLoaded(true);
        },
        onFormSubmit: () => {
          // Optional: handle form submission
          console.log('Form submitted');
        }
      });
    }
  }, [isOpen, formLoaded]);

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
