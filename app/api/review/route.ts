import { NextResponse } from 'next/server';
import { getServerSupabase } from '@/lib/supabase';

export async function POST(req: Request) {
  const formData = await req.formData();
  const payload = {
    satisfaction: Number(formData.get('satisfaction') || 0),
    ease_of_work: Number(formData.get('ease_of_work') || 0)
  };
  const supabase = getServerSupabase();
  await supabase.from('reviews').insert(payload);
  return NextResponse.redirect(new URL('/dashboard/tutor', req.url));
}
