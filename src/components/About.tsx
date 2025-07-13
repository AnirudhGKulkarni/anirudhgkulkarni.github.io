import { GraduationCap, Award, TrendingUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const education = [
    {
      degree: "B.Tech Computer Science (Cybersecurity)",
      institution: "Garden City University, Bengaluru",
      grade: "CGPA: 8.0",
      note: "Top 15% of batch",
      year: "2022-2025"
    },
    {
      degree: "12th Grade",
      institution: "BGS PU College, Bengaluru",
      grade: "71.33%",
      year: "2022"
    },
    {
      degree: "10th Grade", 
      institution: "Sri Aurobindo Vidya Mandir, Bengaluru",
      grade: "89.12%",
      note: "Top 10 scorer",
      year: "2020"
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl font-bold mb-4 text-foreground">About Me</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Story */}
            <div className="space-y-6 fade-in">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm currently pursuing a B.Tech in Computer Science with specialization in 
                Cybersecurity at Garden City University, Bengaluru. I have a CGPA of 8.0 and 
                rank among the top 15% in my class.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Over the past few years, I've built secure applications, contributed to ML-based 
                tools, and earned more than 10 certifications in cybersecurity, cloud, AI/ML, 
                and networking. I'm passionate about learning and applying emerging technologies 
                in real-world projects and hackathons.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2 text-accent">
                  <Award className="h-5 w-5" />
                  <span className="font-medium">10+ Certifications</span>
                </div>
                <div className="flex items-center gap-2 text-accent">
                  <TrendingUp className="h-5 w-5" />
                  <span className="font-medium">Top 15% Academic Performance</span>
                </div>
              </div>
            </div>

            {/* Education Timeline */}
            <div className="space-y-6 fade-in">
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <GraduationCap className="h-6 w-6 text-accent" />
                Education
              </h3>
              
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <Card key={index} className="project-card border-l-4 border-l-accent">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold text-foreground">{edu.degree}</h4>
                        <span className="text-sm text-muted-foreground">{edu.year}</span>
                      </div>
                      <p className="text-muted-foreground mb-1">{edu.institution}</p>
                      <div className="flex items-center gap-4">
                        <span className="font-medium text-accent">{edu.grade}</span>
                        {edu.note && (
                          <span className="text-sm bg-accent/20 text-accent px-2 py-1 rounded-full">
                            {edu.note}
                          </span>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Interests */}
          <div className="mt-16 text-center fade-in">
            <h3 className="text-2xl font-semibold mb-8">Interests & Hobbies</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[ 'Ethical Hacking','Astronomy & Space Tech', 'Hackathons'].map((interest) => (
                <span key={interest} className="skill-badge">
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;