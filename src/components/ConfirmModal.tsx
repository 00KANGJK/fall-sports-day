import React from "react";
export default function ConfirmModal({ open, title='확인', message, confirmText='확인', cancelText='취소', onConfirm, onCancel }:{
  open:boolean; title?:string; message?:string; confirmText?:string; cancelText?:string; onConfirm:()=>void; onCancel:()=>void;
}){
  if(!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40" onClick={onCancel}/>
      <div className="relative w-[90%] max-w-sm card">
        <h3 className="text-base font-semibold mb-2">{title}</h3>
        <p className="text-sm text-neutral-600 mb-4">{message}</p>
        <div className="flex gap-2">
          <button onClick={onCancel} className="flex-1 border rounded-xl py-2 text-sm">{cancelText}</button>
          <button onClick={onConfirm} className="flex-1 text-white rounded-xl py-2 text-sm" style={{background:'var(--primary)'}}>{confirmText}</button>
        </div>
      </div>
    </div>
  );
}
