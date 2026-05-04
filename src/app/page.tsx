const services = [
  {
    title: "Wine Brand Consulting",
    text: "Product positioning, tasting notes, market fit, and go-to-market support for wine brands that need clearer direction and stronger buyer appeal.",
  },
  {
    title: "Restaurant & Hospitality Wine Programs",
    text: "Wine list development, pairing strategy, staff education, and vendor selection for restaurants, hotels, and hospitality groups.",
  },
  {
    title: "Private Collection Consulting",
    text: "Cellar planning, bottle selection, sourcing guidance, and collection organization for private collectors building with intention.",
  },
  {
    title: "Wine Events & Tastings",
    text: "Guided tastings, private events, corporate experiences, and approachable education that makes wine feel memorable and useful.",
  },
  {
    title: "Production & Manufacturing Advisory",
    text: "Practical support for winemaking operations, product quality, and process improvement grounded in hands-on production experience.",
  },
];

const reasons = [
  "Formal study in viticulture",
  "Real wine manufacturing experience",
  "Practical, not theoretical, recommendations",
  "Strong palate and product judgment",
  "Ability to translate wine expertise into business decisions",
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      <header className="relative isolate wine-texture text-[#fff9ef]">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8" aria-label="Main navigation">
          <a href="#top" className="font-serif text-2xl font-semibold tracking-wide">
            Andrew Misialek
          </a>
          <div className="hidden items-center gap-8 text-sm font-medium text-[#f6dfbf] md:flex">
            <a className="transition hover:text-white" href="#about">About</a>
            <a className="transition hover:text-white" href="#services">Services</a>
            <a className="transition hover:text-white" href="#contact">Contact</a>
          </div>
        </nav>

        <section id="top" className="mx-auto grid max-w-7xl gap-12 px-6 pb-24 pt-10 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:pb-32 lg:pt-20">
          <div className="flex flex-col justify-center">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.34em] text-[#d7b176]">
              Wine consulting · Available anywhere
            </p>
            <h1 className="max-w-4xl font-serif text-5xl font-semibold leading-[0.95] tracking-[-0.03em] sm:text-6xl lg:text-7xl">
              Expert Wine Consulting for Brands, Restaurants & Collectors
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#f3dfc7] sm:text-xl">
              Practical guidance from a wine manufacturing professional with formal viticulture education and hands-on industry experience.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                className="rounded-full bg-[#d7b176] px-7 py-4 text-center text-sm font-bold uppercase tracking-[0.18em] text-[#280812] shadow-2xl shadow-black/25 transition hover:-translate-y-0.5 hover:bg-[#f0ca8c]"
              >
                Book a Consultation
              </a>
              <a
                href="#services"
                className="rounded-full border border-[#d7b176]/60 px-7 py-4 text-center text-sm font-bold uppercase tracking-[0.18em] text-[#fff9ef] transition hover:-translate-y-0.5 hover:border-[#f0ca8c] hover:bg-white/10"
              >
                View Services
              </a>
            </div>
          </div>

          <div className="relative min-h-[420px] rounded-[2rem] border border-white/10 bg-white/10 p-5 shadow-2xl shadow-black/30 backdrop-blur">
            <div className="absolute inset-5 rounded-[1.5rem] border border-[#d7b176]/25" />
            <div className="relative flex h-full flex-col justify-between rounded-[1.5rem] bg-[#fff9ef] p-8 text-[#211819]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#7d2940]">Boutique advisory</p>
                <div className="gold-rule my-6 h-px" />
                <h2 className="font-serif text-4xl font-semibold leading-tight text-[#4d0f20]">
                  Wine expertise that connects product, palate, and business outcomes.
                </h2>
              </div>
              <div className="mt-12 grid gap-4 sm:grid-cols-2">
                {[
                  "Brand strategy",
                  "Wine programs",
                  "Private cellars",
                  "Production support",
                ].map((item) => (
                  <div key={item} className="rounded-2xl border border-[#ead8bc] bg-[#fffdf8] p-4 text-sm font-semibold text-[#4d0f20]">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </header>

      <section id="about" className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[0.82fr_1.18fr] lg:px-8">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#b88746]">About</p>
          <h2 className="mt-4 font-serif text-4xl font-semibold tracking-[-0.02em] text-[#4d0f20] sm:text-5xl">
            Trained wine professional. Practical industry operator.
          </h2>
        </div>
        <div className="space-y-6 text-lg leading-8 text-[#4a3d3e]">
          <p>
            Andrew Misialek is a wine manufacturer with formal study in viticulture and consulting experience helping wineries, restaurants, hospitality teams, collectors, event hosts, and wine brands make better decisions with confidence.
          </p>
          <p>
            His work spans wine selection, production, sourcing, tasting, education, and strategy. The approach is refined but grounded: clear recommendations, careful palate judgment, and practical guidance shaped by real wine manufacturing experience.
          </p>
          <p>
            Andrew works with clients anywhere who want wine expertise that is credible, usable, and connected to the realities of product quality, guest experience, and business performance.
          </p>
        </div>
      </section>

      <section id="services" className="bg-[#211819] px-6 py-24 text-[#fff9ef] lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#d7b176]">Services</p>
            <h2 className="mt-4 font-serif text-4xl font-semibold tracking-[-0.02em] sm:text-5xl">
              Consulting for every point where wine decisions matter.
            </h2>
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <article key={service.title} className="rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-7 shadow-xl shadow-black/10 transition hover:-translate-y-1 hover:border-[#d7b176]/50 hover:bg-white/[0.09]">
                <span className="font-serif text-4xl text-[#d7b176]">0{index + 1}</span>
                <h3 className="mt-6 font-serif text-2xl font-semibold">{service.title}</h3>
                <p className="mt-4 leading-7 text-[#e8d7c6]">{service.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[1fr_1fr] lg:px-8">
        <div className="rounded-[2rem] bg-[#4d0f20] p-8 text-[#fff9ef] sm:p-10">
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#d7b176]">Why work with him</p>
          <h2 className="mt-4 font-serif text-4xl font-semibold tracking-[-0.02em] sm:text-5xl">
            Premium advice with operational judgment behind it.
          </h2>
          <p className="mt-6 leading-8 text-[#efdac1]">
            The value is not just knowing wine. It is knowing how to turn wine expertise into confident decisions for products, guests, collections, teams, and experiences.
          </p>
        </div>
        <div className="grid gap-4">
          {reasons.map((reason) => (
            <div key={reason} className="flex items-start gap-4 rounded-2xl border border-[#ead8bc] bg-[#fffdf8] p-5 shadow-sm">
              <span className="mt-1 h-3 w-3 rounded-full bg-[#b88746] shadow-[0_0_0_6px_rgba(184,135,70,0.14)]" />
              <p className="text-lg font-semibold text-[#211819]">{reason}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 pb-24 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2rem] wine-texture p-8 text-center text-[#fff9ef] shadow-2xl shadow-[#4d0f20]/20 sm:p-14">
          <h2 className="font-serif text-4xl font-semibold tracking-[-0.02em] sm:text-5xl">
            Ready to improve your wine program, brand, or collection?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#f0ddc8]">
            Start with a focused consultation to define the opportunity, the constraints, and the most practical next steps.
          </p>
          <a href="#contact" className="mt-8 inline-flex rounded-full bg-[#d7b176] px-7 py-4 text-sm font-bold uppercase tracking-[0.18em] text-[#280812] transition hover:-translate-y-0.5 hover:bg-[#f0ca8c]">
            Book a Consultation
          </a>
        </div>
      </section>

      <section id="contact" className="bg-[#fffdf8] px-6 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#b88746]">Contact</p>
            <h2 className="mt-4 font-serif text-4xl font-semibold tracking-[-0.02em] text-[#4d0f20] sm:text-5xl">
              Book a private consultation.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#4a3d3e]">
              Share what you are building, improving, selecting, or planning. Andrew will follow up to discuss fit and next steps.
            </p>
            <div className="mt-8 space-y-3 text-[#211819]">
              <p><strong>Email:</strong> <a className="text-[#7d2940] underline-offset-4 hover:underline" href="mailto:hello@example.com">hello@example.com</a></p>
              <p><strong>Phone:</strong> <a className="text-[#7d2940] underline-offset-4 hover:underline" href="tel:+15555555555">(555) 555-5555</a></p>
            </div>
          </div>

          <form className="rounded-[2rem] border border-[#ead8bc] bg-white p-6 shadow-xl shadow-[#4d0f20]/5 sm:p-8" action="mailto:hello@example.com" method="post" encType="text/plain">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="flex flex-col gap-2 text-sm font-semibold text-[#4d0f20]">
                Name
                <input required name="name" className="rounded-xl border border-[#ead8bc] bg-[#fffdf8] px-4 py-3 text-[#211819] outline-none transition focus:border-[#b88746] focus:ring-4 focus:ring-[#b88746]/15" />
              </label>
              <label className="flex flex-col gap-2 text-sm font-semibold text-[#4d0f20]">
                Email
                <input required name="email" type="email" className="rounded-xl border border-[#ead8bc] bg-[#fffdf8] px-4 py-3 text-[#211819] outline-none transition focus:border-[#b88746] focus:ring-4 focus:ring-[#b88746]/15" />
              </label>
            </div>
            <label className="mt-5 flex flex-col gap-2 text-sm font-semibold text-[#4d0f20]">
              Company / Project
              <input name="company" className="rounded-xl border border-[#ead8bc] bg-[#fffdf8] px-4 py-3 text-[#211819] outline-none transition focus:border-[#b88746] focus:ring-4 focus:ring-[#b88746]/15" />
            </label>
            <label className="mt-5 flex flex-col gap-2 text-sm font-semibold text-[#4d0f20]">
              What do you need help with?
              <textarea required name="message" rows={5} className="rounded-xl border border-[#ead8bc] bg-[#fffdf8] px-4 py-3 text-[#211819] outline-none transition focus:border-[#b88746] focus:ring-4 focus:ring-[#b88746]/15" />
            </label>
            <button type="submit" className="mt-6 w-full rounded-full bg-[#4d0f20] px-7 py-4 text-sm font-bold uppercase tracking-[0.18em] text-[#fff9ef] transition hover:-translate-y-0.5 hover:bg-[#7d2940]">
              Submit
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
