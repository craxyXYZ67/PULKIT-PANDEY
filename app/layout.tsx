import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'NeoTutor 3D Platform', description: 'Gen-Z online tutoring platform powered by Supabase' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
