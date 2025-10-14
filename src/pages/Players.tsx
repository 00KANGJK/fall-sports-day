import React from "react";
import { Link } from "react-router-dom";
import { MOCK_PLAYERS } from "../data/mocks";
import Empty from "../components/primitives/Empty";

export default function Players({ sport }:{sport:string}){
  const list = MOCK_PLAYERS.filter(p => p.sport===sport);
  return (
    <div>
      <input placeholder="선수 검색" className="w-full border rounded-xl px-3 py-2 text-sm mb-3"/>
      {list.length===0 && <Empty text="선수 등록 대기 중"/>}
      <ul className="divide-y">
        {list.map(p => (
          <Link key={p.id} to={`./${p.id}`} className="flex items-center gap-3 py-3">
            <img src={p.photo} alt="p" className="w-10 h-10 rounded-full"/>
            <div>
              <div className="text-sm font-medium">{p.name}</div>
              <div className="text-xs text-neutral-500">{p.team}</div>
            </div>
          </Link>
        ))}
      </ul>
    </div>
  );
}
