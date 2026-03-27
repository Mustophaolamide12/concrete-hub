const cards = [
  { icon: "◆", title: "What is Concrete", desc: "ConcreteXYZ is a decentralized finance (DeFi) infrastructure protocol focused on institutional-grade yield products, automated vault strategies, risk-managed capital allocation, and on-chain credit and lending primitives across multiple blockchains." },
  { icon: "⬡", title: "What are Vaults",  desc: "Concrete vaults are automated systems that manage your crypto to earn returns in a smarter, safer, and more efficient way — without you doing the work." },
  { icon: "⚡", title: "Why It Matters",   desc: "Concrete vaults matter because they turn DeFi from chaotic yield chasing into structured, efficient capital management." },
  { icon: "🔗", title: "Key Links", isKeyLinks: true },
];

export default function StartHere() {
  return (
    <section id="start-sec" className="py-14">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-1.5 font-mono text-[9px] font-bold uppercase tracking-[0.14em] text-[#4ade80]">↓ Begin</p>
        <h2 className="mb-2 font-mono text-[clamp(1.2rem,2.8vw,1.85rem)] font-bold tracking-[-0.02em] text-white">Start Here</h2>
        <p className="max-w-md text-sm font-light leading-relaxed text-[#a3a3a3]">New to Concrete? Here&apos;s what you need to know before diving in.</p>
        <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map(card => (
            <div key={card.title} className="border border-[#2a2a2a] bg-[#0d0d0d] p-5 transition-all duration-200 hover:border-[#4ade80]/40 hover:bg-[#111]">
              <div className="mb-3 font-mono text-sm text-[#4ade80]">{card.icon}</div>
              <h3 className="mb-2 font-mono text-[9px] font-bold uppercase tracking-wider text-[#e5e5e5]">{card.title}</h3>
              {card.isKeyLinks ? (
                <p className="text-[11px] font-light leading-relaxed text-[#a3a3a3]">
                  <a href="https://docs.concrete.xyz/" target="_blank" rel="noopener noreferrer" className="text-[#4ade80] underline underline-offset-2 hover:text-white">Docs</a>,{" "}
                  <a href="https://mirror.xyz/concretexyz.eth" target="_blank" rel="noopener noreferrer" className="text-[#4ade80] underline underline-offset-2 hover:text-white">Mirror Blog</a>,{" "}
                  <a href="https://discord.gg/concretexyz" target="_blank" rel="noopener noreferrer" className="text-[#4ade80] underline underline-offset-2 hover:text-white">Discord</a>,{" "}
                  <a href="https://www.concrete.xyz/" target="_blank" rel="noopener noreferrer" className="text-[#4ade80] underline underline-offset-2 hover:text-white">Website</a>,{" "}
                  <a href="https://points.concrete.xyz/" target="_blank" rel="noopener noreferrer" className="text-[#4ade80] underline underline-offset-2 hover:text-white">Social Campaign Website</a>, and{" "}
                  <a href="https://app.concrete.xyz/earn" target="_blank" rel="noopener noreferrer" className="text-[#4ade80] underline underline-offset-2 hover:text-white">Dapp</a>{" "}
                  — everything you need to go from curious to contributor.
                </p>
              ) : (
                <p className="text-[11px] font-light leading-relaxed text-[#a3a3a3]">{card.desc}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
