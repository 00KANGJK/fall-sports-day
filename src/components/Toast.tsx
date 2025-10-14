import React from "react";
export default function Toast({ text, open }:{text:string; open:boolean}){
  if(!open) return null;
  return <div className="fixed bottom-16 left-1/2 -translate-x-1/2 z-40 bg-black text-white text-sm px-3 py-2 rounded-lg opacity-90">{text}</div>;
}
