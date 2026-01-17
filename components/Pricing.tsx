'use client';

import React from 'react';

export default function Pricing() {
  return (
    <section className="py-32 bg-strawberry-red-50 border-y-4 border-strawberry-red-950" id="pricing">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-strawberry-red-600 font-black text-sm uppercase tracking-[0.4em] mb-4">
            Investimento
          </h2>
          <h3 className="text-5xl font-black font-display text-strawberry-red-950 mb-6">
            Planos de Inteligência
          </h3>
          <p className="text-xl text-strawberry-red-950 font-bold">
            Escalabilidade total para o seu negócio.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-6 items-stretch">
          {/* Explorer Plan */}
          <div className="bg-white p-8 rounded-3xl neo-card flex flex-col hover:shadow-[14px_14px_0px_0px_rgba(76,5,25,0.1)] transition-all">
            <h4 className="font-black text-strawberry-red-400 uppercase text-[10px] tracking-widest mb-4">
              Explorer
            </h4>
            <div className="flex items-baseline mb-6">
              <span className="text-4xl font-black text-strawberry-red-950">Grátis</span>
            </div>
            <ul className="space-y-4 mb-8 flex-grow">
              <li className="flex items-start space-x-3 text-sm font-bold text-strawberry-red-950">
                <span className="material-symbols-outlined text-strawberry-red-500 text-lg font-bold">
                  check
                </span>
                <span>Dados básicos de 1 cidade.</span>
              </li>
            </ul>
            <a
              className="block w-full text-center py-4 rounded-xl border-4 border-strawberry-red-950 font-black text-xs text-strawberry-red-950 hover:bg-strawberry-red-950 hover:text-white transition-all"
              href="#apply"
            >
              COMEÇAR GRÁTIS
            </a>
          </div>

          {/* Strategist Pro Plan (Featured) */}
          <div className="bg-strawberry-red-600 p-8 rounded-3xl neo-card relative z-10 flex flex-col shadow-[12px_12px_0px_0px_#4c0519]">
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-strawberry-red-950 text-white text-[10px] font-black px-4 py-1.5 rounded-full tracking-widest uppercase border-4 border-white shadow-xl whitespace-nowrap">
              Mais Popular
            </div>
            <h4 className="font-black text-strawberry-red-100 uppercase text-[10px] tracking-widest mb-4">
              Strategist Pro
            </h4>
            <div className="flex items-baseline mb-6 text-white">
              <span className="text-5xl font-black">€49</span>
              <span className="text-strawberry-red-100 font-bold ml-1 text-sm">/mês</span>
            </div>
            <ul className="space-y-4 mb-8 flex-grow">
              <li className="flex items-start space-x-3 text-sm font-bold text-white">
                <span className="material-symbols-outlined text-strawberry-red-200 text-lg font-bold">
                  verified
                </span>
                <span>Alertas em tempo real + IA Advisor no WhatsApp.</span>
              </li>
            </ul>
            <a
              className="block w-full text-center py-4 rounded-xl bg-white text-strawberry-red-600 font-black text-xs hover:bg-strawberry-red-950 hover:text-white transition-all neo-button"
              href="#apply"
            >
              ADQUIRIR PRO
            </a>
          </div>

          {/* Market Leader Plan */}
          <div className="bg-white p-8 rounded-3xl neo-card flex flex-col hover:shadow-[14px_14px_0px_0px_rgba(76,5,25,0.1)] transition-all">
            <h4 className="font-black text-strawberry-red-400 uppercase text-[10px] tracking-widest mb-4">
              Market Leader
            </h4>
            <div className="flex items-baseline mb-6">
              <span className="text-5xl font-black text-strawberry-red-950">€199</span>
              <span className="text-strawberry-red-400 font-bold ml-1 text-sm">/mês</span>
            </div>
            <ul className="space-y-4 mb-8 flex-grow">
              <li className="flex items-start space-x-3 text-sm font-bold text-strawberry-red-950">
                <span className="material-symbols-outlined text-strawberry-red-500 text-lg font-bold">
                  check
                </span>
                <span>Consultoria de dados para agências de grande escala.</span>
              </li>
            </ul>
            <a
              className="block w-full text-center py-4 rounded-xl bg-strawberry-red-950 text-white font-black text-xs hover:bg-strawberry-red-600 transition-all border-4 border-strawberry-red-950"
              href="#apply"
            >
              ESCOLHER LÍDER
            </a>
          </div>

          {/* Business-in-a-Box Plan */}
          <div className="bg-white p-8 rounded-3xl neo-card flex flex-col hover:shadow-[14px_14px_0px_0px_rgba(76,5,25,0.1)] transition-all border-dashed">
            <h4 className="font-black text-strawberry-red-400 uppercase text-[10px] tracking-widest mb-4">
              Business-in-a-Box
            </h4>
            <div className="flex items-baseline mb-6">
              <span className="text-5xl font-black text-strawberry-red-950">€99</span>
              <span className="text-strawberry-red-400 font-bold ml-1 text-sm">único</span>
            </div>
            <ul className="space-y-4 mb-8 flex-grow">
              <li className="flex items-start space-x-3 text-sm font-bold text-strawberry-red-950">
                <span className="material-symbols-outlined text-strawberry-red-500 text-lg font-bold">
                  package_2
                </span>
                <span>Guia completo para abrir um novo nicho.</span>
              </li>
            </ul>
            <a
              className="block w-full text-center py-4 rounded-xl border-4 border-strawberry-red-950 font-black text-xs text-strawberry-red-950 hover:bg-strawberry-red-50 transition-all"
              href="#apply"
            >
              COMPRAR GUIA
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
