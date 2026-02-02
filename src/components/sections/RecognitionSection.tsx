import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Award, Building2, Globe, Leaf } from "lucide-react";

const partners = [
  {
    category: "Incubation",
    items: [
      { name: "ATAL Incubation Centre", description: "MNIT Jaipur" },
      { name: "iSTART Rajasthan", description: "State Government Initiative" },
    ],
  },
  {
    category: "Industry Presence",
    items: [
      { name: "India Mobile Congress", description: "Featured Startup" },
      { name: "TSDSI", description: "Standards Body Member" },
    ],
  },
];

const sdgGoals = [
  { number: "1", title: "No Poverty", description: "Digital inclusion creates economic opportunities" },
  { number: "4", title: "Quality Education", description: "Online learning access for rural students" },
  { number: "8", title: "Decent Work", description: "Creating micro-entrepreneur PDO partners" },
  { number: "9", title: "Industry & Innovation", description: "Infrastructure for underserved areas" },
];

export function RecognitionSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 md:py-32 bg-card">
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
              Recognition & Partnerships
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Backed by the <span className="text-primary">Best</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Recognized by leading institutions and aligned with global sustainability goals
            </p>
          </div>

          {/* Partners Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {partners.map((partner) => (
              <div key={partner.category} className="bg-background rounded-2xl p-6 shadow-sm border border-border">
                <div className="flex items-center gap-3 mb-6">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10">
                    {partner.category === "Incubation" ? (
                      <Building2 className="h-5 w-5 text-primary" />
                    ) : (
                      <Globe className="h-5 w-5 text-primary" />
                    )}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{partner.category}</h3>
                </div>
                <div className="space-y-4">
                  {partner.items.map((item) => (
                    <div key={item.name} className="flex items-start gap-3">
                      <Award className="h-5 w-5 text-gigon-gold mt-0.5" />
                      <div>
                        <div className="font-medium text-foreground">{item.name}</div>
                        <div className="text-sm text-muted-foreground">{item.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* UN SDG Goals */}
          <div className="bg-background rounded-3xl p-8 md:p-12 shadow-lg border border-border">
            <div className="flex items-center justify-center gap-3 mb-8">
              <Leaf className="h-6 w-6 text-gigon-green" />
              <h3 className="text-2xl font-bold text-foreground">
                UN Sustainable Development Goals
              </h3>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {sdgGoals.map((goal) => (
                <div
                  key={goal.number}
                  className="bg-accent rounded-xl p-4 text-center hover:shadow-md transition-shadow"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground text-xl font-bold mb-3">
                    {goal.number}
                  </div>
                  <div className="font-semibold text-foreground mb-1">{goal.title}</div>
                  <div className="text-xs text-muted-foreground">{goal.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
