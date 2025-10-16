import React, { useState, useEffect } from "react";
import { X, Download, Trash2 } from "lucide-react";
import { MediaItem } from "../contexts/media";
import { useMedia } from "../contexts/media";
import { getCurrentUserId } from "../utils/user";
import ConfirmModal from "./ConfirmModal";

interface PhotoDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  media: MediaItem | null;
}

export default function PhotoDetailModal({ isOpen, onClose, media }: PhotoDetailModalProps) {
  const { setMedia } = useMedia();
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [currentUserId] = useState(() => getCurrentUserId());

  // 모달이 열릴 때마다 상태 초기화
  useEffect(() => {
    if (isOpen) {
      setConfirmDelete(false);
    }
  }, [isOpen]);

  const handleDownload = () => {
    if (!media) return;
    
    // 이미지를 새 창에서 열고 다운로드
    const link = document.createElement('a');
    link.href = media.thumb;
    link.download = `photo_${media.id}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDelete = () => {
    if (!media) return;
    
    setMedia(prev => prev.filter(item => item.id !== media.id));
    setConfirmDelete(false);
    onClose();
  };

  const isMyPhoto = media?.ownerId === currentUserId;

  if (!isOpen || !media) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-95 flex items-center justify-center z-50">
      <div className="relative w-full h-full flex items-center justify-center">
        {/* 닫기 버튼 */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-3 bg-black bg-opacity-50 hover:bg-opacity-70 rounded-full text-white touch-manipulation"
        >
          <X className="w-6 h-6" />
        </button>
        
        {/* 다운로드 버튼 */}
        <button 
          onClick={handleDownload}
          className="absolute top-4 right-16 z-10 p-3 bg-black bg-opacity-50 hover:bg-opacity-70 rounded-full text-white touch-manipulation"
        >
          <Download className="w-6 h-6" />
        </button>
        
        {/* 삭제 버튼 (본인 사진만) */}
        {isMyPhoto && (
          <button 
            onClick={() => setConfirmDelete(true)}
            className="absolute top-4 right-28 z-10 p-3 bg-red-600 bg-opacity-50 hover:bg-opacity-70 rounded-full text-white touch-manipulation"
          >
            <Trash2 className="w-6 h-6" />
          </button>
        )}
        
        {/* 이미지 */}
        <div 
          className="w-full h-full flex items-center justify-center p-4 cursor-pointer"
          onClick={onClose}
        >
          <img 
            src={media.thumb} 
            alt={media.caption || "업로드된 사진"} 
            className="max-w-full max-h-full object-contain"
          />
        </div>
        
        {/* 이미지 정보 */}
        {media.caption && (
          <div className="absolute bottom-4 left-4 right-4 bg-black bg-opacity-70 text-white p-4 rounded-lg">
            <p className="text-sm">{media.caption}</p>
          </div>
        )}
        
        {/* 모바일 하단 터치 영역 */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
      </div>
      
      {/* 삭제 확인 모달 */}
      <ConfirmModal 
        open={confirmDelete} 
        title="사진 삭제" 
        message="이 사진을 삭제하시겠습니까? 삭제 후 복구할 수 없습니다." 
        confirmText="삭제" 
        cancelText="취소" 
        onConfirm={handleDelete} 
        onCancel={() => setConfirmDelete(false)} 
      />
    </div>
  );
}
