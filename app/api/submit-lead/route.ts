import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, profile, city, whatsapp, motivation } = body;

    // Validate required fields
    if (!name || !email || !profile || !city || !whatsapp || !motivation) {
      return NextResponse.json(
        { error: 'Todos os campos são obrigatórios' },
        { status: 400 }
      );
    }

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
          motivation,
        },
      ])
      .select();

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json(
        { error: 'Erro ao guardar dados' },
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
