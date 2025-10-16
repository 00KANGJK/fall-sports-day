import React from "react";
import { Link } from "react-router-dom";
import { Trophy, User } from "lucide-react";
import { getCurrentUserId } from "../utils/user";

export default function PromoBanner() {
  const currentUserId = getCurrentUserId();
  const shortUserId = currentUserId.split('_').pop()?.substring(0, 6) || 'user';

  return (
    <div className="relative overflow-hidden rounded-2xl">
      {/* 기하학적 배경 패턴 */}
      <div 
        className="absolute inset-0 opacity-90"
        style={{
          background: `
            linear-gradient(45deg, #ff6b9d 0%, #ff8fab 25%, #ffa726 50%, #ffb74d 75%, #ffcc80 100%),
            repeating-linear-gradient(
              45deg,
              transparent,
              transparent 10px,
              rgba(255,255,255,0.1) 10px,
              rgba(255,255,255,0.1) 20px
            )
          `
        }}
      />
      
      {/* 중앙 흰색 영역 */}
      <div className="relative bg-white mx-4 my-6 rounded-xl p-6">
        {/* 상단 교회명과 사용자 ID */}
        <div className="flex justify-between items-center mb-2">
          <div className="text-sm font-medium" style={{color: '#d81b60'}}>
            대한예수교장로회 한사람교회
          </div>
          <div className="flex items-center gap-1 text-xs text-gray-500">
            <User className="w-3 h-3" />
            <span>{shortUserId}</span>
          </div>
        </div>
        
        {/* 메인 타이틀 */}
        <div className="text-center mb-4">
          <h1 className="text-2xl font-bold leading-tight">
            <span style={{color: '#d81b60'}}>제2회 한사람교회</span>
            <br />
            <span style={{color: '#ff8a65'}}>가을 미니 운동회</span>
          </h1>
        </div>
        
        {/* 금메달 아이콘 */}
        <div className="flex justify-center mb-4">
          <div className="relative">
            <Trophy className="w-8 h-8" style={{color: '#ffd700'}} />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">1</span>
            </div>
          </div>
        </div>
        
        {/* 이벤트 정보 */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-gray-100 rounded-full px-3 py-1 mb-2">
            <span className="text-xs font-medium" style={{color: '#d81b60'}}>일시</span>
            <span className="text-xs text-gray-600">2025년 10월 19일 주일 ~ 11월 2일 주일</span>
          </div>
          <div className="text-xs text-gray-500">(풋살/탁구/농구)</div>
        </div>
        
        {/* 영어 제목 */}
        <div className="text-right mt-3">
          <div className="text-xs text-gray-400">Hansaram Autumn Mini Sports Festival</div>
        </div>
      </div>
    </div>
  );
}
