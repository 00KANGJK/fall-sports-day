import React from "react";
import { Link } from "react-router-dom";
import { Megaphone, Trophy } from "lucide-react";

export default function PromoBanner() {
  return (
    <div
      className="rounded-2xl p-5 text-white relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, var(--accent) 0%, var(--soft) 60%, var(--rose) 100%)",
      }}
    >
      <div className="flex items-start gap-3">
        <div className="shrink-0 bg-white/15 rounded-xl p-3">
          <Trophy className="w-6 h-6" />
        </div>
        <div className="flex-1">
          <div className="text-xs opacity-90">제 2회 한사람</div>
          <h2 className="text-lg font-semibold">가을 미니 운동회</h2>
          <p className="text-sm mt-1 opacity-95">하이라이트를 업로드하고 모두와 공유하세요!</p>
          <div className="mt-3">
            <Link to="/upload" className="btn inline-flex items-center gap-1">
              <Megaphone className="w-4 h-4" /> 업로드하기
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute -right-6 -bottom-6 w-28 h-28 rounded-full opacity-20" style={{background:'#fff'}}/>
    </div>
  );
}
