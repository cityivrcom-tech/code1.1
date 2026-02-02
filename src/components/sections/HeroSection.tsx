import { Button } from "@/components/ui/button";
import { ArrowRight, Wifi, Users, MapPin } from "lucide-react";

export function HeroSection() {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToVision = () => {
    document.querySelector("#vision")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse-slow" />
      
      {/* Floating icons */}
      <div className="absolute top-1/4 left-[15%] animate-float hidden lg:block">
        <div className="p-4 bg-card rounded-2xl shadow-lg">
          <Wifi className="h-8 w-8 text-primary" />
        </div>
      </div>
      <div className="absolute top-1/3 right-[20%] animate-float hidden lg:block" style={{ animationDelay: "2s" }}>
        <div className="p-4 bg-card rounded-2xl shadow-lg">
          <Users className="h-8 w-8 text-secondary" />
        </div>
      </div>
      <div className="absolute bottom-1/3 left-[25%] animate-float hidden lg:block" style={{ animationDelay: "4s" }}>
        <div className="p-4 bg-card rounded-2xl shadow-lg">
          <MapPin className="h-8 w-8 text-gigon-green" />
        </div>
      </div>

      <div className="container mx-auto px-4 pt-20 pb-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent rounded-full text-sm font-medium text-accent-foreground mb-8">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            PM-WANI Compliant Wi-Fi Infrastructure
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            Connecting{" "}
            <span className="text-gradient">Unconnected</span>{" "}
            Bharat
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Democratizing internet access for <span className="font-semibold text-foreground">140 million people</span> across rural India with affordable, 
            accessible, and reliable Wi-Fi — for a more inclusive digital future.
          </p>

          {/* Stats row */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 mb-10">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary">₹2</div>
              <div className="text-sm text-muted-foreground">Starting Price</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary">24/7</div>
              <div className="text-sm text-muted-foreground">Connectivity</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary">140M+</div>
              <div className="text-sm text-muted-foreground">Target Users</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              onClick={scrollToContact}
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              Partner With Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={scrollToVision}
              className="text-lg px-8 py-6 rounded-xl border-2"
            >
              Learn More
            </Button>
          </div>

          {/* Trust badges */}
          <div className="mt-16 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground mb-4">Backed by leading incubators</p>
            <div className="flex flex-wrap items-center justify-center gap-8 opacity-70">
              <span className="text-sm font-medium text-muted-foreground">ATAL Incubation Centre</span>
              <span className="hidden sm:block w-1 h-1 bg-muted-foreground rounded-full" />
              <span className="text-sm font-medium text-muted-foreground">iSTART Rajasthan</span>
              <span className="hidden sm:block w-1 h-1 bg-muted-foreground rounded-full" />
              <span className="text-sm font-medium text-muted-foreground">India Mobile Congress</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-2.5 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
