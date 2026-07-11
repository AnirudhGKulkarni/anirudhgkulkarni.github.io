
import { Briefcase } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Experience = () => {
  const experiences = [
    {
      role: "Software Development Intern",
      company: "MedAiLocker Private Limited",
      duration: "May 2026 - July 2026",
      description: [
        "Developed and maintained production web and mobile applications for an AI-powered medical records platform using React and Flutter.",
        "Built and integrated RESTful APIs and FastAPI-based backend services with end-to-end data flow on AWS infrastructure.",
        "Deployed and managed application builds across Android (Google Play) and Apple Developer platforms end to end.",
        "Implemented 10+ UI components and core features including API integrations, form validation, and secure health data workflows."
      ],
      certificateLink: "https://drive.google.com/drive/folders/19eJFJd_y3yab875UNP7c08YFwKLoBL7e?usp=sharing"
    },
    {
      role: "Cybersecurity Intern",
      company: "Codec Technologies",
      duration: "Jan 2026 - Apr 2026",
      description: [
        "Completed hands-on training across incident response, cryptography, web security, and vulnerability detection.",
        "Built practical projects simulating real-world threat scenarios using both offensive and defensive security techniques.",
        "Applied cybersecurity concepts across multiple domains including secure system development and threat analysis.",
        "Gained practical exposure to industry-standard security tools and methodologies."
      ],
      certificateLink: "https://drive.google.com/drive/folders/19eJFJd_y3yab875UNP7c08YFwKLoBL7e?usp=sharing"
    },
    {
      role: "Cybersecurity Research and Development Intern",
      company: "Zetpeak",
      duration: "Aug 2025 - Nov 2025",
      description: [
        "Worked on real-world cybersecurity and digital forensics projects, including developing an automation tool for cyber forensic tasks.",
        "Gained hands-on experience with cyber forensic tools.",
        "Collaborated with the team to strengthen cyber forensics capabilities and streamline investigative workflows.",
        "Contributed to security research and development using forensic tools."
      ],
       certificateLink: "https://drive.google.com/drive/folders/19eJFJd_y3yab875UNP7c08YFwKLoBL7e?usp=sharing"
    }
  ]; 

  return (
    <section id="experience" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Title */}
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Experience</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-6 fade-in">
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Briefcase className="h-6 w-6 text-accent" />
              Internships
            </h3>

            <div className="space-y-4">
              {experiences.map((exp, index) => (
                <Card key={index} className="project-card border-l-4 border-l-accent">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-foreground">{exp.role}</h4>
                      <span className="text-sm text-muted-foreground">{exp.duration}</span>
                    </div>
                    <p className="text-foreground mb-2 font-semibold ">{exp.company}</p>
                    <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                      {exp.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                    {exp.certificateLink && (
                      <a
                      href={exp.certificateLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-4 px-4 py-2 bg-accent text-black font-medium rounded-md hover:bg-accent/80 transition"
                      >
                      View Certificate
                    </a>
)}

                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
