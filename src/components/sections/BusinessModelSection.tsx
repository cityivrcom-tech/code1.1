import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, CircleDollarSign, Users, Store, BarChart3 } from "lucide-react";

const revenueStreams = [
  {
    icon: CircleDollarSign,
    title: "Subscriptions",
    description: "Sachet data packs from ₹2-₹100, monthly plans for heavy users",
    percentage: "60%",
  },
  {
    icon: BarChart3,
    title: "Hyper-Local Ads",
    description: "Location-based advertising for local businesses and brands",
    percentage: "25%",
  },
  {
    icon: Users,
    title: "B2B Data Insights",
    description: "Anonymized analytics for brands, government, and enterprises",
    percentage: "15%",
  },
];

const flywheel = [
  { label: "Partner with Kiranas", icon: Store },
  { label: "Deploy Infrastructure", icon: null },
  { label: "Acquire Users", icon: Users },
  { label: "Generate Revenue", icon: CircleDollarSign },
  { label: "Expand Network", icon: null },
];

export function BusinessModelSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="business" className="py-20 md:py-32 bg-gradient-warm">
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
              Business Model
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Asset-Light, <span className="text-primary">High-Margin</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Capital-efficient infrastructure with multiple revenue streams and strong unit economics
            </p>
          </div>

          {/* EBITDA Highlight */}
          <div className="text-center mb-16">
            <div className="inline-block bg-primary rounded-3xl px-12 py-8 shadow-xl">
              <div className="text-5xl md:text-6xl font-bold text-primary-foreground mb-2">70%</div>
              <div className="text-xl text-primary-foreground/90">Target EBITDA Margin</div>
            </div>
          </div>

          {/* Revenue Streams */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {revenueStreams.map((stream) => (
              <Card key={stream.title} className="border-border hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10">
                      <stream.icon className="h-6 w-6 text-primary" />
                    </div>
                    <span className="text-2xl font-bold text-primary">{stream.percentage}</span>
                  </div>
                  <CardTitle className="text-xl">{stream.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{stream.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Flywheel */}
          <div className="bg-card rounded-3xl p-8 md:p-12 shadow-lg border border-border">
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
              The GigOn Flywheel
            </h3>
            
            <div className="flex flex-wrap items-center justify-center gap-4">
              {flywheel.map((step, index) => (
                <div key={step.label} className="flex items-center">
                  <div className="bg-accent rounded-xl px-4 py-3 text-center">
                    <span className="text-sm font-medium text-accent-foreground">{step.label}</span>
                  </div>
                  {index < flywheel.length - 1 && (
                    <ArrowRight className="h-5 w-5 text-primary mx-2 flex-shrink-0" />
                  )}
                </div>
              ))}
              {/* Loop back arrow */}
              <div className="w-full text-center mt-4">
                <span className="text-primary text-lg">↺ Repeat & Scale</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
