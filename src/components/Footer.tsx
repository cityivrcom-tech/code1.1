import { Wifi, Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12 border-t border-border/10">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="p-2 bg-primary rounded-lg">
                <Wifi className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">
                Gig<span className="text-primary">On</span>
              </span>
            </div>

            {/* Tagline */}
            <div className="text-center">
              <p className="text-muted flex items-center gap-2">
                Made with <Heart className="h-4 w-4 text-primary" /> in Bharat
              </p>
            </div>

            {/* Copyright */}
            <div className="text-sm text-muted">
              © {currentYear} GigOn. All rights reserved.
            </div>
          </div>

          {/* Bottom note */}
          <div className="mt-8 pt-8 border-t border-border/10 text-center">
            <p className="text-sm text-muted">
              For Bharat, By Bharat, To Bharat — Connecting 140 million people to a better future.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
