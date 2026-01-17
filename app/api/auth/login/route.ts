import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, password } = body;

    // Validate required fields
    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email e senha são obrigatórios' },
        { status: 400 }
      );
    }

    // Create Supabase client
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseAnonKey) {
      console.error('Missing Supabase environment variables');
      return NextResponse.json(
        { error: 'Configuração do servidor incorreta' },
        { status: 500 }
      );
    }

    const supabase = createClient(supabaseUrl, supabaseAnonKey);

    // Sign in with email and password
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      console.error('Supabase auth error:', error);

      let errorMessage = 'Erro ao fazer login';

      if (error.message === 'Invalid login credentials') {
        errorMessage = 'Email ou senha incorretos';
      } else if (error.message === 'Email not confirmed') {
        errorMessage = 'Email não confirmado. Verifique sua caixa de entrada e confirme seu email.';
      }

      return NextResponse.json(
        { error: errorMessage },
        { status: 401 }
      );
    }

    // Create response with session cookie
    const response = NextResponse.json(
      {
        message: 'Login realizado com sucesso',
        user: {
          id: data.user?.id,
          email: data.user?.email,
          name: data.user?.user_metadata?.name,
        }
      },
      { status: 200 }
    );

    // Set session cookie
    if (data.session) {
      response.cookies.set('sb-access-token', data.session.access_token, {
        path: '/',
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 60 * 60 * 24 * 7, // 7 days
      });

      response.cookies.set('sb-refresh-token', data.session.refresh_token, {
        path: '/',
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 60 * 60 * 24 * 7, // 7 days
      });
    }

    return response;
  } catch (error) {
    console.error('Server error:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}
