import React from 'react';

export default function Footer() {
  return (
    <footer className="py-16 border-t-4 border-strawberry-red-950 bg-strawberry-red-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-strawberry-red-600 rounded-lg flex items-center justify-center border-2 border-strawberry-red-950">
                <span className="material-symbols-outlined text-white text-2xl">map</span>
              </div>
              <span className="text-2xl font-black font-display tracking-tight text-strawberry-red-950">
                TourGaps<span className="text-strawberry-red-600">.ai</span>
              </span>
            </div>
            <p className="text-strawberry-red-950 text-xs font-bold uppercase tracking-widest">
              © 2024 TourGaps AI. Inteligência de Mercado Turístico.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-10 text-xs font-black text-strawberry-red-950 uppercase tracking-widest">
            <a className="hover:text-strawberry-red-600 transition-colors" href="#">
              Termos
            </a>
            <a className="hover:text-strawberry-red-600 transition-colors" href="#">
              Privacidade
            </a>
            <a className="hover:text-strawberry-red-600 transition-colors" href="#">
              LinkedIn
            </a>
            <a className="hover:text-strawberry-red-600 transition-colors" href="#">
              Blog
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
