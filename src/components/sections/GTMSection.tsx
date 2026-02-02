import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Card, CardContent } from "@/components/ui/card";
import { Store, MapPin, Users, Rocket } from "lucide-react";

const strategies = [
  {
    icon: Store,
    title: "Kirana Trojan Horse",
    description: "Partner with local kirana stores who become our PDOs (Public Data Offices). They earn extra income while we gain trusted distribution.",
    highlight: "500K+ Kirana Stores in Target Areas",
  },
  {
    icon: MapPin,
    title: "City-by-City Rollout",
    description: "Launch in Tier-3 cities first, achieve density, then expand. Each city becomes a proof point for the next.",
    highlight: "Start with Rajasthan → Gujarat → UP",
  },
  {
    icon: Users,
    title: "Viral Referrals",
    description: "Users share their connection with family and neighbors. Word-of-mouth in tight-knit communities drives organic growth.",
    highlight: "30% of Users Through Referrals",
  },
  {
    icon: Rocket,
    title: "Community Deployment",
    description: "Local youth become installation partners, creating jobs while rapidly expanding our network footprint.",
    highlight: "1 Installer = 10 Hotspots/Day",
  },
];

export function GTMSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 md:py-32 bg-gradient-warm">
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
              Go-To-Market
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              The <span className="text-primary">Kirana</span> Playbook
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Leveraging India's most trusted retail network to build digital infrastructure
            </p>
          </div>

          {/* Strategy Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            {strategies.map((strategy, index) => (
              <Card
                key={strategy.title}
                className="border-border hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10">
                        <strategy.icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-foreground mb-2">{strategy.title}</h3>
                      <p className="text-muted-foreground leading-relaxed mb-4">{strategy.description}</p>
                      <div className="inline-block px-3 py-1.5 bg-accent rounded-lg">
                        <span className="text-sm font-medium text-accent-foreground">{strategy.highlight}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Rollout Timeline */}
          <div className="mt-16 bg-card rounded-3xl p-8 md:p-12 shadow-lg border border-border">
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
              18-Month Rollout Plan
            </h3>
            
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2" />
              
              {/* Timeline items */}
              <div className="space-y-8">
                {[
                  { phase: "Phase 1", period: "Month 1-6", goal: "500 Hotspots • 10K Users", location: "Jodhpur Pilot" },
                  { phase: "Phase 2", period: "Month 7-12", goal: "5,000 Hotspots • 100K Users", location: "Rajasthan Expansion" },
                  { phase: "Phase 3", period: "Month 13-18", goal: "15,000 Hotspots • 200K Users", location: "Multi-State Launch" },
                ].map((item, index) => (
                  <div
                    key={item.phase}
                    className={`relative flex items-center gap-4 ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Dot */}
                    <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-primary -translate-x-1/2 z-10" />
                    
                    {/* Content */}
                    <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                      <div className="bg-background rounded-xl p-4 shadow-sm border border-border inline-block">
                        <span className="text-sm font-medium text-primary">{item.phase}</span>
                        <span className="text-sm text-muted-foreground ml-2">{item.period}</span>
                        <div className="text-lg font-semibold text-foreground mt-1">{item.goal}</div>
                        <div className="text-sm text-muted-foreground">{item.location}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
