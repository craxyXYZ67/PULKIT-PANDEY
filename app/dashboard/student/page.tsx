import NavBar from '@/components/NavBar';
import { AnimatedSection } from '@/components/AnimatedSection';

const links = ['Home', 'Courses', 'Ratings', 'Faculties', 'Pricing', 'Contact Us'];

export default function StudentDashboard() {
  return (
    <main className="pb-20">
      <NavBar links={links} />
      <section id="home" className="mx-auto mt-10 max-w-6xl px-4">
        <div className="glass-card grid gap-6 p-8 md:grid-cols-2">
          <h1 className="text-4xl font-black">Start Learning</h1>
          <p className="text-white/80">3D hero experiences, floating visuals, and deep-focused tutoring paths.</p>
        </div>
      </section>
      <AnimatedSection><section id="courses" className="mx-auto mt-12 max-w-6xl px-4"><h2 className="mb-4 text-3xl font-bold">Courses</h2><div className="mb-4 flex gap-2"><input className="glass-card p-2" placeholder="Subject"/><input className="glass-card p-2" placeholder="Level"/><input className="glass-card p-2" placeholder="Price"/></div><div className="grid gap-4 md:grid-cols-3">{['Math', 'Physics', 'Coding'].map(c => <article key={c} className="glass-card p-4 transition hover:-translate-y-2 hover:shadow-glow"><h3 className="font-bold">{c}</h3><p className="text-sm text-white/70">Interactive lessons + assignments.</p></article>)}</div></section></AnimatedSection>
      <AnimatedSection><section id="ratings" className="mx-auto mt-12 max-w-6xl px-4"><h2 className="mb-4 text-3xl font-bold">Ratings</h2><div className="glass-card p-6">⭐⭐⭐⭐⭐ “Best platform for Gen-Z learners.”</div></section></AnimatedSection>
      <AnimatedSection><section id="faculties" className="mx-auto mt-12 max-w-6xl px-4"><h2 className="mb-4 text-3xl font-bold">Faculties</h2><div className="grid gap-4 md:grid-cols-3">{['Ava', 'Noah', 'Liam'].map(t => <article key={t} className="glass-card p-4 hover:rotate-1 transition"><div className="h-28 rounded-xl bg-neon-gradient"/><h3 className="mt-3 font-bold">{t}</h3><p className="text-sm text-white/70">Expertise: STEM | 4.9★</p></article>)}</div></section></AnimatedSection>
      <AnimatedSection><section id="pricing" className="mx-auto mt-12 max-w-6xl px-4"><h2 className="mb-4 text-3xl font-bold">Pricing</h2><div className="grid gap-4 md:grid-cols-2">{['Monthly', 'Yearly'].map(p => <article key={p} className="glass-card p-6 hover:scale-105 transition"><h3 className="text-2xl font-bold">{p}</h3><p className="text-white/80">Flexible plan with animated billing card.</p></article>)}</div></section></AnimatedSection>
      <AnimatedSection><section id="contact-us" className="mx-auto mt-12 max-w-6xl px-4"><h2 className="mb-4 text-3xl font-bold">Contact Us</h2><form action="/api/contact" method="post" className="glass-card grid gap-3 p-6"><input name="name" placeholder="Name" className="rounded-xl bg-black/40 p-3" required/><input name="email" type="email" placeholder="Email" className="rounded-xl bg-black/40 p-3" required/><textarea name="message" placeholder="Message" className="rounded-xl bg-black/40 p-3" required/><button className="neon-btn w-fit" type="submit">Send</button><p className="text-sm text-white/70">Facebook • Instagram • X • LinkedIn • WhatsApp</p><iframe className="h-40 w-full rounded-xl" loading="lazy" src="https://maps.google.com/maps?q=New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed" /></form></section></AnimatedSection>
    </main>
  );
}
