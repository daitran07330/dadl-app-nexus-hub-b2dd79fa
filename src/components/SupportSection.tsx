
import React from 'react';
import { HelpCircle, MessageCircle, Phone, Mail } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const SupportSection = () => {
  const faqs = [
    {
      question: "How do I reset my password?",
      answer: "You can reset your password by clicking on the 'Forgot Password' link on the login page. You will receive an email with instructions to create a new password."
    },
    {
      question: "How can I request access to a new application?",
      answer: "To request access to a new application, go to the Help Desk portal and submit a new access request form. Your manager will need to approve the request before access is granted."
    },
    {
      question: "What should I do if an application is not working properly?",
      answer: "If you encounter any issues with an application, try refreshing the page or restarting the application. If the issue persists, contact the IT support team with details about the problem."
    },
    {
      question: "How do I update my contact information?",
      answer: "You can update your contact information in the Employee Portal under the 'My Profile' section. Changes will be reflected across all systems within 24 hours."
    },
    {
      question: "Can I access the applications from outside the office?",
      answer: "Yes, most web applications can be accessed remotely. For security reasons, you will need to use the company VPN when accessing applications from outside the office network."
    },
  ];

  return (
    <section id="help" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-2 mb-2">
          <HelpCircle className="h-6 w-6 text-acidGreen" />
          <h2 className="text-3xl font-bold text-center text-darkLemonLime">Support & Help</h2>
        </div>
        <p className="text-gray-600 text-center mb-8">Get assistance and find answers to common questions</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-4">Frequently Asked Questions</h3>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`faq-${index}`}>
                  <AccordionTrigger className="text-left font-medium text-darkLemonLime hover:text-acidGreen">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Contact Support</h3>
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Phone className="h-5 w-5 text-acidGreen mr-3" />
                      <span>IT Support: (123) 456-7890</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="h-5 w-5 text-acidGreen mr-3" />
                      <span>Email: support@dadlhub.com</span>
                    </div>
                    <div className="flex items-center">
                      <MessageCircle className="h-5 w-5 text-acidGreen mr-3" />
                      <span>Live Chat: Available 9 AM - 5 PM (Mon-Fri)</span>
                    </div>
                    <div className="mt-4">
                      <Button className="w-full bg-acidGreen text-darkGray hover:bg-dandelion transition-all">
                        Access IT Helpdesk Portal
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Submit a Support Request</h3>
            <Card>
              <CardContent className="pt-6">
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">Name</label>
                      <Input id="name" placeholder="Your full name" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">Email</label>
                      <Input id="email" type="email" placeholder="Your work email" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="department" className="text-sm font-medium">Department</label>
                    <Input id="department" placeholder="Your department" />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                    <Input id="subject" placeholder="Brief description of the issue" />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">Message</label>
                    <Textarea id="message" placeholder="Describe your issue in detail" rows={5} />
                  </div>
                  
                  <div className="pt-2">
                    <Button className="w-full bg-acidGreen text-darkGray hover:bg-dandelion transition-all">
                      Submit Request
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportSection;
