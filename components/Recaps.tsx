const recaps = [
  {
    week: "Apr 15, 2026",
    title: "Yield isn't discovered. It's Engineered.",
    summary: "Yield in DeFi does not appear naturally—it is deliberately designed through protocols, incentives, and token mechanics. What looks like “organic returns” is often the result of structured systems that redistribute value, meaning users must understand the underlying mechanisms rather than assume yield is inherently sustainable.",
    link: "https://x.com/concretexyz/status/2040029803940614270?s=46",
  },
  {
    week: "Apr 15, 2026",
    title: "The first phase of DeFi optimized for access. Anyone could deploy capital. Anyone could earn yield..",
    summary: "Early DeFi focused on accessibility, lowering barriers so anyone with capital could participate and earn returns. This democratization drove rapid adoption, but it prioritized ease of entry over transparency, leaving many users engaging with yield opportunities without fully understanding the risks or sources of returns.",
    link: "https://x.com/concretexyz/status/2044243013308645800?s=46",
  },
  {
    week: "Apr 14, 2026",
    title: "DeFi made earning feel like a job. The problem isn't yield — it's how you access it.",
    summary: "The CEO of Concrete and the CEO of Fypher Labs appeared together on Maeil Economy TV, highlighting their collaboration and sharing insights on innovation at the intersection of blockchain, infrastructure, and financial systems, while showcasing their projects to a broader audience.",
    link: "https://x.com/concretexyz/status/2044046825867428103?s=46",
  },
  {
    week: "Apr 9, 2026",
    title: "Why Institutions Still Don't Trust DeFi — And It's Not What You Think.",
    summary: "Regulation, UX, and volatility get the blame — but the real reason institutions avoid DeFi runs deeper. Concrete breaks down the actual barrier and why its infrastructure is built to address it at the root.",
    link: "https://x.com/concretexyz/status/2042286051612340624?s=46",
  },
];

export default function Recaps() {
  return (
    <section id="recaps-sec" className="py-14">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-1.5 font-mono text-[9px] font-bold uppercase tracking-[0.14em] text-[#4ade80]">↓ Updates</p>
        <h2 className="mb-2 font-mono text-[clamp(1.2rem,2.8vw,1.85rem)] font-bold tracking-[-0.02em] text-white">Weekly Recaps</h2>
        <p className="mb-7 max-w-md text-sm font-light leading-relaxed text-[#a3a3a3]">Missed the week? We&apos;ve got you covered.</p>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {recaps.map((r, i) => (
            <div key={i} className="border border-[#2a2a2a] bg-[#0d0d0d] p-5 transition-all duration-200 hover:border-[#4ade80]/40 hover:bg-[#111]">
              <p className="mb-2 font-mono text-[8px] font-bold uppercase tracking-[0.14em] text-[#4ade80]">{r.week}</p>
              <h3 className="mb-2 font-mono text-[9px] font-bold uppercase leading-relaxed tracking-wide text-[#e5e5e5]">{r.title}</h3>
              <p className="mb-4 text-[11px] font-light leading-relaxed text-[#a3a3a3]">{r.summary}</p>
              <a href={r.link} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-mono text-[9px] font-bold uppercase tracking-widest text-[#4ade80] transition-all hover:gap-2">
                Read more →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
