import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "Finally, an invoicing tool that doesn't overcomplicate things.",
    author: "Sarah Chen",
    role: "Graphic Designer",
  },
  {
    quote: "Saved me hours every month. The price is unbeatable.",
    author: "Michael Torres",
    role: "Web Developer",
  },
  {
    quote: "Switched from FreshBooks and never looked back.",
    author: "Emma Rodriguez",
    role: "Marketing Consultant",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-primary tracking-wider uppercase mb-4">
            LOVED BY FREELANCERS
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 bg-card rounded-2xl border border-border"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <blockquote className="text-lg mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              <p className="font-semibold">
                — {testimonial.author}, <span className="text-muted-foreground font-normal">{testimonial.role}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;