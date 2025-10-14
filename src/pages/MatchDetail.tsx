import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { MOCK_MATCHES, MOCK_PLAYERS } from "../data/mocks";
import { STATUS } from "../data/status";
import MatchLine from "../components/MatchLine";
import Empty from "../components/primitives/Empty";

export default function MatchDetail(){
  const { id, sport } = useParams();
  const m = MOCK_MATCHES.find(x => x.id===id);
  const players = MOCK_PLAYERS.filter(p => p.sport===sport).slice(0,5);
  const [selected, setSelected] = useState<string|null>(null);
  const [comment, setComment] = useState("");
  return (
    <div className="space-y-4">
      {m ? (
        <div className="card">
          <div className="flex justify-between items-center">
            <MatchLine m={m}/>
            <span className="text-xs px-2 py-1 rounded-full" style={{background: STATUS[m.status as keyof typeof STATUS].bg, color: STATUS[m.status as keyof typeof STATUS].color}}>{m.status}</span>
          </div>
        </div>
      ) : <Empty text="경기를 찾을 수 없습니다."/>}

      <section className="card">
        <h3 className="font-semibold mb-2">MVP 투표</h3>
        <div className="space-y-2">
          {players.map(p => (
            <label key={p.id} className="flex items-center gap-2">
              <input type="radio" name="mvp" className="accent-black" onChange={()=>setSelected(p.id)} checked={selected===p.id}/>
              <img src={p.photo} alt="p" className="w-8 h-8 rounded-full"/>
              <span className="text-sm">{p.name}</span>
            </label>
          ))}
        </div>
        <button className="mt-3 w-full text-white rounded-xl py-3 disabled:opacity-40" style={{background:'var(--primary)'}} disabled={!selected}>투표하기</button>
      </section>

      <section className="card">
        <h3 className="font-semibold mb-2">응원 댓글</h3>
        <div className="flex gap-2">
          <input value={comment} onChange={e=>setComment(e.target.value)} placeholder="200자 이내" className="flex-1 border rounded-xl px-3 py-2 text-sm"/>
          <button className="text-white rounded-xl px-4" style={{background:'var(--primary)'}}>등록</button>
        </div>
        <ul className="mt-3 space-y-2 text-sm">
          <li className="border rounded-xl px-3 py-2">화이팅!</li>
          <li className="border rounded-xl px-3 py-2">최고다!</li>
        </ul>
      </section>
    </div>
  );
}
