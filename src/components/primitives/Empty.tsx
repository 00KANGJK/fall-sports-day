import React from "react";
export default function Empty({ text }:{text:string}){
  return <div className="text-center text-neutral-500 py-10 text-sm">{text}</div>;
}
