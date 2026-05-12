export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-primary-foreground/70 text-sm">
        <div className="font-serif font-bold text-xl text-white">Ipe•Line</div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">Mentions légales</a>
          <a href="#" className="hover:text-white transition-colors">Politique de confidentialité</a>
        </div>
        <div>© {new Date().getFullYear()} — Tous droits réservés</div>
      </div>
    </footer>
  );
}
