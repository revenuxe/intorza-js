import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowUpRight } from "lucide-react";
import intorzaLogo from "@/assets/intorza-logo.webp";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const internal = [
    { label: "About", to: "/about" },
    { label: "Blog", to: "/blog" },
    { label: "Contact", to: "/contact" },
  ] as const;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300 ${
        isScrolled ? "border-border bg-background/95 backdrop-blur-md py-3" : "border-transparent bg-background/80 py-5 backdrop-blur-sm"
      }`}
    >
      <div className="container-custom grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 lg:grid-cols-[auto_1fr_auto] lg:gap-10">
        <Link to="/" className="flex min-w-0 items-center">
          <img src={intorzaLogo} alt="Intorza" className="h-9 w-auto object-contain md:h-10" />
        </Link>

        <nav className="hidden items-center gap-7 border-l border-border pl-8 lg:flex">
          {internal.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Button variant="ghost" asChild>
            <a href="https://www.app.intorza.com" target="_blank" rel="noopener noreferrer">Login</a>
          </Button>
          <Button asChild className="shadow-none">
            <a href="https://www.app.intorza.com" target="_blank" rel="noopener noreferrer">Create Quotation <ArrowUpRight /></a>
          </Button>
        </div>

        <button
          className="grid h-10 w-10 place-items-center rounded-md border border-border bg-background text-foreground lg:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="absolute left-0 right-0 top-full z-50 border-y border-border bg-background lg:hidden">
          <nav className="container-custom py-6 flex flex-col gap-4">
            {internal.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="text-foreground/80 hover:text-primary font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col gap-3 pt-4 border-t border-border">
              <Button variant="outline" asChild className="w-full">
                <a href="https://www.app.intorza.com" target="_blank" rel="noopener noreferrer">Login</a>
              </Button>
              <Button asChild className="w-full">
                <a href="https://www.app.intorza.com" target="_blank" rel="noopener noreferrer">Create Quotation</a>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
