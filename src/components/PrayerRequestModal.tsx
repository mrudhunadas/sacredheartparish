
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface PrayerRequestModalProps {
  children: React.ReactNode;
}

const PrayerRequestModal = ({ children }: PrayerRequestModalProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    prayerType: 'Personal',
    isUrgent: false,
    isConfidential: true,
    requestDetails: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate prayer request submission
    setTimeout(() => {
      toast({
        title: "Prayer Request Submitted",
        description: `Thank you ${formData.name}. Your prayer intentions have been received and will be remembered in our prayers.`,
      });
      setIsSubmitting(false);
      setIsOpen(false);
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        prayerType: 'Personal',
        isUrgent: false,
        isConfidential: true,
        requestDetails: ''
      });
    }, 1000);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-sacred">
            <Heart className="h-6 w-6" />
            Submit Prayer Request
          </DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-sacred focus:border-transparent"
                placeholder="Your full name"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-sacred focus:border-transparent"
                placeholder="your.email@example.com"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <input 
                type="tel" 
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-sacred focus:border-transparent"
                placeholder="+91 XXXXX XXXXX"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Prayer Type
              </label>
              <select 
                name="prayerType"
                value={formData.prayerType}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-sacred focus:border-transparent"
              >
                <option value="Personal">Personal Prayer</option>
                <option value="Family">Family Member</option>
                <option value="Health">Health & Healing</option>
                <option value="Thanksgiving">Thanksgiving</option>
                <option value="Guidance">Guidance & Wisdom</option>
                <option value="Deceased">For the Deceased</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <input 
                type="checkbox" 
                id="isUrgent"
                name="isUrgent"
                checked={formData.isUrgent}
                onChange={handleInputChange}
                className="rounded text-sacred focus:ring-sacred"
              />
              <label htmlFor="isUrgent" className="text-sm text-gray-700">
                This is an urgent prayer request
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <input 
                type="checkbox" 
                id="isConfidential"
                name="isConfidential"
                checked={formData.isConfidential}
                onChange={handleInputChange}
                className="rounded text-sacred focus:ring-sacred"
              />
              <label htmlFor="isConfidential" className="text-sm text-gray-700">
                Keep this request confidential (recommended)
              </label>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Prayer Request Details <span className="text-red-500">*</span>
            </label>
            <textarea 
              rows={4}
              name="requestDetails"
              value={formData.requestDetails}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-sacred focus:border-transparent"
              placeholder="Please share your prayer intentions. All requests are handled with care and confidentiality."
              required
            />
          </div>

          <div className="bg-red-50 p-4 rounded-lg">
            <p className="text-sm text-gray-600">
              <strong>Note:</strong> All prayer requests are reviewed by our pastoral team and remembered in our daily prayers. 
              For urgent pastoral care, please contact our emergency line at +91 XXX XXX XXXX.
            </p>
          </div>

          <div className="flex gap-3 pt-4">
            <Button 
              type="button" 
              variant="outline" 
              onClick={() => setIsOpen(false)}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="flex-1 bg-sacred text-white hover:bg-red-800"
            >
              {isSubmitting ? 'Submitting Prayer...' : 'Submit Prayer Request'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default PrayerRequestModal;
