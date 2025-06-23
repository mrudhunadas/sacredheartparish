
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Users, Calendar, Church, Award, Globe } from 'lucide-react';

const ParishStats = () => {
  const stats = [
    { 
      number: '40+', 
      label: 'Years of Service',
      icon: Award,
      description: 'Faithful service since 1983'
    },
    { 
      number: '24', 
      label: 'Anbiyams (BCCs)',
      icon: Users,
      description: 'Basic Christian Communities'
    },
    { 
      number: '500+', 
      label: 'Parish Families',
      icon: Heart,
      description: 'Growing faith community'
    },
    { 
      number: '3', 
      label: 'Daily Masses',
      icon: Church,
      description: 'Regular worship services'
    },
    { 
      number: '365', 
      label: 'Days of Prayer',
      icon: Calendar,
      description: 'Year-round spiritual support'
    },
    { 
      number: '2', 
      label: 'Languages',
      icon: Globe,
      description: 'Tamil & English services'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-red-900 via-red-800 to-orange-700 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Parish in Numbers</h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Four decades of faithful service to our community, building lasting relationships and spiritual growth
          </p>
          <div className="w-24 h-1 bg-white/60 mx-auto mt-6 rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map((stat, index) => (
            <Card 
              key={index} 
              className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-500 hover:scale-105 group"
            >
              <CardContent className="p-6 text-center">
                <div className="inline-block p-3 bg-white/20 rounded-full mb-4 group-hover:bg-white/30 transition-colors duration-300">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-white/90 font-medium mb-2">{stat.label}</div>
                <div className="text-white/70 text-sm leading-relaxed">{stat.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-block bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
            <Heart className="h-12 w-12 text-white mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">Join Our Growing Family</h3>
            <p className="text-white/90 mb-6 max-w-2xl">
              Be part of a community that has been serving with love and dedication for over four decades
            </p>
            <button className="bg-white text-sacred px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105">
              Become a Member
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParishStats;
