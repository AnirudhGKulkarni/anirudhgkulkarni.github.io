import { ArrowDown, Github, Linkedin, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-bg.jpg';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Cybersecurity Background" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 hero-gradient opacity-90"></div>
        <div className="absolute inset-0 tech-grid opacity-20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="space-y-6 fade-in">
          {/* Profile Image Placeholder */}
          <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-accent to-primary p-1 float">
            <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
              <span className="text-4xl font-bold text-foreground">ANI</span>
            </div>
          </div>

          <h1 className="hero-text">
            Anirudha G Kulkarni
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/90 font-medium">
            Cybersecurity Enthusiast | Developer | Tech Explorer
          </p>
          
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto leading-relaxed">
            I'm a 7th-semester B.Tech student in Computer Science (Cybersecurity) passionate about 
            building secure, scalable, and impactful software. With hands-on experience in Python, 
            Java, ML, and web development, I love solving real-world problems through technology.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button className="btn-cyber group" asChild>
              <a href="/resume.pdf" download="Anirudha_G_Kulkarni_Resume.pdf">
                <Download className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Download Resume
              </a>
            </Button>
            
            <div className="flex gap-4">
              <Button variant="outline" size="icon" className="glass-card hover:scale-110 transition-transform">
                <a href="https://github.com/AnirudhGKulkarni" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" className="glass-card hover:scale-110 transition-transform">
                <a href="https://www.linkedin.com/in/anirudha-g-kulkarni-16381835b" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom--5 left-1/2 transform -translate-x-1/2 animate-bounce">
            <a href="#about">
              <ArrowDown className="h-6 w-6 text-foreground/60" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;