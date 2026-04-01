const recaps = [
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
  {
    week: "Mar 25, 2026",
    title: "The Clarity Act just killed passive stablecoin yield. Here is why Concrete Vaults are the answer.",
    summary: "With the Clarity Act reshaping the stablecoin landscape, Concrete Vaults offer a compliant, institutional-grade path to stablecoin yield that still works.",
    link: "https://x.com/concretexyz/status/2036846615495852385?s=46",
  },
];

export default function Recaps() {
  return (
    <section id="recaps-sec" className="py-14">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-1.5 font-mono text-[9px] font-bold uppercase tracking-[0.14em] text-[#4ade80]">↓ Updates</p>
        <h2 className="mb-2 font-mono text-[clamp(1.2rem,2.8vw,1.85rem)] font-bold tracking-[-0.02em] text-white">Weekly Recaps</h2>
        <p className="mb-7 max-w-md text-sm font-light leading-relaxed text-[#a3a3a3]">Missed the week? We&apos;ve got you covered.</p>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
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
