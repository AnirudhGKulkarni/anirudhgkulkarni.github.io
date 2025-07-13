import { useState } from 'react';
import { Mail, Phone, Linkedin, Github, Send, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

   const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend service
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon!",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
   };

//   <form
//   action="https://formspree.io/f/manbweqb"
//   method="POST">
//    {/* className="space-y-6"> */}
//   <div className="grid md:grid-cols-2 gap-4">
//     <div className="space-y-2">
//       <Label htmlFor="name">Name</Label>
//       <Input
//         id="name"
//         name="name"
//         type="text"
//         placeholder="Your name"
//         required
//       />
//     </div>
//     <div className="space-y-2">
//       <Label htmlFor="email">Email</Label>
//       <Input
//         id="email"
//         name="email"
//         type="email"
//         placeholder="your.email@example.com"
//         required
//       />
//     </div>
//   </div>

//   <div className="space-y-2">
//     <Label htmlFor="subject">Subject</Label>
//     <Input
//       id="subject"
//       name="subject"
//       type="text"
//       placeholder="What's this about?"
//       required
//     />
//   </div>

//   <div className="space-y-2">
//     <Label htmlFor="message">Message</Label>
//     <Textarea
//       id="message"
//       name="message"
//       placeholder="Tell me about your project or idea..."
//       rows={6}
//       required
//     />
//   </div>

//   <Button type="submit" className="w-full btn-cyber group">
//     <Send className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform" />
//     Send Message
//   </Button>
// </form>



<form
  action="https://formspree.io/f/manbweqb"
  method="POST"
  className="space-y-6"
>
  <div className="grid md:grid-cols-2 gap-4">
    <div className="space-y-2">
      <Label htmlFor="name">Name</Label>
      <Input id="name" name="name" type="text" placeholder="Your name" required />
    </div>
    <div className="space-y-2">
      <Label htmlFor="email">Email</Label>
      <Input id="email" name="email" type="email" placeholder="your.email@example.com" required />
    </div>
  </div>

  <div className="space-y-2">
    <Label htmlFor="subject">Subject</Label>
    <Input id="subject" name="subject" type="text" placeholder="What's this about?" required />
  </div>

  <div className="space-y-2">
    <Label htmlFor="message">Message</Label>
    <Textarea id="message" name="message" placeholder="Tell me about your project or idea..." rows={6} required />
  </div>

  <Button type="submit" className="w-full btn-cyber group">
    <Send className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform" />
    Send Message
  </Button>
</form>



  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

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

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8 fade-in">
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

            {/* Contact Form */}
            <div className="fade-in">
              <Card className="project-card">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold mb-6 text-foreground">Send a Message</h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your name"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your.email@example.com"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="What's this about?"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Type your message here..."
                        rows={6}
                        required
                      />
                    </div>
                    
                    <Button type="submit" className="w-full btn-cyber group">
                      <Send className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Quick Response Promise */}
              {/* <div className="mt-6 p-4 rounded-lg bg-gradient-to-r from-accent/10 to-primary/10 border border-accent/20">
                <p className="text-sm text-foreground text-center">
                  <span className="font-semibold text-accent">Quick Response Promise:</span> I typically respond within 24 hours!
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;