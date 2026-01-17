'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface User {
  id: string;
  email: string;
  name?: string;
}

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check authentication
    const checkAuth = async () => {
      try {
        const response = await fetch('/api/auth/user');
        const data = await response.json();

        if (!response.ok || !data.user) {
          router.push('/login');
          return;
        }

        setUser(data.user);
      } catch (error) {
        console.error('Auth check failed:', error);
        router.push('/login');
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, [router]);

  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' });
      router.push('/');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center mesh-gradient">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-16 w-16 border-8 border-strawberry-red-950 border-t-transparent"></div>
          <p className="mt-4 text-strawberry-red-950 font-black text-lg">Carregando...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen mesh-gradient">
      {/* Navigation */}
      <nav className="border-b-4 border-strawberry-red-950 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-black text-strawberry-red-950 font-display">
            TourGap.AI
          </Link>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-3">
              <span className="text-strawberry-red-950 font-bold">
                {user?.name || user?.email}
              </span>
              <div className="w-10 h-10 bg-strawberry-red-600 rounded-full flex items-center justify-center border-4 border-strawberry-red-950">
                <span className="text-white font-black text-lg">
                  {(user?.name || user?.email || 'U')[0].toUpperCase()}
                </span>
              </div>
            </div>

            <button
              onClick={handleLogout}
              className="bg-white border-4 border-strawberry-red-950 text-strawberry-red-950 px-6 py-2 rounded-xl font-black text-xs tracking-wide neo-button hover:bg-strawberry-red-50 transition-all"
            >
              SAIR
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12">
        {/* Welcome Section */}
        <div className="bg-white rounded-2xl md:rounded-3xl p-8 md:p-10 neo-card mb-8">
          <h1 className="text-3xl md:text-5xl font-black text-strawberry-red-950 font-display mb-4">
            Bem-vindo ao Dashboard! 👋
          </h1>
          <p className="text-lg text-strawberry-red-600 font-bold">
            {user?.name ? `Olá, ${user.name}!` : 'Olá!'} Este é o seu painel de controle.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-2xl p-6 neo-card">
            <div className="flex items-center justify-between mb-4">
              <span className="material-symbols-outlined text-strawberry-red-600 text-4xl font-bold">
                analytics
              </span>
              <span className="text-2xl font-black text-strawberry-red-950">0</span>
            </div>
            <h3 className="text-strawberry-red-950 font-black uppercase text-xs tracking-widest">
              Análises Realizadas
            </h3>
          </div>

          <div className="bg-white rounded-2xl p-6 neo-card">
            <div className="flex items-center justify-between mb-4">
              <span className="material-symbols-outlined text-strawberry-red-600 text-4xl font-bold">
                notifications_active
              </span>
              <span className="text-2xl font-black text-strawberry-red-950">0</span>
            </div>
            <h3 className="text-strawberry-red-950 font-black uppercase text-xs tracking-widest">
              Alertas Ativos
            </h3>
          </div>

          <div className="bg-white rounded-2xl p-6 neo-card">
            <div className="flex items-center justify-between mb-4">
              <span className="material-symbols-outlined text-strawberry-red-600 text-4xl font-bold">
                target
              </span>
              <span className="text-2xl font-black text-strawberry-red-950">0</span>
            </div>
            <h3 className="text-strawberry-red-950 font-black uppercase text-xs tracking-widest">
              Oportunidades Encontradas
            </h3>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-2xl md:rounded-3xl p-8 md:p-10 neo-card">
          <h2 className="text-2xl md:text-3xl font-black text-strawberry-red-950 font-display mb-6">
            Ações Rápidas
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            <button className="bg-strawberry-red-600 text-white px-6 py-5 rounded-xl font-black text-sm tracking-widest neo-button hover:bg-strawberry-red-700 transition-all flex items-center justify-center">
              <span className="material-symbols-outlined mr-2">search</span>
              NOVA ANÁLISE
            </button>

            <button className="bg-white border-4 border-strawberry-red-950 text-strawberry-red-950 px-6 py-5 rounded-xl font-black text-sm tracking-widest neo-button hover:bg-strawberry-red-50 transition-all flex items-center justify-center">
              <span className="material-symbols-outlined mr-2">settings</span>
              CONFIGURAÇÕES
            </button>

            <button className="bg-white border-4 border-strawberry-red-950 text-strawberry-red-950 px-6 py-5 rounded-xl font-black text-sm tracking-widest neo-button hover:bg-strawberry-red-50 transition-all flex items-center justify-center">
              <span className="material-symbols-outlined mr-2">upgrade</span>
              ATUALIZAR PLANO
            </button>

            <button className="bg-white border-4 border-strawberry-red-950 text-strawberry-red-950 px-6 py-5 rounded-xl font-black text-sm tracking-widest neo-button hover:bg-strawberry-red-50 transition-all flex items-center justify-center">
              <span className="material-symbols-outlined mr-2">help</span>
              SUPORTE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
