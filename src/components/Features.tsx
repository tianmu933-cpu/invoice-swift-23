import { Zap, BarChart3, Clock } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Create Invoices in Seconds",
    description: "Professional invoices with line items, taxes, and notes",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: BarChart3,
    title: "Track Every Payment",
    description: "See what's paid, pending, or overdue at a glance",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Clock,
    title: "Get Paid Faster",
    description: "Automatic reminders and payment tracking",
    color: "from-purple-500 to-pink-500",
  },
];

const Features = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Everything you need. Nothing you don't.
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group p-8 bg-card rounded-2xl border border-border hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;