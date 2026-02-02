import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Wifi, ArrowRight, Linkedin } from "lucide-react";

export function ContactSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="contact" className="py-20 md:py-32 bg-foreground text-background">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`max-w-4xl mx-auto transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-primary/20 rounded-full text-sm font-medium mb-4">
              Get In Touch
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Ready to <span className="text-primary">Connect?</span>
            </h2>
            <p className="text-muted text-lg max-w-xl mx-auto">
              Join us in building the digital bridge for Bharat. We're looking for investors, 
              partners, and believers in our mission.
            </p>
          </div>

          {/* Contact Card */}
          <div className="bg-card/5 backdrop-blur rounded-3xl p-8 md:p-12 border border-border/20">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact Info */}
              <div>
                <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary/20">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted mb-1">Email</div>
                      <a href="mailto:shravan@gigon.in" className="text-lg font-medium hover:text-primary transition-colors">
                        shravan@gigon.in
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary/20">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted mb-1">Phone</div>
                      <a href="tel:+919876543210" className="text-lg font-medium hover:text-primary transition-colors">
                        +91 98765 43210
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary/20">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted mb-1">Location</div>
                      <div className="text-lg font-medium">
                        Jodhpur, Rajasthan, India
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary/20">
                      <Linkedin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted mb-1">LinkedIn</div>
                      <a href="#" className="text-lg font-medium hover:text-primary transition-colors">
                        linkedin.com/company/gigon
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-col items-center justify-center text-center p-8 bg-primary rounded-2xl">
                <div className="w-16 h-16 rounded-full bg-primary-foreground/20 flex items-center justify-center mb-6">
                  <Wifi className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-primary-foreground mb-2">
                  Partner With Us
                </h3>
                <p className="text-primary-foreground/80 mb-6">
                  Schedule a call to discuss investment opportunities
                </p>
                <Button
                  asChild
                  size="lg"
                  className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                >
                  <a href="mailto:shravan@gigon.in">
                    Get in Touch
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
