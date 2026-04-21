import { NextResponse } from 'next/server';
import { getServerSupabase } from '@/lib/supabase';

export async function GET() {
  const supabase = getServerSupabase();
  const { data } = await supabase.from('earnings').select('*').order('month', { ascending: true });
  return NextResponse.json(data || []);
}
