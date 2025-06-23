
import { Card, CardContent } from '@/components/ui/card';
import { Quote, Star } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Maria Antony',
      role: 'Parish Member for 15 years',
      content: 'Sacred Heart Parish has been our spiritual home. The warmth of the community and the inspiring homilies have strengthened our faith journey immensely.',
      rating: 5
    },
    {
      name: 'Joseph Kumar',
      role: 'Youth Ministry Leader',
      content: 'The youth programs here are exceptional. Our young people are growing in faith and service to others. It\'s beautiful to witness their transformation.',
      rating: 5
    },
    {
      name: 'Susan David',
      role: 'Anbiyam Coordinator',
      content: 'The Basic Christian Communities have created deep bonds among families. We support each other through joys and challenges, truly living as one family.',
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Quote className="h-12 w-12 text-sacred mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold text-sacred mb-6">Voices from Our Community</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from our parish family about their faith journey and community experience
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="bg-white hover:shadow-xl transition-all duration-500 border-0 hover:-translate-y-2 group"
            >
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <Quote className="h-8 w-8 text-sacred/20 mb-4" />
                
                <p className="text-gray-700 leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </p>
                
                <div className="border-t pt-4">
                  <p className="font-bold text-sacred">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
