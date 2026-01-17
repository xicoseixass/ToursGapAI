import React from 'react';
import { TrendingUp } from 'lucide-react';

export default function SocialProof() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white" id="about">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-strawberry-red-600 to-strawberry-red-700 rounded-3xl p-12 lg:p-20 text-center shadow-2xl">
          <div className="flex justify-center mb-6">
            <div className="bg-white/20 p-4 rounded-full">
              <TrendingUp className="w-12 h-12 text-white" />
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-6xl lg:text-8xl font-bold text-white">
              8.000+
            </h2>
            <p className="text-2xl lg:text-3xl text-white/90 font-semibold">
              Oportunidades Analisadas
            </p>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Dados reais de mercado transformados em insights acionáveis para operadores turísticos em Portugal.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
