
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Heart, Users, MapPin } from 'lucide-react';

const Events = () => {
  const upcomingEvents = [
    {
      title: 'Sacred Heart Parish Feast Day',
      date: 'June 28, 2024',
      time: '7:00 AM - 9:00 PM',
      location: 'Parish Grounds',
      description: 'Annual feast day celebration with special Mass, cultural programs, and community feast.',
      category: 'Parish Feast'
    },
    {
      title: 'Youth Ministry Meeting',
      date: 'June 25, 2024',
      time: '6:00 PM - 8:00 PM',
      location: 'Parish Hall',
      description: 'Monthly youth ministry meeting to plan upcoming activities and spiritual programs.',
      category: 'Youth Ministry'
    },
    {
      title: 'Anbiyam Leaders Conference',
      date: 'July 5, 2024',
      time: '9:00 AM - 4:00 PM',
      location: 'Community Center',
      description: 'Quarterly meeting for all Anbiyam leaders to discuss community initiatives.',
      category: 'Community'
    }
  ];

  const recentNews = [
    {
      title: 'New Adoration Chapel Hours',
      date: 'June 15, 2024',
      content: 'Effective July 1st, our Adoration Chapel will be open from 9:00 AM to 6:00 PM, Monday through Friday.'
    },
    {
      title: 'Summer Youth Camp Registration',
      date: 'June 10, 2024',
      content: 'Registration is now open for our annual summer youth camp scheduled for July 15-20. Limited spots available.'
    },
    {
      title: 'Parish Garden Project Success',
      date: 'June 5, 2024',
      content: 'Thanks to community volunteers, our new parish garden is thriving and will provide fresh produce for our food ministry.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-100 to-orange-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Calendar className="h-16 w-16 text-sacred mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-sacred mb-4">Events & News</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Stay connected with parish happenings, events, and community news
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Upcoming Events */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-sacred mb-8 text-center">Upcoming Events</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-l-4 border-l-dark-brown">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-sm bg-medium-brown/10 text-medium-brown px-3 py-1 rounded-full font-semibold">{event.category}</span>
                  </div>
                  <CardTitle className="text-xl text-dark-brown">{event.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4 text-sacred" />
                    <span className="text-sm font-medium">{event.date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4 text-sacred" />
                    <span className="text-sm">{event.time}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-sacred" />
                    <span className="text-sm">{event.location}</span>
                  </div>
                  <p className="text-gray-600 text-sm">{event.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Recent Parish News */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-sacred mb-8 text-center">Recent Parish News</h2>
          <div className="space-y-6">
            {recentNews.map((news, index) => (
              <Card key={index} className="border-l-4 border-l-medium-brown hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-sacred">{news.title}</h3>
                    <span className="text-sm text-gray-500">{news.date}</span>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{news.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="mb-16 bg-light-brown/10 rounded-xl p-8 border border-light-brown">
          <div className="text-center">
            <Heart className="h-12 w-12 text-sacred mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-sacred mb-4">Stay Connected</h2>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Subscribe to our parish newsletter to receive weekly updates, event announcements, and spiritual reflections directly in your inbox.
            </p>
            <div className="max-w-md mx-auto">
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-2 border border-medium-brown rounded-md focus:ring-2 focus:ring-sacred focus:border-transparent"
                />
                <button className="bg-sacred text-white px-6 py-2 rounded-md hover:bg-red-800 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Annual Calendar */}
        <section>
          <Card className="border border-light-brown">
            <CardHeader>
              <CardTitle className="text-2xl text-sacred text-center">Annual Parish Calendar Highlights</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-light-brown/10 rounded-lg border border-light-brown">
                  <h4 className="font-bold text-sacred mb-2">Sacred Heart Feast</h4>
                  <p className="text-sm text-gray-600">June 28th - Parish Patron Feast Day</p>
                </div>
                <div className="text-center p-4 bg-medium-brown/10 rounded-lg border border-medium-brown">
                  <h4 className="font-bold text-sacred mb-2">Christmas Celebration</h4>
                  <p className="text-sm text-gray-600">December 24-25 - Christmas Masses & Events</p>
                </div>
                <div className="text-center p-4 bg-dark-brown/10 rounded-lg border border-dark-brown">
                  <h4 className="font-bold text-sacred mb-2">Easter Celebration</h4>
                  <p className="text-sm text-gray-600">March/April - Holy Week & Easter</p>
                </div>
                <div className="text-center p-4 bg-light-brown/10 rounded-lg border border-light-brown">
                  <h4 className="font-bold text-sacred mb-2">Youth Day</h4>
                  <p className="text-sm text-gray-600">August 15th - Youth Ministry Celebration</p>
                </div>
                <div className="text-center p-4 bg-medium-brown/10 rounded-lg border border-medium-brown">
                  <h4 className="font-bold text-sacred mb-2">Anbiyam Day</h4>
                  <p className="text-sm text-gray-600">October 1st - Community Groups Celebration</p>
                </div>
                <div className="text-center p-4 bg-very-dark-brown/10 rounded-lg border border-very-dark-brown">
                  <h4 className="font-bold text-sacred mb-2">Parish Anniversary</h4>
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
