
import React from 'react';
import ContactForm from './ContactForm';
import BookingSection from './BookingSection';
import { MessageCircle, Calendar } from 'lucide-react';

interface ContactAndBookingProps {
  showContact?: boolean;
  showBooking?: boolean;
  title?: string;
  subtitle?: string;
}

const ContactAndBooking = ({ 
  showContact = true, 
  showBooking = true,
  title = "Get Personal IELTS Guidance",
  subtitle = "Choose how you'd like to connect with me for your IELTS journey"
}: ContactAndBookingProps) => {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {showContact && (
            <div className="space-y-4">
              <div className="flex items-center justify-center lg:justify-start mb-4">
                <MessageCircle className="h-6 w-6 text-blue-600 mr-2" />
                <h3 className="text-xl font-semibold text-gray-900">Send a Message</h3>
              </div>
              <ContactForm />
            </div>
          )}

          {showBooking && (
            <div className="space-y-4">
              <div className="flex items-center justify-center lg:justify-start mb-4">
                <Calendar className="h-6 w-6 text-green-600 mr-2" />
                <h3 className="text-xl font-semibold text-gray-900">Book a Session</h3>
              </div>
              <BookingSection />
            </div>
          )}
        </div>

        {/* Setup Instructions */}
        <div className="mt-12 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <h4 className="font-semibold text-yellow-800 mb-3">📋 Setup Required:</h4>
          <div className="text-sm text-yellow-700 space-y-2">
            <p><strong>For Contact Form:</strong></p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Sign up for EmailJS at <a href="https://emailjs.com" target="_blank" rel="noopener noreferrer" className="underline">emailjs.com</a></li>
              <li>Get your SERVICE_ID, TEMPLATE_ID, and PUBLIC_KEY</li>
              <li>Replace the placeholder values in ContactForm.tsx</li>
            </ul>
            <p className="mt-3"><strong>For Google Calendar Booking:</strong></p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Set up Google Calendar appointment schedules</li>
              <li>Get your booking URL and calendar embed URL</li>
              <li>Replace the placeholder URLs in BookingSection.tsx</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactAndBooking;
