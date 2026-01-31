export default function Features() {
  return (
    <section className="py-20 md:py-32 bg-white relative overflow-hidden" id="value-prop">
      <div className="absolute top-10 left-[-5%] w-48 md:w-72 h-48 md:h-72 bg-strawberry-red-100 rounded-[4rem] rotate-12 -z-10 opacity-60"></div>
      <div className="absolute bottom-10 right-[-5%] w-64 md:w-96 h-64 md:h-96 bg-strawberry-red-200/40 rounded-full -z-10 blur-2xl"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black font-display text-strawberry-red-950 mb-8 md:mb-12 leading-tight">
          Transforme dados brutos em <span className="text-strawberry-red-600">lucro real.</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
          <div className="p-6 md:p-10 bg-strawberry-red-50 rounded-2xl md:rounded-3xl neo-card flex flex-col items-center text-center shadow-[8px_8px_0px_0px_rgba(76,5,25,1)] md:shadow-[12px_12px_0px_0px_rgba(76,5,25,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(76,5,25,1)] md:hover:shadow-[8px_8px_0px_0px_rgba(76,5,25,1)] transition-all">
            <div className="w-20 h-20 md:w-24 md:h-24 bg-white border-4 border-strawberry-red-950 rounded-xl md:rounded-2xl flex items-center justify-center mb-6 md:mb-8 rotate-2">
              <span className="material-symbols-outlined text-strawberry-red-500 text-5xl md:text-6xl font-bold">
                shield
              </span>
            </div>
            <h3 className="text-xl md:text-2xl font-black text-strawberry-red-950 mb-3 md:mb-4 font-display uppercase tracking-tight">
              Valide Antes de Investir
            </h3>
            <p className="text-strawberry-red-900 font-bold leading-relaxed text-base md:text-lg">
              Validamos a sua ideia antes de investir 1€.
            </p>
          </div>

          <div className="p-6 md:p-10 bg-strawberry-red-50 rounded-2xl md:rounded-3xl neo-card flex flex-col items-center text-center shadow-[8px_8px_0px_0px_rgba(76,5,25,1)] md:shadow-[12px_12px_0px_0px_rgba(76,5,25,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(76,5,25,1)] md:hover:shadow-[8px_8px_0px_0px_rgba(76,5,25,1)] transition-all">
            <div className="w-20 h-20 md:w-24 md:h-24 bg-white border-4 border-strawberry-red-950 rounded-xl md:rounded-2xl flex items-center justify-center mb-6 md:mb-8 -rotate-2">
              <span className="material-symbols-outlined text-strawberry-red-500 text-5xl md:text-6xl font-bold">
                bar_chart
              </span>
            </div>
            <h3 className="text-xl md:text-2xl font-black text-strawberry-red-950 mb-3 md:mb-4 font-display uppercase tracking-tight">
              Veja Onde Concorrentes Falham
            </h3>
            <p className="text-strawberry-red-900 font-bold leading-relaxed text-base md:text-lg">
              Descubra nichos ignorados pela concorrência.
            </p>
          </div>

          <div className="p-6 md:p-10 bg-strawberry-red-50 rounded-2xl md:rounded-3xl neo-card flex flex-col items-center text-center shadow-[8px_8px_0px_0px_rgba(76,5,25,1)] md:shadow-[12px_12px_0px_0px_rgba(76,5,25,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(76,5,25,1)] md:hover:shadow-[8px_8px_0px_0px_rgba(76,5,25,1)] transition-all md:col-span-2 lg:col-span-1">
            <div className="w-20 h-20 md:w-24 md:h-24 bg-white border-4 border-strawberry-red-950 rounded-xl md:rounded-2xl flex items-center justify-center mb-6 md:mb-8 rotate-6">
              <span className="material-symbols-outlined text-strawberry-red-500 text-5xl md:text-6xl font-bold">
                target
              </span>
            </div>
            <h3 className="text-xl md:text-2xl font-black text-strawberry-red-950 mb-3 md:mb-4 font-display uppercase tracking-tight">
              Encontre Nichos Exclusivos
            </h3>
            <p className="text-strawberry-red-900 font-bold leading-relaxed text-base md:text-lg">
              Algoritmo que cruza procura alta com oferta inexistente.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
