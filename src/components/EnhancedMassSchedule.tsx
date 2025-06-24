
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, MapPin, Users, Calendar } from 'lucide-react';

const EnhancedMassSchedule = () => {
  const massSchedule = [
    { 
      day: 'Monday - Friday', 
      time: '6:30 AM', 
      type: 'Daily Mass',
      language: 'Tamil & English',
      location: 'Main Church',
      special: false
    },
    { 
      day: 'Saturday', 
      time: '6:30 AM & 6:00 PM', 
      type: 'Vigil Mass',
      language: 'Tamil',
      location: 'Main Church',
      special: true
    },
    { 
      day: 'Sunday', 
      time: '6:00 AM, 8:00 AM, 10:00 AM', 
      type: 'Sunday Mass',
      language: 'Tamil & English',
      location: 'Main Church',
      special: true
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blessed-beige via-radiant-halo-white to-heavenly-yellow/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block p-4 bg-divine-red/10 rounded-full mb-6 shadow-lg">
            <Clock className="h-12 w-12 text-divine-red" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-divine-red mb-6 tracking-tight">Mass Schedule</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join us for worship throughout the week in our beautiful sacred space
          </p>
          <div className="w-24 h-1 bg-divine-red/60 mx-auto mt-6 rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {massSchedule.map((mass, index) => (
            <Card 
              key={index} 
              className={`group hover:shadow-2xl transition-all duration-500 border-l-4 hover:scale-105 ${
                mass.special ? 'border-l-holy-burgundy bg-gradient-to-br from-white to-blessed-beige/30' : 'border-l-olive-green'
              }`}
            >
              <CardHeader className="pb-4 px-6 pt-6">
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center space-x-3 text-2xl font-bold">
                    <Clock className="h-6 w-6 text-divine-red" />
                    <span className="text-holy-burgundy">{mass.type}</span>
                  </CardTitle>
                  {mass.special && (
                    <Badge variant="secondary" className="bg-sacred-flame-gold text-white font-semibold">
                      Special
                    </Badge>
                  )}
                </div>
              </CardHeader>
              <CardContent className="space-y-4 px-6 pb-6">
                <div>
                  <p className="font-bold text-lg text-gray-800">{mass.day}</p>
                  <p className="text-divine-red font-bold text-2xl">{mass.time}</p>
                </div>
                
                <div className="space-y-3 pt-4 border-t border-olive-green/30">
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Users className="h-4 w-4 text-olive-green" />
                    <span className="text-sm">{mass.language}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <MapPin className="h-4 w-4 text-olive-green" />
                    <span className="text-sm">{mass.location}</span>
                  </div>
                </div>

                <div className="pt-4">
                  <button className="w-full bg-olive-green/10 hover:bg-olive-green hover:text-white text-olive-green py-3 px-4 rounded-md transition-all duration-300 text-sm font-semibold tracking-wide">
                    Add to Calendar
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-white rounded-lg p-8 shadow-xl max-w-2xl mx-auto border border-blessed-beige">
            <Calendar className="h-8 w-8 text-divine-red mx-auto mb-4" />
            <h3 className="text-xl font-bold text-divine-red mb-4">Special Services</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Join us for Eucharistic Adoration Monday-Friday 9:00 AM - 6:00 PM
            </p>
            <button className="bg-divine-red text-white px-8 py-3 rounded-md hover:bg-holy-burgundy transition-colors font-semibold">
              View Full Calendar
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedMassSchedule;
