import { Code, Database, Shield, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["C", "C++", "Python", "Java", "HTML", "CSS", "JavaScript"],
      color: "text-blue-500"
    },
    {
      title: "Tools & Platforms", 
      icon: Database,
      skills: ["VMware", "Git", "MySQL", "Flask", "Jupyter Notebook"],
      color: "text-green-500"
    },
    {
      title: "Technologies",
      icon: Shield,
      skills: ["Machine Learning", "Data Analysis", "Full-stack Web Development"],
      color: "text-purple-500"
    },
    {
      title: "Soft Skills",
      icon: Users,
      skills: ["Leadership", "Teamwork", "Communication", "Problem-solving"],
      color: "text-orange-500"
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Skills & Expertise</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
            <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
              A comprehensive toolkit built through academic learning, hands-on projects, and continuous exploration
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, index) => (
              <Card key={index} className="project-card group">
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-primary/20 to-accent/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className={`h-8 w-8 ${category.color}`} />
                  </div>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="group/skill">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm font-medium text-foreground group-hover/skill:text-accent transition-colors">
                            {skill}
                          </span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-all duration-500 group-hover:from-accent group-hover:to-primary"
                            style={{
                              width: `${85 + Math.floor(Math.random() * 15)}%`,
                              animationDelay: `${skillIndex * 0.1}s`
                            }}
                          ></div>
                        </div>
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