import { Leaf, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Header = () => {
  const [lang, setLang] = useState("English");
  const [langOpen, setLangOpen] = useState(false);
  const languages = ["English", "हिन्दी", "தமிழ்", "తెలుగు"];

  return (
    <header className="sticky top-0 z-50 bg-card/80 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-primary">
            <Leaf className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="font-semibold text-lg text-foreground hidden sm:inline">
            Smart Farming Assistant
          </span>
          <span className="font-semibold text-lg text-foreground sm:hidden">
            SFA
          </span>
        </div>

        <div className="flex items-center gap-3">
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm text-muted-foreground hover:bg-muted transition-colors"
            >
              {lang}
              <ChevronDown className="w-4 h-4" />
            </button>
            {langOpen && (
              <div className="absolute right-0 top-full mt-1 bg-card border border-border rounded-lg shadow-lg py-1 min-w-[120px] animate-fade-in">
                {languages.map((l) => (
                  <button
                    key={l}
                    onClick={() => { setLang(l); setLangOpen(false); }}
                    className="block w-full text-left px-4 py-2 text-sm text-foreground hover:bg-muted transition-colors"
                  >
                    {l}
                  </button>
                ))}
              </div>
            )}
          </div>
          <Button size="sm">Login</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
