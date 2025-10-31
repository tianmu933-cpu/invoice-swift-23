import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border backdrop-blur-lg bg-background/80">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-primary" />
          <span className="text-xl font-bold">InvoiceQuick</span>
        </div>
        
        <div className="flex items-center gap-4">
          <Button variant="ghost" asChild>
            <a href="#signin">Sign in</a>
          </Button>
          <Button variant="hero" size="default" asChild>
            <a href="#trial">Start Free Trial</a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;