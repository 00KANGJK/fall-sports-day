import { MediaItem } from "../contexts/media"; // MediaItem 타입 경로

export const SPORTS = [
  { id: "futsal", name: "풋살", emoji: "⚽" },
  { id: "basketball", name: "농구", emoji: "🏀" },
  { id: "table-tennis", name: "탁구", emoji: "🏓" },
] as const;

export const MOCK_MATCHES = [
  { id: "m1", sport: "futsal", round: "예선", time: "14:00", status: "scheduled", teamA: "개발팀", teamB: "기획팀" },
  { id: "m2", sport: "basketball", round: "결승", time: "15:00", status: "ongoing",  teamA: "디자인팀", teamB: "마케팅팀" },
  { id: "m3", sport: "table-tennis", round: "결승", time: "16:00", status: "finished", teamA: "총무팀", teamB: "인사팀" },
  { id: "e1", sport: "futsal", round: "이벤트", time: "13:30", status: "scheduled", teamA: "운영진", teamB: "관객", isEvent: true },
];

export const MOCK_PLAYERS = Array.from({ length: 12 }).map((_, i) => ({
  id: `p${i + 1}`,
  sport: i % 3 === 0 ? "futsal" : i % 3 === 1 ? "basketball" : "table-tennis",
  name: `선수 ${i + 1}`,
  team: ["개발팀", "기획팀", "디자인팀", "마케팅팀"][i % 4],
  photo: `https://placehold.co/200x200?text=P${i + 1}`,
}));

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