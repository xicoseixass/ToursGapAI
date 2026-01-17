'use client';

import React, { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  profile: string;
  city: string;
  whatsapp: string;
  motivation: string;
}

export default function LeadForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    profile: '',
    city: '',
    whatsapp: '',
    motivation: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('/api/submit-lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Erro ao enviar formulário');
      }

      setIsSuccess(true);
      setFormData({
        name: '',
        email: '',
        profile: '',
        city: '',
        whatsapp: '',
        motivation: '',
      });
    } catch (err) {
      setError('Ocorreu um erro ao enviar a sua candidatura. Por favor, tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <section className="py-32 bg-white" id="apply">
        <div className="max-w-4xl mx-auto px-6">
          <div className="glass-premium p-16 rounded-[3rem] relative overflow-hidden text-center">
            <div className="w-20 h-20 bg-emerald-500 rounded-full mx-auto mb-6 flex items-center justify-center border-4 border-strawberry-red-950">
              <span className="material-symbols-outlined text-white text-4xl font-bold">
                check_circle
              </span>
            </div>
            <h2 className="text-4xl font-black font-display text-strawberry-red-950 mb-4">
              Candidatura Enviada!
            </h2>
            <p className="text-lg text-strawberry-red-950 font-bold">
              Entraremos em contacto em breve via WhatsApp.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-32 bg-white" id="apply">
      <div className="max-w-4xl mx-auto px-6">
        <div className="glass-premium p-10 md:p-16 rounded-[3rem] relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-strawberry-red-100 rounded-full blur-3xl opacity-60"></div>

          <div className="text-center mb-12">
            <h2 className="text-strawberry-red-600 font-black text-sm uppercase tracking-[0.4em] mb-4">
              Candidatura
            </h2>
            <h3 className="text-5xl font-black font-display text-strawberry-red-950">
              Seja Parceiro Fundador
            </h3>
            <p className="mt-4 text-strawberry-red-950 font-bold">
              Avaliamos a compatibilidade com a nossa rede restrita.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8 relative">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="block text-sm font-black text-strawberry-red-950 uppercase tracking-widest">
                  Nome
                </label>
                <input
                  required
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-white border-4 border-strawberry-red-950 rounded-xl py-4 px-6 text-strawberry-red-950 font-bold focus:ring-0 focus:border-strawberry-red-600 transition-all"
                  placeholder="Seu nome completo"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-black text-strawberry-red-950 uppercase tracking-widest">
                  Email
                </label>
                <input
                  required
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-white border-4 border-strawberry-red-950 rounded-xl py-4 px-6 text-strawberry-red-950 font-bold focus:ring-0 focus:border-strawberry-red-600 transition-all"
                  placeholder="seu@email.com"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="block text-sm font-black text-strawberry-red-950 uppercase tracking-widest">
                  Perfil Profissional
                </label>
                <select
                  required
                  value={formData.profile}
                  onChange={(e) => setFormData({ ...formData, profile: e.target.value })}
                  className="w-full bg-white border-4 border-strawberry-red-950 rounded-xl py-4 px-6 text-strawberry-red-950 font-bold focus:ring-0 focus:border-strawberry-red-600 transition-all"
                >
                  <option value="">Selecione o seu perfil</option>
                  <option value="Operador Turístico Solo">Operador Turístico Solo</option>
                  <option value="Agência de Viagens">Agência de Viagens</option>
                  <option value="Investidor">Investidor</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-black text-strawberry-red-950 uppercase tracking-widest">
                  Cidade de Atuação
                </label>
                <input
                  required
                  type="text"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="w-full bg-white border-4 border-strawberry-red-950 rounded-xl py-4 px-6 text-strawberry-red-950 font-bold focus:ring-0 focus:border-strawberry-red-600 transition-all"
                  placeholder="Ex: Lisboa, Porto..."
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-black text-strawberry-red-950 uppercase tracking-widest">
                WhatsApp Directo
              </label>
              <div className="relative">
                <span className="absolute left-6 top-1/2 -translate-y-1/2 text-strawberry-red-600 font-black">
                  +351
                </span>
                <input
                  required
                  type="tel"
                  value={formData.whatsapp}
                  onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                  className="w-full bg-white border-4 border-strawberry-red-950 rounded-xl py-4 pl-20 pr-6 text-strawberry-red-950 font-bold focus:ring-0 focus:border-strawberry-red-600 transition-all"
                  placeholder="912 345 678"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-black text-strawberry-red-950 uppercase tracking-widest">
                Motivação
              </label>
              <textarea
                required
                value={formData.motivation}
                onChange={(e) => setFormData({ ...formData, motivation: e.target.value })}
                className="w-full bg-white border-4 border-strawberry-red-950 rounded-xl py-4 px-6 text-strawberry-red-950 font-bold focus:ring-0 focus:border-strawberry-red-600 transition-all resize-none"
                placeholder="Porquê ser parceiro fundador?"
                rows={4}
              ></textarea>
            </div>

            {error && (
              <div className="bg-strawberry-red-100 border-4 border-strawberry-red-950 rounded-xl p-4">
                <p className="text-strawberry-red-950 font-bold text-center">{error}</p>
              </div>
            )}

            <div className="pt-6">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-strawberry-red-600 text-white py-6 rounded-2xl font-black text-lg tracking-widest uppercase neo-button disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'A ENVIAR...' : 'SUBMETER CANDIDATURA PRIORITÁRIA'}
              </button>
              <p className="text-center text-xs font-black text-strawberry-red-400 mt-8 flex items-center justify-center space-x-2">
                <span className="material-symbols-outlined text-sm font-bold">lock</span>
                <span>DADOS PROTEGIDOS CONTRA A CONCORRÊNCIA</span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
