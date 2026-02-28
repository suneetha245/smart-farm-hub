import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-farm.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      <img
        src={heroImage}
        alt="Lush green farmland aerial view"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 hero-overlay" />
      <div className="relative z-10 container mx-auto px-4 text-center max-w-3xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-primary-foreground leading-tight mb-6 animate-fade-up">
          Empowering Farmers with Smart Technology
        </h1>
        <p className="text-lg sm:text-xl text-primary-foreground/85 mb-10 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.15s" }}>
          Get crop recommendations, detect plant diseases, explore government schemes, and connect with the farming community.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: "0.3s" }}>
          <Button size="lg" className="text-base px-8">
            Get Started
          </Button>
          <Button size="lg" variant="outline" className="text-base px-8 border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
