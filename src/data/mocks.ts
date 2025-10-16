import { MediaItem } from "../contexts/media"; // MediaItem 타입 경로

export const SPORTS = [
  { 
    id: "futsal", 
    name: "풋살 축구", 
    emoji: "⚽",
    date: "10월 19일 (주일)",
    location: "교회 축구장",
    status: "active"
  },
  { 
    id: "table-tennis", 
    name: "탁구", 
    emoji: "🏓",
    date: "11월 2일 (주일)",
    location: "교회 다목적실",
    status: "coming-soon"
  },
  { 
    id: "basketball", 
    name: "농구", 
    emoji: "🏀",
    date: "10월 26일 (주일)",
    location: "교회 체육관",
    status: "coming-soon"
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