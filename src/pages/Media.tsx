import React from "react";
import MediaGrid from "../components/MediaGrid";
import Chip from "../components/primitives/Chip";
export default function Media({ sport }:{sport:string}){
  return (
    <div>
      <div className="flex gap-2 mb-3"><Chip>최신</Chip><Chip>인기</Chip><Chip>내 업로드</Chip></div>
      <MediaGrid sportFilter={sport}/>
    </div>
  );
}
