import { ExternalLink, Github, Shield, Database, MapPin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { error, time } from 'console';

const Projects = () => {
  const projects = [
    {
      title: "Final Year Project - trustNshare (ONGOING)",
      year: "2025",
      description: "trustNshare is an ongoing final-year project focused on building a secure data-sharing platform for small-scale organizations. The system is designed with policy-based access control to regulate how data is shared and accessed.",
      icon: Shield,
      achievements: [
        "3+ access control and sharing policies",
        "Authentication, Authorization, and Encryption",
        "Ensuring confidentiality and controlled data access",
        "Designed modular security policies adaptable to organizational roles"
      ],
      technologies: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Node.js",],
      metrics: {
        ["security policies"]: "3+",
        ["access control"]: "Role-based",
        ["data protection"]: "End-to-End"
      },
      gradient: "from-orange-500/20 to-cyan-500/20",
      borderColor: "border-grey-500/30",
      codeUrl: "https://github.com/AnirudhGKulkarni/trustNshare",
      liveUrl: "https://trustnshare.vercel.app",
      iconImage: "/trustNshare.ico"
    },
    {
      title: "DoneZit: Task Manager Web App",
      year: "2025",
      description: "DoneZit is a full-stack task management web application designed to help users organize and track their daily tasks efficiently.",
      icon: Shield,
      achievements: [
        "Supports 3+ task states",
        "Implements secure user authentication",
        "Responsive UI with light and dark theme support"
      ],
      technologies: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Node.js",],
      metrics: {
        ["task states"]: "3+",
        ["Task Tracking"]: "Real Time",
        ["Theme Support"]: "Light & Dark"
      },
      gradient: "from-cyan-500/20 to-red-500/20",
      borderColor: "border-orange-500/30",
      codeUrl: "https://github.com/AnirudhGKulkarni/DoneZit",
      liveUrl: "https://donezit.vercel.app",
      iconImage: "/donezit.ico"
    },
    {
      title: "Phishing Detection Website",
      year: "2025",
      description: "Advanced machine learning system for detecting phishing URLs with comprehensive feature engineering and real-time analysis capabilities.",
      icon: Shield,
      achievements: [
        "92% accuracy on 2,000+ URLs",
        "URL-based and content-based analysis",
        "REST API with responsive UI",
        "Real-time threat detection"
      ],
      technologies: ["Python", "Scikit-learn", "Pandas", "HTML", "CSS", "JavaScript"],
      metrics: {
        accuracy: "92%",
        dataset: "2,000+ URLs",
        performance: "Real-time"
      },
      gradient: "from-red-500/20 to-blue-500/20",
      borderColor: "border-red-500/30",
      codeUrl: "https://github.com/AnirudhGKulkarni/Phishingdetector"
    },
    {
      title: "Pharmacy Management System", 
      year: "2024",
      description: "Comprehensive inventory management solution built with Java and MySQL, streamlining pharmacy operations and reducing manual errors.",
      icon: Database,
      achievements: [
        "Managed 200+ inventory items (SKUs)",
        "30% improvement in tracking accuracy",
        "80% reduction in manual errors",
        "Automated billing and reporting"
      ],
      technologies: ["Java", "MySQL", "Swing", "JDBC"],
      metrics: {
        items: "200+ SKUs",
        accuracy: "+30%",
        errors: "No",        
      },
      gradient: "from-blue-500/20 to-cyan-500/20",
      borderColor: "border-blue-500/30",
      codeUrl: "https://github.com/AnirudhGKulkarni/Pharmacy_Management_Project"
    },
    {
      title: "Location Finder from Photo",
      year: "2023",
      description: "Innovative ML tool developed during a 48-hour hackathon that extracts geographical location data from uploaded images using advanced computer vision.",
      icon: MapPin,
      achievements: [
        "90% accuracy over 300+ images",
        "Integrated with Bhuvan Map API",
        "48-hour hackathon completion",
        "Team collaboration (4 members)"
      ],
      technologies: ["Python", "Jupyter", "Computer Vision", "Bhuvan API", "HTML", "CSS"],
      metrics: {
        accuracy: "90%",
        dataset: "300+ images",
        coordinates: "Exact"
      },
      gradient: "from-cyan-500/20 to-purple-500/20", 
      borderColor: "border-purple-500/30",
      codeUrl: "https://github.com/AnirudhGKulkarni/Location-Finder"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Featured Projects</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
            <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
              Showcasing innovative solutions that demonstrate technical expertise and real-world impact
            </p>
          </div>

          {/* Standalone final-year project first */}
          {projects.length > 0 && (() => {
            const project = projects[0];
            const Icon = project.icon;
            return (
              <div className="mb-8">
                <Card className={`project-card group overflow-hidden bg-gradient-to-br ${project.gradient} border-2 ${project.borderColor}`}>
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-4">
                      {project.iconImage ? (
                        <img src={project.iconImage} alt={`${project.title} icon`} className="w-16 h-16 object-contain" />
                      ) : (
                        <div className={`w-12 h-12 rounded-lg bg-gradient-to-r from-primary to-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                      )}
                      <span className="text-sm text-muted-foreground bg-background/50 px-3 py-1 rounded-full">
                        {project.year}
                      </span>
                    </div>
                    <CardTitle className="text-xl group-hover:text-accent transition-colors">
                      {project.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>

                    <div className="grid grid-cols-3 gap-4 p-4 bg-background/30 rounded-lg">
                      {Object.entries(project.metrics).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="font-bold text-accent text-lg">{value}</div>
                          <div className="text-xs text-muted-foreground capitalize">{key}</div>
                        </div>
                      ))}
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-semibold text-foreground">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {project.achievements.map((achievement, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-semibold text-foreground">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs hover:bg-accent/20 transition-colors">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 flex gap-3">
                      <Button
                        size="sm"
                        className="flex-1 bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary"
                        asChild
                      >
                        <a
                          href={project.codeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </a>
                      </Button>

                      {project.liveUrl && (
                        <Button
                          size="sm"
                          variant="outline"
                          className="flex-1"
                          asChild
                        >
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Live
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>
            );
          })()}

          {/* Other projects side-by-side */}
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.slice(1).map((project, index) => {
              const Icon = project.icon;
              return (
                <Card key={index} className={`project-card group overflow-hidden bg-gradient-to-br ${project.gradient} border-2 ${project.borderColor}`}>
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-4">
                      {project.iconImage ? (
                        <img src={project.iconImage} alt={`${project.title} icon`} className="w-15 h-15 object-contain" />
                      ) : (
                        <div className={`w-12 h-12 rounded-lg bg-gradient-to-r from-primary to-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                      )}
                      <span className="text-sm text-muted-foreground bg-background/50 px-3 py-1 rounded-full">
                        {project.year}
                      </span>
                    </div>
                    <CardTitle className="text-xl group-hover:text-accent transition-colors">
                      {project.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>

                    <div className="grid grid-cols-3 gap-4 p-4 bg-background/30 rounded-lg">
                      {Object.entries(project.metrics).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="font-bold text-accent text-lg">{value}</div>
                          <div className="text-xs text-muted-foreground capitalize">{key}</div>
                        </div>
                      ))}
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-semibold text-foreground">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {project.achievements.map((achievement, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-semibold text-foreground">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs hover:bg-accent/20 transition-colors">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 flex gap-3">
                      <Button
                        size="sm"
                        className="flex-1 bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary"
                        asChild
                      >
                        <a
                          href={project.codeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </a>
                      </Button>

                      {project.liveUrl && (
                        <Button
                          size="sm"
                          variant="outline"
                          className="flex-1"
                          asChild
                        >
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Live
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
      

          <div className="text-center mt-12 fade-in">
  <p className="text-muted-foreground mb-4">
    Interested in seeing more of my work?
  </p>
  <Button
    variant="outline"
    className="group"
    asChild
  >
    <a
      href="https://github.com/AnirudhGKulkarni"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Github className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
      View All Projects on GitHub
    </a>
  </Button>
</div>

                    
        </div>
      </div>
      {/* Technical Highlights */}
      {/* <div className="mt-20 text-center fade-in">
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

          <div className="mt-20 text-center fade-in">
  <h3 className="text-3xl font-bold mb-10 text-foreground">Technical Highlights</h3>

  <div className="flex justify-center flex-wrap gap-8">
    <div className="w-80 p-6 rounded-lg border border-red-400/30 bg-gradient-to-br from-orange-900/30 to-blue-800/10 shadow-md hover:shadow-orange-500/30 transition-all duration-300">
      <div className="text-3xl font-bold text-cyan-400 mb-2">92%</div>
      <div className="text-muted-foreground">ML Model Accuracy</div>
      <div className="text-muted-foreground">(Phishing Detection)</div>
    </div>

    <div className="w-80 p-6 rounded-lg border border-blue-400/30 bg-gradient-to-br from-blue-900/30 to-cyan-800/10 shadow-md hover:shadow-blue-500/30 transition-all duration-300">
      <div className="text-3xl font-bold text-cyan-400 mb-2">200+</div>
      <div className="text-muted-foreground">Items Managed</div>
      <div className="text-muted-foreground">(Pharmacy System)</div>
    </div>

    <div className="w-80 p-6 rounded-lg border border-violet-400/30 bg-gradient-to-br from-violet-900/30 to-purple-800/10 shadow-md hover:shadow-violet-500/30 transition-all duration-300">
      <div className="text-3xl font-bold text-blue-400 mb-2">95%</div>
      <div className="text-muted-foreground">Accuracy</div>
      <div className="text-muted-foreground">(Location Finder)</div>
    </div>   
  </div>
</div>       
      
    </section>
  );
};

export default Projects;