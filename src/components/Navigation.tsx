import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Shield } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Endpoint Security", href: "/endpoint-security" },
    { name: "Network Security", href: "/network-security" },
    { name: "Cloud Security", href: "/cloud-security" },
    { name: "Compliance & VAPT", href: "/compliance" },
    { name: "About", href: "/about" },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <Shield className="h-8 w-8 text-accent group-hover:text-primary-glow transition-smooth" />
              <div className="absolute inset-0 animate-glow-pulse opacity-50 group-hover:opacity-100">
                <Shield className="h-8 w-8 text-accent" />
              </div>
            </div>
            <span className="text-xl font-bold bg-gradient-accent bg-clip-text text-transparent">
              Osto.one
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-3 py-2 text-sm font-medium transition-smooth hover:text-accent ${
                  isActive(item.href)
                    ? "text-accent border-b-2 border-accent"
                    : "text-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link to="/demo">
              <Button variant="default" size="sm" className="bg-gradient-accent hover-glow transition-smooth">
                Get Demo
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-foreground hover:text-accent transition-smooth"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`px-3 py-2 text-base font-medium transition-smooth ${
                    isActive(item.href)
                      ? "text-accent bg-muted rounded-md"
                      : "text-foreground hover:text-accent"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link to="/demo" onClick={() => setIsOpen(false)}>
                <Button variant="default" size="sm" className="w-full bg-gradient-accent hover-glow">
                  Get Demo
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;