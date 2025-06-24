
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, Users, Calendar, MapPin } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blessed-beige to-heavenly-yellow/30 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Heart className="h-16 w-16 text-divine-red mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-divine-red mb-4">About Sacred Heart Parish</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Four decades of faithful service, community building, and devotion to the Sacred Heart of Jesus
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Parish History */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-divine-red mb-6">Our Parish History</h2>
              <div className="space-y-4 text-gray-700">
                <p className="leading-relaxed">
                  Sacred Heart Parish was established in 1983 with a small but devoted group of Catholic families 
                  who shared a deep devotion to the Sacred Heart of Jesus. What began as a humble gathering has 
                  grown into a thriving parish community serving over 500 families across the region.
                </p>
                <p className="leading-relaxed">
                  Our parish was born out of the need to provide spiritual guidance and community support to 
                  Catholic families in the area. The founding members, guided by their faith and dedication, 
                  worked tirelessly to establish not just a place of worship, but a true home for faith formation 
                  and community fellowship.
                </p>
                <p className="leading-relaxed">
                  Over the past 40+ years, we have witnessed countless baptisms, confirmations, weddings, and 
                  celebrations of life. Our parish has been blessed to serve multiple generations of families, 
                  creating lasting bonds and spiritual growth that continue to this day.
                </p>
              </div>
            </div>
            <div className="bg-blessed-beige/40 rounded-xl p-8 border border-heavenly-yellow">
              <h3 className="text-xl font-bold text-divine-red mb-6">Key Milestones</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-divine-red pl-4">
                  <h4 className="font-semibold text-holy-burgundy">1983</h4>
                  <p className="text-sm text-gray-600">Parish establishment with first Mass celebration</p>
                </div>
                <div className="border-l-4 border-olive-green pl-4">
                  <h4 className="font-semibold text-olive-green">1990</h4>
                  <p className="text-sm text-gray-600">Construction of the main church building</p>
                </div>
                <div className="border-l-4 border-sacred-flame-gold pl-4">
                  <h4 className="font-semibold text-sacred-flame-gold">2000</h4>
                  <p className="text-sm text-gray-600">Establishment of 24 Anbiyams (Basic Christian Communities)</p>
                </div>
                <div className="border-l-4 border-heavenly-yellow pl-4">
                  <h4 className="font-semibold text-holy-burgundy">2010</h4>
                  <p className="text-sm text-gray-600">Addition of Adoration Chapel and Community Welfare Center</p>
                </div>
                <div className="border-l-4 border-holy-burgundy pl-4">
                  <h4 className="font-semibold text-holy-burgundy">2023</h4>
                  <p className="text-sm text-gray-600">40th Anniversary celebrations and parish renovations</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-l-4 border-l-divine-red hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl text-divine-red">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  To proclaim the Gospel of Jesus Christ and foster a vibrant Catholic community rooted in the 
                  devotion to the Sacred Heart. We are committed to spiritual growth, social justice, and 
                  service to those in need, while preserving our rich cultural heritage and traditions.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-olive-green hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl text-olive-green">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  To be a beacon of faith, hope, and love in our community, where all people feel welcomed 
                  and called to discipleship. We envision a parish where families grow in faith together, 
                  youth are empowered to lead, and all are inspired to serve God and neighbor.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Parish Priests */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-divine-red mb-8 text-center">Our Parish Priests</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow border-t-4 border-t-olive-green">
              <CardContent className="p-6">
                <div className="w-24 h-24 bg-blessed-beige rounded-full mx-auto mb-4"></div>
                <h3 className="font-bold text-lg mb-2">Rev. Fr. Current Pastor</h3>
                <p className="text-divine-red font-medium">Current Parish Priest</p>
                <p className="text-sm text-gray-600 mt-2">2020 - Present</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow border-t-4 border-t-sacred-flame-gold">
              <CardContent className="p-6">
                <div className="w-24 h-24 bg-blessed-beige rounded-full mx-auto mb-4"></div>
                <h3 className="font-bold text-lg mb-2">Rev. Fr. Previous Pastor</h3>
                <p className="text-sacred-flame-gold font-medium">Former Parish Priest</p>
                <p className="text-sm text-gray-600 mt-2">2010 - 2020</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow border-t-4 border-t-holy-burgundy">
              <CardContent className="p-6">
                <div className="w-24 h-24 bg-blessed-beige rounded-full mx-auto mb-4"></div>
                <h3 className="font-bold text-lg mb-2">Rev. Fr. Founding Pastor</h3>
                <p className="text-holy-burgundy font-medium">Founding Parish Priest</p>
                <p className="text-sm text-gray-600 mt-2">1983 - 2010</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Community Structure */}
        <section className="mb-16 bg-blessed-beige/20 rounded-xl p-8 border border-heavenly-yellow">
          <h2 className="text-3xl font-bold text-divine-red mb-8 text-center">Our Community Structure</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="inline-block p-4 bg-olive-green/10 rounded-full mb-4">
                <Users className="h-12 w-12 text-olive-green mx-auto" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-holy-burgundy">24 Anbiyams</h3>
              <p className="text-sm text-gray-600">Basic Christian Communities fostering fellowship and faith sharing</p>
            </div>
            <div className="text-center">
              <div className="inline-block p-4 bg-divine-red/10 rounded-full mb-4">
                <Heart className="h-12 w-12 text-divine-red mx-auto" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-divine-red">Parish Council</h3>
              <p className="text-sm text-gray-600">Lay leadership guiding parish activities and decision-making</p>
            </div>
            <div className="text-center">
              <div className="inline-block p-4 bg-sacred-flame-gold/10 rounded-full mb-4">
                <Calendar className="h-12 w-12 text-sacred-flame-gold mx-auto" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-sacred-flame-gold">Youth Ministry</h3>
              <p className="text-sm text-gray-600">Empowering young people in faith formation and leadership</p>
            </div>
            <div className="text-center">
              <div className="inline-block p-4 bg-heavenly-yellow/20 rounded-full mb-4">
                <MapPin className="h-12 w-12 text-holy-burgundy mx-auto" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-holy-burgundy">Women's Groups</h3>
              <p className="text-sm text-gray-600">Supporting spiritual growth and community service</p>
            </div>
          </div>
        </section>

        {/* Diocese Information */}
        <section>
          <Card className="border border-blessed-beige">
            <CardHeader>
              <CardTitle className="text-2xl text-divine-red text-center">Diocese Information</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-700 mb-4">
                Sacred Heart Parish is part of the Diocese of [Diocese Name], under the pastoral care and 
                guidance of His Excellency Bishop [Bishop Name]. We are grateful for the episcopal leadership 
                and support that strengthens our parish community.
              </p>
              <p className="text-sm text-gray-600">
                For more information about our diocese, visit the diocesan website or contact the diocesan office.
              </p>
            </CardContent>
          </Card>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default About;
