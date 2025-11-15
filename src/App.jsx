import React from 'react'
import Spline from '@splinetool/react-spline'
import { Diamond, Menu, ChevronRight, Star } from 'lucide-react'

function NavBar() {
  return (
    <header className="absolute top-0 left-0 right-0 z-20">
      <div className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-white/10 backdrop-blur border border-white/20 flex items-center justify-center">
            <Diamond className="h-5 w-5 text-white" />
          </div>
          <div className="text-white">
            <p className="text-xs tracking-widest uppercase text-white/70">Est. 1952</p>
            <h1 className="text-xl font-semibold tracking-wide">Amba Gold</h1>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-white/80">
          <a href="#collections" className="hover:text-white transition">Collections</a>
          <a href="#heritage" className="hover:text-white transition">Heritage</a>
          <a href="#craft" className="hover:text-white transition">Craft</a>
          <a href="#testimonials" className="hover:text-white transition">Stories</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </nav>
        <button className="md:hidden h-10 w-10 rounded-full bg-white/10 backdrop-blur border border-white/20 flex items-center justify-center">
          <Menu className="h-5 w-5 text-white" />
        </button>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="relative min-h-[85vh] md:min-h-screen overflow-hidden">
      {/* Background 3D Spline */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EQgEIs2r5cMbWroZ/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient overlays (don't block interaction) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80"></div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.08),_rgba(0,0,0,0))]"></div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-28 md:pt-36 pb-24 md:pb-40 flex flex-col md:flex-row items-center gap-12">
        <div className="max-w-2xl text-white">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur px-3 py-1 text-xs text-white/80 mb-5">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-300"></span>
            Signature Collection 2025</div>
          <h2 className="text-4xl md:text-6xl leading-tight font-semibold tracking-tight">
            Timeless Jewellery for Modern Royals
          </h2>
          <p className="mt-5 text-white/80 text-lg">
            Handcrafted heirlooms in 22k gold and precious stones, perfected across generations. Discover understated opulence with Amba Gold.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <a href="#collections" className="group inline-flex items-center gap-2 rounded-full bg-white text-black px-6 py-3 font-medium shadow/50 shadow-black/30 hover:shadow-lg transition">
              Explore Collections
              <ChevronRight className="h-4 w-4 transition -translate-x-0 group-hover:translate-x-0.5" />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-white/10 text-white px-6 py-3 font-medium border border-white/20 backdrop-blur hover:bg-white/15 transition">
              Book a Private Viewing
            </a>
          </div>
          <div className="mt-8 flex items-center gap-6 text-white/70">
            <div className="flex items-center gap-2"><Star className="h-4 w-4 text-amber-300" /><span>Trusted by 10k+ patrons</span></div>
            <div className="h-4 w-px bg-white/20" />
            <div>Lifetime care & authenticity</div>
          </div>
        </div>
        <div className="flex-1" />
      </div>
    </section>
  )
}

function Collections() {
  const items = [
    {
      name: 'Heritage Kundan',
      tagline: 'Imperial silhouettes, hand-set gems',
      image:
        'https://images.unsplash.com/photo-1520975693413-3722682c8225?q=80&w=1600&auto=format&fit=crop',
    },
    {
      name: 'Minimal Heirlooms',
      tagline: 'Quiet luxury in sculpted gold',
      image:
        'https://images.unsplash.com/photo-1582582621959-48d552cbe5f7?q=80&w=1600&auto=format&fit=crop',
    },
    {
      name: 'Bridal Couture',
      tagline: 'Ceremonial grandeur, timeless charm',
      image:
        'https://images.unsplash.com/photo-1617038260897-3a7b4199114a?q=80&w=1600&auto=format&fit=crop',
    },
  ]
  return (
    <section id="collections" className="relative bg-[#0a0a0a] text-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-2xl">
          <h3 className="text-3xl md:text-4xl font-semibold tracking-tight">Curated Collections</h3>
          <p className="mt-3 text-white/70">Designs that blend royal heritage with contemporary ease.</p>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <a key={item.name} href="#contact" className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10">
              <div className="relative h-72">
                <img src={item.image} alt={item.name} className="absolute inset-0 h-full w-full object-cover opacity-80 group-hover:opacity-90 transition" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              </div>
              <div className="absolute inset-x-0 bottom-0 p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-lg font-medium">{item.name}</p>
                    <p className="text-sm text-white/70">{item.tagline}</p>
                  </div>
                  <div className="rounded-full bg-white text-black h-9 w-9 flex items-center justify-center opacity-90 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition">
                    <ChevronRight className="h-5 w-5" />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

function Heritage() {
  return (
    <section id="heritage" className="relative bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <h3 className="text-3xl md:text-4xl font-semibold tracking-tight">A Legacy Forged in Gold</h3>
          <p className="mt-4 text-white/70 leading-relaxed">
            For over seven decades, Amba Gold has crafted pieces that transcend trends. Our ateliers combine time-honored techniques with an exacting modern eye to create jewellery worthy of becoming your family’s next chapter.
          </p>
          <div className="mt-6 grid grid-cols-3 gap-4 text-center">
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-2xl font-semibold">72</p>
              <p className="text-xs text-white/60">Years of Craft</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-2xl font-semibold">22k</p>
              <p className="text-xs text-white/60">Gold Purity</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-2xl font-semibold">100%</p>
              <p className="text-xs text-white/60">Hallmarked</p>
            </div>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
            <img src="https://images.unsplash.com/photo-1506806732259-39c2d0268443?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxDcmFmdHxlbnwwfDB8fHwxNzYzMjM4NzEzfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Craft" className="w-full h-[360px] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/10 via-rose-500/10 to-cyan-400/10 mix-blend-screen"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Craft() {
  const steps = [
    { title: 'Design Study', desc: 'Each form begins with hand sketches, refined in our design studio.' },
    { title: 'Stone Selection', desc: 'Ethically sourced diamonds and gemstones graded for fire and clarity.' },
    { title: 'Hand Setting', desc: 'Master artisans set stones using time-honored techniques.' },
    { title: 'Finishing', desc: 'Polished to a mirror sheen and sealed with hallmarking.' },
  ]
  return (
    <section id="craft" className="relative bg-[#0a0a0a] text-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-2xl">
          <h3 className="text-3xl md:text-4xl font-semibold tracking-tight">Craft, Elevated</h3>
          <p className="mt-3 text-white/70">A meticulous process shaped by generations of artisans.</p>
        </div>
        <div className="mt-10 grid md:grid-cols-4 gap-5">
          {steps.map((s, i) => (
            <div key={s.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="text-3xl font-semibold text-white/90">{String(i + 1).padStart(2, '0')}</div>
              <div className="mt-3 font-medium">{s.title}</div>
              <div className="mt-1 text-sm text-white/70 leading-relaxed">{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Testimonials() {
  const quotes = [
    {
      name: 'Mira K.',
      text: 'Understated, exquisite, and timeless. My bridal set felt like a modern heirloom.',
    },
    {
      name: 'Anaya R.',
      text: 'The private viewing experience was impeccable. I found pieces that feel uniquely mine.',
    },
    {
      name: 'Devika S.',
      text: 'Attention to detail is unmatched. The craftsmanship speaks for itself.',
    },
  ]
  return (
    <section id="testimonials" className="relative bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-2xl">
          <h3 className="text-3xl md:text-4xl font-semibold tracking-tight">Words from Our Patrons</h3>
          <p className="mt-3 text-white/70">Stories carried by those who wear our pieces.</p>
        </div>
        <div className="mt-10 grid md:grid-cols-3 gap-5">
          {quotes.map((q) => (
            <div key={q.name} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="flex items-center gap-2 text-amber-300">
                <Star className="h-4 w-4 fill-amber-300" />
                <Star className="h-4 w-4 fill-amber-300" />
                <Star className="h-4 w-4 fill-amber-300" />
                <Star className="h-4 w-4 fill-amber-300" />
                <Star className="h-4 w-4 fill-amber-300" />
              </div>
              <p className="mt-4 text-white/80">“{q.text}”</p>
              <p className="mt-4 text-sm text-white/60">{q.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer id="contact" className="relative bg-[#0a0a0a] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-white/10 backdrop-blur border border-white/20 flex items-center justify-center">
              <Diamond className="h-5 w-5 text-white" />
            </div>
            <div>
              <h4 className="text-lg font-semibold">Amba Gold</h4>
              <p className="text-xs text-white/60 tracking-widest uppercase">Legacy Jewellers</p>
            </div>
          </div>
          <p className="mt-4 text-white/70 max-w-md">
            Visit our flagship salon or book a private appointment. Our concierge will curate pieces tailored to your occasion.
          </p>
        </div>
        <form className="rounded-2xl border border-white/10 bg-white/5 p-5 grid sm:grid-cols-2 gap-3">
          <input className="rounded-lg bg-black/30 text-white placeholder:text-white/50 px-4 py-3 focus:outline-none border border-white/10" placeholder="Your name" />
          <input className="rounded-lg bg-black/30 text-white placeholder:text-white/50 px-4 py-3 focus:outline-none border border-white/10" placeholder="Email or phone" />
          <input className="sm:col-span-2 rounded-lg bg-black/30 text-white placeholder:text-white/50 px-4 py-3 focus:outline-none border border-white/10" placeholder="What are you looking for?" />
          <button className="sm:col-span-2 inline-flex items-center justify-center gap-2 rounded-lg bg-white text-black px-5 py-3 font-medium hover:shadow-lg transition">
            Request a Private Viewing <ChevronRight className="h-4 w-4" />
          </button>
        </form>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col sm:flex-row items-center justify-between text-white/60 text-sm">
          <p>© {new Date().getFullYear()} Amba Gold. All rights reserved.</p>
          <div className="flex items-center gap-6 mt-3 sm:mt-0">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Care</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <NavBar />
      <Hero />
      <Collections />
      <Heritage />
      <Craft />
      <Testimonials />
      <Footer />
    </div>
  )
}
