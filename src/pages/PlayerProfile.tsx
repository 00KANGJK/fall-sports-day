import React from "react";
import { useParams } from "react-router-dom";
import { MOCK_PLAYERS } from "../data/mocks";
import Empty from "../components/primitives/Empty";

export default function PlayerProfile(){
  const { id } = useParams();
  const p = MOCK_PLAYERS.find(x => x.id===id);
  if(!p) return <Empty text="선수를 찾을 수 없습니다." />;
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <img src={p.photo} alt={p.name} className="w-24 h-24 rounded-full object-cover" />
        <div>
          <div className="text-lg font-semibold">{p.name}</div>
          <div className="text-sm text-neutral-500">{p.team}</div>
        </div>
      </div>
      <div>
        <h3 className="font-semibold mb-2">하이라이트</h3>
        <div className="grid grid-cols-3 gap-2">
          {Array.from({length:6}).map((_,i)=> (
            <img key={i} src={`https://placehold.co/400x400?text=HL+${i+1}`} className="aspect-square rounded-xl object-cover"/>
          ))}
        </div>
      </div>
    </div>
  );
}
