import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "border-b-2 border-foreground bg-background/95 backdrop-blur-md py-3" : "border-b-2 border-transparent bg-background/80 py-5 backdrop-blur-sm"
      }`}
    >
      <div className="container-custom grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 lg:grid-cols-[auto_1fr_auto] lg:gap-10">
        <Link to="/" className="flex min-w-0 items-center">
          <img src={intorzaLogo} alt="Intorza" className="h-9 w-auto object-contain md:h-10" />
        </Link>

        <nav className="hidden items-center gap-7 border-l-2 border-foreground pl-8 lg:flex">
          {internal.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="https://app.intorza.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-foreground transition-colors hover:text-primary"
          >
            Login
          </a>
          <a
            href="https://app.intorza.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-hard btn-hard-hover px-5 py-3"
          >
            Create Quotation <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        <button
          className="grid h-10 w-10 place-items-center border-2 border-foreground bg-background text-foreground lg:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="absolute left-0 right-0 top-full z-50 border-y-2 border-foreground bg-background lg:hidden">
          <nav className="container-custom py-6 flex flex-col gap-4">
            {internal.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-foreground py-2 hover:text-primary"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col gap-4 pt-4 border-t-2 border-foreground">
              <a href="https://app.intorza.com" target="_blank" rel="noopener noreferrer" className="btn-hard-ghost w-full">
                Login
              </a>
              <a href="https://app.intorza.com" target="_blank" rel="noopener noreferrer" className="btn-hard w-full">
                Create Quotation
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
