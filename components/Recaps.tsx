const recaps = [
  {
    week: "Apr 9, 2026",
    title: "Why Institutions Still Don't Trust DeFi — And It's Not What You Think.",
    summary: "Regulation, UX, and volatility get the blame — but the real reason institutions avoid DeFi runs deeper. Concrete breaks down the actual barrier and why its infrastructure is built to address it at the root.",
    link: "https://x.com/concretexyz/status/2042286051612340624?s=46",
  },
  {
    week: "Apr 3, 2026",
    title: "Concrete and Euler Partner to Build Institutional-Grade Lending Markets on Modular DeFi Infra.",
    summary: "Concrete and Euler join forces to bring institutional-grade lending infrastructure to modular DeFi — combining Concrete's vault system with Euler's proven lending primitives.",
    link: "https://x.com/concretexyz/status/2040029803940614270?s=46",
  },
  {
    week: "Apr 1, 2026",
    title: "The Concrete x @BinanceWallet Campaign is coming to a close.",
    summary: "The landmark Binance Wallet campaign wraps up. A look back at the numbers, the community participation, and what comes next for Concrete's vault ecosystem.",
    link: "https://x.com/concretexyz/status/2039309995934720124?s=46",
  },
  {
    week: "Mar 31, 2026",
    title: "DeFi made earning feel like a job. The problem isn't yield — it's how you access it.",
    summary: "Chasing APYs, moving funds, timing everything — and most people still underperform. Concrete's automated vaults exist to solve exactly this.",
    link: "https://x.com/concretexyz/status/2038990400308875737?s=46",
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
