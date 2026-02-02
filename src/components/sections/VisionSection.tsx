import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Target, Eye, Heart } from "lucide-react";

export function VisionSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="vision" className="py-20 md:py-32 bg-gradient-warm">
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
              Our Purpose
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Vision & Mission
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Building the digital bridge for Bharat's unconnected millions
            </p>
          </div>

          {/* Vision & Mission Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Vision Card */}
            <div className="bg-card rounded-2xl p-8 shadow-lg border border-border hover:shadow-xl transition-shadow">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 mb-6">
                <Eye className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Connect 140 Million
              </p>
              <p className="text-muted-foreground leading-relaxed">
                To be the catalyst for digital inclusion across Bharat, ensuring every village, 
                every home, and every individual has access to affordable, reliable internet connectivity.
              </p>
            </div>

            {/* Mission Card */}
            <div className="bg-card rounded-2xl p-8 shadow-lg border border-border hover:shadow-xl transition-shadow">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-secondary/10 mb-6">
                <Target className="h-7 w-7 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-xl font-semibold text-foreground mb-4">
                Affordable • Accessible • Reliable
              </p>
              <p className="text-muted-foreground leading-relaxed">
                To provide 24/7 Wi-Fi connectivity to every corner of rural India through 
                sachet-priced data packs, community-powered infrastructure, and PM-WANI compliant solutions.
              </p>
            </div>
          </div>

          {/* Value Proposition */}
          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-lg border border-border">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-accent">
                  <Heart className="h-10 w-10 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2 text-center md:text-left">
                  For Bharat, By Bharat, To Bharat
                </h3>
                <p className="text-muted-foreground leading-relaxed text-center md:text-left">
                  We're not just building infrastructure — we're empowering communities. Our model turns 
                  local kirana stores into digital hubs, creating micro-entrepreneurs while connecting 
                  millions to opportunities they never had before.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
