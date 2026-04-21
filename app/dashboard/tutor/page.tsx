import NavBar from '@/components/NavBar';
import { AnimatedSection } from '@/components/AnimatedSection';

const links = ['Home', 'Earnings', 'Ratings', 'Contact Us'];

export default function TutorDashboard() {
  return (
    <main className="pb-20">
      <NavBar links={links} />
      <section id="home" className="mx-auto mt-10 max-w-6xl px-4">
        <div className="glass-card p-8"><h1 className="text-4xl font-black">Tutor Command Center</h1><p className="text-white/80 mt-2">Welcome dashboard with teaching stats and realtime pulses.</p></div>
      </section>
      <AnimatedSection><section id="earnings" className="mx-auto mt-12 max-w-6xl px-4"><h2 className="mb-4 text-3xl font-bold">Earnings</h2><div className="glass-card p-6"><div className="h-40 rounded-xl bg-gradient-to-r from-neon-purple via-neon-blue to-neon-cyan"/><p className="mt-2">Monthly income + session tracking.</p></div></section></AnimatedSection>
      <AnimatedSection><section id="ratings" className="mx-auto mt-12 max-w-6xl px-4"><h2 className="mb-4 text-3xl font-bold">Ratings</h2><form action="/api/review" method="post" className="glass-card p-6 space-y-3"><input name="satisfaction" className="rounded-xl bg-black/40 p-3 w-full" placeholder="Earnings satisfaction (1-5)" required/><input name="ease_of_work" className="rounded-xl bg-black/40 p-3 w-full" placeholder="Ease of work (1-5)" required/><button className="neon-btn">Submit Rating</button></form></section></AnimatedSection>
      <AnimatedSection><section id="contact-us" className="mx-auto mt-12 max-w-6xl px-4"><h2 className="mb-4 text-3xl font-bold">Become a Teaching Partner</h2><form action="/api/contact" method="post" className="glass-card p-6 grid gap-3"><input className="rounded-xl bg-black/40 p-3" name="name" placeholder="Name" required/><input className="rounded-xl bg-black/40 p-3" name="email" type="email" placeholder="Email" required/><textarea className="rounded-xl bg-black/40 p-3" name="message" placeholder="Message" required/><button className="neon-btn w-fit">Connect</button><p className="text-sm text-white/70">Facebook • Instagram • X • LinkedIn • WhatsApp</p></form></section></AnimatedSection>
    </main>
  );
}
