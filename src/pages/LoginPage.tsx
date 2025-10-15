import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BottomBar from "../components/BottomBar";
import { useAuth } from "../contexts/auth";

export default function LoginPage(){
  const navigate = useNavigate();
  const { user, setUser } = useAuth();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(()=>{ if(user) navigate('/'); },[user,navigate]);

  const submit = (e:React.FormEvent)=>{
    e.preventDefault();
    if(!name || !phone) return;
    setUser({ id:`u_${Date.now()}`, name, phone });
    navigate('/');
  };

  return (
    <div className="pb-16">
      <div className="p-4 space-y-4">
        <form onSubmit={submit} className="card space-y-3">
          <div>
            <div className="text-sm text-neutral-500 mb-1">이름</div>
            <input value={name} onChange={e=>setName(e.target.value)} className="w-full border rounded-xl px-3 py-2 text-sm" placeholder="홍길동"/>
          </div>
          <div>
            <div className="text-sm text-neutral-500 mb-1">전화번호</div>
            <input value={phone} onChange={e=>setPhone(e.target.value)} className="w-full border rounded-xl px-3 py-2 text-sm" inputMode="tel" placeholder="010-0000-0000"/>
            <p className="text-[11px] text-neutral-500 mt-1">인증 목적의 최소 정보만 저장</p>
          </div>
          <button type="submit" className="w-full text-white rounded-xl py-3" style={{background:'var(--primary)'}}>로그인</button>
        </form>
      </div>
      <BottomBar/>
    </div>
  );
}
