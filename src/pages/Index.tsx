import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import EnhancedMassSchedule from '@/components/EnhancedMassSchedule';
import InteractiveFeatures from '@/components/InteractiveFeatures';
import ParishStats from '@/components/ParishStats';
import TestimonialsSection from '@/components/TestimonialsSection';
import AnnouncementDetailModal from '@/components/AnnouncementDetailModal';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, Calendar, Bell, ArrowRight, Cross, Sparkles, Users, Mail, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Index = () => {
  const [email, setEmail] = useState('');
  const [subscriptionStatus, setSubscriptionStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [selectedAnnouncement, setSelectedAnnouncement] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const announcements = [
    {
      id: 1,
      title: 'Parish Feast Day Celebration',
      date: 'June 28, 2024',
      content: 'Join us for the Sacred Heart Parish Feast Day with special Mass, cultural programs, and community feast.',
      type: 'celebration',
      urgent: false,
      category: 'Parish Feast'
    },
    {
      id: 2,
      title: 'Youth Ministry Meeting',
      date: 'June 25, 2024',
      content: 'Monthly youth ministry meeting to plan upcoming activities and spiritual programs.',
      type: 'meeting',
      urgent: false,
      category: 'Youth Ministry'
    },
    {
      id: 3,
      title: 'Adoration Chapel Schedule',
      date: 'Ongoing',
      content: 'Eucharistic Adoration available Monday-Friday 9:00 AM - 6:00 PM in the Adoration Chapel.',
      type: 'service',
      urgent: true,
      category: 'Service'
    },
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'celebration': return 'from-sacred-flame-gold to-heavenly-yellow';
      case 'meeting': return 'from-olive-green to-olive-green';
      case 'service': return 'from-divine-red to-holy-burgundy';
      default: return 'from-sacred-flame-gold to-heavenly-yellow';
    }
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Simulate newsletter subscription
      console.log('Newsletter subscription for:', email);
      setSubscriptionStatus('success');
      setEmail('');
      setTimeout(() => setSubscriptionStatus('idle'), 5000);
    }
  };

  const handleAnnouncementClick = (announcement: any) => {
    setSelectedAnnouncement(announcement);
    setIsModalOpen(true);
  };

  const handleConnectWithUs = () => {
    // Navigate to contact page or open contact modal
    window.location.href = '/contact';
  };

  return (
    <div className="min-h-screen bg-radiant-halo-white">
      <Navigation />
      
      <HeroSection />
      
      <EnhancedMassSchedule />
      
      <InteractiveFeatures />

      {/* Enhanced Container with Better Spacing */}
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Enhanced Latest News & Announcements */}
        <section className="py-16 lg:py-20">
          <div className="text-center mb-12 lg:mb-16">
            <div className="inline-block p-4 bg-divine-red/10 rounded-full mb-6 shadow-lg">
              <Bell className="h-12 w-12 text-divine-red" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-divine-red mb-6 tracking-tight">
              Parish News & Announcements
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
              Stay connected with our vibrant parish community through the latest news and events
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-divine-red to-transparent mx-auto mt-6 rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-12">
            {announcements.map((announcement, index) => (
              <Card 
                key={announcement.id} 
                className="group hover:shadow-xl transition-all duration-500 border-0 bg-gradient-to-br from-radiant-halo-white to-blessed-beige/30 hover:-translate-y-2 overflow-hidden relative backdrop-blur-sm cursor-pointer"
                onClick={() => handleAnnouncementClick(announcement)}
              >
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${getTypeColor(announcement.type)}`}></div>
                {announcement.urgent && (
                  <div className="absolute top-4 right-4">
                    <Sparkles className="h-5 w-5 text-sacred-flame-gold animate-pulse" />
                  </div>
                )}
                <CardHeader className="pb-4 pt-6 px-6">
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-lg lg:text-xl group-hover:text-divine-red transition-colors duration-300 font-bold leading-tight">
                      {announcement.title}
                    </CardTitle>
                  </div>
                  <p className="text-xs font-semibold text-divine-red bg-divine-red/10 px-3 py-1.5 rounded-full inline-block mt-3 tracking-wide">
                    {announcement.date}
                  </p>
                </CardHeader>
                <CardContent className="px-6 pb-6">
                  <p className="text-gray-600 leading-relaxed mb-4 text-sm lg:text-base">{announcement.content}</p>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="group-hover:bg-divine-red group-hover:text-radiant-halo-white transition-all duration-300 font-semibold tracking-wide text-xs border-divine-red text-divine-red hover:border-divine-red"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleAnnouncementClick(announcement);
                    }}
                  >
                    Read More
                    <ArrowRight className="ml-2 h-3 w-3" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <Button 
              variant="outline" 
              size="lg" 
              className="bg-gradient-to-r from-divine-red to-holy-burgundy text-radiant-halo-white hover:from-holy-burgundy hover:to-divine-red transition-all duration-300 px-8 py-4 text-base font-semibold tracking-wide border-0 shadow-lg" 
              asChild
            >
              <Link to="/events">
                View All News & Events
                <Calendar className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>

        {/* Enhanced Newsletter Signup */}
        <section className="py-16 lg:py-20 bg-gradient-to-br from-blessed-beige/50 to-heavenly-yellow/20 rounded-2xl lg:rounded-3xl border border-divine-red/20 shadow-xl backdrop-blur-sm mb-16">
          <div className="text-center px-8">
            <div className="inline-block p-4 bg-divine-red/10 rounded-full mb-6 shadow-lg">
              <Heart className="h-12 w-12 text-divine-red" />
            </div>
            <h2 className="text-3xl font-bold text-divine-red mb-4">Stay Connected with Our Parish</h2>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto leading-relaxed">
              Subscribe to our parish newsletter to receive weekly updates, event announcements, and spiritual reflections directly in your inbox.
            </p>
            
            {subscriptionStatus === 'success' ? (
              <div className="max-w-md mx-auto bg-olive-green/10 border border-olive-green/30 rounded-lg p-6">
                <CheckCircle className="h-12 w-12 text-olive-green mx-auto mb-4" />
                <h3 className="text-xl font-bold text-olive-green mb-2">Thank You!</h3>
                <p className="text-olive-green font-medium">You have successfully subscribed to our parish newsletter. You will receive weekly updates and event announcements.</p>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto">
                <div className="flex gap-3">
                  <div className="flex-1 relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-olive-green" />
                    <input 
                      type="email" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className="w-full pl-10 pr-4 py-3 border border-divine-red/30 rounded-lg focus:ring-2 focus:ring-divine-red focus:border-transparent bg-radiant-halo-white/80 backdrop-blur-sm"
                      required
                    />
                  </div>
                  <Button 
                    type="submit"
                    className="bg-gradient-to-r from-divine-red to-holy-burgundy text-radiant-halo-white px-6 py-3 rounded-lg hover:from-holy-burgundy hover:to-divine-red transition-all duration-300 font-medium shadow-lg border-0"
                  >
                    Subscribe
                  </Button>
                </div>
              </form>
            )}
            
            {/* Connect With Us Button */}
            <div className="mt-8">
              <Button 
                onClick={handleConnectWithUs}
                variant="outline"
                size="lg"
                className="bg-olive-green/10 border-2 border-olive-green text-olive-green hover:bg-olive-green hover:text-white transition-all duration-300 px-8 py-3 font-semibold"
              >
                <Users className="mr-2 h-5 w-5" />
                Connect With Us
              </Button>
            </div>
          </div>
        </section>
      </div>

      <ParishStats />

      <TestimonialsSection />

      {/* Enhanced Container for Welcome Section */}
      
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Enhanced Welcome Message with Sacred Heart Design */}
        <section className="py-16 lg:py-20">
          <div className="relative bg-gradient-to-br from-blessed-beige/80 via-radiant-halo-white to-heavenly-yellow/20 rounded-2xl lg:rounded-3xl p-8 lg:p-12 overflow-hidden shadow-xl backdrop-blur-sm border border-divine-red/20">
            {/* Enhanced Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-divine-red/5 rounded-full -translate-y-32 translate-x-32 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-sacred-flame-gold/5 rounded-full translate-y-24 -translate-x-24 blur-2xl"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-radiant-halo-white/20 to-transparent rounded-2xl lg:rounded-3xl"></div>
            
            <div className="relative z-10 text-center max-w-4xl mx-auto">
              <div className="inline-block p-4 lg:p-6 bg-divine-red/10 rounded-full mb-8 shadow-lg">
                <Cross className="h-16 w-16 lg:h-18 lg:w-18 text-divine-red" />
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-divine-red mb-8 tracking-tight leading-tight">
                Welcome to Sacred Heart Parish
              </h2>
              
              <p className="text-lg lg:text-xl text-gray-700 leading-relaxed mb-8 font-light max-w-3xl mx-auto">
                For over four decades, Sacred Heart Parish has been a beacon of faith, hope, and love in our community. 
                We are blessed to serve families across 24 Anbiyams (Basic Christian Communities), fostering spiritual 
                growth and fellowship in the love of the Sacred Heart of Jesus.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-10">
                <div className="text-center group">
                  <div className="inline-block p-4 bg-divine-red/10 rounded-full mb-4 group-hover:bg-divine-red/20 transition-colors duration-300 shadow-lg">
                    <Heart className="h-12 w-12 text-divine-red" />
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold text-divine-red mb-3 tracking-tight">Faith</h3>
                  <p className="text-gray-600 text-base leading-relaxed">Growing in relationship with Christ</p>
                </div>
                <div className="text-center group">
                  <div className="inline-block p-4 bg-olive-green/10 rounded-full mb-4 group-hover:bg-olive-green/20 transition-colors duration-300 shadow-lg">
                    <Users className="h-12 w-12 text-olive-green" />
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold text-olive-green mb-3 tracking-tight">Community</h3>
                  <p className="text-gray-600 text-base leading-relaxed">Supporting one another in love</p>
                </div>
                <div className="text-center group">
                  <div className="inline-block p-4 bg-sacred-flame-gold/10 rounded-full mb-4 group-hover:bg-sacred-flame-gold/20 transition-colors duration-300 shadow-lg">
                    <Cross className="h-12 w-12 text-sacred-flame-gold" />
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold text-sacred-flame-gold mb-3 tracking-tight">Service</h3>
                  <p className="text-gray-600 text-base leading-relaxed">Serving others with compassion</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-divine-red to-holy-burgundy hover:from-holy-burgundy hover:to-divine-red text-radiant-halo-white text-base px-8 py-3 font-semibold tracking-wide shadow-lg border-0" 
                  asChild
                >
                  <Link to="/about">
                    Learn More About Our Parish
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="text-base px-8 py-3 hover:bg-divine-red hover:text-radiant-halo-white font-semibold tracking-wide border-2 border-divine-red text-divine-red" 
                  asChild
                >
                  <Link to="/contact">Join Our Community</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>

      <AnnouncementDetailModal 
        announcement={selectedAnnouncement}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      <Footer />
    </div>
  );
};

export default Index;
