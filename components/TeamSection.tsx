"use client";
import { useState } from "react";
import teamData from "@/data/team.json";
import { TeamMember } from "@/data/types";
import TeamCard from "./TeamCard";
import ProfileModal from "./ProfileModal";

export default function TeamSection() {
  const [selected, setSelected] = useState<TeamMember | null>(null);
  return (
    <section id="team-sec" className="py-14">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-1.5 font-mono text-[9px] font-bold uppercase tracking-[0.14em] text-[#4ade80]">↓ People</p>
        <h2 className="mb-2 font-mono text-[clamp(1.2rem,2.8vw,1.85rem)] font-bold tracking-[-0.02em] text-white">Core Team</h2>
        <p className="max-w-md text-sm font-light leading-relaxed text-[#a3a3a3]">The builders, strategists, and community leads driving Concrete forward.</p>
        <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {(teamData as TeamMember[]).map(m => <TeamCard key={m.id} member={m} onClick={setSelected} />)}
        </div>
      </div>
      <ProfileModal member={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
