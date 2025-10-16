import React, { useState } from "react";
import { HashRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import { MediaCtx } from "./contexts/media";
import { INIT_MEDIA } from "./data/mocks";
import { MediaItem } from "./contexts/media";
import "./theme.css";

export default function App() {
  const [media, setMedia] = useState<MediaItem[]>(INIT_MEDIA);
  return (
    <Router>
      <MediaCtx.Provider value={{ media, setMedia }}>
        <div className="max-w-md mx-auto min-h-screen bg-white">
          <AppRoutes />
        </div>
      </MediaCtx.Provider>
    </Router>
  );
}
