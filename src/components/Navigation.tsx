import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/freight-jet-logo.jpg";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <img src={logo} alt="Freight Jet Logistics" className="h-12 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className={`${isScrolled ? "text-foreground" : "text-white"} hover:text-white transition-colors font-medium`}
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className={`${isScrolled ? "text-foreground" : "text-white"} hover:text-white transition-colors font-medium`}
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className={`${isScrolled ? "text-foreground" : "text-white"} hover:text-white transition-colors font-medium`}
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className={`${isScrolled ? "text-foreground" : "text-white"} hover:text-white transition-colors font-medium`}
            >
              Contact
            </button>
            <Button onClick={() => scrollToSection("contact")} className="bg-accent hover:bg-accent/90">
              Get a Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden ${isScrolled ? "text-foreground" : "text-white"}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4 bg-background/95 backdrop-blur-md">
            <button
              onClick={() => scrollToSection("home")}
              className="block w-full text-left px-4 py-2 text-foreground hover:text-white transition-colors font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="block w-full text-left px-4 py-2 text-foreground hover:text-white transition-colors font-medium"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left px-4 py-2 text-foreground hover:text-white transition-colors font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left px-4 py-2 text-foreground hover:text-white transition-colors font-medium"
            >
              Contact
            </button>
            <div className="px-4">
              <Button onClick={() => scrollToSection("contact")} className="w-full bg-accent hover:bg-accent/90">
                Get a Quote
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
