import Link from 'next/link';
import { AnimatedSection } from '@/components/AnimatedSection';

export default function LandingPage() {
  return <main className="mx-auto max-w-6xl px-4 py-16"><AnimatedSection><div className="grid items-center gap-8 md:grid-cols-2"><div className="space-y-6"><p className="inline-block rounded-full border border-neon-cyan/50 px-4 py-1 text-sm text-neon-cyan">3D Interactive Tutoring</p><h1 className="text-5xl font-black leading-tight">Learn in a Neon Universe</h1><p className="text-white/80">A full-stack immersive tutoring platform with role-based dashboards, motion-rich UX, and Supabase backend.</p><Link href="/login" className="neon-btn inline-block">Enter Platform</Link></div><div className="glass-card h-80 p-6"><div className="h-full rounded-2xl bg-neon-gradient opacity-80 animate-pulse" /></div></div></AnimatedSection></main>;
}
