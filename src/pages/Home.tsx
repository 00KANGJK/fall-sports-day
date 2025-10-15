import React from "react";
import AppBar from "../components/AppBar";
import NoticeBanner from "../components/NoticeBanner";
import PromoBanner from "../components/PromoBanner";
import { SPORTS, MOCK_MATCHES } from "../data/mocks";
import { STATUS } from "../data/status";
import { Link } from "react-router-dom";
import MatchLine from "../components/MatchLine";
import MediaGrid from "../components/MediaGrid";
import FabUpload from "../components/FabUpload";
import BottomBar from "../components/BottomBar";

export default function Home(){
  const priorityMap: Record<string, number> = { ongoing: 0, scheduled: 1, finished: 2 };
  const nextMatches = [...MOCK_MATCHES]
    .sort((a, b) => (priorityMap[a.status] ?? 99) - (priorityMap[b.status] ?? 99))
    .slice(0, 3);
  const sportCounts = SPORTS.reduce<Record<string, number>>((acc, s) => {
    acc[s.id] = MOCK_MATCHES.filter(m => m.sport === s.id).length;
    return acc;
  }, {});
  return (
    <div className="pb-16">
      <AppBar title="제 2회 한사람 가을 미니 운동회"/>
      <div className="h-1" style={{background:'linear-gradient(90deg, var(--accent), var(--soft))'}}/>
      <NoticeBanner/>
      <section className="p-4 space-y-4">
        <PromoBanner/>

        <div>
          <h2 className="font-semibold mb-2">종목 선택</h2>
          <div className="grid grid-cols-3 gap-3">
            {SPORTS.map(s => (
              <Link key={s.id} to={`/sports/${s.id}/overview`} className="relative border rounded-2xl p-4 text-center">
                <span className="absolute top-2 right-2 text-[10px] px-2 py-0.5 rounded-full" style={{background:'var(--soft)', color:'#5B4231'}}>
                  {sportCounts[s.id] ?? 0}
                </span>
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
