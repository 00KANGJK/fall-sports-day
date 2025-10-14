import React from "react";
import { Link } from "react-router-dom";
import { MOCK_MATCHES } from "../data/mocks";
import Kpi from "../components/primitives/Kpi";
import MediaGrid from "../components/MediaGrid";

export default function Overview({ sport }:{sport:string}){
  const totalMatches = MOCK_MATCHES.filter(m => m.sport===sport).length;
  const eventMatch = MOCK_MATCHES.find(m => m.sport===sport && (m as any).isEvent);
  const nextNonEvent = MOCK_MATCHES.filter(m => m.sport===sport && !(m as any).isEvent).slice(0,1);
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-3 gap-3">
        <Kpi title="경기" value={totalMatches}/>
        <Kpi title="업로드" value={Math.floor(Math.random()*50)}/>
        <Kpi title="투표" value={Math.floor(Math.random()*200)}/>
      </div>

      {eventMatch && (
        <div className="border rounded-2xl p-4" style={{background:'var(--soft)'}}>
          <h3 className="font-semibold mb-2">이벤트 매치</h3>
          <Link to={`../matches/${eventMatch.id}`} className="block">
            <div className="text-sm">{eventMatch.teamA} vs {eventMatch.teamB} · {eventMatch.time}</div>
          </Link>
        </div>
      )}

      <div className="card">
        <h3 className="font-semibold mb-2">다음 경기</h3>
        {nextNonEvent.map(m => (
          <Link key={m.id} to={`../matches/${m.id}`} className="block">
            <div className="text-sm">{m.teamA} vs {m.teamB} · {m.time}</div>
          </Link>
        ))}
        {nextNonEvent.length===0 && <p className="text-sm text-neutral-500">등록된 일반 경기가 없습니다.</p>}
      </div>

      <div>
        <h3 className="font-semibold mb-2">미디어</h3>
        <MediaGrid sportFilter={sport}/>
      </div>
    </div>
  );
}
