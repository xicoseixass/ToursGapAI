import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, profile, city, whatsapp } = body;

    console.log('Received form data:', { name, email, profile, city, whatsapp });

    // Validate required fields
    if (!name || !email || !profile || !city || !whatsapp) {
      return NextResponse.json(
        { error: 'Todos os campos são obrigatórios' },
        { status: 400 }
      );
    }

    // Create Supabase client in the route handler with service role key
    // Service role key bypasses RLS and should only be used server-side
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    console.log('Supabase URL:', supabaseUrl);
    console.log('Has service role key:', !!process.env.SUPABASE_SERVICE_ROLE_KEY);

    if (!supabaseUrl || !supabaseKey) {
      console.error('Missing environment variables');
      return NextResponse.json(
        { error: 'Configuração do servidor incorreta' },
        { status: 500 }
      );
    }

    const supabase = createClient(supabaseUrl, supabaseKey, {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
      },
    });

    // Insert into Supabase
    const { data, error } = await supabase
      .from('leads')
      .insert([
        {
          name,
          email,
          profile,
          city,
          whatsapp,
        },
      ])
      .select();

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json(
        { error: `Erro ao guardar dados: ${error.message}` },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'Candidatura enviada com sucesso', data },
      { status: 200 }
    );
  } catch (error) {
    console.error('Server error:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}
