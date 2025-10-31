import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import dashboardPreview from "@/assets/dashboard-preview.png";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border mb-6">
            <span className="text-2xl">✨</span>
            <span className="text-sm font-medium">Trusted by 500+ freelancers</span>
          </div>
          
          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Get Paid Faster with{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Simple Invoicing
            </span>
          </h1>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto">
            Create professional invoices in 30 seconds, track payments automatically, 
            and focus on what you do best.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
            <Button variant="hero" size="xl" className="group">
              Start Free Trial
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="xl" className="group">
              <Play className="mr-2" />
              View Demo
            </Button>
          </div>
          
          {/* Small text */}
          <p className="text-sm text-muted-foreground mb-16">
            14-day free trial • No credit card required
          </p>
          
          {/* Dashboard Preview */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-primary opacity-20 blur-3xl animate-glow" />
            <img 
              src={dashboardPreview} 
              alt="InvoiceQuick Dashboard Preview" 
              className="relative rounded-2xl shadow-2xl border border-border animate-float w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;