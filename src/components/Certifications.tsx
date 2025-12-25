// import { Shield, Brain, Cloud, Code, Network, ExternalLink } from 'lucide-react';
// import { Card, CardContent } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
// import { Badge } from '@/components/ui/badge';

// const Certifications = () => {
//   const certificationCategories = [
//     {
//       title: "Cybersecurity",
//       icon: Shield,
//       color: "from-red-500 to-orange-500",
//       certifications: [
//         "Introduction to Cybersecurity (Cisco)",
//         "Junior Cyber Security Analyst (Cisco)", 
//         "Network Support and Security (Cisco)"
//       ]
//     },
//     {
//       title: "AI/ML & Data",
//       icon: Brain,
//       color: "from-purple-500 to-pink-500",
//       certifications: [
//         "Generative AI for Software Development (IBM)",
//         "Data Mining & Big Data Analytics (Infosys Springboard)",
//         "Hadoop Architecture (Infosys Springboard)",
//         "Introduction to Data Mining (Infosys Springboard)",
//         "Introduction to Data Warehouse (Infosys Springboard)",
//         "Techniques for Big Data Analytics (Infosys Springboard)",
//       ]
//     },
//     {
//       title: "Cloud Computing",
//       icon: Cloud,
//       color: "from-blue-500 to-cyan-500",
//       certifications: [
//         "AWS MasterClass: Storage & CDN - AWS S3 & AWS CloudFront (Infosys Springboard)",
//         "AWS Developer Associate: AWS CloudFormation (Infosys Springboard)",
//         "AWS Developer Associate: AWS Security & Encryption (Infosys Springboard)",
//         "AWS Developer Associate: Interacting with AWS Cloud Services (Infosys Springboard)",
//         "DevSecOps in AWS (Infosys Springboard)",
//         "AWS Developer Associate: AWS Database Services (Infosys Springboard)"
//       ]
//     },
//     {
//       title: "Programming & OS",
//       icon: Code,
//       color: "from-green-500 to-teal-500",
//       certifications: [
//         "Advanced Python Topics: File Operations in Python (Infosys Springboard)",
//         "Python Classes & Inheritance: Working with Inheritance in Python (Infosys Springboard)",
//         "Python Concurrent Programming: Multithreading in Python (Infosys Springboard)",
//         "Python Requests: HTTP Requests with Python (Infosys Springboard)",
//         "Python Development: Getting Started with Programming in Python (Infosys Springboard)",
//         "Linux OS (Infosys)"
//       ]
//     },
//     {
//       title: "Networking",
//       icon: Network,
//       color: "from-indigo-500 to-purple-500",
//       certifications: [
//         "CCNA Introduction to Networks (Cisco)",
//         "CCNA Enterprise Networking, Security and Automation (Cisco)",
//         "CCNA Switching, Routing, and Wireless Essentials (Cisco)"
//       ]
//     }
//   ];

//   const totalCertifications = certificationCategories.reduce(
//     (total, category) => total + category.certifications.length, 0
//   );

//   return (
//     <section id="certifications" className="py-20">
//       <div className="container mx-auto px-6">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-16 fade-in">
//             <h2 className="text-4xl font-bold mb-4 text-foreground">Certifications & Learning</h2>
//             <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
//             <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
//               Continuous learning and professional development across multiple domains
//             </p>
//             <div className="mt-6">
//               <Badge variant="secondary" className="text-lg px-4 py-2 bg-gradient-to-r from-primary/20 to-accent/20">
//                 {totalCertifications} Certifications Earned
//               </Badge>
//             </div>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {certificationCategories.map((category, index) => (
//               <Card key={index} className="project-card group overflow-hidden">
//                 <CardContent className="p-6">
//                   <div className="text-center mb-6">
//                     <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
//                       <category.icon className="h-8 w-8 text-white" />
//                     </div>
//                     <h3 className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors">
//                       {category.title}
//                     </h3>
//                   </div>

