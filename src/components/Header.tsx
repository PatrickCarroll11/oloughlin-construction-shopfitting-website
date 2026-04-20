import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) =>
    path === "/" ? location.pathname === "/" : location.pathname.startsWith(path);

  return (
    <header className="sticky top-0 z-50 w-full shadow-md">
      {/* Top bar */}
      <div className="bg-accent text-accent-foreground px-6 py-2 text-sm flex items-center justify-between">
        <span className="font-medium tracking-wide hidden sm:block">
          Quality Construction &amp; Shopfitting in Dublin
        </span>
        <a
          href="tel:0879482740"
          className="flex items-center gap-2 font-semibold hover:underline ml-auto sm:ml-0"
        >
          <Phone className="h-3.5 w-3.5" />
          087 948 2740
        </a>
      </div>

      {/* Main header */}
      <div className="bg-primary">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="flex items-center justify-between py-3 md:py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center shrink-0">
              <img
                src={logo}
                alt="OLoughlin Construction & Shopfitting"
                className="h-12 w-auto"
              />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-0.5 lg:gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`px-4 py-2 text-sm font-medium transition-colors rounded-sm ${
                    isActive(link.to)
                      ? "text-accent border-b-2 border-accent"
                      : "text-primary-foreground/90 hover:text-accent"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-5">
              <a
                href="tel:0879482740"
                className="flex items-center gap-2 text-primary-foreground/90 hover:text-accent text-sm font-semibold transition-colors"
              >
                <Phone className="h-4 w-4" />
                087 948 2740
              </a>
              <Button
                asChild
                className="bg-accent text-accent-foreground hover:bg-accent/90 px-6 py-2.5 text-sm font-semibold rounded-md"
              >
                <Link to="/contact">Get a Free Quote</Link>
              </Button>
            </div>

            {/* Mobile menu toggle */}
            <button
              className="md:hidden text-primary-foreground hover:text-accent transition-colors p-2"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden bg-primary border-t border-primary-foreground/10 px-6 pb-6 pt-3">
            <nav className="flex flex-col gap-0.5 mb-5">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileOpen(false)}
                  className={`px-4 py-3 text-sm font-medium rounded-sm transition-colors ${
                    isActive(link.to)
                      ? "text-accent border-l-4 border-accent pl-4"
                      : "text-primary-foreground/90 hover:text-accent"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="flex flex-col gap-3 pt-1 border-t border-primary-foreground/10">
              <a
                href="tel:0879482740"
                className="flex items-center gap-2 text-primary-foreground/90 hover:text-accent text-sm font-semibold transition-colors pt-3"
              >
                <Phone className="h-4 w-4" />
                087 948 2740
              </a>
              <Button
                asChild
                className="bg-accent text-accent-foreground hover:bg-accent/90 w-full font-semibold rounded-md py-3 text-sm"
              >
                <Link to="/contact" onClick={() => setMobileOpen(false)}>
                  Get a Free Quote
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}