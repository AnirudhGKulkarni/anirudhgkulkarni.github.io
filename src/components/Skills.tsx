import { BadgeCheck, Code2, Globe2, Layers3, PenTool, ShieldCheck, UsersRound, Wrench } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code2,
      skills: ["C", "C++", "Python", "Java", "JavaScript", "TypeScript", "HTML", "CSS", "SQL"],
      color: "text-blue-400"
    },
    {
      title: "Frameworks & Technologies",
      icon: Layers3,
      skills: ["React", "Flutter", "FastAPI", "Firebase", "Node.js", "REST APIs", "RESTful API Design"],
      color: "text-violet-400"
    },
    {
      title: "Tools & Platforms", 
      icon: Wrench,
      skills: ["Git", "MySQL", "VMware", "VirtualBox", "Jupyter Notebook", "Linux", "Cloudflare", "AWS", "Android", "Apple Developer"],
      color: "text-emerald-400"
    },  
    {
      title: "Domains",
      icon: Globe2,
      skills: ["Cybersecurity", "Full-Stack Development", "Machine Learning", "Mobile App Development"],
      color: "text-cyan-400"
    },
    {
      title: "Security Concepts",
      icon: ShieldCheck,
      skills: ["Authentication", "Authorization", "Encryption", "Access Control", "Secure Web Applications"],
      color: "text-rose-400"
    },
    {
      title: "UI/UX",
      icon: PenTool,
      skills: ["Responsive Design", "User Interface Design", "User Experience Design"],
      color: "text-amber-400"
    },
    {
      title: "Soft Skills",
      icon: UsersRound,
      skills: ["Leadership", "Teamwork", "Communication", "Problem-solving"],
      color: "text-orange-400"
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 fade-in">
            <div className="inline-flex items-center justify-center gap-3 mb-4 text-foreground">
              <BadgeCheck className="h-8 w-8 text-accent" />
              <h2 className="text-4xl font-bold">Skills & Expertise</h2>
            </div>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
            <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
              A comprehensive toolkit built through academic learning, hands-on projects, and continuous exploration
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <Card key={index} className="project-card group overflow-hidden">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-105">
                    <category.icon className={`h-8 w-8 ${category.color}`} />
                  </div>
                  <CardTitle className="text-xl leading-tight">{category.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="mb-3 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="group/skill flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/25 hover:bg-white/10"
                      >
                        <div className="flex min-w-0 items-center gap-3">
                          <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-r from-primary to-accent shadow-[0_0_12px_rgba(59,130,246,0.35)] transition-transform duration-300 group-hover/skill:scale-125" />
                          <span className="truncate text-sm font-medium text-foreground transition-colors duration-300 group-hover/skill:text-accent">
                            {skill}
                          </span>
                        </div>
                        <span className="ml-auto h-1.5 w-1.5 rounded-full bg-accent/60 opacity-60 transition-all duration-300 group-hover/skill:opacity-100" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Technical Highlights */}
          {/* <div className="mt-16 text-center fade-in">
            <h3 className="text-2xl font-semibold mb-8">Technical Highlights</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20">
                <div className="text-3xl font-bold text-primary mb-2">92%</div>
                <div className="text-muted-foreground">ML Model Accuracy</div>
              </div>
              <div className="p-6 rounded-lg bg-gradient-to-br from-accent/10 to-primary/10 border border-accent/20">
                <div className="text-3xl font-bold text-accent mb-2">10+</div>
                <div className="text-muted-foreground">Certifications Earned</div>
              </div>
              <div className="p-6 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20">
                <div className="text-3xl font-bold text-primary mb-2">200+</div>
                <div className="text-muted-foreground">Items Managed (Pharmacy System)</div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Skills;