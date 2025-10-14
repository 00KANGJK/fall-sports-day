import React from "react";
export default function Kpi({ title, value }:{title:string; value:React.ReactNode}){
  return (
    <div className="border rounded-2xl p-4 text-center">
      <div className="text-xs text-neutral-500">{title}</div>
      <div className="text-xl font-semibold">{value}</div>
    </div>
  );
}
