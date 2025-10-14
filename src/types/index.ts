export type SportId = "futsal" | "basketball" | "table-tennis";
export type MediaItem = {
  id: string;
  sport: SportId;
  type: "photo" | "video";
  thumb: string;
  ownerId: string | null;
  caption?: string;
};
