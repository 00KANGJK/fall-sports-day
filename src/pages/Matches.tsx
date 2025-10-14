import React from "react";
import { Link } from "react-router-dom";
import { MOCK_MATCHES } from "../data/mocks";
import { STATUS } from "../data/status";
import MatchLine from "../components/MatchLine";
import Chip from "../components/primitives/Chip";
import Empty from "../components/primitives/Empty";

export default function Matches({ sport }:{sport:string}){
  const data = MOCK_MATCHES.filter(m => m.sport===sport);
  return (
    <div className="space-y-3">
      <div className="flex gap-2 mb-1"><Chip>예정</Chip><Chip>진행</Chip><Chip>종료</Chip><Chip>이벤트</Chip></div>
      {data.length===0 && <Empty text="등록된 경기가 없습니다."/>}
      {data.map(m => (
        <Link key={m.id} to={`./${m.id}`} className="border rounded-2xl p-4 block">
          <div className="flex justify-between items-center">
            <MatchLine m={m}/>
            <span className="text-xs px-2 py-1 rounded-full" style={{background: STATUS[m.status as keyof typeof STATUS].bg, color: STATUS[m.status as keyof typeof STATUS].color}}>{m.status}</span>
          </div>
        </Link>
      ))}
    </div>
  );
}