//                   <div className="space-y-3">
//                     {category.certifications.map((cert, certIndex) => (
//                       <div key={certIndex} className="group/cert">
//                         <div className="p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors border border-border group-hover/cert:border-accent/50">
//                           <div className="flex items-start gap-3">
//                             <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
//                             <span className="text-sm text-foreground leading-relaxed">
//                               {cert}
//                             </span>
//                           </div>
//                         </div>
//                       </div>
//                     ))}
//                   </div>

//                   <div className="mt-4 text-center">
//                     <Badge variant="outline" className="text-xs">
//                       {category.certifications.length} Certificate{category.certifications.length > 1 ? 's' : ''}
//                     </Badge>
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>

//           {/* Stats Grid */}
//           <div className="grid md:grid-cols-4 gap-6 mt-16 fade-in">
//             <div className="text-center p-6 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20">
//               <div className="text-3xl font-bold text-primary mb-2">{totalCertifications}</div>
//               <div className="text-muted-foreground">Total Certifications</div>
//             </div>
//             <div className="text-center p-6 rounded-lg bg-gradient-to-br from-accent/10 to-primary/10 border border-accent/20">
//               <div className="text-3xl font-bold text-accent mb-2">5</div>
//               <div className="text-muted-foreground">Skill Domains</div>
//             </div>
//             <div className="text-center p-6 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20">
//               <div className="text-3xl font-bold text-primary mb-2">3</div>
//               <div className="text-muted-foreground">Industry Partners</div>
//             </div>
//             <div className="text-center p-6 rounded-lg bg-gradient-to-br from-accent/10 to-primary/10 border border-accent/20">
//               <div className="text-3xl font-bold text-accent mb-2">100%</div>
//               <div className="text-muted-foreground">Completion Rate</div>
//             </div>
//           </div>

//           {/* Call to Action */}
//           <div className="text-center mt-12 fade-in">
//             <p className="text-muted-foreground mb-6">
//               Want to see detailed certificates and credentials?
//             </p>
//             <Button className="btn-cyber group">
//               <ExternalLink className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
//               <a 
//                 href="https://drive.google.com/drive/folders/1SSNfCJ5kT9eLUIzZwoCo9KGuvJrefznv?usp=sharing" 
//                 target="_blank" 
//                 rel="noopener noreferrer"
//               >
//                 View All Certifications
//               </a>
//             </Button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Certifications;





