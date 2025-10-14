import React from "react";
import { Link } from "react-router-dom";
export default function NoticeBanner(){
  return (
    <div className="px-3 py-2 text-sm flex items-center gap-2 border-b" style={{background:'var(--soft)', color:'#5B4231'}}>
      <span className="inline-block w-2 h-2 rounded-full" style={{background:'var(--rose)'}}/>
      우천으로 농구 결승이 30분 지연됩니다.
      <Link className="underline ml-auto" to="/notices">자세히</Link>
    </div>
  );
}
