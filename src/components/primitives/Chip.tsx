import React from "react";
export default function Chip({ children }:{children:React.ReactNode}){
  return (
    <span className="text-xs px-2 py-1 rounded-full" style={{border:'1px solid var(--primary)', color:'var(--primary)', background:'rgba(139,94,52,0.06)'}}>
      {children}
    </span>
  );
}
