import React, { useEffect } from "react";
import { SPORTS, MOCK_MATCHES, INIT_MEDIA } from "../data/mocks";
export default function Smoke(){
  useEffect(()=> {
    console.assert(SPORTS.length===3, "SPORTS invalid");
    console.assert(MOCK_MATCHES.every(m=>m.teamA && m.teamB && m.time), "MATCH invalid");
    console.assert(Array.isArray(INIT_MEDIA), "INIT_MEDIA invalid");
  },[]);
  return null;
}
