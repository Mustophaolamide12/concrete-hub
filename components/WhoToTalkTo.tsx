"use client";
import Image from "next/image";
import { useState } from "react";

const mostActive = [
  { initials: "HZ", name: "Hamza",   text: "The most active in general on discord",           gradient: "135deg, #4ade80, #22d3ee" },
  { initials: "IL", name: "Ilusha",  text: "He creates art related to Concrete back to back", gradient: "135deg, #a78bfa, #ec4899" },
  { initials: "SQ", name: "Softroq", text: "The most active on private lounge",                gradient: "135deg, #fbbf24, #f59e0b" },
  { initials: "MG", name: "Mongral", text: "Just got promoted to Moai",                       gradient: "135deg, #f472b6, #818cf8" },
];

const topContributors = [
  { initials: "FA", name: "Fahid78078",     text: "He onboards new members in general",           gradient: "135deg, #4ade80, #06b6d4" },
  { initials: "AB", name: "I'm Abdulazeez", text: "Provides general updates about Concrete on X", gradient: "135deg, #818cf8, #4ade80" },
  { initials: "NO", name: "Nomi",           text: "Spots scammers/fraud on discord",              gradient: "135deg, #f472b6, #fbbf24" },
  { initials: "TO", name: "Tommy",          text: "Ranked number 4 in the whole discord",         gradient: "135deg, #ec4899, #a78bfa" },
];

const moaiList = [
  { initials: "OX", name: "Oxeniac",      gradient: "135deg, #4ade80, #22d3ee" },
  { initials: "CS", name: "Chris Setra",  gradient: "135deg, #a78bfa, #ec4899" },
  { initials: "RG", name: "Rage",         gradient: "135deg, #f472b6, #818cf8" },
  { initials: "MO", name: "Morteza",      gradient: "135deg, #fbbf24, #f59e0b" },
  { initials: "JT", name: "Jtn",          gradient: "135deg, #34d399, #06b6d4" },
  { initials: "ET", name: "Ethan",        gradient: "135deg, #60a5fa, #818cf8" },
  { initials: "SU", name: "Suryah",       gradient: "135deg, #ec4899, #fbbf24" },
  { initials: "KI", name: "Kira",         gradient: "135deg, #818cf8, #34d399" },
  { initials: "CA", name: "Cipher Atlas", gradient: "135deg, #22d3ee, #4ade80" },
  { initials: "NO", name: "Nomi",         gradient: "135deg, #f472b6, #fbbf24" },
  { initials: "MG", name: "Mongral",      gradient: "135deg, #a78bfa, #60a5fa" },
  { initials: "KC", name: "KCT",          gradient: "135deg, #f472b6, #ec4899" },
];

const wtt = [
  {
    icon: "📣", label: "Marketing", desc: "Brand, social & campaigns",
    person: { name: "Toji",    initials: "TJ", gradient: "135deg, #f472b6, #818cf8", avatar: "https://images.cryptorank.io/persons/toji1750938778549.png", isExternal: true },
  },
  {
    icon: "⚙️", label: "Engineering", desc: "Smart contracts, SDK & technical issues",
    person: { name: "Gustavo", initials: "GS", gradient: "135deg, #34d399, #06b6d4", avatar: "/team/gustavo.png", isExternal: false },
  },
  {
    icon: "🔬", label: "QA & Testing", desc: "Bug reports, testnet & release issues",
    person: { name: "Depoche", initials: "DP", gradient: "135deg, #fbbf24, #f59e0b", avatar: "/team/depoche.png", isExternal: false },
  },
];

function SmallAvatar({ avatar, initials, gradient, isExternal, name }: { avatar: string; initials: string; gradient: string; isExternal: boolean; name: string }) {
  if (!avatar) {
    return <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full font-mono text-[7px] font-bold text-black" style={{ background: `linear-gradient(${gradient})` }}>{initials}</div>;
  }
  if (isExternal) {
    return (
      <div className="relative h-6 w-6 flex-shrink-0 overflow-hidden rounded-full border border-[#2a2a2a]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={avatar} alt={name} className="h-full w-full object-cover" onError={e => { (e.target as HTMLImageElement).style.display = 'none'; }} />
      </div>
    );
  }
  return (
    <div className="relative h-6 w-6 flex-shrink-0 overflow-hidden rounded-full border border-[#2a2a2a]">
      <Image src={avatar} alt={name} width={24} height={24} className="h-full w-full object-cover" />
    </div>
  );
}

