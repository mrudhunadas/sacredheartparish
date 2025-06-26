
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Heart, Users, MapPin, Bell, Clock, Mail, ArrowLeft } from 'lucide-react';
import { useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';

const Events = () => {
  const [email, setEmail] = useState('');
  const [subscriptionStatus, setSubscriptionStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [searchParams] = useSearchParams();
  const selectedEventId = searchParams.get('event');

  const upcomingEvents = [
    {
      id: 'parish-feast',
      title: 'Sacred Heart Parish Feast Day',
      date: 'June 28, 2024',
      time: '7:00 AM - 9:00 PM',
      location: 'Parish Grounds',
      description: 'Annual feast day celebration with special Mass, cultural programs, and community feast.',
      fullDescription: `Join us for our most significant annual celebration - the Sacred Heart Parish Feast Day! This blessed day commemorates our parish's dedication to the Sacred Heart of Jesus and brings together our entire community in joyful worship and fellowship.

The celebration begins with a solemn High Mass at 7:00 AM, followed by special prayers and devotions throughout the day. Our parishioners will present beautiful cultural programs showcasing our rich Tamil heritage, including traditional songs, classical dances, and contemporary performances by our youth.

The highlight of the day will be our community feast, featuring authentic South Indian cuisine lovingly prepared by our parish volunteers. This is truly a day where our entire parish family comes together to celebrate our shared faith, culture, and community bonds.`,
      category: 'Parish Feast',
      contact: 'Parish Office: +91 XXX XXX XXXX',
      urgent: true
    },
    {
      id: 'youth-ministry',
      title: 'Youth Ministry Meeting',
      date: 'June 25, 2024',
      time: '6:00 PM - 8:00 PM',
      location: 'Parish Hall',
      description: 'Monthly youth ministry meeting to plan upcoming activities and spiritual programs.',
      fullDescription: `Our monthly Youth Ministry meeting brings together young parishioners aged 16-30 to plan exciting activities and deepen their faith journey. This month's meeting will focus on organizing our upcoming youth retreat and various community service initiatives.

Agenda includes:
- Planning the annual youth retreat
- Organizing community service projects
- Faith sharing and spiritual development
- Recreational activities and sports events
- Leadership development workshops

The Youth Ministry is the vibrant heart of our parish's future, fostering both spiritual growth and social bonds among our young community members. All young adults are warmly invited to join us and contribute their ideas and energy.`,
      category: 'Youth Ministry',
      contact: 'Youth Coordinator: youth@sacredheart.org',
      urgent: false
    },
    {
      id: 'anbiyam-conference',
      title: 'Anbiyam Leaders Conference',
      date: 'July 5, 2024',
      time: '9:00 AM - 4:00 PM',
      location: 'Community Center',
      description: 'Quarterly meeting for all Anbiyam leaders to discuss community initiatives.',
      fullDescription: `Our quarterly Anbiyam Leaders Conference brings together representatives from all 24 Basic Christian Communities to strengthen our parish's pastoral care and community outreach efforts.

This important gathering will cover:
- Review of community pastoral activities
- Planning for upcoming seasonal celebrations
- Discussion of social welfare initiatives
- Coordination of prayer groups and Bible study circles
- Resource sharing between Anbiyams

Each Anbiyam plays a crucial role in maintaining the spiritual and social fabric of our parish community. This conference ensures we continue to serve our parishioners with love, care, and Christian fellowship.`,
      category: 'Community',
      contact: 'Anbiyam Coordinator: anbiyam@sacredheart.org',
      urgent: false
    }
  ];

  const recentNews = [
    {
      id: 'adoration-hours',
      title: 'New Adoration Chapel Hours',
      date: 'June 15, 2024',
      content: 'Effective July 1st, our Adoration Chapel will be open from 9:00 AM to 6:00 PM, Monday through Friday.',
      category: 'Announcement'
    },
    {
      id: 'youth-camp',
      title: 'Summer Youth Camp Registration',
      date: 'June 10, 2024',
      content: 'Registration is now open for our annual summer youth camp scheduled for July 15-20. Limited spots available.',
      category: 'Registration'
    },
    {
      id: 'garden-project',
      title: 'Parish Garden Project Success',
      date: 'June 5, 2024',
      content: 'Thanks to community volunteers, our new parish garden is thriving and will provide fresh produce for our food ministry.',
      category: 'Community'
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Parish Feast': return 'from-divine-red to-holy-burgundy';
      case 'Youth Ministry': return 'from-sacred-flame-gold to-heavenly-yellow';
      case 'Community': return 'from-olive-green to-olive-green';
      case 'Announcement': return 'from-holy-burgundy to-divine-red';
      case 'Registration': return 'from-sacred-flame-gold to-heavenly-yellow';
      default: return 'from-olive-green to-sacred-flame-gold';
    }
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscriptionStatus('success');
      setEmail('');
      setTimeout(() => setSubscriptionStatus('idle'), 3000);
    }
  };

  const selectedEvent = upcomingEvents.find(event => event.id === selectedEventId);

  if (selectedEvent) {
    return (
      <div className="min-h-screen bg-radiant-halo-white">
        <Navigation />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link 
            to="/events" 
            className="inline-flex items-center text-divine-red hover:text-holy-burgundy mb-8 font-medium"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Events
          </Link>

          <Card className="border border-olive-green/30 shadow-xl bg-gradient-to-br from-white to-blessed-beige/30">
            <CardHeader className="pb-6">
              <div className={`w-full h-2 bg-gradient-to-r ${getCategoryColor(selectedEvent.category)} mb-4 rounded`}></div>
              <CardTitle className="text-3xl text-divine-red mb-4">{selectedEvent.title}</CardTitle>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5 text-divine-red" />
                  <span className="font-medium">{selectedEvent.date}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-divine-red" />
                  <span className="font-medium">{selectedEvent.time}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-divine-red" />
                  <span className="font-medium">{selectedEvent.location}</span>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-700 leading-relaxed whitespace-pre-line text-lg">
                  {selectedEvent.fullDescription}
                </p>
              </div>
              <div className="p-4 bg-divine-red/5 rounded-lg border border-divine-red/20">
                <p className="font-semibold text-divine-red mb-2">Contact Information</p>
                <p className="text-gray-700">{selectedEvent.contact}</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-radiant-halo-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blessed-beige via-radiant-halo-white to-heavenly-yellow/30 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block p-4 bg-divine-red/10 rounded-full mb-6 shadow-lg">
            <Calendar className="h-16 w-16 text-divine-red" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-divine-red mb-4">Events & News</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Stay connected with parish happenings, events, and community news
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Upcoming Events */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-divine-red mb-8 text-center">Upcoming Events</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-0 bg-gradient-to-br from-white to-blessed-beige/50 overflow-hidden relative group">
                <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${getCategoryColor(event.category)}`}></div>
                {event.urgent && (
                  <div className="absolute top-4 right-4">
                    <Bell className="h-5 w-5 text-sacred-flame-gold animate-pulse" />
                  </div>
                )}
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start mb-2">
                    <span className={`text-sm px-3 py-1 rounded-full font-semibold bg-gradient-to-r ${getCategoryColor(event.category)} text-white`}>
                      {event.category}
                    </span>
                  </div>
                  <CardTitle className="text-xl text-holy-burgundy group-hover:text-divine-red transition-colors duration-300">
                    {event.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4 text-divine-red" />
                    <span className="text-sm font-medium text-olive-green">{event.date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-divine-red" />
                    <span className="text-sm text-gray-600">{event.time}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-divine-red" />
                    <span className="text-sm text-gray-600">{event.location}</span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{event.description}</p>
                  <Link 
                    to={`/events?event=${event.id}`}
                    className="w-full mt-4 bg-gradient-to-r from-olive-green to-olive-green hover:from-divine-red hover:to-holy-burgundy text-white py-2 px-4 rounded-md transition-all duration-300 text-sm font-medium inline-block text-center"
                  >
                    Learn More
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Recent Parish News */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-divine-red mb-8 text-center">Recent Parish News</h2>
          <div className="space-y-6">
            {recentNews.map((news, index) => (
              <Card key={index} className="border-l-4 border-l-olive-green hover:shadow-xl transition-all duration-500 bg-gradient-to-r from-white to-blessed-beige/30 group">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex items-center space-x-3">
                      <h3 className="text-xl font-bold text-divine-red group-hover:text-holy-burgundy transition-colors duration-300">
                        {news.title}
                      </h3>
                      <span className={`text-xs px-2 py-1 rounded-full font-semibold bg-gradient-to-r ${getCategoryColor(news.category)} text-white`}>
                        {news.category}
                      </span>
                    </div>
                    <span className="text-sm text-olive-green font-medium">{news.date}</span>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{news.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Enhanced Newsletter Signup */}
        <section className="mb-16 bg-gradient-to-br from-blessed-beige/50 to-heavenly-yellow/20 rounded-xl p-8 border border-olive-green/30 shadow-lg">
          <div className="text-center">
            <div className="inline-block p-4 bg-divine-red/10 rounded-full mb-6 shadow-lg">
              <Heart className="h-12 w-12 text-divine-red" />
            </div>
            <h2 className="text-3xl font-bold text-divine-red mb-4">Stay Connected</h2>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto leading-relaxed">
              Subscribe to our parish newsletter to receive weekly updates, event announcements, and spiritual reflections directly in your inbox.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto">
              <div className="flex gap-3">
                <div className="flex-1 relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-olive-green" />
                  <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full pl-10 pr-4 py-3 border border-olive-green/30 rounded-lg focus:ring-2 focus:ring-divine-red focus:border-transparent bg-white/80 backdrop-blur-sm"
                    required
                  />
                </div>
                <button 
                  type="submit"
                  className="bg-gradient-to-r from-divine-red to-holy-burgundy text-white px-6 py-3 rounded-lg hover:from-holy-burgundy hover:to-divine-red transition-all duration-300 font-medium shadow-lg"
                >
                  Subscribe
                </button>
              </div>
              {subscriptionStatus === 'success' && (
                <p className="mt-3 text-olive-green font-medium">Thank you for subscribing!</p>
              )}
            </form>
          </div>
        </section>

        {/* Enhanced Annual Calendar */}
        <section>
          <Card className="border border-olive-green/30 shadow-lg bg-gradient-to-br from-white to-blessed-beige/30">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-3xl text-divine-red">Annual Parish Calendar Highlights</CardTitle>
              <p className="text-gray-600 mt-2">Important celebrations and events throughout the year</p>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-gradient-to-br from-divine-red/10 to-holy-burgundy/10 rounded-xl border border-divine-red/20 hover:shadow-lg transition-all duration-300 group">
                  <Calendar className="h-8 w-8 text-divine-red mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                  <h4 className="font-bold text-divine-red mb-2">Sacred Heart Feast</h4>
                  <p className="text-sm text-gray-600">June 28th - Parish Patron Feast Day</p>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-sacred-flame-gold/10 to-heavenly-yellow/10 rounded-xl border border-sacred-flame-gold/20 hover:shadow-lg transition-all duration-300 group">
                  <Calendar className="h-8 w-8 text-sacred-flame-gold mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                  <h4 className="font-bold text-sacred-flame-gold mb-2">Christmas Celebration</h4>
                  <p className="text-sm text-gray-600">December 24-25 - Christmas Masses & Events</p>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-olive-green/10 to-olive-green/20 rounded-xl border border-olive-green/20 hover:shadow-lg transition-all duration-300 group">
                  <Calendar className="h-8 w-8 text-olive-green mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                  <h4 className="font-bold text-olive-green mb-2">Easter Celebration</h4>
                  <p className="text-sm text-gray-600">March/April - Holy Week & Easter</p>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-heavenly-yellow/10 to-sacred-flame-gold/10 rounded-xl border border-heavenly-yellow/20 hover:shadow-lg transition-all duration-300 group">
                  <Calendar className="h-8 w-8 text-heavenly-yellow mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                  <h4 className="font-bold text-holy-burgundy mb-2">Youth Day</h4>
                  <p className="text-sm text-gray-600">August 15th - Youth Ministry Celebration</p>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-holy-burgundy/10 to-divine-red/10 rounded-xl border border-holy-burgundy/20 hover:shadow-lg transition-all duration-300 group">
                  <Calendar className="h-8 w-8 text-holy-burgundy mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                  <h4 className="font-bold text-holy-burgundy mb-2">Anbiyam Day</h4>
                  <p className="text-sm text-gray-600">October 1st - Community Groups Celebration</p>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-blessed-beige/20 to-olive-green/10 rounded-xl border border-blessed-beige/30 hover:shadow-lg transition-all duration-300 group">
                  <Calendar className="h-8 w-8 text-olive-green mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                  <h4 className="font-bold text-olive-green mb-2">Parish Anniversary</h4>
                  <p className="text-sm text-gray-600">November - Parish Foundation Day</p>
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

export default Events;
