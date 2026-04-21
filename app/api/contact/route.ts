import { NextResponse } from 'next/server';
import { getServerSupabase } from '@/lib/supabase';

export async function POST(req: Request) {
  const formData = await req.formData();
  const payload = {
    name: String(formData.get('name') || ''),
    email: String(formData.get('email') || ''),
    message: String(formData.get('message') || '')
  };
  const supabase = getServerSupabase();
  await supabase.from('contact_forms').insert(payload);
  return NextResponse.redirect(new URL('/', req.url));
}
