
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Heart, Calendar, MapPin } from 'lucide-react';

const Community = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-50 via-white to-orange-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block p-4 bg-sacred/10 rounded-full mb-6 shadow-lg">
            <Users className="h-16 w-16 text-sacred" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-sacred mb-4">Our Community</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Building faith together through 24 Anbiyams and vibrant parish groups
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Anbiyams Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-sacred mb-8 text-center">Anbiyams (Basic Christian Communities)</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <Card className="border-l-4 border-l-sacred hover:shadow-xl transition-all duration-300 bg-white">
              <CardHeader>
                <CardTitle className="text-2xl text-sacred">What are Anbiyams?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Anbiyams are small faith communities that form the foundation of our parish life. These Basic Christian 
                  Communities bring together families from specific geographical areas to foster deeper relationships, 
                  spiritual growth, and mutual support.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Each Anbiyam meets regularly for prayer, Bible sharing, community service, and fellowship, creating 
                  strong bonds that strengthen our entire parish family.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-sacred hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-red-50/30">
              <CardHeader>
                <CardTitle className="text-2xl text-sacred">Our 24 Anbiyams</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {Array.from({ length: 24 }, (_, i) => (
                    <div key={i} className="flex items-center space-x-2">
                      <Heart className="h-4 w-4 text-sacred" />
                      <span className="text-sm text-gray-700">Anbiyam {i + 1}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="text-center hover:shadow-lg transition-all duration-300 border-l-4 border-l-sacred bg-white">
              <CardContent className="p-6">
                <div className="inline-block p-3 bg-sacred/10 rounded-full mb-4">
                  <Calendar className="h-12 w-12 text-sacred" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-sacred">Regular Meetings</h3>
                <p className="text-gray-600">Each Anbiyam meets monthly for prayer, fellowship, and community planning</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300 border-l-4 border-l-sacred bg-white">
              <CardContent className="p-6">
                <div className="inline-block p-3 bg-sacred/10 rounded-full mb-4">
                  <Users className="h-12 w-12 text-sacred" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-sacred">Community Service</h3>
                <p className="text-gray-600">Organizing local outreach programs and supporting families in need</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300 border-l-4 border-l-sacred bg-white">
              <CardContent className="p-6">
                <div className="inline-block p-3 bg-sacred/10 rounded-full mb-4">
                  <Heart className="h-12 w-12 text-sacred" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-sacred">Spiritual Growth</h3>
                <p className="text-gray-600">Bible study, prayer groups, and faith formation activities</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Parish Groups */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-sacred mb-8 text-center">Parish Groups & Organizations</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Parish Council */}
            <Card className="border-l-4 border-l-sacred hover:shadow-xl transition-all duration-300 bg-white">
              <CardHeader>
                <CardTitle className="text-xl text-sacred flex items-center space-x-2">
                  <div className="p-2 bg-sacred/10 rounded-full">
                    <Users className="h-6 w-6 text-sacred" />
                  </div>
                  <span>Parish Council</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  The Parish Council provides lay leadership and guidance for parish activities, planning, and 
                  decision-making in collaboration with the parish priest.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Monthly council meetings</li>
                  <li>• Strategic planning for parish activities</li>
                  <li>• Coordination with Anbiyam leaders</li>
                  <li>• Financial oversight and planning</li>
                </ul>
              </CardContent>
            </Card>

            {/* Youth Ministry */}
            <Card className="border-l-4 border-l-sacred hover:shadow-xl transition-all duration-300 bg-white">
              <CardHeader>
                <CardTitle className="text-xl text-sacred flex items-center space-x-2">
                  <div className="p-2 bg-sacred/10 rounded-full">
                    <Heart className="h-6 w-6 text-sacred" />
                  </div>
                  <span>Youth Ministry</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Our vibrant youth ministry empowers young people (ages 13-30) to grow in faith, develop 
                  leadership skills, and actively participate in parish life.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Weekly youth group meetings</li>
                  <li>• Youth-led liturgical ministries</li>
                  <li>• Community service projects</li>
                  <li>• Annual youth retreats and camps</li>
                </ul>
              </CardContent>
            </Card>

            {/* Women's Groups */}
            <Card className="border-l-4 border-l-sacred hover:shadow-xl transition-all duration-300 bg-white">
              <CardHeader>
                <CardTitle className="text-xl text-sacred flex items-center space-x-2">
                  <div className="p-2 bg-sacred/10 rounded-full">
                    <Users className="h-6 w-6 text-sacred" />
                  </div>
                  <span>Women's Groups</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Our women's ministry provides spiritual support, fellowship, and service opportunities 
                  for women of all ages in the parish community.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Monthly prayer and reflection meetings</li>
                  <li>• Community welfare initiatives</li>
                  <li>• Support for families in need</li>
                  <li>• Liturgical ministry participation</li>
                </ul>
              </CardContent>
            </Card>

            {/* Senior Citizens */}
            <Card className="border-l-4 border-l-sacred hover:shadow-xl transition-all duration-300 bg-white">
              <CardHeader>
                <CardTitle className="text-xl text-sacred flex items-center space-x-2">
                  <div className="p-2 bg-sacred/10 rounded-full">
                    <Heart className="h-6 w-6 text-sacred" />
                  </div>
                  <span>Senior Citizens Group</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Our senior citizens group honors the wisdom and experience of our elder parishioners 
                  while providing fellowship and spiritual enrichment.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Weekly fellowship gatherings</li>
                  <li>• Special liturgical celebrations</li>
                  <li>• Health and wellness programs</li>
                  <li>• Sharing of parish history and traditions</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Get Involved */}
        <section className="mb-16 bg-gradient-to-br from-red-50/50 to-orange-50/50 rounded-lg p-8 border border-sacred/10">
          <h2 className="text-3xl font-bold text-sacred mb-8 text-center">Get Involved</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="inline-block p-4 bg-sacred/10 rounded-full mb-4">
                <MapPin className="h-12 w-12 text-sacred" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-sacred">Find Your Anbiyam</h3>
              <p className="text-gray-600">Connect with your local Anbiyam based on your residential area</p>
            </div>
            <div className="text-center">
              <div className="inline-block p-4 bg-sacred/10 rounded-full mb-4">
                <Users className="h-12 w-12 text-sacred" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-sacred">Join a Ministry</h3>
              <p className="text-gray-600">Discover opportunities to serve in various parish ministries</p>
            </div>
            <div className="text-center">
              <div className="inline-block p-4 bg-sacred/10 rounded-full mb-4">
                <Heart className="h-12 w-12 text-sacred" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-sacred">Volunteer</h3>
              <p className="text-gray-600">Share your talents and time in service to our community</p>
            </div>
          </div>
        </section>

        {/* Community Calendar */}
        <section>
          <Card className="border-l-4 border-l-sacred hover:shadow-xl transition-all duration-300 bg-white">
            <CardHeader>
              <CardTitle className="text-2xl text-sacred text-center">Community Events Calendar</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-lg mb-3 text-sacred">Regular Activities</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>First Sunday:</strong> Anbiyam Leaders Meeting</li>
                    <li>• <strong>Second Saturday:</strong> Youth Ministry Meeting</li>
                    <li>• <strong>Third Sunday:</strong> Women's Group Meeting</li>
                    <li>• <strong>Last Friday:</strong> Senior Citizens Gathering</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-3 text-sacred">Annual Celebrations</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>June:</strong> Sacred Heart Parish Feast</li>
                    <li>• <strong>August:</strong> Youth Day Celebration</li>
                    <li>• <strong>October:</strong> Anbiyam Day</li>
                    <li>• <strong>December:</strong> Christmas Community Festival</li>
                  </ul>
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

export default Community;
