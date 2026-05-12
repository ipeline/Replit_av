import { motion } from "framer-motion";
import { Link } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div
          className="text-2xl font-serif font-bold text-primary cursor-pointer"
          onClick={() => scrollTo("hero")}
        >
          Claire Dubois.
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => scrollTo("about")}
            className="text-foreground hover:text-primary transition-colors font-medium relative group"
          >
            À propos
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
          </button>
          <button
            onClick={() => scrollTo("services")}
            className="text-foreground hover:text-primary transition-colors font-medium relative group"
          >
            Services
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
          </button>
          <button
            onClick={() => scrollTo("faq")}
            className="text-foreground hover:text-primary transition-colors font-medium relative group"
          >
            FAQ
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
          </button>
          <Button onClick={() => scrollTo("contact")} className="bg-primary text-white hover:bg-primary/90">
            Me contacter
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden absolute top-full left-0 right-0 bg-background shadow-lg py-4 px-6 flex flex-col space-y-4"
        >
          <button
            onClick={() => scrollTo("about")}
            className="text-left text-lg font-medium text-foreground py-2 border-b border-border/50"
          >
            À propos
          </button>
          <button
            onClick={() => scrollTo("services")}
            className="text-left text-lg font-medium text-foreground py-2 border-b border-border/50"
          >
            Services
          </button>
          <button
            onClick={() => scrollTo("faq")}
            className="text-left text-lg font-medium text-foreground py-2 border-b border-border/50"
          >
            FAQ
          </button>
          <Button onClick={() => scrollTo("contact")} className="w-full bg-primary text-white mt-4">
            Me contacter
          </Button>
        </motion.div>
      )}
    </nav>
  );
}
