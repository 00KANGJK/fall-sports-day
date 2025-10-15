import React, { useState } from "react";
import BottomBar from "../components/BottomBar";
import ConfirmModal from "../components/ConfirmModal";
import { Trash2 } from "lucide-react";
import { useAuth } from "../contexts/auth";
import { useMedia } from "../contexts/media";
import Empty from "../components/primitives/Empty";

export default function MePage(){
  const { user, setUser } = useAuth();
  const { media, setMedia } = useMedia();
  const my = user ? media.filter(m=>m.ownerId===user.id) : [];
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [deleteId, setDeleteId] = useState<string|null>(null);
  const askDelete = (id:string)=>{ setDeleteId(id); setConfirmOpen(true); };
  const doDelete = ()=>{ setMedia(prev=>prev.filter(x=>x.id!==deleteId)); setConfirmOpen(false); setDeleteId(null); };

  return (
    <div className="pb-16">
      <div className="p-4 space-y-4">
        {user ? (
          <div className="border rounded-2xl p-4 flex items-center justify-between">
            <div>
              <div className="text-sm text-neutral-500">이름</div>
              <div className="font-semibold">{user.name}</div>
              <div className="text-xs text-neutral-500">{user.phone}</div>
            </div>
            <button onClick={()=>setUser(null)} className="border rounded-xl px-3 py-2 text-sm">로그아웃</button>
          </div>
        ) : <div className="card">로그인 필요</div>}

        <div>
          <h3 className="font-semibold mb-2">내 업로드</h3>
          {my.length===0 ? <Empty text="내 업로드가 없습니다"/> : (
            <div className="grid grid-cols-3 gap-2">
              {my.map(m => (
                <div key={m.id} className="aspect-square rounded-xl overflow-hidden relative border">
                  <img src={m.thumb} alt="thumb" className="w-full h-full object-cover"/>
                  <button aria-label="delete" onClick={()=>askDelete(m.id)} className="absolute top-1 right-1 bg-white/90 rounded-full p-1 border">
                    <Trash2 className="w-4 h-4 text-red-600"/>
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <BottomBar/>
      <ConfirmModal open={confirmOpen} title="삭제 확인" message="정말 삭제하시겠습니까? 삭제 후 복구할 수 없습니다." confirmText="삭제" cancelText="취소" onConfirm={doDelete} onCancel={()=>setConfirmOpen(false)} />
    </div>
  );
}
