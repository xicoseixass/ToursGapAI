'use client';

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-[100] w-full bg-white/80 backdrop-blur-xl border-b-4 border-strawberry-red-950">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center">
          {/* Logo Text */}
          <div className="text-2xl font-display font-black text-strawberry-red-950 tracking-tight">
            TourGap<span className="text-strawberry-red-500">.AI</span>
          </div>
        </div>

        <div className="hidden lg:flex items-center space-x-10 text-sm font-bold text-strawberry-red-950">
          <a
            className="hover:text-strawberry-red-600 transition-all duration-300"
            href="#value-prop"
          >
            Vantagens
          </a>
          <a
            className="hover:text-strawberry-red-600 transition-all duration-300"
            href="#pricing"
          >
            Planos
          </a>
          <a
            className="hover:text-strawberry-red-600 transition-all duration-300"
            href="#apply"
          >
            Candidatura
          </a>
          <a
            className="bg-strawberry-red-950 text-white px-7 py-3 rounded-lg neo-button"
            href="/signup"
          >
            Login
          </a>
        </div>
      </div>
    </nav>
  );
}
