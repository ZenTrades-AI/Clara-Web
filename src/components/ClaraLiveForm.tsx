import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from '@/hooks/use-toast';

interface FormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  agentType: string;
}

interface ClaraLiveFormProps {
  onClose: () => void;
}

export const ClaraLiveForm: React.FC<ClaraLiveFormProps> = ({ onClose }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    company: '',
    email: '',
    phone: '',
    agentType: 'Customer Service Representative'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const validatePhoneNumber = (phone: string) => {
    const digitsOnly = phone.replace(/\D/g, '');
    return digitsOnly.length >= 10 && digitsOnly.length <= 15;
  };

  const formatPhoneNumber = (phone: string) => {
    const digitsOnly = phone.replace(/\D/g, '');
    
    if (digitsOnly.length === 10) {
      return `+1${digitsOnly}`;  // Add +1 for US numbers
    }
    
    if (digitsOnly.length === 11 && digitsOnly.startsWith('1')) {
      return `+${digitsOnly}`;
    }
    
    return phone.startsWith('+') ? phone : `+${digitsOnly}`;
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      toast({
        title: "Validation Error",
        description: "Name is required",
        variant: "destructive"
      });
      return false;
    }

    if (!formData.phone.trim()) {
      toast({
        title: "Validation Error", 
        description: "Phone number is required",
        variant: "destructive"
      });
      return false;
    }

    if (!validatePhoneNumber(formData.phone)) {
      toast({
        title: "Validation Error",
        description: "Please enter a valid phone number (10-15 digits)",
        variant: "destructive"
      });
      return false;
    }

    if (formData.email && formData.email.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        toast({
          title: "Validation Error",
          description: "Please enter a valid email address",
          variant: "destructive"
        });
        return false;
      }
    }

    return true;
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const getButtonText = () => {
    if (formData.agentType === 'Customer Service Representative') {
      return isSubmitting ? 'Connecting...' : 'Call now!';
    }
    return isSubmitting ? 'Setting up call...' : 'Call me now!';
  };

  const handleCallButtonClick = async () => {
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const formattedPhone = formatPhoneNumber(formData.phone);
      
      // For demo purposes - in production you would integrate with Supabase
      console.log('Form submission data:', {
        name: formData.name,
        company: formData.company || null,
        email: formData.email,
        phone: formattedPhone,
        agent_type: formData.agentType,
        created_at: new Date().toISOString()
      });

      if (formData.agentType === 'Customer Service Representative') {
        // Direct phone call
        window.open(`tel:+15392071364`, '_self');
        
        toast({
          title: "Calling Now!",
          description: "Opening phone dialer to connect you with our team.",
        });
      } else {
        // AR - Collections: Trigger AI call
        // In production, this would call your Supabase edge function
        console.log('Triggering AI call for:', {
          phoneNumber: formattedPhone,
          agentType: formData.agentType,
          name: formData.name,
          company: formData.company
        });

        toast({
          title: "AI Call Initiated!",
          description: "Clara will call you within the next 30 seconds.",
        });

        // Simulate AI call setup
        setTimeout(() => {
          toast({
            title: "Call Connected!",
            description: "Clara is now calling your number...",
          });
        }, 2000);
      }

      // Reset form
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        agentType: 'Customer Service Representative'
      });

      // Close modal after successful submission
      setTimeout(() => {
        onClose();
      }, 3000);

    } catch (error) {
      console.error('Error processing form:', error);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-center text-clara-navy">
          Try Clara Live
        </CardTitle>
        <p className="text-sm text-gray-600 text-center">
          Experience Clara's AI voice technology right now
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">Name *</Label>
          <Input
            id="name"
            type="text"
            value={formData.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="company">Company</Label>
          <Input
            id="company"
            type="text"
            value={formData.company}
            onChange={(e) => handleInputChange('company', e.target.value)}
            placeholder="Enter your company (optional)"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            placeholder="Enter your email (optional)"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number *</Label>
          <Input
            id="phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => handleInputChange('phone', e.target.value)}
            placeholder="Enter your phone number"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="agentType">Agent Type</Label>
          <Select
            value={formData.agentType}
            onValueChange={(value) => handleInputChange('agentType', value)}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select agent type" />
            </SelectTrigger>
            <SelectContent className="bg-white border border-gray-200 shadow-lg z-[100000]">
              <SelectItem 
                value="Customer Service Representative"
                className="hover:bg-gray-100 cursor-pointer py-2 px-3"
              >
                Customer Service Representative
              </SelectItem>
              <SelectItem 
                value="AR - Collections"
                className="hover:bg-gray-100 cursor-pointer py-2 px-3"
              >
                AR - Collections
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button 
          onClick={handleCallButtonClick}
          disabled={isSubmitting}
          className="w-full bg-clara-red hover:bg-clara-red/90 text-white font-semibold py-3"
        >
          {getButtonText()}
        </Button>

        <p className="text-xs text-gray-500 text-center">
          {formData.agentType === 'Customer Service Representative' 
            ? "Click to call our team directly"
            : "Clara will call your number within 30 seconds"
          }
        </p>
      </CardContent>
    </Card>
  );
};
