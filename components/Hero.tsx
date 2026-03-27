"use client";
import Link from "next/link";

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  return (
    <section className="relative overflow-hidden py-12 text-center">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[360px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(74,222,128,0.05)_0%,transparent_70%)]" />
      <div className="relative z-10 mx-auto max-w-3xl px-6">
        <div className="mb-4 inline-flex items-center gap-2 border border-[#2a2a2a] bg-[#0d0d0d] px-4 py-1.5 font-mono text-[9px] font-bold uppercase tracking-[0.12em] text-[#4ade80]">
          ◆ Unofficial Contributor Hub
        </div>
        <h1 className="mb-3 font-mono text-[clamp(1.7rem,4vw,3rem)] font-bold leading-[1.08] tracking-[-0.02em] text-white">
          Meet the Builders<br />
          <span className="text-[#4ade80]">Behind Concrete</span>
        </h1>
        <p className="mx-auto mb-6 max-w-lg text-sm font-light leading-relaxed text-[#a3a3a3]">
          Your unofficial guide to the humans, roles, and activity driving the Concrete protocol
          forward — who&apos;s building, what they&apos;re doing, and how to get involved.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <button onClick={()=>scrollTo('team-sec')} className="bg-[#4ade80] px-6 py-2.5 font-mono text-[10px] font-bold uppercase tracking-widest text-black transition-all hover:bg-white">
            Explore Team →
          </button>
          <button onClick={()=>scrollTo('start-sec')} className="border border-[#3a3a3a] px-6 py-2.5 font-mono text-[10px] font-bold uppercase tracking-widest text-[#e5e5e5] transition-all hover:border-[#4ade80] hover:text-[#4ade80]">
            Start Here
          </button>
        </div>
      </div>
    </section>
  );
}
