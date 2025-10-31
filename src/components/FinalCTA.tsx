import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to get paid faster?
          </h2>
          <p className="text-xl text-muted-foreground mb-10">
            Join hundreds of freelancers who've simplified their invoicing
          </p>
          <Button variant="hero" size="xl" className="group">
            Start Free Trial
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;