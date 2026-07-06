const services = [
  {
    title: "Wine Brand Consulting",
    intent: "For producers, importers, and emerging labels",
    text: "Clarify product positioning, tasting language, buyer fit, and the story behind the bottle before you present it to trade or customers.",
  },
  {
    title: "Restaurant Wine Program Consulting",
    intent: "For restaurants, hotels, and hospitality teams",
    text: "Build a list that fits the menu, price point, staff knowledge, storage limits, and the way guests actually order wine.",
  },
  {
    title: "Private Collection Advisory",
    intent: "For collectors and hosts",
    text: "Plan purchases, organize bottles, choose serving windows, and shape a cellar around what you drink, gift, host, and age.",
  },
  {
    title: "Guided Tastings & Events",
    intent: "For private dinners and corporate groups",
    text: "Create a tasting that feels polished without turning the room into a lecture. Guests leave with context they can use.",
  },
  {
    title: "Production & Manufacturing Advisory",
    intent: "For teams making product decisions",
    text: "Use practical production judgment to evaluate quality, process, flavor direction, sourcing, and market-ready presentation.",
  },
];

const fitSignals = [
  "A restaurant needs a wine list guests can understand and staff can sell.",
  "A wine brand needs clearer positioning before a distributor, retailer, or buyer meeting.",
  "A collector wants help buying, organizing, serving, or aging bottles with more intention.",
  "A hospitality team wants a tasting, training, or pairing experience that feels credible and useful.",
];

const backgroundHighlights = [
  {
    title: "Wine school in Italy",
    text: "Andrew's wine education in Italy gives clients a stronger frame for region, style, food, service, and the culture around the bottle.",
    image: "/images/italy-wine-education-vineyard.jpg",
    alt: "Italian vineyard terrace with wine glass, notebook, grape clusters, and golden hillside rows",
  },
  {
    title: "Wine industry work in Napa",
    text: "His Napa experience adds production judgment, cellar discipline, and a practical understanding of how wine moves from idea to finished product.",
    image: "/images/napa-winery-barrel-room.jpg",
    alt: "Napa-style winery barrel room with tasting glasses, oak barrels, and cellar equipment",
  },
  {
    title: "Consulting in Pennsylvania",
    text: "Andrew now consults in Pennsylvania for restaurants, hospitality teams, private collectors, tastings, events, and wine product decisions.",
    image: "/images/pennsylvania-wine-consulting.jpg",
    alt: "Pennsylvania wine consulting table with glasses, wine notes, and vineyard view",
  },
];

const workflow = [
  {
    step: "1",
    title: "Define the decision",
    text: "Andrew starts with the business, event, collection, or product choice you need to make.",
  },
  {
    step: "2",
    title: "Review the constraints",
    text: "Budget, audience, menu, sourcing, storage, timing, and brand position shape the recommendation.",
  },
  {
    step: "3",
    title: "Taste, assess, or plan",
    text: "The work can include list review, bottle selection, pairing direction, tasting notes, staff guidance, or product feedback.",
  },
  {
    step: "4",
    title: "Leave with next steps",
    text: "You get practical recommendations you can act on, not abstract wine theory.",
  },
];

const deliverables = [
  ["Restaurant or hospitality program", "Wine list review, pairings, vendor notes, staff talking points"],
  ["Wine brand or producer", "Positioning notes, tasting language, product feedback, buyer-facing improvements"],
  ["Private collection", "Buying guidance, cellar organization, serving windows, occasion planning"],
  ["Event or tasting", "Wine theme, bottle lineup, pacing, guest education, serving notes"],
  ["Production decision", "Product quality notes, process input, flavor direction, practical tradeoffs"],
];

