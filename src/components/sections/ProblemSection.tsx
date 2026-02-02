import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useCountUp } from "@/hooks/useCountUp";
import { AlertTriangle, WifiOff, IndianRupee, Building2 } from "lucide-react";

const problems = [
  {
    icon: IndianRupee,
    title: "Price Barrier",
    description: "Average data costs are still too high for daily wage workers earning ₹300-500/day",
    stat: "68%",
    statLabel: "Can't afford current plans",
  },
  {
    icon: WifiOff,
    title: "Signal Paradox",
    description: "80% of mobile data is consumed indoors, but 4G signal dies inside rural homes",
    stat: "80%",
    statLabel: "Indoor consumption",
  },
  {
    icon: Building2,
    title: "Broadband Poverty",
    description: "Only 41M wired broadband connections for 1.4B people — fiber never reaches villages",
    stat: "3%",
    statLabel: "Broadband penetration",
  },
];

export function ProblemSection() {
  const { ref, isVisible } = useScrollAnimation();
  const divideValue = useCountUp(200, 2000, isVisible, "$", "B");

  return (
    <section id="problem" className="py-20 md:py-32 bg-foreground text-background">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`max-w-6xl mx-auto transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-destructive/20 text-destructive-foreground rounded-full text-sm font-medium mb-4">
              <AlertTriangle className="h-4 w-4" />
              The Challenge
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              The <span className="text-primary">Invisible Wall</span>
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              A massive digital divide separates urban and rural India, creating inequality in opportunities
            </p>
          </div>

          {/* Big Stat */}
          <div className="text-center mb-16">
            <div className="inline-block p-8 md:p-12 bg-card/5 rounded-3xl border border-border/20">
              <div className="text-5xl md:text-7xl font-bold text-primary mb-2">
                {divideValue}
              </div>
              <p className="text-lg md:text-xl text-muted">
                Digital Divide in India
              </p>
              <p className="text-sm text-muted/70 mt-2">
                The economic gap created by lack of digital access
              </p>
            </div>
          </div>

          {/* Problem Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {problems.map((problem, index) => (
              <div
                key={problem.title}
                className="bg-card/5 backdrop-blur border border-border/20 rounded-2xl p-6 hover:bg-card/10 transition-colors"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/20 mb-4">
                  <problem.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{problem.title}</h3>
                <p className="text-muted text-sm mb-4 leading-relaxed">{problem.description}</p>
                <div className="pt-4 border-t border-border/20">
                  <div className="text-3xl font-bold text-primary">{problem.stat}</div>
                  <div className="text-sm text-muted">{problem.statLabel}</div>
                </div>
              </div>
            ))}
          </div>

          {/* TRAI Stat */}
          <div className="mt-12 text-center">
            <p className="text-muted text-sm">
              Source: TRAI Report on Rural Connectivity, 2024
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
