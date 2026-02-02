import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useCountUp } from "@/hooks/useCountUp";
import { TrendingUp, Globe, Smartphone, Building } from "lucide-react";

const stats = [
  { value: 1.4, suffix: "B", label: "Population", icon: Globe },
  { value: 1, suffix: "B", label: "Mobile Users", icon: Smartphone },
  { value: 41, suffix: "M", label: "Wired Broadband", icon: Building },
  { value: 1, prefix: "$", suffix: "T", label: "Digital Economy 2030", icon: TrendingUp },
];

export function MarketSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="market" className="py-20 md:py-32 bg-card">
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
              Market Opportunity
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              The <span className="text-primary">$1 Trillion</span> Opportunity
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              India's digital economy is projected to hit $1 Trillion by 2030. We're positioned 
              to capture the underserved rural segment.
            </p>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16">
            {stats.map((stat, index) => (
              <StatCard key={stat.label} stat={stat} isVisible={isVisible} delay={index * 200} />
            ))}
          </div>

          {/* TAM/SAM/SOM */}
          <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl p-8 md:p-12 border border-border">
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
              Market Sizing
            </h3>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-0">
              {/* TAM */}
              <div className="relative">
                <div className="w-48 h-48 md:w-56 md:h-56 rounded-full bg-primary/10 flex items-center justify-center border-4 border-primary/20">
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-foreground">$50B</div>
                    <div className="text-sm text-muted-foreground font-medium">TAM</div>
                    <div className="text-xs text-muted-foreground mt-1">Total Market</div>
                  </div>
                </div>
              </div>

              {/* Arrow */}
              <div className="text-primary text-4xl px-4 rotate-90 md:rotate-0">→</div>

              {/* SAM */}
              <div className="relative">
                <div className="w-40 h-40 md:w-44 md:h-44 rounded-full bg-secondary/10 flex items-center justify-center border-4 border-secondary/20">
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-foreground">$15B</div>
                    <div className="text-sm text-muted-foreground font-medium">SAM</div>
                    <div className="text-xs text-muted-foreground mt-1">Rural WiFi</div>
                  </div>
                </div>
              </div>

              {/* Arrow */}
              <div className="text-primary text-4xl px-4 rotate-90 md:rotate-0">→</div>

              {/* SOM */}
              <div className="relative">
                <div className="w-32 h-32 md:w-36 md:h-36 rounded-full bg-gigon-green/10 flex items-center justify-center border-4 border-gigon-green/20">
                  <div className="text-center">
                    <div className="text-xl md:text-2xl font-bold text-foreground">$500M</div>
                    <div className="text-sm text-muted-foreground font-medium">SOM</div>
                    <div className="text-xs text-muted-foreground mt-1">5-Year Target</div>
                  </div>
                </div>
              </div>
            </div>

            {/* World Bank Insight */}
            <div className="mt-10 p-6 bg-card rounded-2xl border border-border text-center">
              <p className="text-lg text-foreground mb-2">
                <span className="font-bold text-primary">10%</span> increase in mobile broadband penetration leads to
              </p>
              <p className="text-2xl md:text-3xl font-bold text-foreground">
                <span className="text-gigon-green">1.38%</span> GDP Growth
              </p>
              <p className="text-sm text-muted-foreground mt-2">— World Bank Report</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatCard({ stat, isVisible, delay }: { stat: typeof stats[0]; isVisible: boolean; delay: number }) {
  const displayValue = useCountUp(
    stat.value,
    2000 + delay,
    isVisible,
    stat.prefix || "",
    stat.suffix
  );

  return (
    <div className="bg-background rounded-2xl p-6 text-center shadow-sm border border-border hover:shadow-md transition-shadow">
      <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 mb-4">
        <stat.icon className="h-6 w-6 text-primary" />
      </div>
      <div className="text-2xl md:text-3xl font-bold text-foreground">{displayValue}</div>
      <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
    </div>
  );
}
