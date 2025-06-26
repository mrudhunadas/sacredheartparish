
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import VirtualTourRequestModal from '@/components/VirtualTourRequestModal';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Heart, Users, Calendar } from 'lucide-react';

const Facilities = () => {
  const facilities = [
    {
      name: 'Main Church',
      capacity: '500 worshippers',
      description: 'Our beautiful main church building features traditional architecture with modern amenities, hosting daily Masses and special celebrations.',
      features: ['Air conditioning', 'Sound system', 'Wheelchair accessible', 'Parking available']
    },
    {
      name: 'Parish Hall',
      capacity: '200 people',
      description: 'A versatile community space used for parish gatherings, cultural events, meetings, and social functions.',
      features: ['Stage area', 'Kitchen facilities', 'Audio-visual equipment', 'Tables and chairs']
    },
    {
      name: 'Adoration Chapel',
      capacity: '50 people',
      description: 'A peaceful sanctuary for Eucharistic Adoration and private prayer, open throughout the week.',
      features: ['Climate controlled', 'Quiet atmosphere', 'Prayer books available', 'Security system']
    },
    {
      name: 'Community Welfare Center',
      capacity: 'Multiple rooms',
      description: 'Dedicated space for community outreach programs, counseling services, and charitable activities.',
      features: ['Office spaces', 'Meeting rooms', 'Storage areas', 'Computer access']
    },
    {
      name: 'Parish Cemetery',
      capacity: 'Various plots',
      description: 'Our sacred burial ground provides a peaceful resting place for departed parish members and their families.',
      features: ['Well-maintained grounds', 'Memorial garden', 'Prayer area', 'Maintenance services']
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-100 to-orange-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <MapPin className="h-16 w-16 text-sacred mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-sacred mb-4">Parish Facilities</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Explore our sacred spaces and community facilities serving our parish family
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Facilities Grid */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-8">
            {facilities.map((facility, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-l-4 border-l-sacred">
                <CardHeader>
                  <CardTitle className="text-2xl text-sacred">{facility.name}</CardTitle>
                  <p className="text-sm text-gray-600 font-medium">Capacity: {facility.capacity}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">{facility.description}</p>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Features & Amenities:</h4>
                    <ul className="grid grid-cols-2 gap-1">
                      {facility.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-sm text-gray-600 flex items-center">
                          <span className="w-2 h-2 bg-sacred rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Facility Usage Guidelines */}
        <section className="mb-16 bg-red-50 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-sacred mb-8 text-center">Facility Usage Guidelines</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-sacred mb-4">Booking & Reservations</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Contact parish office for facility bookings</li>
                <li>• Advance booking required (minimum 2 weeks)</li>
                <li>• Parish members receive priority booking</li>
                <li>• Written confirmation required for all bookings</li>
                <li>• Facility fees may apply for certain events</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-sacred mb-4">Usage Rules</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Respectful use of all sacred spaces</li>
                <li>• Clean-up required after each use</li>
                <li>• No smoking or alcohol without permission</li>
                <li>• Appropriate dress code must be maintained</li>
                <li>• Damage to facilities will be charged</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Virtual Tour */}
        <section className="mb-16">
          <Card className="bg-gradient-to-r from-red-50 to-orange-50">
            <CardContent className="p-8 text-center">
              <Heart className="h-12 w-12 text-sacred mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-sacred mb-4">Virtual Tour Coming Soon</h3>
              <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                We are working on creating a virtual tour of our parish facilities. This will allow you to 
                explore our sacred spaces from the comfort of your home and better plan your visit.
              </p>
              <VirtualTourRequestModal>
                <button className="bg-sacred text-white px-6 py-3 rounded-md hover:bg-red-800 transition-colors">
                  Request Information
                </button>
              </VirtualTourRequestModal>
            </CardContent>
          </Card>
        </section>

        {/* Contact for Facilities */}
        <section>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-sacred text-center">Facility Inquiries & Bookings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <Users className="h-8 w-8 text-sacred mx-auto mb-3" />
                  <h4 className="font-bold mb-2">Parish Office</h4>
                  <p className="text-sm text-gray-600">+91 XXX XXX XXXX</p>
                  <p className="text-sm text-gray-600">Monday - Saturday</p>
                  <p className="text-sm text-gray-600">9:00 AM - 5:00 PM</p>
                </div>
                <div>
                  <Calendar className="h-8 w-8 text-sacred mx-auto mb-3" />
                  <h4 className="font-bold mb-2">Booking Coordinator</h4>
                  <p className="text-sm text-gray-600">facilities@sacredheart.org</p>
                  <p className="text-sm text-gray-600">Response within 24 hours</p>
                  <p className="text-sm text-gray-600">Advance booking required</p>
                </div>
                <div>
                  <MapPin className="h-8 w-8 text-sacred mx-auto mb-3" />
                  <h4 className="font-bold mb-2">Visit Us</h4>
                  <p className="text-sm text-gray-600">Sacred Heart Church</p>
                  <p className="text-sm text-gray-600">Parish Address</p>
                  <p className="text-sm text-gray-600">Tamil Nadu, India</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Facilities;
