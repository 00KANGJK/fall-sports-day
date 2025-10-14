import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AppBar from "../components/AppBar";
import BottomBar from "../components/BottomBar";
import ConfirmModal from "../components/ConfirmModal";
import Toast from "../components/Toast";
import { SPORTS } from "../data/mocks";
import { useAuth } from "../contexts/auth";
import { useMedia } from "../contexts/media";

// ✨ SPORTS 배열의 id 값들로 이루어진 타입을 동적으로 생성합니다.
// ("futsal" | "basketball" | "table-tennis") 타입이 됩니다.
type SportId = typeof SPORTS[number]['id'];

export default function UploadPage() {
  const navigate = useNavigate();
  const { user } = useAuth() || { user: null };
  const { setMedia } = useMedia();

  // ✨ useState에 SportId 타입을 명시하여 관련 오류를 해결합니다.
  const [sport, setSport] = useState<SportId>(SPORTS[0].id);
  
  const [caption, setCaption] = useState("");
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [toastOpen, setToastOpen] = useState(false);

  useEffect(() => { if (!user) navigate('/login'); }, [user, navigate]);

  const doUpload = () => {
    if (!user) return;
    const id = `m_${Date.now()}`;
    setMedia(prev => [{ id, sport, type: 'photo', thumb: `https://placehold.co/400x400?text=PHOTO+${prev.length + 1}`, ownerId: user.id, caption }, ...prev]);
    setToastOpen(true); setTimeout(() => setToastOpen(false), 1500);
    navigate(-1);
  };

  return (
    <div className="pb-16">
      <AppBar title="업로드" backTo={-1} />
      <div className="p-4 space-y-4">
        <div className="card">
          <div className="text-sm text-neutral-500 mb-2">소스 선택</div>
          <button className="w-full border rounded-xl py-3">갤러리에서 선택</button>
        </div>
        <div className="card">
          <div className="text-sm text-neutral-500 mb-2">메타데이터</div>
          {/* ✨ e.target.value가 string이므로, as SportId로 타입을 단언해줍니다. */}
          <select value={sport} onChange={e => setSport(e.target.value as SportId)} className="w-full border rounded-xl px-3 py-2 text-sm mb-2">
            {SPORTS.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
          </select>
          <input value={caption} onChange={e => setCaption(e.target.value)} placeholder="캡션(80자)" className="w-full border rounded-xl px-3 py-2 text-sm" />
        </div>
        <button onClick={() => setConfirmOpen(true)} className="w-full text-white rounded-xl py-3" style={{ background: 'var(--primary)' }}>업로드</button>
        <ConfirmModal open={confirmOpen} title="업로드 확인" message="이 미디어를 업로드하시겠습니까?" confirmText="업로드" cancelText="취소" onConfirm={doUpload} onCancel={() => setConfirmOpen(false)} />
        <Toast open={toastOpen} text="업로드 완료" />
      </div>
      <BottomBar />
    </div>
  );
}