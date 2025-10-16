import { MediaItem } from "../contexts/media"; // MediaItem 타입 경로

export const SPORTS = [
  { 
    id: "futsal", 
    name: "풋살",
    date: "10월 19일 (주일)",
    location: "과천 스타풋살장",
    url:"https://naver.me/5k7inKMP"
  },
  { 
    id: "table-tennis", 
    name: "탁구",
    date: "10월 26일 (주일)",
    location: "낙성대 탁구장",
    url:"https://naver.me/xyTi4NF2"
  },
  { 
    id: "basketball", 
    name: "농구",
    date: "11월 2일 (주일)",
    location: "바스농구클럽",
    url:"https://naver.me/F2Zdo0jh"
  },
] as const;


// ✨ INIT_MEDIA에 타입을 명시하여 오류 해결
export const INIT_MEDIA: MediaItem[] = Array.from({ length: 15 }).map(
  (_, i): MediaItem => ({
    id: `media${i + 1}`,
    sport: SPORTS[i % 3].id,
    type: i % 4 === 0 ? "video" : "photo",
    thumb: `https://placehold.co/400x400?text=${
      i % 4 === 0 ? "VIDEO" : "PHOTO"
    }+${i + 1}`,
    ownerId: i % 5 === 0 ? "seed-user" : null,
  })
);