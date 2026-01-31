'use client';

import React, { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  profile: string;
  city: string;
  whatsapp: string;
  honeypot: string;
}

export default function LeadForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    profile: '',
    city: '',
    whatsapp: '',
    honeypot: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    // Honeypot spam protection
    if (formData.honeypot) {
      setIsSuccess(true);
      return;
    }

    // WhatsApp validation (Portuguese format: 9 digits)
    const whatsappRegex = /^[9][0-9]{8}$/;
    if (!whatsappRegex.test(formData.whatsapp)) {
      setError('Por favor, insira um número de WhatsApp válido (formato: 912345678)');
      setIsSubmitting(false);
      return;
    }

    try {
      const { honeypot, ...dataToSend } = formData;
      const response = await fetch('/api/submit-lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend),
      });

      const result = await response.json();

      if (!response.ok) {
        setError(result.error || 'Erro ao enviar formulário');
        setIsSubmitting(false);
        return;
      }

      setIsSuccess(true);
      setFormData({
        name: '',
        email: '',
        profile: '',
        city: '',
        whatsapp: '',
        honeypot: '',
      });
    } catch (err) {
      console.error('Form submission error:', err);
      setError('Ocorreu um erro ao enviar a sua candidatura. Por favor, tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <section className="py-20 md:py-32 bg-white" id="apply">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <div className="glass-premium p-8 md:p-16 rounded-2xl md:rounded-[3rem] relative overflow-hidden text-center">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-emerald-500 rounded-full mx-auto mb-4 md:mb-6 flex items-center justify-center border-4 border-strawberry-red-950">
              <span className="material-symbols-outlined text-white text-3xl md:text-4xl font-bold">
                check_circle
              </span>
            </div>
            <h2 className="text-2xl md:text-4xl font-black font-display text-strawberry-red-950 mb-3 md:mb-4">
              Candidatura Enviada!
            </h2>
            <p className="text-base md:text-lg text-strawberry-red-950 font-bold">
              Entraremos em contacto em breve via WhatsApp.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 md:py-32 bg-white" id="apply">
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        <div className="glass-premium p-6 md:p-10 lg:p-16 rounded-2xl md:rounded-[3rem] relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-48 md:w-64 h-48 md:h-64 bg-strawberry-red-100 rounded-full blur-3xl opacity-60"></div>

          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-strawberry-red-600 font-black text-xs md:text-sm uppercase tracking-[0.4em] mb-3 md:mb-4">
              Acesso Prioritário
            </h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-strawberry-red-950">
              Junte-se aos Parceiros Fundadores
            </h3>
            <p className="mt-3 md:mt-4 text-strawberry-red-950 font-bold text-sm md:text-base">
              Vagas limitadas para a nossa rede restrita.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8 relative">
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              <div className="space-y-2">
                <label className="block text-xs md:text-sm font-black text-strawberry-red-950 uppercase tracking-widest">
                  Nome
                </label>
                <input
                  required
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-white border-4 border-strawberry-red-950 rounded-xl py-3 md:py-4 px-4 md:px-6 text-strawberry-red-950 font-bold focus:ring-0 focus:border-strawberry-red-600 transition-all text-sm md:text-base"
                  placeholder="Seu nome completo"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-xs md:text-sm font-black text-strawberry-red-950 uppercase tracking-widest">
                  Email
                </label>
                <input
                  required
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-white border-4 border-strawberry-red-950 rounded-xl py-3 md:py-4 px-4 md:px-6 text-strawberry-red-950 font-bold focus:ring-0 focus:border-strawberry-red-600 transition-all text-sm md:text-base"
                  placeholder="seu@email.com"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              <div className="space-y-2">
                <label className="block text-xs md:text-sm font-black text-strawberry-red-950 uppercase tracking-widest">
                  Perfil Profissional
                </label>
                <select
                  required
                  value={formData.profile}
                  onChange={(e) => setFormData({ ...formData, profile: e.target.value })}
                  className="w-full bg-white border-4 border-strawberry-red-950 rounded-xl py-3 md:py-4 px-4 md:px-6 text-strawberry-red-950 font-bold focus:ring-0 focus:border-strawberry-red-600 transition-all text-sm md:text-base"
                >
                  <option value="">Selecione o seu perfil</option>
                  <option value="Operador Turístico Solo">Operador Turístico Solo</option>
                  <option value="Agência de Viagens">Agência de Viagens</option>
                  <option value="Investidor">Investidor</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="block text-xs md:text-sm font-black text-strawberry-red-950 uppercase tracking-widest">
                  Cidade de Atuação
                </label>
                <input
                  required
                  type="text"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="w-full bg-white border-4 border-strawberry-red-950 rounded-xl py-3 md:py-4 px-4 md:px-6 text-strawberry-red-950 font-bold focus:ring-0 focus:border-strawberry-red-600 transition-all text-sm md:text-base"
                  placeholder="Ex: Lisboa, Porto..."
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-xs md:text-sm font-black text-strawberry-red-950 uppercase tracking-widest">
                WhatsApp Directo
              </label>
              <div className="relative">
                <span className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 text-strawberry-red-600 font-black text-sm md:text-base">
                  +351
                </span>
                <input
                  required
                  type="tel"
                  value={formData.whatsapp}
                  onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                  className="w-full bg-white border-4 border-strawberry-red-950 rounded-xl py-3 md:py-4 pl-16 md:pl-20 pr-4 md:pr-6 text-strawberry-red-950 font-bold focus:ring-0 focus:border-strawberry-red-600 transition-all text-sm md:text-base"
                  placeholder="912 345 678"
                />
              </div>
            </div>

            {/* Honeypot field - hidden from users */}
            <input
              type="text"
              name="website"
              value={formData.honeypot}
              onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
            />

            {error && (
              <div className="bg-strawberry-red-100 border-4 border-strawberry-red-950 rounded-xl p-3 md:p-4">
                <p className="text-strawberry-red-950 font-bold text-center text-sm md:text-base">{error}</p>
              </div>
            )}

            <div className="pt-4 md:pt-6">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-strawberry-red-600 text-white py-4 md:py-6 rounded-xl md:rounded-2xl font-black text-sm md:text-lg tracking-widest uppercase neo-button disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'A ENVIAR...' : 'GARANTIR ACESSO PRIORITÁRIO'}
              </button>
              <p className="text-center text-[10px] md:text-xs font-black text-strawberry-red-400 mt-6 md:mt-8 flex items-center justify-center space-x-2">
                <span className="material-symbols-outlined text-xs md:text-sm font-bold">lock</span>
                <span>DADOS PROTEGIDOS CONTRA A CONCORRÊNCIA</span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
