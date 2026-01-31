export default function Footer() {
  return (
    <footer className="py-16 border-t-4 border-strawberry-red-950 bg-strawberry-red-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="space-y-4">
            <p className="text-strawberry-red-950 text-xs font-bold uppercase tracking-widest">
              © 2025 TourGap.AI. Inteligência de Mercado Turístico.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-10 text-xs font-black text-strawberry-red-950 uppercase tracking-widest">
            <a className="hover:text-strawberry-red-600 transition-colors" href="#">
              Termos
            </a>
            <a className="hover:text-strawberry-red-600 transition-colors" href="#">
              Privacidade
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
