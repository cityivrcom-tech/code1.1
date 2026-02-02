import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Mail, Briefcase } from "lucide-react";

const team = [
  {
    name: "Shravan Pandey",
    role: "Founder & CEO",
    experience: "14 years in Telecom",
    description: "Former Director at Indus Towers. Expert in rural telecom infrastructure and policy.",
    linkedin: "#",
  },
  {
    name: "Debalina Roy",
    role: "Head of Operations",
    experience: "10 years in Telecom",
    description: "Led operations for multiple ISPs. Specialist in network rollout and customer success.",
    linkedin: "#",
  },
];

const mentors = [
  {
    name: "Amitabh Singhal",
    role: "Mentor & Advisor",
    credentials: [
      "Founder, ISPAI (Internet Service Providers Association of India)",
      "Ex-CEO, NIXI (National Internet Exchange of India)",
      "35+ years in Internet Policy & Infrastructure",
    ],
  },
];

export function TeamSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="team" className="py-20 md:py-32 bg-gradient-warm">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`max-w-6xl mx-auto transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-accent text-accent-foreground rounded-full text-sm font-medium mb-4">
              The Team
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              For Bharat, <span className="text-primary">By Bharat</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Experienced telecom professionals with a mission to connect the unconnected
            </p>
          </div>

          {/* Founders */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {team.map((member) => (
              <Card key={member.name} className="border-border overflow-hidden">
                <CardContent className="p-0">
                  <div className="p-8">
                    {/* Avatar placeholder */}
                    <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mb-6 mx-auto md:mx-0">
                      <Briefcase className="h-10 w-10 text-primary" />
                    </div>
                    
                    <div className="text-center md:text-left">
                      <h3 className="text-2xl font-bold text-foreground mb-1">{member.name}</h3>
                      <div className="text-primary font-medium mb-2">{member.role}</div>
                      <div className="inline-block px-3 py-1 bg-accent rounded-full text-sm text-accent-foreground mb-4">
                        {member.experience}
                      </div>
                      <p className="text-muted-foreground leading-relaxed mb-4">{member.description}</p>
                      
                      <a
                        href={member.linkedin}
                        className="inline-flex items-center gap-2 text-secondary hover:text-secondary/80 transition-colors"
                      >
                        <Linkedin className="h-5 w-5" />
                        <span className="text-sm font-medium">LinkedIn Profile</span>
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Mentor */}
          <div className="bg-card rounded-3xl p-8 md:p-12 shadow-lg border border-border">
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
              Advisory & Mentorship
            </h3>
            
            {mentors.map((mentor) => (
              <div key={mentor.name} className="flex flex-col md:flex-row items-center gap-8">
                {/* Avatar placeholder */}
                <div className="flex-shrink-0">
                  <div className="w-32 h-32 rounded-full bg-primary/10 flex items-center justify-center">
                    <Briefcase className="h-12 w-12 text-primary" />
                  </div>
                </div>
                
                <div className="text-center md:text-left">
                  <h4 className="text-2xl font-bold text-foreground mb-1">{mentor.name}</h4>
                  <div className="text-primary font-medium mb-4">{mentor.role}</div>
                  <ul className="space-y-2">
                    {mentor.credentials.map((credential, index) => (
                      <li key={index} className="text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        {credential}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
