import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@assets/logo-transparent-png_1763281292366.png";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const navLinks = [
    { path: "/services", label: "Services" },
    { path: "/blog", label: "Blog" },
    { path: "/careers", label: "Internships" },
    { path: "/about", label: "About" },
  ];

  const isActive = (path: string) => location === path;

  return (
    <>
      <header className="bg-background/60 backdrop-blur-md sticky top-0 z-40 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center hover-elevate rounded-md px-2 py-1 -ml-2" data-testid="link-home">
              <img src={logo} alt="NexCubic logo" className="h-8" />
            </Link>

            <nav className="hidden md:flex items-center gap-6 text-sm">
              {navLinks.map((link) => (
                <Link key={link.path} href={link.path} className={`hover:text-primary transition-colors ${isActive(link.path) ? "text-primary font-medium" : "text-muted-foreground"}`} data-testid={`link-${link.label.toLowerCase()}`}>
                  {link.label}
                </Link>
              ))}
              <Link href="/contact" className="inline-block ml-4" data-testid="link-contact">
                <Button variant="default" size="sm" className="bg-gradient-to-r from-primary to-chart-2 hover:opacity-90" data-testid="button-get-quote">
                  Get Quote
                </Button>
              </Link>
            </nav>

            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
                data-testid="button-menu-toggle"
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-16 z-30 bg-background/95 backdrop-blur-sm" data-testid="mobile-menu">
          <nav className="flex flex-col gap-2 p-4">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                href={link.path}
                className={`block px-4 py-3 rounded-md hover-elevate ${isActive(link.path) ? "bg-primary/10 text-primary font-medium" : "text-foreground"}`}
                onClick={() => setMobileMenuOpen(false)}
                data-testid={`mobile-link-${link.label.toLowerCase()}`}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact" className="block mt-2" onClick={() => setMobileMenuOpen(false)} data-testid="mobile-link-contact">
              <Button 
                variant="default" 
                className="w-full bg-gradient-to-r from-primary to-chart-2" 
                data-testid="mobile-button-get-quote"
              >
                Get Quote
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
