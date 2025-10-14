import React, { createContext, useContext } from "react";
export type MediaItem = { id: string; sport: string; type: "photo" | "video"; thumb: string; ownerId: string | null; caption?: string };
export const MediaCtx = createContext<{ media: MediaItem[]; setMedia: React.Dispatch<React.SetStateAction<MediaItem[]>> }>(
  { media: [], setMedia: () => {} }
);
export const useMedia = () => useContext(MediaCtx);
