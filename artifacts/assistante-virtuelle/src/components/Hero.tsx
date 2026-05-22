import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative h-[100dvh] min-h-[600px] flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-bg.png"
          alt="Warm home office workspace"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/70 backdrop-blur-[2px]"></div>
      </div>
      <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col items-center text-center mt-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-primary leading-tight mb-6">
            Retrouvez le{" "}
            <em style={{ color: "#D45B1A", fontStyle: "italic" }}>temps</em>{" "}
            de faire grandir votre entreprise.
          </h1>
          
          <p className="text-lg md:text-xl text-foreground/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            Je prends en charge vos tâches administratives et chronophages pour que vous puissiez vous consacrer pleinement au développement de votre activité.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg" 
              onClick={() => scrollTo("services")}
              className="bg-primary text-white hover:bg-primary/90 text-base px-8 h-14 w-full sm:w-auto"
            >
              Découvrir mes services
            </Button>
            <a
              href="https://calendly.com/ipeline_assistante-vituelle/reprenez-le-controleou-autre"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button 
                size="lg"
                variant="outline"
                className="w-full h-14 text-base px-8 border-2 hover:bg-[#ABC4AA]/10 transition-colors"
                style={{ borderColor: "#ABC4AA", color: "#6a9a69" }}
              >
                Prendre un café virtuel ☕
              </Button>
            </a>
          </div>

          {/* Sage green accent strip under buttons */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="mt-8 mx-auto h-0.5 rounded-full max-w-xs"
            style={{ background: "linear-gradient(to right, transparent, #ABC4AA, transparent)" }}
          />
        </motion.div>
      </div>
    </section>
  );
}
