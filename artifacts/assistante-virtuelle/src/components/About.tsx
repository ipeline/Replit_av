import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden relative z-10 border-[8px] border-white shadow-xl">
              <img 
                src="/about-bg.png" 
                alt="Claire Dubois à son bureau" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-secondary rounded-full -z-10 opacity-50 blur-2xl"></div>
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-accent rounded-full -z-10 opacity-20 blur-3xl"></div>
            
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg z-20 max-w-[200px] border border-border/20">
              <p className="font-serif font-bold text-primary text-3xl mb-1">5+</p>
              <p className="text-sm font-medium text-foreground/80 leading-tight">années d'expérience auprès des entrepreneurs</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-[#F3AB06]/20 text-[#D45B1A] font-medium text-sm mb-6 text-center w-full">
              À propos de moi
            </div>
            
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-8">
              L'humain au cœur de l'organisation
            </h2>
            
            <div className="space-y-6 text-foreground/80 text-lg leading-relaxed">
              <p>
                Bonjour, je suis <strong>Claire Dubois</strong>, assistante virtuelle passionnée par l'organisation et l'efficacité. Depuis plus de 5 ans, j'accompagne les entrepreneurs et indépendants dans leur quotidien administratif.
              </p>
              <p>
                Mon objectif ? Vous redonner ce qui a le plus de valeur : <strong>votre temps</strong>. En me déléguant les tâches chronophages, vous retrouvez la liberté de vous concentrer sur votre zone de génie, sur vos clients, et sur le développement de votre entreprise.
              </p>
              <p>
                Je travaille avec rigueur, bienveillance et une pointe d'humour. Considérez-moi comme votre bras droit, toujours prête à anticiper vos besoins et à structurer votre activité avec le sourire.
              </p>
            </div>
            
            <div className="mt-10 pt-10 border-t border-border/30 grid grid-cols-2 gap-6">
              <div>
                <h4 className="font-serif font-bold text-xl text-primary mb-2">Confiance</h4>
                <p className="text-foreground/70 text-sm">Vos données et votre activité sont entre de bonnes mains.</p>
              </div>
              <div>
                <h4 className="font-serif font-bold text-xl text-primary mb-2">Proactivité</h4>
                <p className="text-foreground/70 text-sm">Je n'attends pas les problèmes, je les anticipe.</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
