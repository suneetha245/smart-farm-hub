import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-20 sm:py-24 cta-gradient">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-6">
          Start Growing Smarter Today
        </h2>
        <p className="text-primary-foreground/80 mb-8 max-w-lg mx-auto">
          Join thousands of farmers leveraging technology to boost productivity and income.
        </p>
        <Button
          size="lg"
          className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 text-base px-10 font-semibold"
        >
          Join Now
        </Button>
      </div>
    </section>
  );
};

export default CTASection;
