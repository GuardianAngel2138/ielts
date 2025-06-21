
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MessageCircle, Send, CheckCircle, AlertCircle } from "lucide-react";
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  // EmailJS configuration - you'll need to replace these with your actual values
  const SERVICE_ID = 'your_service_id';
  const TEMPLATE_ID = 'your_template_id';
  const PUBLIC_KEY = 'your_public_key';

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Initialize EmailJS if not already done
      if (!emailjs) {
        throw new Error('EmailJS not loaded');
      }

      // Send email via EmailJS
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Abhinav',
        },
        PUBLIC_KEY
      );

      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setErrors({});
    } catch (error) {
      console.error('EmailJS error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  return (
    <Card className="bg-white shadow-xl border-0 overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <CardTitle className="flex items-center text-xl">
          <MessageCircle className="mr-2 h-6 w-6" />
          Contact Me Directly
        </CardTitle>
        <p className="text-blue-100">
          Get personalized IELTS guidance and ask your questions
        </p>
      </CardHeader>
      <CardContent className="p-6">
        {submitStatus === 'success' && (
          <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center text-green-800">
            <CheckCircle className="mr-2 h-5 w-5" />
            <span>Message sent successfully! I'll get back to you within 24 hours.</span>
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center text-red-800">
            <AlertCircle className="mr-2 h-5 w-5" />
            <span>Failed to send message. Please check your EmailJS configuration or try again later.</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Your Name *</Label>
            <Input
              id="name"
              type="text"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              className={errors.name ? 'border-red-500' : ''}
            />
            {errors.name && <p className="text-sm text-red-600">{errors.name}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email Address *</Label>
            <Input
              id="email"
              type="email"
              placeholder="your.email@example.com"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className={errors.email ? 'border-red-500' : ''}
            />
            {errors.email && <p className="text-sm text-red-600">{errors.email}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Your Message *</Label>
            <Textarea
              id="message"
              placeholder="Tell me about your IELTS goals, current level, or any specific questions you have..."
              value={formData.message}
              onChange={(e) => handleInputChange('message', e.target.value)}
              className={`min-h-[120px] ${errors.message ? 'border-red-500' : ''}`}
            />
            {errors.message && <p className="text-sm text-red-600">{errors.message}</p>}
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                Sending...
              </>
            ) : (
              <>
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </>
            )}
          </Button>
        </form>

        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <p className="text-sm text-blue-800">
            <strong>Response Time:</strong> I typically respond within 24 hours. For urgent queries, you can also book a direct consultation slot below.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
