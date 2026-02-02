import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, Target, Users, TrendingUp, ArrowRight } from "lucide-react";

const useOfFunds = [
  { category: "Technology & Product", percentage: 40 },
  { category: "Market Expansion", percentage: 30 },
  { category: "Operations & Team", percentage: 20 },
  { category: "Marketing & Sales", percentage: 10 },
];

const milestones = [
  { icon: Target, value: "15,000", label: "Hotspots Deployed" },
  { icon: Users, value: "200K", label: "Active Users" },
  { icon: TrendingUp, value: "₹20M", label: "Monthly Revenue" },
  { icon: DollarSign, value: "₹240M", label: "Annual Revenue" },
];

export function FundingSection() {
  const { ref, isVisible } = useScrollAnimation();

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 md:py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`max-w-6xl mx-auto transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-primary-foreground/10 rounded-full text-sm font-medium mb-4">
              Investment Opportunity
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Join the Mission
            </h2>
            <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
              We're raising capital to connect the next 140 million Indians to the digital economy
            </p>
          </div>

          {/* Main Ask */}
          <div className="text-center mb-16">
            <div className="inline-block bg-primary-foreground rounded-3xl px-12 py-8 shadow-xl">
              <div className="text-5xl md:text-7xl font-bold text-primary mb-2">$500K</div>
              <div className="text-xl text-primary/80">Seed Round</div>
              <div className="text-sm text-primary/60 mt-2">18-Month Runway</div>
            </div>
          </div>

          {/* Milestones */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16">
            {milestones.map((milestone) => (
              <div
                key={milestone.label}
                className="bg-primary-foreground/10 rounded-2xl p-6 text-center backdrop-blur"
              >
                <milestone.icon className="h-8 w-8 mx-auto mb-3 text-primary-foreground" />
                <div className="text-2xl md:text-3xl font-bold">{milestone.value}</div>
                <div className="text-sm text-primary-foreground/70">{milestone.label}</div>
              </div>
            ))}
          </div>

          {/* Use of Funds */}
          <div className="bg-primary-foreground/5 rounded-3xl p-8 md:p-12 backdrop-blur border border-primary-foreground/10 mb-12">
            <h3 className="text-2xl font-bold mb-8 text-center">Use of Funds</h3>
            
            <div className="space-y-4">
              {useOfFunds.map((item) => (
                <div key={item.category}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{item.category}</span>
                    <span className="font-bold">{item.percentage}%</span>
                  </div>
                  <div className="h-3 bg-primary-foreground/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary-foreground rounded-full transition-all duration-1000"
                      style={{ width: isVisible ? `${item.percentage}%` : "0%" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button
              size="lg"
              onClick={scrollToContact}
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 text-lg px-10 py-6 rounded-xl shadow-lg"
            >
              Partner With Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
