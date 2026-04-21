'use client';
import { motion } from 'framer-motion';
export function AnimatedSection({ children }: { children: React.ReactNode }) {
  return <motion.section initial={{ opacity: 0, y: 35 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.7, ease: 'easeOut' }}>{children}</motion.section>;
}
