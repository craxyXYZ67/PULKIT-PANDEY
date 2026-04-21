'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
export default function NavBar({ links }: { links: string[] }) {
  return <header className="sticky top-0 z-20 mx-auto mt-6 max-w-6xl px-4"><nav className="glass-card flex items-center justify-between px-5 py-3"><span className="text-xl font-bold tracking-wide">NeoTutor</span><ul className="flex flex-wrap items-center gap-2 text-sm md:text-base">{links.map((link) => <li key={link}><Link href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}><motion.span whileHover={{ scale: 1.06 }} className="rounded-full px-3 py-1 hover:bg-white/10 hover:text-neon-cyan">{link}</motion.span></Link></li>)}</ul></nav></header>;
}
