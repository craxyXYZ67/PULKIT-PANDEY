import AuthCard from '@/components/AuthCard';
export default function LoginPage() {
  return <main className="min-h-screen flex items-center justify-center p-4"><div className="grid w-full max-w-6xl gap-8 md:grid-cols-2 items-center"><div className="space-y-4"><h1 className="text-5xl font-black">Split Access Portal</h1><p className="text-white/80">Login as Student/Guardian or Tutor and jump into your 3D dashboard instantly.</p></div><AuthCard /></div></main>;
}
