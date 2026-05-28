import React, { useState, useRef, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import ReCAPTCHA from "react-google-recaptcha";

interface ApplyModalProps {
  isOpen: boolean;
  onClose: () => void;
  role: string;
}

export function ApplyModal({ isOpen, onClose, role }: ApplyModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [fileName, setFileName] = useState('');
  const [fileError, setFileError] = useState('');
  const [isVerified, setIsVerified] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    phone: '',
    currentCompany: '',
    currentRole: '',
    linkedIn: '',
    portfolio: '',
    shortAnswer: '',
    source: '',
    honeypot: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (isOpen) {
      setIsSuccess(false);
      setIsSubmitting(false);
      setFormData({
        fullName: '',
        workEmail: '',
        phone: '',
        currentCompany: '',
        currentRole: '',
        linkedIn: '',
        portfolio: '',
        shortAnswer: '',
        source: '',
        honeypot: '',
      });
      setErrors({});
      setFileName('');
      setFileError('');
      setIsVerified(false);
    }
  }, [isOpen]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setFileError('');
    
    if (file) {
      if (file.type !== 'application/pdf') {
        setFileError('Only PDF files are allowed.');
        setFileName('');
        return;
      }
      if (file.size > 10 * 1024 * 1024) {
        setFileError('File size exceeds 10 MB limit.');
        setFileName('');
        return;
      }
      setFileName(file.name);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    // Inline validation
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Required';
    if (!formData.workEmail.trim()) newErrors.workEmail = 'Required';
    else if (!/^\S+@\S+\.\S+$/.test(formData.workEmail)) newErrors.workEmail = 'Invalid email';
    if (!formData.currentCompany.trim()) newErrors.currentCompany = 'Required';
    if (!formData.currentRole.trim()) newErrors.currentRole = 'Required';
    if (!formData.linkedIn.trim()) newErrors.linkedIn = 'Required';
    if (!formData.shortAnswer.trim()) newErrors.shortAnswer = 'Required';
    if (!formData.source.trim()) newErrors.source = 'Required';

    const wordCount = formData.shortAnswer.trim() ? formData.shortAnswer.trim().split(/\s+/).length : 0;
    if (wordCount > 300) {
      newErrors.shortAnswer = `Max 300 words. Currently ${wordCount}.`;
    }

    if (Object.keys(newErrors).length > 0) {
      e.preventDefault(); // Stop submission!
      setErrors(newErrors);
      return;
    }

    // Validation passed! 
    // We do NOT call preventDefault here, so the browser natively submits the form to the hidden iframe.
    setIsSubmitting(true);
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[640px] max-h-[90vh] overflow-y-auto bg-white p-0 rounded-2xl border-none shadow-2xl">
        {isSuccess ? (
          <div className="p-12 flex flex-col items-center justify-center text-center space-y-6">
            <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center text-green-600 mb-2">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
            </div>
            <h3 className="text-[32px] font-bold text-black" style={{ fontFamily: "'Playfair Display', serif" }}>Application Received</h3>
            <div className="text-[#5c5c5c] text-[16px] leading-[28px] max-w-sm mt-4">
              <p className="mb-4">Thank you for applying. We are reviewing your background against our needs for the <span className="font-bold text-black">{role}</span> position.</p>
              <p className="mb-4 text-[#A91D24] font-medium">You'll hear from us within 5 business days.</p>
              <p className="font-bold text-black text-[18px] mt-6" style={{ fontFamily: "'Playfair Display', serif" }}>— Arnav</p>
            </div>
            <button 
              onClick={onClose}
              className="mt-8 px-10 py-3.5 bg-[#A91D24] text-white font-bold rounded-lg hover:bg-[#8A151C] transition-colors shadow-lg shadow-red-900/20"
            >
              Back to hiring page
            </button>
          </div>
        ) : (
          <div className="p-8 md:p-10">
            <DialogHeader className="mb-8 text-left">
              <DialogTitle className="text-[32px] font-bold text-black leading-tight mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                Apply for<br/><span className="text-[#A91D24]">{role}</span>
              </DialogTitle>
              <DialogDescription className="text-[#5c5c5c] text-[15px]">
                Submit your details below. We'll get back to you within 5 business days.
              </DialogDescription>
            </DialogHeader>

            <iframe name="hidden_iframe" id="hidden_iframe" style={{ display: "none" }} onLoad={() => {
              if (isSubmitting) {
                setIsSubmitting(false);
                setIsSuccess(true);
              }
            }}></iframe>
            <form 
              id="apply-form"
              action="https://formsubmit.co/aditi.tiwari@zentrades.pro" 
              method="POST" 
              encType="multipart/form-data" 
              target="hidden_iframe"
              onSubmit={handleSubmit} 
              className="space-y-6"
            >
              <input type="hidden" name="role" value={role} />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_subject" value={`New Application: ${role} - ${formData.fullName}`} />
              
              {/* Honeypot field - hidden from real users */}
              <div className="absolute left-[-9999px] opacity-0" aria-hidden="true">
                <input type="text" name="_honey" tabIndex={-1} value={formData.honeypot} onChange={handleInputChange} autoComplete="off" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[13px] font-bold text-black">Full Name *</label>
                  <input 
                    name="fullName" value={formData.fullName} onChange={handleInputChange}
                    className={`w-full h-12 px-4 rounded-lg border ${errors.fullName ? 'border-red-500 bg-red-50' : 'border-[#e5e7eb] bg-[#fcfcfc]'} focus:outline-none focus:border-[#A91D24] focus:ring-1 focus:ring-[#A91D24] transition-all text-sm`}
                    placeholder="Jane Doe"
                  />
                  {errors.fullName && <p className="text-red-500 text-[11px] font-medium">{errors.fullName}</p>}
                </div>
                <div className="space-y-2">
                  <label className="text-[13px] font-bold text-black">Work Email *</label>
                  <input 
                    name="workEmail" value={formData.workEmail} onChange={handleInputChange} type="email"
                    className={`w-full h-12 px-4 rounded-lg border ${errors.workEmail ? 'border-red-500 bg-red-50' : 'border-[#e5e7eb] bg-[#fcfcfc]'} focus:outline-none focus:border-[#A91D24] focus:ring-1 focus:ring-[#A91D24] transition-all text-sm`}
                    placeholder="jane@company.com"
                  />
                  {errors.workEmail && <p className="text-red-500 text-[11px] font-medium">{errors.workEmail}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[13px] font-bold text-black">Current Company *</label>
                  <input 
                    name="currentCompany" value={formData.currentCompany} onChange={handleInputChange}
                    className={`w-full h-12 px-4 rounded-lg border ${errors.currentCompany ? 'border-red-500 bg-red-50' : 'border-[#e5e7eb] bg-[#fcfcfc]'} focus:outline-none focus:border-[#A91D24] focus:ring-1 focus:ring-[#A91D24] transition-all text-sm`}
                    placeholder="Acme Corp"
                  />
                  {errors.currentCompany && <p className="text-red-500 text-[11px] font-medium">{errors.currentCompany}</p>}
                </div>
                <div className="space-y-2">
                  <label className="text-[13px] font-bold text-black">Current Role *</label>
                  <input 
                    name="currentRole" value={formData.currentRole} onChange={handleInputChange}
                    className={`w-full h-12 px-4 rounded-lg border ${errors.currentRole ? 'border-red-500 bg-red-50' : 'border-[#e5e7eb] bg-[#fcfcfc]'} focus:outline-none focus:border-[#A91D24] focus:ring-1 focus:ring-[#A91D24] transition-all text-sm`}
                    placeholder="Product Manager"
                  />
                  {errors.currentRole && <p className="text-red-500 text-[11px] font-medium">{errors.currentRole}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[13px] font-bold text-black">LinkedIn URL *</label>
                  <input 
                    name="linkedIn" value={formData.linkedIn} onChange={handleInputChange}
                    className={`w-full h-12 px-4 rounded-lg border ${errors.linkedIn ? 'border-red-500 bg-red-50' : 'border-[#e5e7eb] bg-[#fcfcfc]'} focus:outline-none focus:border-[#A91D24] focus:ring-1 focus:ring-[#A91D24] transition-all text-sm`}
                    placeholder="linkedin.com/in/janedoe"
                  />
                  {errors.linkedIn && <p className="text-red-500 text-[11px] font-medium">{errors.linkedIn}</p>}
                </div>
                <div className="space-y-2">
                  <label className="text-[13px] font-bold text-black">Phone <span className="text-[#8c8c8c] font-normal">(Optional)</span></label>
                  <input 
                    name="phone" value={formData.phone} onChange={handleInputChange} type="tel"
                    className="w-full h-12 px-4 rounded-lg border border-[#e5e7eb] bg-[#fcfcfc] focus:outline-none focus:border-[#A91D24] focus:ring-1 focus:ring-[#A91D24] transition-all text-sm"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[13px] font-bold text-black">Portfolio / GitHub <span className="text-[#8c8c8c] font-normal">(Optional)</span></label>
                  <input 
                    name="portfolio" value={formData.portfolio} onChange={handleInputChange}
                    className="w-full h-12 px-4 rounded-lg border border-[#e5e7eb] bg-[#fcfcfc] focus:outline-none focus:border-[#A91D24] focus:ring-1 focus:ring-[#A91D24] transition-all text-sm"
                    placeholder="github.com/janedoe or janedoe.com"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[13px] font-bold text-black">How did you hear about us? *</label>
                  <select 
                    name="source" value={formData.source} onChange={handleInputChange}
                    className={`w-full h-12 px-4 rounded-lg border ${errors.source ? 'border-red-500 bg-red-50' : 'border-[#e5e7eb] bg-[#fcfcfc]'} focus:outline-none focus:border-[#A91D24] focus:ring-1 focus:ring-[#A91D24] transition-all appearance-none bg-no-repeat text-sm`}
                    style={{ backgroundPosition: 'right 1rem center', backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'10\' height=\'6\' viewBox=\'0 0 10 6\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M1 1L5 5L9 1\' stroke=\'%235c5c5c\' stroke-width=\'1.5\' stroke-linecap=\'round\' stroke-linejoin=\'round\'/%3E%3C/svg%3E")' }}
                  >
                    <option value="" disabled>Select an option</option>
                    <option value="linkedin">LinkedIn</option>
                    <option value="twitter">Twitter / X</option>
                    <option value="referral">Referred by an employee</option>
                    <option value="job_board">Job Board</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.source && <p className="text-red-500 text-[11px] font-medium">{errors.source}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[13px] font-bold text-black">
                  Why are you a good fit for this role? * <span className="text-[#8c8c8c] font-normal">(Max 300 words)</span>
                </label>
                <textarea 
                  name="shortAnswer" value={formData.shortAnswer} onChange={handleInputChange}
                  className={`w-full h-32 p-4 rounded-lg border ${errors.shortAnswer ? 'border-red-500 bg-red-50' : 'border-[#e5e7eb] bg-[#fcfcfc]'} focus:outline-none focus:border-[#A91D24] focus:ring-1 focus:ring-[#A91D24] transition-all resize-none text-sm`}
                  placeholder="Tell us about your most relevant experience and why Clara interests you..."
                />
                {errors.shortAnswer && <p className="text-red-500 text-[11px] font-medium">{errors.shortAnswer}</p>}
                <p className="text-right text-[11px] text-[#8c8c8c] mt-1">
                  {formData.shortAnswer.trim() ? formData.shortAnswer.trim().split(/\s+/).length : 0} / 300
                </p>
              </div>

              <div className="space-y-2">
                <label className="text-[13px] font-bold text-black">Resume <span className="text-[#8c8c8c] font-normal">(PDF only, Max 10MB)</span></label>
                <div 
                  onClick={() => fileInputRef.current?.click()}
                  className={`w-full border-2 border-dashed ${fileError ? 'border-red-400 bg-red-50' : fileName ? 'border-[#A91D24] bg-red-50/20' : 'border-[#d1d5db] bg-[#fcfcfc] hover:bg-gray-50'} rounded-lg p-6 flex flex-col items-center justify-center cursor-pointer transition-all`}
                >
                  <input 
                    type="file" ref={fileInputRef} onChange={handleFileChange} accept=".pdf" className="hidden" name="attachment"
                  />
                  {fileName ? (
                    <div className="flex items-center text-[#A91D24] font-medium text-sm">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                      {fileName}
                    </div>
                  ) : (
                    <>
                      <svg className="w-6 h-6 text-[#8c8c8c] mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path></svg>
                      <p className="text-[13px] text-[#5c5c5c]">Click to upload or drag and drop</p>
                    </>
                  )}
                </div>
                {fileError && <p className="text-red-500 text-[11px] font-medium">{fileError}</p>}
              </div>
            </form>

            {/* Google reCAPTCHA (Outside the form so the massive token isn't emailed to us) */}
            <div className="flex justify-center my-4">
              <ReCAPTCHA
                sitekey="6LeAmPcsAAAAAAGEuUY5w756YWeJwM-yl5jm-hC_"
                onChange={(val) => setIsVerified(!!val)}
              />
            </div>

            <div className="pt-2">
              <button 
                type="submit" 
                form="apply-form"
                disabled={isSubmitting || !isVerified}
                className="w-full h-14 bg-[#A91D24] text-white font-bold text-[15px] rounded-lg hover:bg-[#8A151C] transition-all disabled:opacity-70 flex items-center justify-center gap-2 shadow-lg shadow-red-900/10"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting...
                  </>
                ) : (
                  "Submit Application"
                )}
              </button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
