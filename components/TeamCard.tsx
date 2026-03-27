"use client";
import Image from "next/image";
import { TeamMember } from "@/data/types";

interface Props { member: TeamMember; onClick: (m: TeamMember) => void; }

export default function TeamCard({ member, onClick }: Props) {
  return (
    <div className="group relative cursor-pointer border border-[#2a2a2a] bg-[#0d0d0d] p-5 transition-all duration-200 hover:border-[#4ade80]/40 hover:bg-[#111]" onClick={() => onClick(member)}>
      <div className="absolute inset-x-0 top-0 h-px bg-[#4ade80] opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
      {member.avatar
        ? <div className="mb-3 h-11 w-11 overflow-hidden rounded-full border border-[#2a2a2a]"><Image src={member.avatar} alt={member.name} width={44} height={44} className="h-full w-full object-cover" unoptimized /></div>
        : <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-full font-mono text-xs font-bold text-black" style={{ background: `linear-gradient(${member.gradient})` }}>{member.initials}</div>
      }
      <div className="font-mono text-[10px] font-bold uppercase tracking-[0.08em] text-white">{member.name}</div>
      <div className="mb-2 mt-0.5 font-mono text-[8px] font-bold uppercase tracking-[0.1em] text-[#4ade80]">{member.role}</div>
      <div className="mb-3 text-[11px] font-light leading-relaxed text-[#a3a3a3]">{member.description}</div>
      <a href={member.socials.xUrl} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()}
        className="inline-block border border-[#3a3a3a] px-3 py-1 font-mono text-[8px] font-bold uppercase tracking-[0.08em] text-[#a3a3a3] transition-colors hover:border-[#4ade80] hover:text-[#4ade80]">
        𝕏 @{member.socials.x}
      </a>
    </div>
  );
}
