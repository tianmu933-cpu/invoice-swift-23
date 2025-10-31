import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const features = [
  "Unlimited invoices",
  "Unlimited clients",
  "Payment tracking & reminders",
  "Revenue dashboard",
  "PDF exports",
  "Priority support",
  "Cancel anytime",
];

const Pricing = () => {
  return (
    <section className="py-24 bg-gradient-pricing">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Simple, transparent pricing
          </h2>
        </div>
        
        <div className="max-w-md mx-auto">
          <div className="relative p-8 bg-card rounded-2xl border-2 border-primary shadow-2xl">
            {/* Popular Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <span className="px-4 py-1.5 bg-gradient-primary text-primary-foreground text-sm font-semibold rounded-full">
                POPULAR
              </span>
            </div>
            
            {/* Price */}
            <div className="text-center mb-8 mt-4">
              <div className="text-5xl font-bold mb-2">
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  $9.99
                </span>
                <span className="text-2xl text-muted-foreground font-normal">/month</span>
              </div>
            </div>
            
            {/* Features */}
            <ul className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-green-600" />
                  </div>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            
            {/* CTA */}
            <Button variant="hero" size="xl" className="w-full mb-3">
              Start Your Free Trial
            </Button>
            <p className="text-sm text-muted-foreground text-center">
              14-day free trial
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;