
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import EnhancedMassSchedule from '@/components/EnhancedMassSchedule';
import InteractiveFeatures from '@/components/InteractiveFeatures';
import ParishStats from '@/components/ParishStats';
import TestimonialsSection from '@/components/TestimonialsSection';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, Calendar, Bell, ArrowRight, Cross, Sparkles, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  const announcements = [
    {
      title: 'Parish Feast Day Celebration',
      date: 'June 28, 2024',
      content: 'Join us for the Sacred Heart Parish Feast Day with special Mass, cultural programs, and community feast.',
      type: 'celebration',
      urgent: false
    },
    {
      title: 'Youth Ministry Meeting',
      date: 'June 25, 2024',
      content: 'Monthly youth ministry meeting to plan upcoming activities and spiritual programs.',
      type: 'meeting',
      urgent: false
    },
    {
      title: 'Adoration Chapel Schedule',
      date: 'Ongoing',
      content: 'Eucharistic Adoration available Monday-Friday 9:00 AM - 6:00 PM in the Adoration Chapel.',
      type: 'service',
      urgent: true
    },
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'celebration': return 'from-amber-700 to-amber-800';
      case 'meeting': return 'from-yellow-800 to-yellow-900';
      case 'service': return 'from-orange-800 to-orange-900';
      default: return 'from-amber-600 to-amber-700';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <HeroSection />
      
      <EnhancedMassSchedule />
      
      <InteractiveFeatures />

      {/* Enhanced Container with Better Spacing */}
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Enhanced Latest News & Announcements */}
        <section className="py-16 lg:py-20">
          <div className="text-center mb-12 lg:mb-16">
            <div className="inline-block p-4 bg-sacred/10 rounded-full mb-6 shadow-lg">
              <Bell className="h-12 w-12 text-sacred" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-sacred mb-6 tracking-tight">
              Parish News & Announcements
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
              Stay connected with our vibrant parish community through the latest news and events
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-sacred to-transparent mx-auto mt-6 rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-12">
            {announcements.map((announcement, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-500 border-0 bg-gradient-to-br from-white to-gray-50/50 hover:-translate-y-2 overflow-hidden relative backdrop-blur-sm">
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${getTypeColor(announcement.type)}`}></div>
                {announcement.urgent && (
                  <div className="absolute top-4 right-4">
                    <Sparkles className="h-5 w-5 text-orange-700 animate-pulse" />
                  </div>
                )}
                <CardHeader className="pb-4 pt-6 px-6">
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-lg lg:text-xl group-hover:text-sacred transition-colors duration-300 font-bold leading-tight">
                      {announcement.title}
                    </CardTitle>
                  </div>
                  <p className="text-xs font-semibold text-sacred bg-sacred/10 px-3 py-1.5 rounded-full inline-block mt-3 tracking-wide">
                    {announcement.date}
                  </p>
                </CardHeader>
                <CardContent className="px-6 pb-6">
                  <p className="text-gray-600 leading-relaxed mb-4 text-sm lg:text-base">{announcement.content}</p>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="group-hover:bg-sacred group-hover:text-white transition-all duration-300 font-semibold tracking-wide text-xs border-medium-brown"
                  >
                    Read More
                    <ArrowRight className="ml-2 h-3 w-3" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <Button variant="outline" size="lg" className="hover:bg-sacred hover:text-white transition-all duration-300 px-8 py-4 text-base font-semibold tracking-wide border-medium-brown" asChild>
              <Link to="/events">
                View All News & Events
                <Calendar className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>
      </div>

      <ParishStats />

      <TestimonialsSection />

      {/* Enhanced Container for Welcome Section */}
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Enhanced Welcome Message with Luxury Design */}
        <section className="py-16 lg:py-20">
          <div className="relative bg-gradient-to-br from-red-50/80 via-white to-orange-50/80 rounded-2xl lg:rounded-3xl p-8 lg:p-12 overflow-hidden shadow-xl backdrop-blur-sm border border-medium-brown/20">
            {/* Enhanced Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-sacred/5 rounded-full -translate-y-32 translate-x-32 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-orange-800/5 rounded-full translate-y-24 -translate-x-24 blur-2xl"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl lg:rounded-3xl"></div>
            
            <div className="relative z-10 text-center max-w-4xl mx-auto">
              <div className="inline-block p-4 lg:p-6 bg-sacred/10 rounded-full mb-8 shadow-lg">
                <Cross className="h-16 w-16 lg:h-18 lg:w-18 text-sacred" />
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-sacred mb-8 tracking-tight leading-tight">
                Welcome to Sacred Heart Parish
              </h2>
              
              <p className="text-lg lg:text-xl text-gray-700 leading-relaxed mb-8 font-light max-w-3xl mx-auto">
                For over four decades, Sacred Heart Parish has been a beacon of faith, hope, and love in our community. 
                We are blessed to serve families across 24 Anbiyams (Basic Christian Communities), fostering spiritual 
                growth and fellowship in the love of the Sacred Heart of Jesus.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-10">
                <div className="text-center group">
                  <div className="inline-block p-4 bg-sacred/10 rounded-full mb-4 group-hover:bg-sacred/20 transition-colors duration-300 shadow-lg">
                    <Heart className="h-12 w-12 text-sacred" />
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold text-sacred mb-3 tracking-tight">Faith</h3>
                  <p className="text-gray-600 text-base leading-relaxed">Growing in relationship with Christ</p>
                </div>
                <div className="text-center group">
                  <div className="inline-block p-4 bg-sacred/10 rounded-full mb-4 group-hover:bg-sacred/20 transition-colors duration-300 shadow-lg">
                    <Users className="h-12 w-12 text-sacred" />
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold text-sacred mb-3 tracking-tight">Community</h3>
                  <p className="text-gray-600 text-base leading-relaxed">Supporting one another in love</p>
                </div>
                <div className="text-center group">
                  <div className="inline-block p-4 bg-sacred/10 rounded-full mb-4 group-hover:bg-sacred/20 transition-colors duration-300 shadow-lg">
                    <Cross className="h-12 w-12 text-sacred" />
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold text-sacred mb-3 tracking-tight">Service</h3>
                  <p className="text-gray-600 text-base leading-relaxed">Serving others with compassion</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center">
                <Button size="lg" className="bg-sacred hover:bg-red-800 text-base px-8 py-3 font-semibold tracking-wide shadow-lg" asChild>
                  <Link to="/about">
                    Learn More About Our Parish
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="text-base px-8 py-3 hover:bg-sacred hover:text-white font-semibold tracking-wide border-2 border-medium-brown" asChild>
                  <Link to="/contact">Join Our Community</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Index;
