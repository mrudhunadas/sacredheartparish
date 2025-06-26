
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { MapPin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface VirtualTourRequestModalProps {
  children: React.ReactNode;
}

const VirtualTourRequestModal = ({ children }: VirtualTourRequestModalProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    tourType: 'General',
    preferredDate: '',
    preferredTime: '',
    specificInterests: '',
    additionalRequests: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate virtual tour request submission
    setTimeout(() => {
      toast({
        title: "Virtual Tour Request Submitted",
        description: `Thank you ${formData.name}! We'll contact you soon with virtual tour details and scheduling information.`,
      });
      setIsSubmitting(false);
      setIsOpen(false);
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        tourType: 'General',
        preferredDate: '',
        preferredTime: '',
        specificInterests: '',
        additionalRequests: ''
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
            <MapPin className="h-6 w-6" />
            Request Virtual Tour Information
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
                Email Address <span className="text-red-500">*</span>
              </label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-sacred focus:border-transparent"
                placeholder="your.email@example.com"
                required
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
                Tour Type
              </label>
              <select 
                name="tourType"
                value={formData.tourType}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-sacred focus:border-transparent"
              >
                <option value="General">General Tour</option>
                <option value="Wedding">Wedding Planning</option>
                <option value="Baptism">Baptism Planning</option>
                <option value="Event">Event Planning</option>
                <option value="Accessibility">Accessibility Tour</option>
                <option value="Historical">Historical Tour</option>
              </select>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Preferred Date
              </label>
              <input 
                type="date" 
                name="preferredDate"
                value={formData.preferredDate}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-sacred focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Preferred Time
              </label>
              <select 
                name="preferredTime"
                value={formData.preferredTime}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-sacred focus:border-transparent"
              >
                <option value="">Select time</option>
                <option value="Morning">Morning (9:00 AM - 12:00 PM)</option>
                <option value="Afternoon">Afternoon (12:00 PM - 4:00 PM)</option>
                <option value="Evening">Evening (4:00 PM - 7:00 PM)</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Specific Areas of Interest
            </label>
            <textarea 
              rows={3}
              name="specificInterests"
              value={formData.specificInterests}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-sacred focus:border-transparent"
              placeholder="e.g., Main church, wedding ceremony setup, accessibility features..."
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Additional Requests or Questions
            </label>
            <textarea 
              rows={3}
              name="additionalRequests"
              value={formData.additionalRequests}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-sacred focus:border-transparent"
              placeholder="Any special requirements or questions about our facilities..."
            />
          </div>

          <div className="bg-red-50 p-4 rounded-lg">
            <p className="text-sm text-gray-600">
              <strong>Note:</strong> Virtual tour requests are processed within 24-48 hours. 
              We'll contact you to schedule a live virtual tour session with one of our staff members.
              For immediate facility inquiries, please call our parish office.
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
              {isSubmitting ? 'Submitting Request...' : 'Request Virtual Tour'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default VirtualTourRequestModal;
