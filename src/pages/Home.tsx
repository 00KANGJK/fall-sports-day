import React, { useState } from "react";
import PromoBanner from "../components/PromoBanner";
import { SPORTS } from "../data/mocks";
import MediaGrid from "../components/MediaGrid";
import BottomBar from "../components/BottomBar";
import UploadModal from "../components/UploadModal";
import PhotoDetailModal from "../components/PhotoDetailModal";
import { getCurrentUserId } from "../utils/user";
import futsalIcon from "../icon/futsal.png";
import tabletennisIcon from "../icon/tabletennis.png";
import basketballIcon from "../icon/basketball.png";
import { MediaItem } from "../contexts/media";

export default function Home(){
  const [uploadModalOpen, setUploadModalOpen] = useState(false);
  const [photoDetailModalOpen, setPhotoDetailModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState<MediaItem | null>(null);

  const getSportIcon = (sportId: string) => {
    switch (sportId) {
      case "futsal":
        return futsalIcon;
      case "table-tennis":
        return tabletennisIcon;
      case "basketball":
        return basketballIcon;
      default:
        return futsalIcon;
    }
  };

  const handlePhotoClick = (media: MediaItem) => {
    setSelectedPhoto(media);
    setPhotoDetailModalOpen(true);
  };

  const handleSportClick = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <div className="pb-20">
      <div className="h-1" style={{background:'linear-gradient(90deg, var(--accent), var(--soft))'}}/>
      <section className="p-4 space-y-6">
        <PromoBanner/>

        <div>
          <h2 className="font-semibold mb-3 text-lg">스포츠 일정</h2>
          <div className="grid grid-cols-3 gap-2 sm:gap-3">
            {SPORTS.map(s => (
              <button 
                key={s.id} 
                onClick={() => handleSportClick(s.url)}
                className="bg-white border border-gray-200 rounded-xl p-2 sm:p-3 text-center touch-manipulation hover:border-green-300 hover:shadow-md transition-all duration-200"
              >
                <div className="flex justify-center mb-2">
                  <img 
                    src={getSportIcon(s.id)} 
                    alt={s.name}
                    className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
                  />
                </div>
                <div className="font-semibold text-xs sm:text-sm text-gray-900 mb-1">{s.name}</div>
                <div className="text-xs text-gray-600 mb-1">{s.date}</div>
                <div className="text-xs text-gray-500">{s.location}</div>
              </button>
            ))}
          </div>
        </div>

        <div>
          <h2 className="font-semibold mb-3">최근 업로드</h2>
          <MediaGrid sportFilter={null} onPhotoClick={handlePhotoClick}/>
        </div>

      </section>
      
      {/* 모달들 */}
      <UploadModal 
        isOpen={uploadModalOpen} 
        onClose={() => setUploadModalOpen(false)} 
      />
      
      <PhotoDetailModal 
        isOpen={photoDetailModalOpen} 
        onClose={() => setPhotoDetailModalOpen(false)}
        media={selectedPhoto}
      />
      
      <BottomBar onUploadClick={() => setUploadModalOpen(true)}/>
    </div>
  );
}
