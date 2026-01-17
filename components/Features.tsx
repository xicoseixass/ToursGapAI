import React from 'react';

export default function Features() {
  return (
    <section className="py-32 bg-white relative overflow-hidden" id="value-prop">
      <div className="absolute top-10 left-[-5%] w-72 h-72 bg-strawberry-red-100 rounded-[4rem] rotate-12 -z-10 opacity-60"></div>
      <div className="absolute bottom-10 right-[-5%] w-96 h-96 bg-strawberry-red-200/40 rounded-full -z-10 blur-2xl"></div>

      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-5xl md:text-7xl font-black font-display text-strawberry-red-950 mb-12">
          Transforme dados brutos em <span className="text-strawberry-red-600">lucro real.</span>
        </h2>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="p-10 bg-strawberry-red-50 rounded-3xl neo-card flex flex-col items-center text-center shadow-[12px_12px_0px_0px_rgba(76,5,25,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-[8px_8px_0px_0px_rgba(76,5,25,1)] transition-all">
            <div className="w-24 h-24 bg-white border-4 border-strawberry-red-950 rounded-2xl flex items-center justify-center mb-8 rotate-2">
              <span className="material-symbols-outlined text-strawberry-red-500 text-6xl font-bold">
                shield
              </span>
            </div>
            <h3 className="text-2xl font-black text-strawberry-red-950 mb-4 font-display uppercase tracking-tight">
              Segurança para Empreendedores
            </h3>
            <p className="text-strawberry-red-900 font-bold leading-relaxed text-lg">
              Validamos a sua ideia antes de investir 1€.
            </p>
          </div>

          <div className="p-10 bg-strawberry-red-50 rounded-3xl neo-card flex flex-col items-center text-center shadow-[12px_12px_0px_0px_rgba(76,5,25,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-[8px_8px_0px_0px_rgba(76,5,25,1)] transition-all">
            <div className="w-24 h-24 bg-white border-4 border-strawberry-red-950 rounded-2xl flex items-center justify-center mb-8 -rotate-2">
              <span className="material-symbols-outlined text-strawberry-red-500 text-6xl font-bold">
                bar_chart
              </span>
            </div>
            <h3 className="text-2xl font-black text-strawberry-red-950 mb-4 font-display uppercase tracking-tight">
              Superioridade para Operadores
            </h3>
            <p className="text-strawberry-red-900 font-bold leading-relaxed text-lg">
              Saiba exatamente onde os concorrentes estão a falhar.
            </p>
          </div>

          <div className="p-10 bg-strawberry-red-50 rounded-3xl neo-card flex flex-col items-center text-center shadow-[12px_12px_0px_0px_rgba(76,5,25,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-[8px_8px_0px_0px_rgba(76,5,25,1)] transition-all">
            <div className="w-24 h-24 bg-white border-4 border-strawberry-red-950 rounded-2xl flex items-center justify-center mb-8 rotate-6">
              <span className="material-symbols-outlined text-strawberry-red-500 text-6xl font-bold">
                target
              </span>
            </div>
            <h3 className="text-2xl font-black text-strawberry-red-950 mb-4 font-display uppercase tracking-tight">
              Fosso Defensivo
            </h3>
            <p className="text-strawberry-red-900 font-bold leading-relaxed text-lg">
              Algoritmo exclusivo que cruza volume de buscas vs. inexistência de oferta.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
