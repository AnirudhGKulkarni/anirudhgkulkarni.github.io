import React, { useRef, useState, useEffect } from 'react';
import { ArrowDown, Github, Linkedin, Download, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogTrigger, DialogContent } from '@/components/ui/dialog';
import Experience from "./Experience";

function Toolbar() {
  const [page, setPage] = useState<number>(1);
  const [zoom, setZoom] = useState<number>(100);

  useEffect(() => {
    const iframe = document.getElementById('resume-iframe') as HTMLIFrameElement | null;
    if (!iframe) return;
    // update fragment parameters that most PDF viewers respect (page & zoom)
    const base = '/resume.pdf';
    iframe.src = `${base}#page=${page}&zoom=${zoom}`;
  }, [page, zoom]);

  const printIframe = () => {
    const iframe = document.getElementById('resume-iframe') as HTMLIFrameElement | null;
    if (!iframe) return;
    try {
      iframe.contentWindow?.focus();
      iframe.contentWindow?.print();
    } catch (e) {
      // fallback: open in new tab for printing
      window.open('/resume.pdf', '_blank');
    }
  };

  return (
    <div className="flex items-center justify-center w-full">
      <span className="font-semibold">ᗩᑎIᖇᑌᗪᕼ KᑌᒪKᗩᖇᑎI</span>
    </div>
  );
}



const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-end dark:justify-center overflow-hidden pt-24">
      {/* Background: two videos toggled by theme (dark / light) */}
      <div className="absolute inset-0">
        {/* Dark mode video (shown when `dark` class is present) */}
        <video autoPlay muted loop playsInline className="hidden dark:block w-full h-full object-cover">
          <source src="/darkbg.mp4" type="video/mp4" />
        </video>

        {/* Light mode video (shown when not in dark mode) */}
        <video autoPlay muted loop playsInline className="block dark:hidden w-full h-full object-cover">
          <source src="/lightbg.mp4" type="video/mp4" />
        </video>

        {/* Overlay: lighter in light mode, slightly stronger in dark mode so video colors remain visible */}
        <div className="absolute inset-0 hero-gradient opacity-20 dark:opacity-60 pointer-events-none"></div>
        <div className="absolute inset-0 tech-grid opacity-10 dark:opacity-20 pointer-events-none"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 max-w-4xl mx-0 mr-8 dark:mx-auto text-right dark:text-center text-slate-900 dark:text-white">
        <div className="space-y-6 fade-in">
          {/* Profile Image Placeholder */}
          <div className="w-32 h-32 ml-auto dark:mx-auto rounded-full bg-gradient-to-r from-accent to-primary p-1 float">
            <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
              {/* <span className="text-4xl font-bold text-foreground">͓̽ANI</span> */}
              <img
                src="/ani.png"
                alt="Anirudh Kulkarni"
                className="w-37 h-37 rounded-full ml-auto dark:mx-auto shadow-lg object-contain bg-white border-4 border-acqa-500"
              />

            </div>
          </div>

          <h1 className="hero-text text-slate-900 dark:text-white">
            Anirudha G Kulkarni
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-800/90 dark:text-white/90 font-medium">
            Cybersecurity Enthusiast | Tech Explorer | Gamer
          </p>
          
          <p className="text-lg text-slate-700/90 dark:text-white/80 max-w-2xl ml-auto dark:mx-auto leading-relaxed">
            I'm a 8th-semester B.Tech student in Computer Science (Cybersecurity) passionate about 
            building secure, scalable, and impactful software. With hands-on experience in Python, 
            Java, ML, and web development, I love solving real-world problems through technology.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-end items-end dark:justify-center dark:items-center pt-8">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" className="btn-cyber view-resume group text-white">
                  <Eye className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  View Resume
                </Button>
              </DialogTrigger>

              <DialogContent className="w-[90vw] max-w-5xl h-[90vh] p-0 flex flex-col">
                {/* Inline toolbar */}
                <Toolbar />

                <div className="flex-1">
                  <iframe id="resume-iframe" src="/resume.pdf#toolbar=0&navpanes=0&page=1&zoom=100" title="Resume" className="w-full h-full" />
                </div>
              </DialogContent>
            </Dialog>
            
            <div className="flex gap-4">
              <Button variant="outline" size="icon" className="glass-card hover:scale-110 transition-transform" asChild>
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
