import React from "react";
export default function MatchLine({ m }: { m:any }) {
  return (
    <div className="max-w-[260px] mx-auto">
      <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3">
        <div className="font-semibold text-right truncate">{m.teamA}</div>
        <div className="text-sm font-bold text-white px-2 py-0.5 rounded" style={{background:'var(--primary)'}}>VS</div>
        <div className="font-semibold text-left truncate">{m.teamB}</div>
      </div>
      <div className="mt-1 text-xs text-neutral-500 text-center">
        {m.round} · {m.time} {m.isEvent && <span className="ml-1 text-[10px] px-1.5 py-0.5 rounded-full align-middle" style={{background:'var(--rose)',color:'#fff'}}>이벤트</span>}
      </div>
    </div>
  );
}