function Row({ item, accent }: { item: { initials: string; name: string; text: string; gradient: string }; accent: string }) {
  return (
    <div className="flex items-center gap-3 border-b border-[#1a1a1a] px-5 py-3 last:border-none">
      <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full font-mono text-[9px] font-bold text-black" style={{ background: `linear-gradient(${item.gradient})` }}>
        {item.initials}
      </div>
      <div className="flex-1">
        <strong className="block font-mono text-[10px] font-bold uppercase tracking-wider text-[#e5e5e5]">{item.name}</strong>
        <span className="text-xs font-light text-[#a3a3a3]">{item.text}</span>
      </div>
      <div className="h-1.5 w-1.5 flex-shrink-0 rounded-full" style={{ background: accent }} />
    </div>
  );
}

export default function ActivitySection() {
  const [tab, setTab] = useState<"most" | "top" | "moai">("most");

  const tabConfig = [
    { key: "most" as const, label: "🔥 Most Active" },
    { key: "top"  as const, label: "⭐ Top Contributors" },
    { key: "moai" as const, label: "🗿 Moai List" },
  ];

  return (
    <>
      {/* Who to Talk To */}
      <section className="py-14">
        <div className="mx-auto max-w-6xl px-6">
          <p className="mb-1.5 font-mono text-[9px] font-bold uppercase tracking-[0.14em] text-[#4ade80]">↓ Contact</p>
          <h2 className="mb-2 font-mono text-[clamp(1.2rem,2.8vw,1.85rem)] font-bold tracking-[-0.02em] text-white">Who to Talk To</h2>
          <p className="mb-7 max-w-md text-sm font-light leading-relaxed text-[#a3a3a3]">Not sure who to reach? Here&apos;s where to start.</p>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            {wtt.map(w => (
              <div key={w.label} className="flex items-center gap-3 border border-[#2a2a2a] bg-[#0d0d0d] p-4 transition-all hover:border-[#4ade80]/40 hover:bg-[#111]">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center border border-[#2a2a2a] text-lg">{w.icon}</div>
                <div>
                  <div className="font-mono text-[9px] font-bold uppercase tracking-wider text-[#e5e5e5]">{w.label}</div>
                  <div className="text-[11px] font-light text-[#a3a3a3]">{w.desc}</div>
                  <div className="mt-1.5 flex items-center gap-1.5">
                    <SmallAvatar avatar={w.person.avatar} initials={w.person.initials} gradient={w.person.gradient} isExternal={w.person.isExternal} name={w.person.name} />
                    <span className="font-mono text-[9px] text-[#a3a3a3]">{w.person.name}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Most Active Contributors */}
      <section id="most-active" className="py-14">
        <div className="mx-auto max-w-6xl px-6">
          <p className="mb-1.5 font-mono text-[9px] font-bold uppercase tracking-[0.14em] text-[#4ade80]">↓ Community</p>
          <h2 className="mb-2 font-mono text-[clamp(1.2rem,2.8vw,1.85rem)] font-bold tracking-[-0.02em] text-white">Most Active Contributors</h2>
          <p className="mb-6 max-w-md text-sm font-light leading-relaxed text-[#a3a3a3]">The community members showing up consistently and making an impact.</p>

          {/* Tabs */}
          <div className="flex flex-wrap border-b border-[#2a2a2a]">
            {tabConfig.map(t => (
              <button key={t.key} onClick={() => setTab(t.key)}
                className={`border-b-2 px-5 py-2.5 font-mono text-[9px] font-bold uppercase tracking-widest transition-all ${tab === t.key ? "border-[#4ade80] text-[#4ade80]" : "border-transparent text-[#a3a3a3] hover:text-[#e5e5e5]"}`}>
                {t.label}
              </button>
            ))}
          </div>

          <div className="max-w-xl border border-[#2a2a2a] border-t-0 bg-[#0d0d0d]">
            <div className="border-b border-[#2a2a2a] px-5 py-2.5 font-mono text-[9px] font-bold uppercase tracking-[0.12em] text-[#a3a3a3]">
              {tabConfig.find(t => t.key === tab)?.label}
            </div>

            {/* Most Active & Top Contributors */}
            {tab !== "moai" && (tab === "most" ? mostActive : topContributors).map(item => (
              <Row key={item.name} item={item} accent={tab === "most" ? "#4ade80" : "#f59e0b"} />
            ))}

            {/* Moai List — numbered */}
            {tab === "moai" && moaiList.map((item, i) => (
              <div key={item.name + i} className="flex items-center gap-3 border-b border-[#1a1a1a] px-5 py-3 last:border-none">
                <span className="w-5 flex-shrink-0 font-mono text-[9px] font-bold text-[#737373]">{i + 1}.</span>
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full font-mono text-[8px] font-bold text-black" style={{ background: `linear-gradient(${item.gradient})` }}>
                  {item.initials}
                </div>
                <strong className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#e5e5e5]">{item.name}</strong>
                <div className="ml-auto h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#a78bfa]" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
