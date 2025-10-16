import React from "react";
import { PlayCircle } from "lucide-react";
import { useMedia } from "../contexts/media";
import { MediaItem } from "../contexts/media";
import Empty from "./primitives/Empty";

interface MediaGridProps {
  sportFilter: string | null;
  onPhotoClick?: (media: MediaItem) => void;
}

export default function MediaGrid({ sportFilter, onPhotoClick }: MediaGridProps) {
  const { media } = useMedia();
  const list = media.filter(m => !sportFilter || m.sport === sportFilter);
  
  if (list.length === 0) return <Empty text="아직 업로드가 없습니다." />;
  
  return (
    <div className="grid grid-cols-3 gap-2">
      {list.map(m => (
        <div 
          key={m.id} 
          className="aspect-square rounded-xl overflow-hidden relative border cursor-pointer hover:opacity-90 transition-opacity"
          onClick={() => onPhotoClick?.(m)}
        >
          <img src={m.thumb} alt="thumb" className="w-full h-full object-cover" />
          {m.type === "video" && <PlayCircle className="absolute bottom-2 right-2 w-6 h-6 text-white" />}
        </div>
      ))}
    </div>
  );
}
