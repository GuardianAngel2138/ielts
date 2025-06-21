
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ExternalLink, Info } from "lucide-react";

const BookingSection = () => {
  const [showCalendar, setShowCalendar] = useState(false);

  // Replace this with your actual Google Calendar booking link
  const GOOGLE_CALENDAR_BOOKING_URL = "https://calendar.google.com/calendar/appointments/schedules/YOUR_SCHEDULE_ID";
  
  // Alternative: You can also use an embed URL for inline calendar
  const GOOGLE_CALENDAR_EMBED_URL = "https://calendar.google.com/calendar/embed?src=YOUR_CALENDAR_ID&ctz=YOUR_TIMEZONE";

  const sessionTypes = [
    {
      title: "Quick Consultation",
      duration: "30 minutes",
      description: "Perfect for specific questions about IELTS strategies, band score requirements, or study planning.",
      price: "Free",
      features: ["Strategy discussion", "Study plan guidance", "Q&A session"]
    },
    {
      title: "Comprehensive Review",
      duration: "60 minutes", 
      description: "Deep dive into your IELTS preparation with personalized feedback and detailed improvement plan.",
      price: "Free",
      features: ["Full assessment", "Personalized study plan", "Resource recommendations", "Follow-up materials"]
    }
  ];

  const handleBookingClick = () => {
    // Open Google Calendar booking in new tab
    window.open(GOOGLE_CALENDAR_BOOKING_URL, '_blank');
  };

  return (
    <div className="space-y-6">
      <Card className="bg-gradient-to-br from-green-50 to-blue-50 border-0 shadow-xl">
        <CardHeader className="text-center">
          <CardTitle className="flex items-center justify-center text-2xl text-gray-900 mb-2">
            <Calendar className="mr-3 h-7 w-7 text-green-600" />
            Book Your Free IELTS Consultation
          </CardTitle>
          <p className="text-lg text-gray-600">
            Schedule a personalized session to accelerate your IELTS preparation
          </p>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {sessionTypes.map((session, index) => (
              <Card key={index} className="bg-white border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-bold text-lg text-gray-900">{session.title}</h3>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm font-semibold">
                      {session.price}
                    </span>
                  </div>
                  <div className="flex items-center text-blue-600 mb-3">
                    <Clock className="mr-2 h-4 w-4" />
                    <span className="font-medium">{session.duration}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{session.description}</p>
                  <ul className="space-y-2">
                    {session.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center space-y-4">
            <Button
              onClick={handleBookingClick}
              size="lg"
              className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-8 py-4 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Book Your Free Session
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-start">
                <Info className="mr-2 h-5 w-5 text-blue-600 mt-0.5" />
                <div className="text-left">
                  <p className="text-sm text-blue-800">
                    <strong>How it works:</strong>
                  </p>
                  <ul className="text-sm text-blue-700 mt-2 space-y-1">
                    <li>• Click the button above to access my Google Calendar</li>
                    <li>• Choose an available time slot that works for you</li>
                    <li>• Fill in your details and confirm the booking</li>
                    <li>• You'll receive an email confirmation with the meeting link</li>
                    <li>• We'll meet via Google Meet at your scheduled time</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Alternative: Embedded Calendar Option */}
          <div className="text-center">
            <Button
              onClick={() => setShowCalendar(!showCalendar)}
              variant="outline"
              className="border-gray-300 text-gray-700 hover:bg-gray-50"
            >
              {showCalendar ? 'Hide' : 'Show'} Calendar Preview
            </Button>
          </div>

          {showCalendar && (
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <div className="p-4 bg-gray-50 border-b">
                <p className="text-sm text-gray-600 text-center">
                  Calendar preview - Click "Book Your Free Session" above for full booking experience
                </p>
              </div>
              <div className="aspect-video">
                <iframe
                  src={GOOGLE_CALENDAR_EMBED_URL}
                  className="w-full h-full"
                  frameBorder="0"
                  scrolling="no"
                  title="Google Calendar"
                ></iframe>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default BookingSection;
