import PageHeader from '@/components/ui/PageHeader';
import ContactForm from '@/components/ui/ContactForm';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';

export default function ContactPage() {
  return (
    <div>
      <PageHeader
        title="Get in Touch"
        gradientText="Touch"
        subtitle="Have a project in mind or just want to say hello? We'd love to hear from you."
      />

      <section className="py-24 section-padding">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="glass p-8 rounded-2xl border border-white/10">
            <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
            <ContactForm />
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
              <p className="text-neutral-600 dark:text-neutral-400 mb-6">
                Our team is available to answer your questions and discuss your needs.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 mr-4 text-accent-teal mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Our Office</h4>
                    <p className="text-neutral-600 dark:text-neutral-400">Dubai, United Arab Emirates</p>
                    <p className="text-sm text-neutral-500">(Meetings by appointment only)</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="w-6 h-6 mr-4 text-accent-teal mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Email Us</h4>
                    <a href="mailto:orionixlabs@gmail.com" className="text-neutral-600 dark:text-neutral-400 hover:text-accent-teal transition-colors">
                      orionixlabs@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                 <a href="https://github.com/Rabeel-Ashraf" target="_blank" rel="noopener noreferrer" className="p-3 bg-neutral-100 dark:bg-neutral-800 rounded-lg hover:bg-accent-teal/10 hover:text-accent-teal transition-all duration-300">
                    <Github className="w-6 h-6" />
                </a>
                <a href="https://www.linkedin.com/company/orionixlabs/" target="_blank" rel="noopener noreferrer" className="p-3 bg-neutral-100 dark:bg-neutral-800 rounded-lg hover:bg-accent-teal/10 hover:text-accent-teal transition-all duration-300">
                    <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
