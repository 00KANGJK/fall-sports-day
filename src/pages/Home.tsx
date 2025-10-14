import React from "react";
import AppBar from "../components/AppBar";
import NoticeBanner from "../components/NoticeBanner";
import { SPORTS, MOCK_MATCHES } from "../data/mocks";
import { STATUS } from "../data/status";
import { Link } from "react-router-dom";
import MatchLine from "../components/MatchLine";
import MediaGrid from "../components/MediaGrid";
import FabUpload from "../components/FabUpload";
import BottomBar from "../components/BottomBar";

export default function Home(){
  return (
    <div className="pb-16">
      <AppBar title="제 2회 한사람 가을 미니 운동회"/>
      <div className="h-1" style={{background:'linear-gradient(90deg, var(--accent), var(--soft))'}}/>
      <NoticeBanner/>
      <section className="p-4 space-y-4">
        <div>
          <h2 className="font-semibold mb-2">진행 중 · 다음 경기</h2>
          <div className="grid grid-cols-1 gap-3">
            {MOCK_MATCHES.slice(0,2).map(m => (
              <Link key={m.id} to={`/sports/${m.sport}/matches/${m.id}`} className="border rounded-2xl p-4 flex items-center justify-between">
                <MatchLine m={m}/>
                <span className="text-xs px-2 py-1 rounded-full" style={{background: STATUS[m.status as keyof typeof STATUS].bg, color: STATUS[m.status as keyof typeof STATUS].color}}>{m.status}</span>
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h2 className="font-semibold mb-2">종목 선택</h2>
          <div className="grid grid-cols-3 gap-3">
            {SPORTS.map(s => (
              <Link key={s.id} to={`/sports/${s.id}/overview`} className="border rounded-2xl p-4 text-center">
                <div className="text-3xl">{s.emoji}</div>
                <div className="mt-1 text-sm font-medium">{s.name}</div>
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h2 className="font-semibold mb-2">하이라이트</h2>
          <MediaGrid sportFilter={null}/>
        </div>

      </section>
      <FabUpload/>
      <BottomBar/>
    </div>
  );
}
