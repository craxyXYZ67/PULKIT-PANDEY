'use client';
import { useState } from 'react';
import { getBrowserSupabase } from '@/lib/supabase';

export default function AuthCard() {
  const supabase = getBrowserSupabase();
  const [form, setForm] = useState({ email: '', password: '', username: '', role: 'student' });
  const signIn = async () => { await supabase.auth.signInWithPassword({ email: form.email, password: form.password }); window.location.href = form.role === 'tutor' ? '/dashboard/tutor' : '/dashboard/student'; };
  const signUp = async () => { await supabase.auth.signUp({ email: form.email, password: form.password, options: { data: { username: form.username, role: form.role } } }); await signIn(); };
  const socialAuth = async (provider: 'google' | 'twitter') => { await supabase.auth.signInWithOAuth({ provider, options: { redirectTo: `${window.location.origin}/login` } }); };
  return <div className="glass-card w-full max-w-md p-6 space-y-4"><h2 className="text-2xl font-semibold">Login / Sign up</h2><select className="w-full rounded-xl bg-black/40 p-3" value={form.role} onChange={(e) => setForm((p) => ({ ...p, role: e.target.value }))}><option value="student">Student / Guardian</option><option value="tutor">Tutor</option></select><input className="w-full rounded-xl bg-black/40 p-3" placeholder="Username" onChange={(e) => setForm((p) => ({ ...p, username: e.target.value }))} /><input className="w-full rounded-xl bg-black/40 p-3" placeholder="Email" type="email" onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))} /><input className="w-full rounded-xl bg-black/40 p-3" placeholder="Password" type="password" onChange={(e) => setForm((p) => ({ ...p, password: e.target.value }))} /><div className="flex gap-3"><button className="neon-btn flex-1" onClick={signIn}>Login</button><button className="neon-btn flex-1" onClick={signUp}>Sign Up</button></div><div className="grid grid-cols-2 gap-3"><button className="rounded-xl bg-white/10 p-2 hover:scale-105 transition" onClick={() => socialAuth('google')}>Google OAuth</button><button className="rounded-xl bg-white/10 p-2 hover:scale-105 transition" onClick={() => socialAuth('twitter')}>Twitter/X OAuth</button></div></div>;
}
