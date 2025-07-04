
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, Users, Calendar, MapPin, BookOpen, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const InteractiveFeatures = () => {
  const features = [
    {
      icon: Heart,
      title: 'Prayer Requests',
      description: 'Submit your prayer intentions',
      action: 'Submit Prayer',
      color: 'from-divine-red to-holy-burgundy',
      link: '/contact'
    },
    {
      icon: Users,
      title: 'Join a Community',
      description: 'Explore our 24 Anbiyams',
      action: 'Explore Groups',
      color: 'from-olive-green to-olive-green',
      link: '/community'
    },
    {
      icon: Calendar,
      title: 'Parish Events',
      description: 'Upcoming celebrations',
      action: 'View Events',
      color: 'from-sacred-flame-gold to-heavenly-yellow',
      link: '/events'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      description: 'Find directions & contact',
      action: 'Get Directions',
      color: 'from-holy-burgundy to-divine-red',
      link: '/contact'
    },
    {
      icon: BookOpen,
      title: 'Mass Readings',
      description: 'Daily scripture readings',
      action: 'Read Today',
      color: 'from-olive-green to-sacred-flame-gold',
      link: '/mass-services'
    },
    {
      icon: Phone,
      title: 'Emergency Contact',
      description: 'Urgent pastoral care',
      action: 'Contact Now',
      color: 'from-divine-red to-holy-burgundy',
      link: '/contact'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-divine-red mb-6">Connect With Us</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover ways to engage with our parish community and deepen your faith journey
          </p>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-0 bg-gradient-to-br from-white to-blessed-beige/30 overflow-hidden relative"
            >
              <CardContent className="p-6 text-center relative z-10">
                <div className={`inline-block p-4 rounded-full bg-gradient-to-br ${feature.color} mb-4 shadow-lg`}>
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-holy-burgundy">{feature.title}</h3>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">{feature.description}</p>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full hover:bg-divine-red hover:text-white transition-all duration-300 border-olive-green"
                  asChild
                >
                  <Link to={feature.link}>{feature.action}</Link>
                </Button>
              </CardContent>
              
              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-divine-red/5 to-sacred-flame-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InteractiveFeatures;
