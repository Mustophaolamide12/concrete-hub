export default function Footer() {
  return (
    <footer className="border-t border-[#2a2a2a] py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
          <div>
            <div className="mb-3 flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-widest text-white">
              <span className="text-[#4ade80]">◆</span> Concrete Hub
              <span className="border border-[#2a2a2a] px-1.5 py-0.5 font-mono text-[7px] font-bold uppercase tracking-wider text-[#737373]">unofficial</span>
            </div>
            <p className="text-xs font-light leading-relaxed text-[#a3a3a3]">An independent contributor resource for the Concrete protocol community. Not affiliated with the core team.</p>
          </div>
          <div>
            <h5 className="mb-4 font-mono text-[8px] font-bold uppercase tracking-[0.14em] text-[#737373]">Resources</h5>
            {[["Docs","https://docs.concrete.xyz/"],["Mirror Blog","https://mirror.xyz/concretexyz.eth"],["Discord","https://discord.gg/concretexyz"],["Website","https://www.concrete.xyz/"],["Social Campaign","https://points.concrete.xyz/"],["Dapp","https://app.concrete.xyz/earn"]].map(([label,url])=>(
              <a key={label} href={url} target="_blank" rel="noopener noreferrer" className="mb-1.5 block font-mono text-[9px] text-[#a3a3a3] transition-colors hover:text-[#4ade80]">{label}</a>
            ))}
          </div>
          <div>
            <h5 className="mb-4 font-mono text-[8px] font-bold uppercase tracking-[0.14em] text-[#737373]">Social</h5>
            {[["X (Twitter)","https://x.com/ConcreteXYZ"],["Discord","https://discord.gg/concretexyz"],["Mirror","https://mirror.xyz/concretexyz.eth"]].map(([label,url])=>(
              <a key={label} href={url} target="_blank" rel="noopener noreferrer" className="mb-1.5 block font-mono text-[9px] text-[#a3a3a3] transition-colors hover:text-[#4ade80]">{label}</a>
            ))}
          </div>
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-between gap-2 border-t border-[#2a2a2a] pt-5">
          <span className="font-mono text-[8px] text-[#737373]">
            Built for the Concrete community by{" "}
            <a href="https://x.com/Mustophaolamide" target="_blank" rel="noopener noreferrer" className="text-[#4ade80] underline underline-offset-2 hover:text-white">Brainiac12</a>
            {" "}· 2026
          </span>
          <span className="font-mono text-[8px] text-[#4ade80]/60">◆ Concrete Hub</span>
        </div>
      </div>
    </footer>
  );
}
