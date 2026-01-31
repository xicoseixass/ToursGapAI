'use client';

import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative pt-32 md:pt-48 pb-20 md:pb-32 mesh-gradient">
      {/* Organic shapes */}
      <div className="organic-shape bg-strawberry-red-200 w-[180px] md:w-[500px] h-[180px] md:h-[500px] rounded-full -top-20 right-0 md:-right-20"></div>
      <div className="organic-shape bg-strawberry-red-100 w-[280px] md:w-[600px] h-[280px] md:h-[600px] rounded-[30%] -bottom-32 -left-20 md:-left-32"></div>
      <div className="organic-shape bg-strawberry-red-200 w-48 md:w-80 h-48 md:h-80 rounded-full top-1/4 left-1/3 hidden md:block"></div>

      {/* Geometric decorations */}
      <div className="absolute top-40 right-[15%] w-16 md:w-24 h-16 md:h-24 border-4 border-strawberry-red-200 rounded-2xl rotate-12 opacity-50 hidden md:block"></div>
      <div className="absolute bottom-40 left-[10%] w-12 md:w-16 h-12 md:h-16 bg-strawberry-red-100 rounded-full opacity-60 hidden md:block"></div>

      <div className="max-w-7xl mx-auto px-3 sm:px-6 md:px-8 lg:px-10 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-24 items-center max-w-full">
          <div className="space-y-6 md:space-y-10 relative">
            {/* Badge */}
            <div className="inline-block bg-strawberry-red-100 border-2 border-strawberry-red-950 px-4 py-1 mb-2 font-bold transform -rotate-2 shadow-[4px_4px_0px_0px_rgba(76,5,25,1)]">
              🎯 Focado em Portugal: Lisboa, Porto, Algarve
            </div>

            {/* Headline */}
            <div className="relative">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] font-display text-strawberry-red-950">
                O Turismo em Portugal{' '}
                <span className="text-strawberry-red-600 px-2 bg-white border-2 border-strawberry-red-950 shadow-[4px_4px_0px_0px_rgba(76,5,25,1)] inline-block transform rotate-1">
                  não
                </span>{' '}
                está saturado.
                <br />
                O seu nicho é que está.
              </h1>
            </div>

            {/* Subheadline */}
            <div className="relative">
              <p className="text-lg sm:text-xl md:text-2xl text-strawberry-red-950 max-w-2xl leading-relaxed font-medium">
                Enquanto centenas de empresas competem pelos mesmos tours, o nosso algoritmo identifica{' '}
                <span className="bg-strawberry-red-200 px-1 border-b-4 border-strawberry-red-500">falhas de mercado inexploradas</span> em Portugal.
              </p>
            </div>

            {/* CTA */}
            <div className="flex flex-col items-start gap-4 pt-4">
              <a
                className="w-full sm:w-auto bg-strawberry-red-500 text-white text-lg sm:text-xl font-display font-black px-8 py-4 border-4 border-strawberry-red-950 shadow-[4px_4px_0px_0px_rgba(76,5,25,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(76,5,25,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[0px_0px_0px_0px_rgba(76,5,25,1)] transition-all uppercase tracking-wide"
                href="#apply"
              >
                Ver Falhas de Mercado Agora
              </a>
              <p className="text-sm font-bold opacity-80 pl-2">⚡ Análise atualizada diariamente</p>
            </div>
          </div>

          {/* Right side - Market Gap Card */}
          <div className="relative mt-8 lg:mt-0 max-w-full">
            <div className="absolute -top-8 md:-top-14 -right-1 md:-right-8 w-16 h-16 md:w-32 md:h-32 z-30 starburst-sticker text-[8px] md:text-[12px] leading-tight p-1.5 shadow-xl">
              <span className="font-black">
                DADOS<br />
                REAIS
              </span>
            </div>

            <div className="glass-premium rounded-2xl md:rounded-3xl p-6 md:p-8 relative overflow-hidden neo-card">
              <div className="flex items-center justify-between mb-6 md:mb-10">
                <div>
                  <h3 className="font-black text-xl md:text-2xl font-display text-strawberry-red-950">
                    Market Gap Alert
                  </h3>
                  <p className="text-[10px] md:text-xs font-bold text-strawberry-red-600 uppercase tracking-widest">
                    Análise em Tempo Real • Lisboa
                  </p>
                </div>
                <div className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-xl md:rounded-2xl flex items-center justify-center border-4 border-strawberry-red-950 shadow-[4px_4px_0px_0px_rgba(76,5,25,1)]">
                  <span className="material-symbols-outlined text-strawberry-red-600 text-2xl md:text-3xl font-bold">
                    notifications_active
                  </span>
                </div>
              </div>

              <div className="space-y-4 md:space-y-6">
                <div className="p-4 md:p-5 bg-white rounded-xl md:rounded-2xl border-4 border-strawberry-red-950 shadow-[6px_6px_0px_0px_rgba(76,5,25,0.05)] flex items-center space-x-3 md:space-x-5">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-lg md:rounded-xl overflow-hidden border-2 border-strawberry-red-950 flex-shrink-0">
                    <Image
                      alt="Market Data"
                      className="w-full h-full object-cover"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvszOuYdbCFqE3RptneJSxdcDxUgQOnuP9dek9jSvT6OAM1uc3s8mTD4bcLxmslrSkyaBgw1uHFPcPwlm4HqLSSsXJxwrxWJQ5eNwciaqfQ9Aryn3ddB_osKAEygmoMUQ-lGWhYX2WpF53sP_rNFvJQWVebPvuJ4pyuGM6ziLdgMMAYtVBdduShkhT1CvpFFQwCq1vJtg-yUVtURTIbXdnPal6r3HMvoxX3lE0DdwIb5nF62fgQBlIcZt2FKVHkUPcvldX4zGY7Q4"
                      width={80}
                      height={80}
                    />
                  </div>
                  <div className="flex-grow min-w-0">
                    <div className="flex justify-between items-center mb-1 gap-2">
                      <h4 className="font-black text-strawberry-red-950 text-sm md:text-base truncate">Gastronomia Vegana</h4>
                      <span className="text-[9px] md:text-[10px] font-black bg-strawberry-red-950 text-white px-2 py-1 rounded whitespace-nowrap">
                        SCORE: 9.2
                      </span>
                    </div>
                    <p className="text-[10px] md:text-xs font-bold text-strawberry-red-400 mb-2 md:mb-3 uppercase">
                      Lote: Alfama & Mouraria
                    </p>
                    <div className="h-3 md:h-4 w-full bg-strawberry-red-100 rounded-full border-2 border-strawberry-red-950 overflow-hidden">
                      <div className="h-full w-[92%] bg-strawberry-red-500"></div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 md:gap-6">
                  <div className="p-4 md:p-6 bg-white rounded-xl md:rounded-2xl border-4 border-strawberry-red-950">
                    <p className="text-[9px] md:text-[10px] font-black text-strawberry-red-400 uppercase tracking-widest mb-1 md:mb-2">
                      Demanda Global
                    </p>
                    <div className="flex items-baseline space-x-1 md:space-x-2">
                      <span className="text-2xl md:text-4xl font-black text-strawberry-red-950">Alta</span>
                      <span className="text-strawberry-red-600 text-sm md:text-lg font-black">↑ 22%</span>
                    </div>
                  </div>
                  <div className="p-4 md:p-6 bg-white rounded-xl md:rounded-2xl border-4 border-strawberry-red-950">
                    <p className="text-[9px] md:text-[10px] font-black text-strawberry-red-400 uppercase tracking-widest mb-1 md:mb-2">
                      Concorrência
                    </p>
                    <div className="flex items-baseline space-x-1 md:space-x-2">
                      <span className="text-2xl md:text-4xl font-black text-strawberry-red-950">Baixa</span>
                      <span className="text-emerald-500 text-sm md:text-lg font-black">↓ 8%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
