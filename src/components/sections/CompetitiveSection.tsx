import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Zap, IndianRupee, Check, X } from "lucide-react";

const moats = [
  {
    icon: IndianRupee,
    title: "Sachet Pricing",
    description: "Micro-packs from ₹2 make internet accessible to daily wage earners — impossible for traditional ISPs to match",
  },
  {
    icon: Zap,
    title: "Signal Paradox Solution",
    description: "Indoor Wi-Fi solves the fundamental problem that 4G fails at — most data is consumed where signal is weakest",
  },
  {
    icon: Shield,
    title: "PM-WANI Compliance",
    description: "Government-backed framework provides regulatory protection and opens doors to subsidies and partnerships",
  },
];

const comparison = [
  { feature: "Sachet Pricing (₹2-₹100)", gigon: true, wiom: false, telcos: false },
  { feature: "Indoor Signal Solution", gigon: true, wiom: true, telcos: false },
  { feature: "PM-WANI Compliant", gigon: true, wiom: true, telcos: false },
  { feature: "Asset-Light Model", gigon: true, wiom: false, telcos: false },
  { feature: "Community-Powered", gigon: true, wiom: false, telcos: false },
  { feature: "Rural Focus", gigon: true, wiom: true, telcos: false },
];

export function CompetitiveSection() {
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
              Why GigOn Wins
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Strategic <span className="text-primary">Moats</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Multiple layers of competitive advantage that are difficult to replicate
            </p>
          </div>

          {/* Moats Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {moats.map((moat) => (
              <Card key={moat.title} className="border-border hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 mb-2">
                    <moat.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{moat.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{moat.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Comparison Table */}
          <div className="bg-background rounded-3xl p-8 md:p-12 shadow-lg border border-border">
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
              Competitive Comparison
            </h3>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-4 px-4 font-medium text-muted-foreground">Feature</th>
                    <th className="text-center py-4 px-4 font-bold text-primary">GigOn</th>
                    <th className="text-center py-4 px-4 font-medium text-muted-foreground">Wiom</th>
                    <th className="text-center py-4 px-4 font-medium text-muted-foreground">Telcos</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row, index) => (
                    <tr key={row.feature} className={index < comparison.length - 1 ? "border-b border-border" : ""}>
                      <td className="py-4 px-4 text-foreground">{row.feature}</td>
                      <td className="text-center py-4 px-4">
                        {row.gigon ? (
                          <Check className="h-5 w-5 text-gigon-green mx-auto" />
                        ) : (
                          <X className="h-5 w-5 text-destructive mx-auto" />
                        )}
                      </td>
                      <td className="text-center py-4 px-4">
                        {row.wiom ? (
                          <Check className="h-5 w-5 text-gigon-green mx-auto" />
                        ) : (
                          <X className="h-5 w-5 text-destructive mx-auto" />
                        )}
                      </td>
                      <td className="text-center py-4 px-4">
                        {row.telcos ? (
                          <Check className="h-5 w-5 text-gigon-green mx-auto" />
                        ) : (
                          <X className="h-5 w-5 text-destructive mx-auto" />
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
