import { Mail, Phone, Linkedin, Github, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "anigk22@gmail.com",
      href: "mailto:anigk22@gmail.com",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 94818 09195",
      href: "tel:+919481809195",
      color: "from-green-500 to-teal-500"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect on LinkedIn",
      href: "https://www.linkedin.com/in/anirudha-g-kulkarni-16381835b",
      color: "from-blue-600 to-blue-800"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "View My Code",
      href: "https://github.com/AnirudhGKulkarni",
      color: "from-gray-700 to-gray-900"
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Get In Touch</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
            <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
              I am actively seeking internship opportunities to apply my skills and contribute to real-world projects. I’d be glad to connect!
            </p>
          </div>

          {/* Centered Contact Info Section */}
          <div className="flex justify-center">
            <div className="max-w-2xl w-full space-y-8 fade-in">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-foreground">Looking for an Internship</h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  As a dedicated aspiring engineer with a growing interest in cybersecurity, I'm seeking internship opportunities to apply my skills and contribute to real-world projects.
                </p>

                <div className="flex items-center gap-2 text-muted-foreground mb-6">
                  <MapPin className="h-5 w-5 text-accent" />
                  <span>Bengaluru, Karnataka, India</span>
                </div>
              </div>

              <div className="grid gap-4">
                {contactInfo.map((contact, index) => (
                  <Card key={index} className="project-card group">
                    <CardContent className="p-4">
                      <a
                        href={contact.href}
                        target={contact.href.startsWith('http') ? '_blank' : undefined}
                        rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="flex items-center gap-4 group-hover:text-accent transition-colors"
                      >
                        <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${contact.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <contact.icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <div className="font-semibold text-foreground">{contact.label}</div>
                          <div className="text-muted-foreground text-sm">{contact.value}</div>
                        </div>
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
