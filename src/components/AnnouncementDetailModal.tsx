
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Users, Clock } from 'lucide-react';

interface Announcement {
  id: number;
  title: string;
  date: string;
  content: string;
  type: string;
  urgent: boolean;
  category: string;
  fullContent?: string;
  eventDate?: string;
  location?: string;
  contactPerson?: string;
}

interface AnnouncementDetailModalProps {
  announcement: Announcement | null;
  isOpen: boolean;
  onClose: () => void;
}

interface AnnouncementDetails {
  fullContent?: string;
  eventDate?: string;
  location?: string;
  contactPerson?: string;
}

const AnnouncementDetailModal = ({ announcement, isOpen, onClose }: AnnouncementDetailModalProps) => {
  if (!announcement) return null;

  const getAnnouncementDetails = (id: number): AnnouncementDetails => {
    const details: Record<number, AnnouncementDetails> = {
      1: {
        fullContent: `Join us for our annual Sacred Heart Parish Feast Day celebration! This special day marks the dedication of our parish to the Sacred Heart of Jesus and will feature a beautiful High Mass, traditional cultural programs, and a community feast.

The celebration will begin with a special High Mass at 10:00 AM, followed by a procession around the parish grounds. Cultural programs will showcase the talents of our community members, including traditional Tamil songs, classical dances, and contemporary performances.

The community feast will feature authentic South Indian cuisine prepared by our parish volunteers. This is a wonderful opportunity to come together as a parish family and celebrate our shared faith and heritage.

All parishioners and friends are warmly invited to participate in this joyful celebration. Please bring your families and friends to make this day truly memorable.`,
        eventDate: 'June 28, 2024 - 10:00 AM',
        location: 'Sacred Heart Parish Main Church and Hall',
        contactPerson: 'Parish Office: +91 XXX XXX XXXX'
      },
      2: {
        fullContent: `Our monthly Youth Ministry meeting is scheduled to discuss and plan upcoming activities for the youth of our parish. This meeting is open to all young people aged 16-30 who are interested in deepening their faith and participating in community service.

During this meeting, we will:
- Plan the upcoming youth retreat
- Discuss community service opportunities
- Organize faith-sharing sessions
- Plan recreational activities and sports events
- Discuss leadership development programs

The Youth Ministry plays a vital role in our parish community, organizing various spiritual and social activities throughout the year. We encourage all eligible young people to join us and be part of this vibrant ministry.

Light refreshments will be provided. Please come with your ideas and enthusiasm to make our youth programs even more engaging and meaningful.`,
        eventDate: 'June 25, 2024 - 7:00 PM',
        location: 'Parish Hall - Youth Ministry Room',
        contactPerson: 'Youth Coordinator: youth@sacredheart.org'
      },
      3: {
        fullContent: `The Adoration Chapel is open for Eucharistic Adoration throughout the week, providing a quiet space for prayer and contemplation before the Blessed Sacrament.

Schedule:
- Monday to Friday: 9:00 AM - 6:00 PM
- Saturdays: 10:00 AM - 5:00 PM
- Sundays: After the 10:00 AM Mass until 5:00 PM

The Adoration Chapel offers a peaceful environment where parishioners can spend time in silent prayer, meditation, and spiritual reflection. This is a beautiful opportunity to deepen your relationship with Jesus and find peace in His presence.

We encourage all parishioners to take advantage of this spiritual opportunity. Whether you can spare 15 minutes or an hour, your time spent in adoration is a precious gift to yourself and to our Lord.

For those new to Eucharistic Adoration, prayer books and guides are available in the chapel. The chapel is accessible through the side entrance of the church.`,
        eventDate: 'Ongoing - Daily Schedule',
        location: 'Sacred Heart Parish Adoration Chapel',
        contactPerson: 'Parish Office for more information'
      }
    };
    return details[id] || {};
  };

  const details = getAnnouncementDetails(announcement.id);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-divine-red mb-4">
            {announcement.title}
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Event Details */}
          <div className="grid md:grid-cols-2 gap-4 p-4 bg-blessed-beige/20 rounded-lg">
            <div className="flex items-center space-x-2">
              <Calendar className="h-5 w-5 text-divine-red" />
              <div>
                <p className="text-sm font-semibold text-gray-600">Date & Time</p>
                <p className="text-divine-red font-bold">{details.eventDate || announcement.date}</p>
              </div>
            </div>
            
            {details.location && (
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-olive-green" />
                <div>
                  <p className="text-sm font-semibold text-gray-600">Location</p>
                  <p className="text-gray-800">{details.location}</p>
                </div>
              </div>
            )}
          </div>

          {/* Full Content */}
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-700 leading-relaxed whitespace-pre-line">
              {details.fullContent || announcement.content}
            </p>
          </div>

          {/* Contact Information */}
          {details.contactPerson && (
            <div className="p-4 bg-divine-red/5 rounded-lg border border-divine-red/20">
              <div className="flex items-center space-x-2 mb-2">
                <Users className="h-5 w-5 text-divine-red" />
                <p className="font-semibold text-divine-red">Contact Information</p>
              </div>
              <p className="text-gray-700">{details.contactPerson}</p>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4 border-t">
            <Button 
              onClick={onClose}
              variant="outline"
              className="flex-1 border-divine-red text-divine-red hover:bg-divine-red hover:text-white"
            >
              Close
            </Button>
            <Button 
              className="flex-1 bg-divine-red hover:bg-holy-burgundy text-white"
              asChild
            >
              <a href="/contact">
                Contact Parish
              </a>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AnnouncementDetailModal;
