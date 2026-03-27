"use client";
import Image from "next/image";
import { useEffect } from "react";
import { TeamMember } from "@/data/types";

interface Props { member: TeamMember | null; onClose: () => void; }

export default function ProfileModal({ member, onClose }: Props) {
  useEffect(() => {
    const h = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", h);
    return () => document.removeEventListener("keydown", h);
  }, [onClose]);
  if (!member) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm" onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto border border-[#2a2a2a] bg-[#0d0d0d] p-6 shadow-2xl">
        <button onClick={onClose} className="absolute right-3 top-3 flex h-7 w-7 items-center justify-center border border-[#2a2a2a] font-mono text-[10px] text-[#a3a3a3] transition-colors hover:border-[#4ade80] hover:text-white">✕</button>
        {member.avatar
          ? <div className="mb-4 h-14 w-14 overflow-hidden rounded-full border border-[#2a2a2a]"><Image src={member.avatar} alt={member.name} width={56} height={56} className="h-full w-full object-cover" unoptimized /></div>
          : <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full font-mono text-sm font-bold text-black" style={{ background: `linear-gradient(${member.gradient})` }}>{member.initials}</div>
        }
        <h2 className="font-mono text-base font-bold uppercase tracking-tight text-white">{member.name}</h2>
        <p className="mb-4 mt-1 font-mono text-[8px] font-bold uppercase tracking-[0.12em] text-[#4ade80]">{member.role}</p>
        <Label>What they do at Concrete</Label>
        <p className="text-xs font-light leading-relaxed text-[#a3a3a3]">{member.whatTheyDo}</p>
        <Label>Recent Activity</Label>
        <div className="flex flex-wrap gap-1.5">
          {member.activity.map(a => <span key={a} className="border border-[#4ade80]/20 bg-[#4ade80]/5 px-2.5 py-0.5 font-mono text-[7px] font-bold uppercase tracking-wider text-[#4ade80]">{a}</span>)}
        </div>
        <Label>Follow on X</Label>
        <a href={member.socials.xUrl} target="_blank" rel="noopener noreferrer" className="inline-block border border-[#3a3a3a] px-3 py-1 font-mono text-[8px] font-bold uppercase tracking-wider text-[#a3a3a3] transition-colors hover:border-[#4ade80] hover:text-[#4ade80]">
          𝕏 @{member.socials.x}
        </a>
        <Label>Why Follow Them</Label>
        <div className="border border-[#2a2a2a] bg-[#111] p-3 font-mono text-[10px] italic text-[#a3a3a3] leading-relaxed">"{member.whyFollow}"</div>
      </div>
    </div>
  );
}
function Label({ children }: { children: React.ReactNode }) {
  return <p className="mb-1.5 mt-4 font-mono text-[8px] font-bold uppercase tracking-[0.14em] text-[#737373]">{children}</p>;
}
