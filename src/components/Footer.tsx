import { Leaf } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Leaf className="w-5 h-5 text-primary" />
            <span className="font-semibold text-foreground">Smart Farming Assistant</span>
          </div>
          <nav className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">About</a>
            <a href="#" className="hover:text-foreground transition-colors">Contact</a>
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
          </nav>
        </div>
        <div className="text-center mt-8 text-xs text-muted-foreground">
          © 2026 Smart Farming Assistant. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
