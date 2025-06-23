
import { Button } from '@/components/ui/button';
import { Heart, Calendar, MapPin, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced Animated Background with Luxury Gradient */}
      <div className="absolute inset-0 sacred-gradient">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-red-900/30 to-orange-800/40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
      </div>

      {/* Enhanced Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full animate-pulse"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.2 + 0.1,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Enhanced Content with Better Spacing */}
      <div className="relative z-10 text-center px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="animate-fade-in space-y-8">
          {/* Enhanced Logo Section */}
          <div className="flex justify-center mb-8">
            <div className="relative group">
              <div className="absolute inset-0 bg-white rounded-full opacity-20 animate-pulse blur-sm"></div>
              <div className="relative bg-white bg-opacity-15 backdrop-blur-lg rounded-full p-6 border border-white/30 shadow-xl group-hover:scale-105 transition-transform duration-500">
                <Heart className="h-16 w-16 text-white fill-current drop-shadow-xl" />
              </div>
            </div>
          </div>
          
          {/* Enhanced Typography Section */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-xl tracking-tight leading-tight">
              Sacred Heart Parish
            </h1>
            
            <div className="space-y-4 max-w-3xl mx-auto">
              <p className="text-lg md:text-xl lg:text-2xl text-white/95 font-light tracking-wide">
                Welcome to Our Faith Community
              </p>
              <p className="text-base md:text-lg text-white/90 font-medium tracking-wide">
                Serving with love since 1983
              </p>
              <div className="flex justify-center">
                <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-white/80 to-transparent rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Enhanced Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center items-center pt-6">
            <Button 
              size="lg" 
              variant="secondary" 
              className="text-base px-8 py-3 hover:scale-105 transition-all duration-300 shadow-xl font-semibold tracking-wide min-w-[180px]"
              asChild
            >
              <Link to="/mass-services">
                <Calendar className="mr-2 h-5 w-5" />
                View Mass Schedule
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white bg-white/20 text-white hover:bg-white hover:text-sacred text-base px-8 py-3 hover:scale-105 transition-all duration-300 shadow-xl backdrop-blur-lg font-semibold tracking-wide min-w-[180px]"
              asChild
            >
              <Link to="/contact">
                <MapPin className="mr-2 h-5 w-5" />
                Visit Us
              </Link>
            </Button>
          </div>

          {/* Enhanced Quick Stats with Luxury Design */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mt-16 pt-6">
            {[
              { number: '40+', label: 'Years of Service', icon: Heart },
              { number: '24', label: 'Anbiyams', icon: Users },
              { number: '500+', label: 'Families', icon: Users },
              { number: '3', label: 'Daily Masses', icon: Calendar }
            ].map((stat, index) => (
              <div 
                key={index} 
                className="text-center bg-white/15 backdrop-blur-lg rounded-xl p-4 lg:p-6 border border-white/30 hover:bg-white/25 hover:scale-105 transition-all duration-500 shadow-xl group"
              >
                <div className="mb-3 flex justify-center">
                  <div className="p-2 bg-white/20 rounded-full group-hover:bg-white/30 transition-colors duration-300">
                    <stat.icon className="h-6 w-6 lg:h-7 lg:w-7 text-white" />
                  </div>
                </div>
                <div className="text-2xl lg:text-3xl font-bold text-white mb-1 tracking-tight">{stat.number}</div>
                <div className="text-white/90 text-xs lg:text-sm font-medium tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center backdrop-blur-sm bg-white/10">
          <div className="w-1 h-3 bg-white/80 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
