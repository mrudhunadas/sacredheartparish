
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, Calendar, Heart, Users } from 'lucide-react';

const MassServices = () => {
  const massSchedule = [
    {
      day: 'Monday',
      masses: [{ time: '6:30 AM', type: 'Daily Mass', language: 'Tamil/English' }]
    },
    {
      day: 'Tuesday',
      masses: [{ time: '6:30 AM', type: 'Daily Mass', language: 'Tamil/English' }]
    },
    {
      day: 'Wednesday',
      masses: [{ time: '6:30 AM', type: 'Daily Mass', language: 'Tamil/English' }]
    },
    {
      day: 'Thursday',
      masses: [{ time: '6:30 AM', type: 'Daily Mass', language: 'Tamil/English' }]
    },
    {
      day: 'Friday',
      masses: [{ time: '6:30 AM', type: 'Daily Mass', language: 'Tamil/English' }]
    },
    {
      day: 'Saturday',
      masses: [
        { time: '6:30 AM', type: 'Morning Mass', language: 'Tamil' },
        { time: '6:00 PM', type: 'Vigil Mass', language: 'English' }
      ]
    },
    {
      day: 'Sunday',
      masses: [
        { time: '6:00 AM', type: 'Early Mass', language: 'Tamil' },
        { time: '8:00 AM', type: 'Family Mass', language: 'Tamil/English' },
        { time: '10:00 AM', type: 'Main Mass', language: 'English' }
      ]
    }
  ];

  const sacraments = [
    {
      name: 'Baptism',
      description: 'The sacrament of initiation into the Catholic Church',
      requirements: 'Pre-baptismal preparation required for parents and godparents',
      schedule: 'Usually celebrated during Sunday Mass by appointment'
    },
    {
      name: 'First Holy Communion',
      description: 'Receiving the Eucharist for the first time',
      requirements: 'Completion of First Communion preparation program',
      schedule: 'Annual celebration in May, preparation starts in January'
    },
    {
      name: 'Confirmation',
      description: 'Completing Christian initiation through the gifts of the Holy Spirit',
      requirements: 'Completion of Confirmation preparation program',
      schedule: 'Annual celebration, preparation program runs September-April'
    },
    {
      name: 'Marriage',
      description: 'The sacrament of matrimony between Catholic faithful',
      requirements: 'Pre-marriage preparation course and canonical interview',
      schedule: 'By appointment, minimum 6 months advance notice required'
    },
    {
      name: 'Anointing of the Sick',
      description: 'Spiritual healing for those who are seriously ill',
      requirements: 'Contact parish office for arrangements',
      schedule: 'Available anytime for emergency situations'
    }
  ];

  const specialServices = [
    {
      name: 'Eucharistic Adoration',
      time: 'Monday - Friday: 9:00 AM - 6:00 PM',
      location: 'Adoration Chapel',
      description: 'Silent prayer before the Blessed Sacrament'
    },
    {
      name: 'Confessions',
      time: 'Saturday: 5:00 PM - 5:45 PM',
      location: 'Confessional or by appointment',
      description: 'Sacrament of Reconciliation'
    },
    {
      name: 'Novena Prayers',
      time: 'Every Friday: 7:00 PM',
      location: 'Main Church',
      description: 'Sacred Heart Novena and Benediction'
    },
    {
      name: 'Rosary',
      time: 'Daily: 15 minutes before each Mass',
      location: 'Main Church',
      description: 'Communal prayer of the Rosary'
    }
  ];

  const holyDays = [
    { date: 'January 1', feast: 'Mary, Mother of God' },
    { date: 'March/April', feast: 'Easter Sunday' },
    { date: 'May/June', feast: 'Ascension of the Lord' },
    { date: 'August 15', feast: 'Assumption of Mary' },
    { date: 'November 1', feast: 'All Saints Day' },
    { date: 'December 8', feast: 'Immaculate Conception' },
    { date: 'December 25', feast: 'Christmas Day' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blessed-beige to-heavenly-yellow/30 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Clock className="h-16 w-16 text-divine-red mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-divine-red mb-4">Mass & Services</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Join us for worship, prayer, and the celebration of the sacraments
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Mass Schedule */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-divine-red mb-8 text-center">Weekly Mass Schedule</h2>
          <div className="grid md:grid-cols-7 gap-4">
            {massSchedule.map((day, index) => (
              <Card key={index} className="border-l-4 border-l-olive-green hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg text-center text-holy-burgundy">{day.day}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {day.masses.map((mass, massIndex) => (
                    <div key={massIndex} className="text-center">
                      <p className="font-bold text-divine-red">{mass.time}</p>
                      <p className="text-sm text-gray-600">{mass.type}</p>
                      <p className="text-xs text-gray-500">{mass.language}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-6 p-4 bg-blessed-beige/20 rounded-lg border border-heavenly-yellow">
            <p className="text-center text-gray-700">
              <strong>Note:</strong> Mass times may vary during special liturgical seasons and holy days. 
              Please check the parish bulletin or contact the office for any schedule changes.
            </p>
          </div>
        </section>

        {/* Sacraments */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-divine-red mb-8 text-center">Sacraments</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sacraments.map((sacrament, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-t-4 border-t-sacred-flame-gold">
                <CardHeader>
                  <CardTitle className="text-xl text-divine-red">{sacrament.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-gray-700">{sacrament.description}</p>
                  <div>
                    <h4 className="font-semibold text-sm text-olive-green mb-1">Requirements:</h4>
                    <p className="text-sm text-gray-600">{sacrament.requirements}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-olive-green mb-1">Schedule:</h4>
                    <p className="text-sm text-gray-600">{sacrament.schedule}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Special Services */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-divine-red mb-8 text-center">Special Services & Devotions</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {specialServices.map((service, index) => (
              <Card key={index} className="border-l-4 border-l-holy-burgundy hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Heart className="h-8 w-8 text-divine-red mt-1" />
                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-2 text-holy-burgundy">{service.name}</h3>
                      <p className="text-divine-red font-medium mb-1">{service.time}</p>
                      <p className="text-sm text-gray-600 mb-2">{service.location}</p>
                      <p className="text-gray-700">{service.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Holy Days */}
        <section className="mb-16 bg-blessed-beige/20 rounded-lg p-8 border border-heavenly-yellow">
          <h2 className="text-3xl font-bold text-divine-red mb-8 text-center">Holy Days of Obligation</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {holyDays.map((holyDay, index) => (
              <div key={index} className="bg-white rounded-lg p-4 border border-olive-green hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-3">
                  <Calendar className="h-6 w-6 text-divine-red" />
                  <div>
                    <p className="font-bold text-divine-red">{holyDay.date}</p>
                    <p className="text-gray-700">{holyDay.feast}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center">
            <p className="text-gray-700">
              Special Mass schedules will be announced for each Holy Day. Please check the parish bulletin for times.
            </p>
          </div>
        </section>

        {/* Contact for Services */}
        <section>
          <Card className="bg-gradient-to-r from-blessed-beige/20 to-heavenly-yellow/10 border border-olive-green">
            <CardContent className="p-8 text-center">
              <Users className="h-12 w-12 text-divine-red mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-divine-red mb-4">Need to Schedule a Service?</h3>
              <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                For baptisms, weddings, funerals, or other sacramental needs, please contact the parish office. 
                Our staff will be happy to assist you with scheduling and preparation requirements.
              </p>
              <div className="space-y-2">
                <p className="font-medium">Parish Office: <span className="text-divine-red">+91 XXX XXX XXXX</span></p>
                <p className="font-medium">Email: <span className="text-divine-red">parish@sacredheart.org</span></p>
                <p className="text-sm text-gray-600">Office Hours: Monday - Saturday, 9:00 AM - 5:00 PM</p>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default MassServices;
