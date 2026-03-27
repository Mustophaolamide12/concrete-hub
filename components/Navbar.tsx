"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="sticky top-0 z-50 border-b border-[#2a2a2a] bg-black/95 backdrop-blur-md">
      <div className="mx-auto flex h-[60px] max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-white no-underline">
          <span className="text-[#4ade80]">◆</span> Concrete Hub
        </Link>
        <nav className="flex items-center gap-5">
          <Link href="#team-sec" scroll={false} onClick={e=>{e.preventDefault();document.getElementById('team-sec')?.scrollIntoView({behavior:'smooth',block:'start'})}} className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#a3a3a3] transition-colors hover:text-white">Team</Link>
          <Link href="#most-active" scroll={false} onClick={e=>{e.preventDefault();document.getElementById('most-active')?.scrollIntoView({behavior:'smooth',block:'start'})}} className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#a3a3a3] transition-colors hover:text-white">Contributors</Link>
          <Link href="#recaps-sec" scroll={false} onClick={e=>{e.preventDefault();document.getElementById('recaps-sec')?.scrollIntoView({behavior:'smooth',block:'start'})}} className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#a3a3a3] transition-colors hover:text-white">Recaps</Link>
          <Link href="#start-sec" scroll={false} onClick={e=>{e.preventDefault();document.getElementById('start-sec')?.scrollIntoView({behavior:'smooth',block:'start'})}} className="border border-[#4ade80] px-4 py-1.5 font-mono text-[10px] font-bold uppercase tracking-widest text-[#4ade80] transition-all hover:bg-[#4ade80] hover:text-black">Start Here</Link>
        </nav>
      </div>
    </div>
  );
}
