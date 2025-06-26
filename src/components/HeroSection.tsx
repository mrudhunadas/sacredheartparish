
import { Button } from '@/components/ui/button';
import { Heart, Calendar, MapPin, Users, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const handleAddToCalendar = () => {
    const now = new Date();
    const nextSunday = new Date(now);
    const daysUntilSunday = (7 - now.getDay()) % 7;
    nextSunday.setDate(now.getDate() + (daysUntilSunday === 0 ? 7 : daysUntilSunday));
    nextSunday.setHours(8, 0, 0, 0); // 8:00 AM

    const eventDetails = {
      title: 'Sacred Heart Parish - Sunday Mass',
      start: nextSunday,
      end: new Date(nextSunday.getTime() + 60 * 60 * 1000), // 1 hour later
      description: 'Join us for Sunday Mass at Sacred Heart Parish. Experience worship, community, and spiritual growth in our beautiful sacred space.',
      location: 'Sacred Heart Parish, Main Church'
    };

    // Format dates for Google Calendar (YYYYMMDDTHHMMSSZ)
    const formatCalendarDate = (date: Date) => {
      return date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
    };

    const startDate = formatCalendarDate(eventDetails.start);
    const endDate = formatCalendarDate(eventDetails.end);
    
    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(eventDetails.title)}&dates=${startDate}/${endDate}&details=${encodeURIComponent(eventDetails.description)}&location=${encodeURIComponent(eventDetails.location)}`;
    
    window.open(googleCalendarUrl, '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Clean Sacred Heart Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-divine-red via-holy-burgundy to-sacred-flame-gold">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
      </div>

      {/* Subtle floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-heavenly-yellow/30 rounded-full animate-pulse"
            style={{
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.3 + 0.1,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Subtle radial glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-sacred-flame-gold/15 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>

      {/* Clean Content Layout */}
      <div className="relative z-10 text-center px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="animate-fade-in space-y-8">
          {/* Simplified Sacred Heart Logo */}
          <div className="flex justify-center mb-8">
            <div className="relative group">
              <div className="bg-radiant-halo-white/20 backdrop-blur-xl rounded-full p-8 border-2 border-sacred-flame-gold/40 shadow-2xl group-hover:scale-105 transition-transform duration-500">
                <Heart className="h-16 w-16 text-radiant-halo-white fill-current drop-shadow-xl" />
              </div>
            </div>
          </div>
          
          {/* Clean Typography Section */}
          <div className="space-y-4 mb-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-radiant-halo-white drop-shadow-2xl tracking-tight">
              Sacred Heart Parish
            </h1>
            <p className="text-xl md:text-2xl text-heavenly-yellow font-light drop-shadow-lg">
              Welcome to Our Faith Community
            </p>
            <p className="text-lg text-blessed-beige font-medium drop-shadow-lg">
              Serving with love and devotion since 1983
            </p>
          </div>

          {/* Compact Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-sacred-flame-gold to-heavenly-yellow hover:from-heavenly-yellow hover:to-sacred-flame-gold text-holy-burgundy text-lg px-8 py-3 hover:scale-105 transition-all duration-300 shadow-xl font-semibold min-w-[220px] border-0 rounded-lg"
              asChild
            >
              <Link to="/mass-services">
                <Calendar className="mr-3 h-5 w-5" />
                View Mass Schedule
              </Link>
            </Button>
            
            <Button 
              size="lg" 
              onClick={handleAddToCalendar}
              className="bg-gradient-to-r from-olive-green to-olive-green hover:from-olive-green/90 hover:to-olive-green/90 text-radiant-halo-white text-lg px-8 py-3 hover:scale-105 transition-all duration-300 shadow-xl font-semibold min-w-[220px] border-0 rounded-lg"
            >
              <Plus className="mr-3 h-5 w-5" />
              Add to Calendar
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-radiant-halo-white bg-radiant-halo-white/15 text-radiant-halo-white hover:bg-radiant-halo-white hover:text-divine-red text-lg px-8 py-3 hover:scale-105 transition-all duration-300 shadow-xl backdrop-blur-xl font-semibold min-w-[220px] rounded-lg"
              asChild
            >
              <Link to="/contact">
                <MapPin className="mr-3 h-5 w-5" />
                Visit Us
              </Link>
            </Button>
          </div>

          {/* Compact Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { number: '40+', label: 'Years of Service', icon: Heart, color: 'divine-red' },
              { number: '24', label: 'Anbiyams', icon: Users, color: 'olive-green' },
              { number: '500+', label: 'Families', icon: Users, color: 'sacred-flame-gold' },
              { number: '3', label: 'Daily Masses', icon: Calendar, color: 'heavenly-yellow' }
            ].map((stat, index) => (
              <div 
                key={index} 
                className="text-center bg-radiant-halo-white/15 backdrop-blur-xl rounded-2xl p-6 border border-radiant-halo-white/30 hover:bg-radiant-halo-white/25 hover:scale-105 transition-all duration-300 shadow-xl group"
              >
                <div className="mb-4 flex justify-center">
                  <div className={`p-3 bg-${stat.color}/20 rounded-full group-hover:bg-${stat.color}/30 transition-colors duration-300 border border-${stat.color}/40`}>
                    <stat.icon className={`h-6 w-6 text-${stat.color === 'heavenly-yellow' ? 'heavenly-yellow' : stat.color}`} />
                  </div>
                </div>
                <div className="text-3xl font-bold text-radiant-halo-white mb-2 drop-shadow-lg">{stat.number}</div>
                <div className="text-blessed-beige text-sm font-medium drop-shadow-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Clean Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-sacred-flame-gold/60 rounded-full flex justify-center backdrop-blur-sm bg-radiant-halo-white/10">
          <div className="w-1.5 h-4 bg-sacred-flame-gold/80 rounded-full mt-3 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
