import React from "react";
import { PlayCircle } from "lucide-react";
import { useMedia } from "../contexts/media";
import Empty from "./primitives/Empty";

export default function MediaGrid({ sportFilter }: { sportFilter: string | null }) {
  const { media } = useMedia();
  const list = media.filter(m => !sportFilter || m.sport === sportFilter);
  if (list.length === 0) return <Empty text="아직 업로드가 없습니다." />;
  return (
    <div className="grid grid-cols-3 gap-2">
      {list.map(m => (
        <div key={m.id} className="aspect-square rounded-xl overflow-hidden relative border">
          <img src={m.thumb} alt="thumb" className="w-full h-full object-cover" />
          {m.type === "video" && <PlayCircle className="absolute bottom-2 right-2 w-6 h-6 text-white" />}
        </div>
      ))}
    </div>
  );
}