import { Shield, Brain, Cloud, Code, Network, ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Certifications = () => {
  const certificationCategories = [
    {
      title: "Cybersecurity",
      icon: Shield,
      color: "from-red-500 to-orange-500",
      certifications: [
        "Introduction to Cybersecurity (Cisco)",
        "Junior Cyber Security Analyst (Cisco)",
        "Network Support and Security (Cisco)",
        "Ethical Hacking and Pentest (Udemy)"
      ]
    },
    {
      title: "AI/ML & Data",
      icon: Brain,
      color: "from-purple-500 to-pink-500",
      certifications: [
        "Generative AI for Software Development (IBM)",
        "Data Mining & Big Data Analytics (Infosys Springboard)",
        "Hadoop Architecture (Infosys Springboard)",
        "Introduction to Data Mining (Infosys Springboard)",
        "Introduction to Data Warehouse (Infosys Springboard)",
        "Techniques for Big Data Analytics (Infosys Springboard)"
      ]
    },
    {
      title: "Cloud Computing",
      icon: Cloud,
      color: "from-blue-500 to-cyan-500",
      certifications: [
        "AWS MasterClass: Storage & CDN - AWS S3 & AWS CloudFront (Infosys Springboard)",
        "AWS Developer Associate: AWS CloudFormation (Infosys Springboard)",
        "AWS Developer Associate: AWS Security & Encryption (Infosys Springboard)",
        "AWS Developer Associate: Interacting with AWS Cloud Services (Infosys Springboard)",
        "DevSecOps in AWS (Infosys Springboard)",
        "AWS Developer Associate: AWS Database Services (Infosys Springboard)"
      ]
    },
    {
      title: "Programming & OS",
      icon: Code,
      color: "from-green-500 to-teal-500",
      certifications: [
        "Advanced Python Topics: File Operations in Python (Infosys Springboard)",
        "Python Classes & Inheritance: Working with Inheritance in Python (Infosys Springboard)",
        "Python Concurrent Programming: Multithreading in Python (Infosys Springboard)",
        "Python Requests: HTTP Requests with Python (Infosys Springboard)",
        "Python Development: Getting Started with Programming in Python (Infosys Springboard)",
        "Linux OS (Infosys)"
      ]
    },
    {
      title: "Networking",
      icon: Network,
      color: "from-indigo-500 to-purple-500",
      certifications: [
        "CCNA Introduction to Networks (Cisco)",
        "CCNA Enterprise Networking, Security and Automation (Cisco)",
        "CCNA Switching, Routing, and Wireless Essentials (Cisco)"
      ]
    }
  ];

  const totalCertifications = certificationCategories.reduce(
    (total, category) => total + category.certifications.length, 0
  );

  return (
    <section id="certifications" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Certifications & Learning</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
            <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
              Continuous learning and professional development across multiple domains
            </p>
            <div className="mt-6">
              <Badge variant="secondary" className="text-lg px-4 py-2 bg-gradient-to-r from-primary/20 to-accent/20">
                {totalCertifications} Certifications Earned
              </Badge>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificationCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Card key={index} className="project-card group overflow-hidden">
                  <CardContent className="p-6">
                    <div className="text-center mb-6">
                      <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors">
                        {category.title}
                      </h3>
                    </div>

                    <div className="space-y-3">
                      {category.certifications.map((cert, certIndex) => {
                        const match = cert.match(/(.*)\s\(([^)]+)\)/);
                        const title = match ? match[1] : cert;
                        const provider = match ? match[2] : null;

                        return (
                          <div key={certIndex} className="group/cert">
                            <div className="p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors border border-border group-hover/cert:border-accent/50">
                              <div className="flex items-start gap-3">
                                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-sm text-foreground leading-relaxed">
                                  {title}
                                  {provider && (
                                    <>
                                      <br />
                                      <span className="text-xs text-muted-foreground">
                                        {provider}
                                      </span>
                                    </>
                                  )}
                                </span>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    <div className="mt-4 text-center">
                      <Badge variant="outline" className="text-xs">
                        {category.certifications.length} Certificate{category.certifications.length > 1 ? 's' : ''}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Stats Grid */}
          {/* <div className="grid md:grid-cols-4 gap-6 mt-16 fade-in"> */}
          <div className="grid md:grid-cols-3 gap-6 mt-16 fade-in">

            <div className="text-center p-6 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20">
              <div className="text-3xl font-bold text-primary mb-2">{totalCertifications}</div>
              <div className="text-muted-foreground">Total Certifications</div>
            </div>
            <div className="text-center p-6 rounded-lg bg-gradient-to-br from-accent/10 to-primary/10 border border-accent/20">
              <div className="text-3xl font-bold text-accent mb-2">5</div>
              <div className="text-muted-foreground">Skill Domains</div>
            </div>
            
            <div className="text-center p-6 rounded-lg bg-gradient-to-br from-accent/10 to-primary/10 border border-accent/20">
              <div className="text-3xl font-bold text-accent mb-2">100%</div>
              <div className="text-muted-foreground">Completion Rate</div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12 fade-in">
            <p className="text-muted-foreground mb-6">
              Want to see detailed certificates and credentials?
            </p>
            <Button className="btn-cyber group">
              <ExternalLink className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
              <a
                href="https://drive.google.com/drive/folders/1SSNfCJ5kT9eLUIzZwoCo9KGuvJrefznv?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                View All Certifications
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
