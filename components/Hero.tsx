'use client';

import React from 'react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative pt-48 pb-32 overflow-hidden mesh-gradient">
      {/* Organic shapes */}
      <div className="organic-shape bg-strawberry-red-200 w-[500px] h-[500px] rounded-full -top-20 -right-20"></div>
      <div className="organic-shape bg-strawberry-red-100 w-[600px] h-[600px] rounded-[30%] -bottom-32 -left-32"></div>
      <div className="organic-shape bg-strawberry-red-200 w-80 h-80 rounded-full top-1/4 left-1/3"></div>

      {/* Geometric decorations */}
      <div className="absolute top-40 right-[15%] w-24 h-24 border-4 border-strawberry-red-200 rounded-2xl rotate-12 opacity-50"></div>
      <div className="absolute bottom-40 left-[10%] w-16 h-16 bg-strawberry-red-100 rounded-full opacity-60"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-10 relative">
            {/* Beta Badge */}
            <div className="inline-flex items-center space-x-3 px-1 py-1 bg-white rounded-full border-4 border-strawberry-red-950 shadow-[4px_4px_0px_0px_rgba(76,5,25,1)]">
              <div className="flex items-center pl-4 pr-2">
                <span className="relative flex h-3 w-3 mr-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-strawberry-red-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-strawberry-red-500"></span>
                </span>
                <span className="text-xs font-black text-strawberry-red-950 uppercase tracking-widest">
                  Lançamento Beta
                </span>
              </div>
              <div className="flex items-center bg-strawberry-red-950 text-white px-4 py-1.5 rounded-full text-[11px] font-black">
                <div className="w-5 h-5 rounded-full bg-strawberry-red-300 mr-2 border-2 border-white overflow-hidden">
                  <Image
                    alt="avatar"
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLVbpTxxlvSHkbq0OcjEMUpOieqgQmhob-uhMmeMxo9bcinXWdLj5Ffxh0-UY3qpj60Sc9HK4vulE10oA8-i2_u2FbfzHLuNpFyVKdqbdMUkg2Uq5oJp9Jkua71B4OlKUzfuMb9NlfEevAQjjOOfDtSgxeyfiOj8RjouQK7bJj4AloxhFL8BjSa08_NH3qoy74SA6KeFdcgUXf_iN1ZWJGgyDmpCPl1N_jCCeXia9q3yZhUB0XJwoi-zdSYsYy1rI9lGq4KiNS698"
                    width={20}
                    height={20}
                  />
                </div>
                <span>8000+ Análises</span>
              </div>
            </div>

            {/* Headline */}
            <div className="relative">
              <h1 className="text-6xl lg:text-8xl font-black leading-[0.95] font-display text-strawberry-red-950">
                Não adivinhe o seu{' '}
                <span className="text-strawberry-red-600 underline decoration-8 decoration-strawberry-red-200 underline-offset-8">
                  negócio.
                </span>
                <br />
                <span className="italic font-bold">Capture a lacuna.</span>
              </h1>
            </div>

            {/* Subheadline */}
            <div className="relative">
              <p className="text-2xl text-strawberry-red-950 max-w-xl leading-snug font-medium">
                O TourGap.AI identifica falhas reais dos seus concorrentes e deteta oportunidades de lucro em{' '}
                <span className="bg-strawberry-red-200 px-2 font-bold">Lisboa</span>.
              </p>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row items-center gap-8 pt-4">
              <a
                className="w-full sm:w-auto bg-strawberry-red-600 text-white px-10 py-6 rounded-xl font-black text-sm tracking-widest neo-button flex items-center justify-center group"
                href="#apply"
              >
                <span>QUERO SER PARCEIRO FUNDADOR</span>
                <span className="material-symbols-outlined ml-2 group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </a>
              <div className="flex items-center space-x-2 text-strawberry-red-950 font-bold">
                <span className="material-symbols-outlined fill-1 text-strawberry-red-600">verified</span>
                <span className="text-xs uppercase tracking-tight">Acesso restrito a 50 vagas</span>
              </div>
            </div>
          </div>

          {/* Right side - Market Gap Card */}
          <div className="relative">
            <div className="absolute -top-14 -right-8 w-32 h-32 z-30 starburst-sticker text-[12px] leading-tight p-2 shadow-xl">
              <span className="font-black">
                LÍDER EM<br />
                LISBOA
              </span>
            </div>

            <div className="glass-premium rounded-3xl p-8 relative overflow-hidden neo-card">
              <div className="flex items-center justify-between mb-10">
                <div>
                  <h3 className="font-black text-2xl font-display text-strawberry-red-950">
                    Market Gap Alert
                  </h3>
                  <p className="text-xs font-bold text-strawberry-red-600 uppercase tracking-widest">
                    Análise em Tempo Real • Lisboa
                  </p>
                </div>
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center border-4 border-strawberry-red-950 shadow-[4px_4px_0px_0px_rgba(76,5,25,1)]">
                  <span className="material-symbols-outlined text-strawberry-red-600 text-3xl font-bold">
                    notifications_active
                  </span>
                </div>
              </div>

              <div className="space-y-6">
                <div className="p-5 bg-white rounded-2xl border-4 border-strawberry-red-950 shadow-[6px_6px_0px_0px_rgba(76,5,25,0.05)] flex items-center space-x-5">
                  <div className="w-20 h-20 rounded-xl overflow-hidden border-2 border-strawberry-red-950">
                    <Image
                      alt="Market Data"
                      className="w-full h-full object-cover"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvszOuYdbCFqE3RptneJSxdcDxUgQOnuP9dek9jSvT6OAM1uc3s8mTD4bcLxmslrSkyaBgw1uHFPcPwlm4HqLSSsXJxwrxWJQ5eNwciaqfQ9Aryn3ddB_osKAEygmoMUQ-lGWhYX2WpF53sP_rNFvJQWVebPvuJ4pyuGM6ziLdgMMAYtVBdduShkhT1CvpFFQwCq1vJtg-yUVtURTIbXdnPal6r3HMvoxX3lE0DdwIb5nF62fgQBlIcZt2FKVHkUPcvldX4zGY7Q4"
                      width={80}
                      height={80}
                    />
                  </div>
                  <div className="flex-grow">
                    <div className="flex justify-between items-center mb-1">
                      <h4 className="font-black text-strawberry-red-950">Gastronomia Vegana</h4>
                      <span className="text-[10px] font-black bg-strawberry-red-950 text-white px-2 py-1 rounded">
                        SCORE: 9.2
                      </span>
                    </div>
                    <p className="text-xs font-bold text-strawberry-red-400 mb-3 uppercase">
                      Lote: Alfama & Mouraria
                    </p>
                    <div className="h-4 w-full bg-strawberry-red-100 rounded-full border-2 border-strawberry-red-950 overflow-hidden">
                      <div className="h-full w-[92%] bg-strawberry-red-500"></div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="p-6 bg-white rounded-2xl border-4 border-strawberry-red-950">
                    <p className="text-[10px] font-black text-strawberry-red-400 uppercase tracking-widest mb-2">
                      Demanda Global
                    </p>
                    <div className="flex items-baseline space-x-2">
                      <span className="text-4xl font-black text-strawberry-red-950">Alta</span>
                      <span className="text-strawberry-red-600 text-lg font-black">↑ 22%</span>
                    </div>
                  </div>
                  <div className="p-6 bg-white rounded-2xl border-4 border-strawberry-red-950">
                    <p className="text-[10px] font-black text-strawberry-red-400 uppercase tracking-widest mb-2">
                      Concorrência
                    </p>
                    <div className="flex items-baseline space-x-2">
                      <span className="text-4xl font-black text-strawberry-red-950">Baixa</span>
                      <span className="text-emerald-500 text-lg font-black">↓ 8%</span>
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
