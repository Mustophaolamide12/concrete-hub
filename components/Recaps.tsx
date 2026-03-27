const recaps = [
  { week: "Mar 17, 2026", title: "The Concrete DeFi USDT Vault has grown to >$140M in deposits since Binance Wallet integration launch.", summary: "A major milestone — the USDT vault crossed $140M in deposits following the Binance Wallet integration, signalling strong institutional and retail demand.", link: "https://x.com/concretexyz/status/2033786612035842506" },
  { week: "Mar 13, 2026", title: "Concrete DeFi USDT is now the largest non-lending stablecoin DeFi vault.", summary: "Concrete's USDT vault reached a new landmark — becoming the single largest non-lending stablecoin vault in all of DeFi.", link: "https://x.com/concretexyz/status/2032273974332199110" },
  { week: "Mar 12, 2026", title: "Concrete Vaults are live inside Binance Wallet — kicking off with a $200,000 campaign.", summary: "Institutional-grade, risk-adjusted USDT yield is now available directly inside Binance Wallet, launching with a $200,000 incentive campaign.", link: "https://x.com/concretexyz/status/2031944520208728213" },
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
              <a href={r.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 font-mono text-[9px] font-bold uppercase tracking-widest text-[#4ade80] transition-all hover:gap-2">Read more →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
