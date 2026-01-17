'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function SignupPage() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleEmailSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Validate passwords match
    if (password !== confirmPassword) {
      setError('As senhas não coincidem');
      setLoading(false);
      return;
    }

    // Validate password strength
    if (password.length < 8) {
      setError('A senha deve ter pelo menos 8 caracteres');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Falha no cadastro');
      }

      // Redirect to login or dashboard
      router.push('/login?signup=success');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro ao criar conta');
    } finally {
      setLoading(false);
    }
  };

  const handleSocialSignup = async (provider: 'google' | 'facebook') => {
    setLoading(true);
    setError('');

    try {
      const response = await fetch(`/api/auth/oauth?provider=${provider}`);
      const data = await response.json();

      if (!response.ok) {
        if (data.error?.includes('not enabled')) {
          throw new Error(`${provider === 'google' ? 'Google' : 'Facebook'} login ainda não está configurado. Use email por enquanto.`);
        }
        throw new Error(data.error || 'Erro ao iniciar autenticação');
      }

      if (data.url) {
        window.location.href = data.url;
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro ao iniciar autenticação');
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center mesh-gradient px-4 py-12">
      <div className="max-w-md w-full">
        {/* Back to home link */}
        <Link
          href="/"
          className="inline-flex items-center text-strawberry-red-950 font-bold text-sm mb-8 hover:text-strawberry-red-600 transition-colors"
        >
          <span className="material-symbols-outlined mr-2">arrow_back</span>
          Voltar ao Início
        </Link>

        {/* Signup Card */}
        <div className="bg-white rounded-2xl md:rounded-3xl p-8 md:p-10 neo-card">
          {/* Logo/Title */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-black text-strawberry-red-950 font-display mb-2">
              Crie sua conta
            </h1>
            <p className="text-strawberry-red-600 font-bold">
              Comece a descobrir oportunidades
            </p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-6 p-4 bg-strawberry-red-50 border-4 border-strawberry-red-950 rounded-xl">
              <p className="text-strawberry-red-950 font-bold text-sm flex items-center">
                <span className="material-symbols-outlined mr-2 text-strawberry-red-600">error</span>
                {error}
              </p>
            </div>
          )}

          {/* Social Signup Buttons */}
          <div className="space-y-4 mb-6">
            <button
              onClick={() => handleSocialSignup('google')}
              disabled={loading}
              className="w-full bg-white border-4 border-strawberry-red-950 text-strawberry-red-950 px-6 py-4 rounded-xl font-black text-sm tracking-wide neo-button flex items-center justify-center hover:bg-strawberry-red-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              CONTINUAR COM GOOGLE
            </button>

            <button
              onClick={() => handleSocialSignup('facebook')}
              disabled={loading}
              className="w-full bg-white border-4 border-strawberry-red-950 text-strawberry-red-950 px-6 py-4 rounded-xl font-black text-sm tracking-wide neo-button flex items-center justify-center hover:bg-strawberry-red-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                <path fill="#1877F2" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              CONTINUAR COM FACEBOOK
            </button>
          </div>

          {/* Divider */}
          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t-4 border-strawberry-red-950"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="bg-white px-4 text-strawberry-red-600 font-black text-xs uppercase tracking-widest">
                Ou com email
              </span>
            </div>
          </div>

          {/* Email Signup Form */}
          <form onSubmit={handleEmailSignup} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-strawberry-red-950 font-black text-xs uppercase tracking-widest mb-2">
                Nome Completo
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full bg-white border-4 border-strawberry-red-950 rounded-xl py-4 px-6 text-strawberry-red-950 font-bold text-base focus:outline-none focus:ring-4 focus:ring-strawberry-red-200"
                placeholder="Seu Nome"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-strawberry-red-950 font-black text-xs uppercase tracking-widest mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-white border-4 border-strawberry-red-950 rounded-xl py-4 px-6 text-strawberry-red-950 font-bold text-base focus:outline-none focus:ring-4 focus:ring-strawberry-red-200"
                placeholder="seu@email.com"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-strawberry-red-950 font-black text-xs uppercase tracking-widest mb-2">
                Senha
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={8}
                className="w-full bg-white border-4 border-strawberry-red-950 rounded-xl py-4 px-6 text-strawberry-red-950 font-bold text-base focus:outline-none focus:ring-4 focus:ring-strawberry-red-200"
                placeholder="••••••••"
              />
              <p className="text-strawberry-red-600 font-bold text-xs mt-1">
                Mínimo de 8 caracteres
              </p>
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-strawberry-red-950 font-black text-xs uppercase tracking-widest mb-2">
                Confirmar Senha
              </label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="w-full bg-white border-4 border-strawberry-red-950 rounded-xl py-4 px-6 text-strawberry-red-950 font-bold text-base focus:outline-none focus:ring-4 focus:ring-strawberry-red-200"
                placeholder="••••••••"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-strawberry-red-600 text-white px-6 py-5 rounded-xl font-black text-sm tracking-widest neo-button hover:bg-strawberry-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              {loading ? 'CRIANDO CONTA...' : 'CRIAR CONTA'}
            </button>
          </form>

          {/* Login Link */}
          <div className="mt-8 text-center">
            <p className="text-strawberry-red-950 font-bold">
              Já tem uma conta?{' '}
              <Link
                href="/login"
                className="text-strawberry-red-600 font-black hover:text-strawberry-red-700 transition-colors"
              >
                Fazer login
              </Link>
            </p>
          </div>
        </div>

        {/* Terms */}
        <p className="text-center text-strawberry-red-600 font-bold text-xs mt-6">
          Ao criar uma conta, você concorda com os nossos{' '}
          <Link href="/terms" className="underline hover:text-strawberry-red-700">
            Termos de Serviço
          </Link>{' '}
          e{' '}
          <Link href="/privacy" className="underline hover:text-strawberry-red-700">
            Política de Privacidade
          </Link>
        </p>
      </div>
    </div>
  );
}