const faqs = [
  {
    question: "Who does Andrew Misialek work with?",
    answer:
      "Andrew works with Pennsylvania restaurants, hospitality teams, private collectors, event hosts, wine brands, and teams making production or product decisions.",
  },
  {
    question: "What is Andrew's wine background?",
    answer:
      "Andrew went to wine school in Italy, worked in Napa, and now brings that background into practical wine consulting in Pennsylvania.",
  },
  {
    question: "Does Andrew only work in one location?",
    answer:
      "Andrew consults in Pennsylvania and can discuss select remote or travel-based work depending on the client, tasting, event, or program need.",
  },
  {
    question: "What makes this different from a basic wine recommendation?",
    answer:
      "Andrew combines wine school in Italy, Napa wine industry experience, and palate judgment, so the advice connects taste, product quality, business use, and guest experience.",
  },
  {
    question: "Can Andrew help a restaurant improve its wine list?",
    answer:
      "Yes. He can review wine list structure, pairing fit, staff talking points, guest readability, vendor choices, and pricing alignment.",
  },
  {
    question: "Can Andrew help private collectors?",
    answer:
      "Yes. Collection work can include bottle selection, cellar organization, buying priorities, serving windows, and planning wine for dinners or events.",
  },
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Expert Wine Advisor",
    url: "https://expert-wine-advisor.vercel.app/",
    description:
      "Pennsylvania wine consulting from Andrew Misialek, shaped by wine school in Italy and Napa wine industry experience.",
    areaServed: {
      "@type": "State",
      name: "Pennsylvania",
    },
    founder: {
      "@type": "Person",
      name: "Andrew Misialek",
      jobTitle: "Wine Consultant",
      alumniOf: {
        "@type": "EducationalOrganization",
        name: "Wine school in Italy",
      },
      knowsAbout: [
        "Wine consulting",
        "Italian wine education",
        "Napa wine industry",
        "Wine manufacturing",
        "Restaurant wine programs",
        "Private wine collections",
      ],
    },
    serviceType: [
      "Wine brand consulting",
      "Restaurant wine program consulting",
      "Private collection advisory",
      "Wine events and tastings",
      "Production and manufacturing advisory",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <header className="relative isolate wine-texture text-[#fff9ef]">
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8"
          aria-label="Main navigation"
        >
          <a href="#top" className="font-serif text-2xl font-semibold tracking-wide">
            Andrew Misialek
          </a>
          <div className="hidden items-center gap-8 text-sm font-medium text-[#f6dfbf] md:flex">
            <a className="transition hover:text-white" href="#services">Services</a>
            <a className="transition hover:text-white" href="#process">Process</a>
            <a className="transition hover:text-white" href="#faq">FAQ</a>
            <a className="transition hover:text-white" href="#contact">Contact</a>
          </div>
        </nav>

        <section
          id="top"
          className="mx-auto grid max-w-7xl gap-12 px-6 pb-20 pt-10 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:pb-28 lg:pt-20"
        >
          <div className="flex flex-col justify-center">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.28em] text-[#d7b176]">
              Pennsylvania wine consulting · Italy trained · Napa experienced
            </p>
            <h1 className="max-w-4xl font-serif text-5xl font-semibold leading-[0.98] tracking-[-0.02em] sm:text-6xl lg:text-7xl">
              Andrew Misialek wine consulting in PA for better lists, bottles, and product decisions
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#f3dfc7] sm:text-xl">
              Get practical wine guidance from a consultant shaped by wine school in Italy, wine industry work in Napa, and hands-on production judgment for restaurants, brands, collectors, tastings, and events.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                className="rounded-full bg-[#d7b176] px-7 py-4 text-center text-sm font-bold uppercase tracking-[0.14em] text-[#280812] shadow-2xl shadow-black/25 transition hover:-translate-y-0.5 hover:bg-[#f0ca8c]"
              >
                Book a Wine Consultation
              </a>
              <a
                href="#services"
                className="rounded-full border border-[#d7b176]/60 px-7 py-4 text-center text-sm font-bold uppercase tracking-[0.14em] text-[#fff9ef] transition hover:-translate-y-0.5 hover:border-[#f0ca8c] hover:bg-white/10"
              >
                See Consulting Services
              </a>
            </div>
          </div>

          <aside className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 p-5 shadow-2xl shadow-black/30 backdrop-blur">
            <img
              src="/images/italy-wine-education-vineyard.jpg"
              alt="Italian vineyard terrace with wine glass, notebook, grape clusters, and golden hillside rows"
              className="h-[430px] w-full rounded-[1.5rem] object-cover"
            />
            <div className="absolute inset-x-10 bottom-10 rounded-2xl bg-[#fff9ef]/95 p-6 text-[#211819] shadow-2xl shadow-black/25">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#7d2940]">
                Wine school in Italy
              </p>
              <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight text-[#4d0f20]">
                European wine education, Napa work, and Pennsylvania consulting.
              </h2>
            </div>
          </aside>
        </section>
      </header>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[0.82fr_1.18fr] lg:px-8">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#b88746]">Direct answer</p>
          <h2 className="mt-4 font-serif text-4xl font-semibold tracking-[-0.02em] text-[#4d0f20] sm:text-5xl">
            Hire Andrew when a wine decision needs taste and business judgment.
          </h2>
        </div>
        <div className="space-y-6 text-lg leading-8 text-[#4a3d3e]">
          <p>
            Andrew Misialek helps clients choose, position, serve, explain, and improve wine. His background runs through wine school in Italy, work in Napa, and consulting in Pennsylvania, so his advice connects taste, product quality, business use, and guest experience.
          </p>
          <p>
            That mix matters when a recommendation has to survive beyond the tasting table. The bottle has to taste right, fit the audience, and support the business or personal goal behind it.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
        <div className="grid gap-5 lg:grid-cols-3">
          {backgroundHighlights.map((item) => (
            <article key={item.title} className="overflow-hidden rounded-[1.5rem] border border-[#ead8bc] bg-[#fffdf8] shadow-sm">
              <img src={item.image} alt={item.alt} className="h-64 w-full object-cover" />
              <div className="p-6">
                <h2 className="font-serif text-3xl font-semibold text-[#4d0f20]">{item.title}</h2>
                <p className="mt-4 leading-7 text-[#4a3d3e]">{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="services" className="bg-[#211819] px-6 py-24 text-[#fff9ef] lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#d7b176]">Services</p>
            <h2 className="mt-4 font-serif text-4xl font-semibold tracking-[-0.02em] sm:text-5xl">
              Wine consulting services with clear buyer intent.
            </h2>
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-7 shadow-xl shadow-black/10 transition hover:-translate-y-1 hover:border-[#d7b176]/50 hover:bg-white/[0.09]"
              >
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#d7b176]">
                  {service.intent}
                </p>
                <h3 className="mt-5 font-serif text-2xl font-semibold">{service.title}</h3>
                <p className="mt-4 leading-7 text-[#e8d7c6]">{service.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div className="rounded-[2rem] bg-[#4d0f20] p-8 text-[#fff9ef] sm:p-10">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#d7b176]">Good fit</p>
          <h2 className="mt-4 font-serif text-4xl font-semibold tracking-[-0.02em] sm:text-5xl">
            Use Andrew when the answer affects money, guests, inventory, or reputation.
          </h2>
          <p className="mt-6 leading-8 text-[#efdac1]">
            A simple bottle suggestion is easy. A wine decision with budget, audience, service, storage, product quality, or brand stakes needs a tighter read.
          </p>
        </div>
        <div className="grid gap-4">
          {fitSignals.map((reason) => (
            <div
              key={reason}
              className="flex items-start gap-4 rounded-2xl border border-[#ead8bc] bg-[#fffdf8] p-5 shadow-sm"
            >
              <span className="mt-1 h-3 w-3 shrink-0 rounded-full bg-[#b88746] shadow-[0_0_0_6px_rgba(184,135,70,0.14)]" />
              <p className="text-lg font-semibold text-[#211819]">{reason}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="process" className="bg-[#fffdf8] px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#b88746]">Process</p>
              <h2 className="mt-4 font-serif text-4xl font-semibold tracking-[-0.02em] text-[#4d0f20] sm:text-5xl">
                A focused consulting workflow.
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {workflow.map((item) => (
                <article key={item.title} className="rounded-2xl border border-[#ead8bc] bg-white p-6 shadow-sm">
                  <span className="font-serif text-4xl font-semibold text-[#b88746]">{item.step}</span>
                  <h3 className="mt-4 font-serif text-2xl font-semibold text-[#4d0f20]">{item.title}</h3>
                  <p className="mt-3 leading-7 text-[#4a3d3e]">{item.text}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-16 overflow-hidden rounded-[1.5rem] border border-[#ead8bc] bg-white shadow-sm">
            <table className="w-full border-collapse text-left">
              <caption className="sr-only">Wine consulting deliverables by client type</caption>
              <thead className="bg-[#4d0f20] text-[#fff9ef]">
                <tr>
                  <th scope="col" className="px-5 py-4 text-sm uppercase tracking-[0.16em]">Client need</th>
                  <th scope="col" className="px-5 py-4 text-sm uppercase tracking-[0.16em]">Possible deliverables</th>
                </tr>
              </thead>
              <tbody>
                {deliverables.map(([need, output]) => (
                  <tr key={need} className="border-t border-[#ead8bc]">
                    <th scope="row" className="px-5 py-4 align-top font-serif text-xl text-[#4d0f20]">
                      {need}
                    </th>
                    <td className="px-5 py-4 leading-7 text-[#4a3d3e]">{output}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#b88746]">FAQ</p>
          <h2 className="mt-4 font-serif text-4xl font-semibold tracking-[-0.02em] text-[#4d0f20] sm:text-5xl">
            Questions people ask before hiring a wine consultant.
          </h2>
        </div>
        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {faqs.map((faq) => (
            <article key={faq.question} className="rounded-2xl border border-[#ead8bc] bg-[#fffdf8] p-6">
              <h3 className="font-serif text-2xl font-semibold text-[#4d0f20]">{faq.question}</h3>
              <p className="mt-3 leading-7 text-[#4a3d3e]">{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="px-6 pb-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 rounded-[2rem] wine-texture p-8 text-[#fff9ef] shadow-2xl shadow-[#4d0f20]/20 sm:p-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#d7b176]">Start the conversation</p>
            <h2 className="mt-4 font-serif text-4xl font-semibold tracking-[-0.02em] sm:text-5xl">
              Bring Andrew the wine decision, not a vague request.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#f0ddc8]">
              Share the Pennsylvania setting, audience, budget, timeline, and what success should look like. That gives Andrew enough context to decide the right shape of consultation.
            </p>
          </div>
          <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.08] p-6">
            <h3 className="font-serif text-3xl font-semibold">Useful details to send</h3>
            <ul className="mt-6 space-y-4 text-[#f0ddc8]">
              <li>Client type: restaurant, brand, collector, event, or production team</li>
              <li>The decision you need help making</li>
              <li>Timeline, budget range, and location if in-person work matters</li>
              <li>Any current list, bottle lineup, product notes, or event plan</li>
            </ul>
            <p className="mt-8 rounded-2xl bg-[#fff9ef] p-5 font-semibold leading-7 text-[#4d0f20]">
              Contact details are not published yet, so use your existing introduction channel for Andrew until the business email or booking form is connected.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
