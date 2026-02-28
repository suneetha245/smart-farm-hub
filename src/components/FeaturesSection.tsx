import { Sprout, Bug, Landmark, Users } from "lucide-react";

const features = [
  {
    icon: Sprout,
    title: "Crop Recommendation",
    description: "Suggest best crops based on season and soil conditions for maximum yield.",
  },
  {
    icon: Bug,
    title: "Disease Detection",
    description: "Upload plant images and instantly detect diseases using AI-powered analysis.",
  },
  {
    icon: Landmark,
    title: "Government Schemes",
    description: "Discover the latest farming schemes, subsidies, and government benefits.",
  },
  {
    icon: Users,
    title: "Community & Marketplace",
    description: "Connect with fellow farmers, share knowledge, and sell your products.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-20 sm:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            What We Offer
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Everything you need to farm smarter, all in one place.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="group bg-card border border-border rounded-xl p-7 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <f.icon className="w-6 h-6 text-accent-foreground group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
