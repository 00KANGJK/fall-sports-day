import React from "react";
import { X, Download } from "lucide-react";
import { MediaItem } from "../contexts/media";

interface PhotoDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  media: MediaItem | null;
}

export default function PhotoDetailModal({ isOpen, onClose, media }: PhotoDetailModalProps) {
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
        
        {/* 이미지 */}
        <div className="w-full h-full flex items-center justify-center p-4">
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
    </div>
  );
}
