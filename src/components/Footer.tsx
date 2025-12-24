import { Heart, ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand & Bio */}
            <div className="space-y-4">
              <div className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Anirudha G Kulkarni
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Cybersecurity enthusiast, passionate about building secure, 
                innovative solutions that make a difference.
              </p>
              {/* <div className="flex gap-4">
                <Button variant="ghost" size="icon" className="hover:text-accent transition-colors">
                  <a href="https://github.com/AnirudhGKulkarni" target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" className="hover:text-accent transition-colors">
                  <a href="https://www.linkedin.com/in/anirudha-g-kulkarni-16381835b" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" className="hover:text-accent transition-colors">
                  <a href="mailto:anigk22@gmail.com">
                    <Mail className="h-5 w-5" />
                  </a>
                </Button>
              </div>*/}
             


            <div className="flex gap-4">
  <a
    href="https://github.com/AnirudhGKulkarni"
    target="_blank"
    rel="noopener noreferrer"
    className="p-2 rounded-full hover:bg-accent hover:text-background transition-colors"
  >
    <Github className="h-5 w-5" />
  </a>
  <a
    href="https://www.linkedin.com/in/anirudha-g-kulkarni-16381835b"
    target="_blank"
    rel="noopener noreferrer"
    className="p-2 rounded-full hover:bg-accent hover:text-background transition-colors"
  >
    <Linkedin className="h-5 w-5" />
  </a>
  <a
    href="mailto:anigk22@gmail.com"
    className="p-2 rounded-full hover:bg-accent hover:text-background transition-colors"
  >
    <Mail className="h-5 w-5" />
  </a>
</div>
</div>


            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground">Quick Links</h3>
              <div className="space-y-2">
                {['About', 'Skills', 'Projects', 'Experience','Certifications', 'Achievements', 'Contact'].map((link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    className="block text-muted-foreground hover:text-accent transition-colors animate-underline"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground">Get in Touch</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>📧 anigk22@gmail.com</p>
                <p>📞 +91 94818 09195</p>
                <p>📍 Bengaluru, Karnataka</p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-border my-8"></div>

          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-muted-foreground">
              <span>Anirudha G Kulkarni. Built with passion and purpose</span>
              {/* <Heart className="h-4 w-4 text-red-500 fill-current" />
              <span>and lots of ☕</span> */}
            </div>

            {/* Back to Top */}
            <Button
              onClick={scrollToTop}
              variant="outline"
              size="sm"
              className="group hover:border-accent"
            >
              <ArrowUp className="h-4 w-4 mr-2 group-hover:-translate-y-1 transition-transform" />
              Back to Top
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;