import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Card, CardContent } from "@/components/ui/card";
import { Wifi, Cloud, Smartphone, Zap, Shield, Users } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Sachet Revolution",
    description: "Data packs from ₹2 to ₹100 — affordable for everyone, just like sachet shampoos transformed FMCG",
  },
  {
    icon: Wifi,
    title: "Hyper-Local Mesh",
    description: "Community Wi-Fi network that strengthens with more users — the more people connect, the better it gets",
  },
  {
    icon: Cloud,
    title: "Village Cloud",
    description: "Edge computing infrastructure that brings content and services closer, reducing latency and data costs",
  },
  {
    icon: Shield,
    title: "PM-WANI Compliant",
    description: "Fully compliant with government regulations, ensuring trust and reliability for users and partners",
  },
];

const steps = [
  { step: "1", title: "Scan QR", description: "At any partner kirana store" },
  { step: "2", title: "Choose Pack", description: "₹2 to ₹100 options" },
  { step: "3", title: "Get Connected", description: "Instant high-speed Wi-Fi" },
];

export function SolutionSection() {
  const { ref, isVisible } = useScrollAnimation();
  const { ref: stepsRef, isVisible: stepsVisible } = useScrollAnimation();

  return (
    <section id="solution" className="py-20 md:py-32 bg-gradient-warm">
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
              The Solution
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Sachet Revolution for <span className="text-primary">Data</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Just as sachet pricing democratized FMCG products for India, we're making internet 
              affordable for every household
            </p>
          </div>

          {/* Feature Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-20">
            {features.map((feature, index) => (
              <Card
                key={feature.title}
                className="border-border hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10">
                        <feature.icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* How It Works */}
          <div
            ref={stepsRef}
            className={`transition-all duration-700 delay-300 ${
              stepsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Simple as 1-2-3
              </h3>
              <p className="text-muted-foreground">Get connected in under a minute</p>
            </div>

            <div className="bg-card rounded-3xl p-8 md:p-12 shadow-xl border border-border">
              <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                {steps.map((step, index) => (
                  <div key={step.step} className="text-center relative">
                    {/* Connector line */}
                    {index < steps.length - 1 && (
                      <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-border" />
                    )}
                    
                    <div className="relative z-10">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground text-2xl font-bold mb-4">
                        {step.step}
                      </div>
                      <h4 className="text-xl font-semibold text-foreground mb-2">{step.title}</h4>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* App Preview Mockup */}
              <div className="mt-12 flex justify-center">
                <div className="bg-foreground/5 rounded-3xl p-4 max-w-xs">
                  <div className="bg-card rounded-2xl p-6 shadow-lg">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                        <Wifi className="h-5 w-5 text-primary-foreground" />
                      </div>
                      <div>
                        <div className="font-semibold text-foreground">GigOn WiFi</div>
                        <div className="text-xs text-muted-foreground">Ready to connect</div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between p-3 bg-accent rounded-lg">
                        <span className="text-sm text-foreground">100MB - 1 Hour</span>
                        <span className="font-bold text-primary">₹2</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-accent rounded-lg">
                        <span className="text-sm text-foreground">1GB - 1 Day</span>
                        <span className="font-bold text-primary">₹15</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-accent rounded-lg">
                        <span className="text-sm text-foreground">10GB - 30 Days</span>
                        <span className="font-bold text-primary">₹100</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
