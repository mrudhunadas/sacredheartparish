
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Mail, Calendar, Heart } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import PrayerRequestModal from '@/components/PrayerRequestModal';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent",
        description: "Thank you for contacting us! We'll get back to you within 24 hours.",
      });
      setIsSubmitting(false);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: 'General Inquiry',
        message: ''
      });
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-100 to-orange-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <MapPin className="h-16 w-16 text-sacred mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-sacred mb-4">Contact & Visit Us</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            We welcome you to our parish family. Get in touch or plan your visit today.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Contact Information */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center border-l-4 border-l-sacred">
              <CardContent className="p-6">
                <MapPin className="h-12 w-12 text-sacred mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Parish Address</h3>
                <p className="text-sm text-gray-600">Sacred Heart Church</p>
                <p className="text-sm text-gray-600">Church Street</p>
                <p className="text-sm text-gray-600">Tamil Nadu, India</p>
                <p className="text-sm text-gray-600">PIN: 123456</p>
              </CardContent>
            </Card>

            <Card className="text-center border-l-4 border-l-sacred">
              <CardContent className="p-6">
                <Mail className="h-12 w-12 text-sacred mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Email Contacts</h3>
                <p className="text-sm text-gray-600 mb-1">parish@sacredheart.org</p>
                <p className="text-sm text-gray-600 mb-1">priest@sacredheart.org</p>
                <p className="text-sm text-gray-600">office@sacredheart.org</p>
              </CardContent>
            </Card>

            <Card className="text-center border-l-4 border-l-sacred">
              <CardContent className="p-6">
                <Calendar className="h-12 w-12 text-sacred mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Office Hours</h3>
                <p className="text-sm text-gray-600 mb-1">Monday - Friday</p>
                <p className="text-sm text-gray-600 mb-1">9:00 AM - 5:00 PM</p>
                <p className="text-sm text-gray-600">Saturday</p>
                <p className="text-sm text-gray-600">9:00 AM - 2:00 PM</p>
              </CardContent>
            </Card>

            <Card className="text-center border-l-4 border-l-sacred">
              <CardContent className="p-6">
                <Heart className="h-12 w-12 text-sacred mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Emergency Contact</h3>
                <p className="text-sm text-gray-600 mb-1">+91 XXX XXX XXXX</p>
                <p className="text-sm text-gray-600 mb-1">Available 24/7</p>
                <p className="text-sm text-gray-600">For urgent pastoral care</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact Form */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-sacred mb-6">Get in Touch</h2>
              <Card>
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                        <input 
                          type="text" 
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-sacred focus:border-transparent"
                          placeholder="Your first name"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                        <input 
                          type="text" 
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-sacred focus:border-transparent"
                          placeholder="Your last name"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
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
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
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
                      <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                      <select 
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-sacred focus:border-transparent"
                      >
                        <option>General Inquiry</option>
                        <option>Mass Schedule Question</option>
                        <option>Sacrament Preparation</option>
                        <option>Facility Booking</option>
                        <option>Prayer Request</option>
                        <option>Volunteer Opportunity</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                      <textarea 
                        rows={4}
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-sacred focus:border-transparent"
                        placeholder="Please share your message or question..."
                        required
                      ></textarea>
                    </div>
                    
                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full bg-sacred text-white py-2 px-4 rounded-md hover:bg-red-800 transition-colors disabled:opacity-50"
                    >
                      {isSubmitting ? 'Sending Message...' : 'Send Message'}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Directions & Map */}
            <div>
              <h2 className="text-3xl font-bold text-sacred mb-6">Visit Us</h2>
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle className="text-xl text-sacred">Getting Here</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">By Car:</h4>
                      <p className="text-sm text-gray-600">Ample parking available in our parish parking lot. Main entrance on Church Street.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">By Public Transport:</h4>
                      <p className="text-sm text-gray-600">Bus routes 15, 22, and 34 stop nearby. The church is a 5-minute walk from the bus stop.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Accessibility:</h4>
                      <p className="text-sm text-gray-600">Wheelchair accessible entrance and facilities available. Please contact us for any special needs.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Map Placeholder */}
              <Card>
                <CardContent className="p-6">
                  <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                      <p className="text-gray-600">Interactive Map</p>
                      <p className="text-sm text-gray-500">Coming Soon</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Prayer Request */}
        <section className="bg-red-50 rounded-lg p-8">
          <div className="text-center">
            <Heart className="h-12 w-12 text-sacred mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-sacred mb-4">Prayer Requests</h2>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Submit your prayer intentions and our parish community will remember you in our prayers. 
              All requests are kept confidential and handled with care.
            </p>
            <PrayerRequestModal>
              <Button className="bg-sacred text-white px-6 py-3 rounded-md hover:bg-red-800 transition-colors">
                Submit Prayer Request
              </Button>
            </PrayerRequestModal>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
