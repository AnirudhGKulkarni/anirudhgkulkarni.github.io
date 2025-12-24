import { Trophy, Presentation, Rocket, Target } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Achievements = () => {
  const achievements = [
    {
      title: "Hackathon Excellence",
      icon: Target,
      description: "Participated in national-level hackathon and delivered a complete ML prototype",
      highlights: [
        "National-level competition participation",
        "Complete ML prototype delivery",
        "Team collaboration and leadership"
      ],
      color: "from-yellow-500 to-orange-500",
      bgColor: "from-yellow-500/10 to-orange-500/10"
    },
    {
      title: "Research Presentation",
      icon: Presentation, 
      description: "Delivered comprehensive research presentation on 'DNA Storage Using AI' exploring next-generation data storage",
      highlights: [
        "Innovative research topic",
        "AI and biotechnology convergence",
        "Next-gen data storage solutions",
        "Technical presentation skills"
      ],
      color: "from-blue-500 to-purple-500",
      bgColor: "from-blue-500/10 to-purple-500/10"
    },
    {
      title: "IoT in Space Exploration",
      icon: Rocket,
      description: "Conducted seminar on IoT applications in space exploration, covering India's Chandrayaan missions",
      highlights: [
        "Space technology expertise",
        "Analysis of India's Chandrayaan-1, Chandrayaan-2, and Chandrayaan-3 missions",
        "IoT applications in aerospace"
        
      ],
      color: "from-indigo-500 to-cyan-500",
      bgColor: "from-indigo-500/10 to-cyan-500/10"
    },
    {
      title: "Academic Excellence",
      icon: Trophy,
      description: "Consistent high academic performance with recognition for outstanding results",
      highlights: [
        "8.0 CGPA maintenance",
        "Top 15% class ranking",
        "Top 10 scorer in 10th boards (89.12%)",
        "Academic consistency across semesters by maintaing 9.0+ CGPA for most of the semesters"
      ],
      color: "from-green-500 to-teal-500",
      bgColor: "from-green-500/10 to-teal-500/10"
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Achievements</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
            <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
              Academic excellence, research contributions, and technical accomplishments
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className={`project-card group overflow-hidden bg-gradient-to-br ${achievement.bgColor} border-2 border-transparent hover:border-accent/30`}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`w-14 h-14 rounded-lg bg-gradient-to-r ${achievement.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <achievement.icon className="h-7 w-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors mb-2">
                        {achievement.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {achievement.description}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground">Key Highlights:</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {achievement.highlights.map((highlight, i) => (
                        <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-background/30 hover:bg-background/50 transition-colors">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-foreground">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Achievement Stats */}
          <div className="grid md:grid-cols-4 gap-6 mt-16 fade-in">
            <div className="text-center p-6 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20">
              <div className="text-3xl font-bold text-primary mb-2">8.0</div>
              <div className="text-muted-foreground">CGPA</div>
            </div>
            <div className="text-center p-6 rounded-lg bg-gradient-to-br from-accent/10 to-primary/10 border border-accent/20">
              <div className="text-3xl font-bold text-accent mb-2">Top 15%</div>
              <div className="text-muted-foreground">Class Ranking</div>
            </div>
            <div className="text-center p-6 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20">
              <div className="text-3xl font-bold text-primary mb-2">89.12%</div>
              <div className="text-muted-foreground">10th Grade Score</div>
            </div>
            <div className="text-center p-6 rounded-lg bg-gradient-to-br from-accent/10 to-primary/10 border border-accent/20">
              <div className="text-3xl font-bold text-accent mb-2">Top 10</div>
              <div className="text-muted-foreground">School Ranking</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;