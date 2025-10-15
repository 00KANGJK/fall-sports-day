import React from "react";
import { Routes, Route, NavLink, useParams } from "react-router-dom";
import NoticeBanner from "../components/NoticeBanner";
import FabUpload from "../components/FabUpload";
import BottomBar from "../components/BottomBar";
import Overview from "./Overview";
import Matches from "./Matches";
import MatchDetail from "./MatchDetail";
import Media from "./Media";
import Players from "./Players";
import PlayerProfile from "./PlayerProfile";
import { SPORTS } from "../data/mocks";

function TabLink({ to, label }:{to:string; label:string}){
  return (
    <NavLink to={to} className="text-center py-3" style={({isActive}) => isActive
      ? { color: 'var(--primary)', borderBottom: '2px solid var(--primary)', fontWeight: 600 }
      : { color: '#6B7280' }}>
      {label}
    </NavLink>
  );
}

export default function SportLayout(){
  const { sport } = useParams();
  const s = SPORTS.find(x => x.id === sport);
  if(!s) return <div className="p-4">잘못된 종목</div>;
  return (
    <div className="pb-16">
      <div className="h-1" style={{background:'linear-gradient(90deg, var(--accent), var(--soft))'}}/>
      <NoticeBanner/>
      <div className="sticky top-0 z-10 bg-white border-b">
        <div className="grid grid-cols-4 text-sm">
          <TabLink to={`/sports/${sport}/overview`} label="개요"/>
          <TabLink to={`/sports/${sport}/matches`} label="경기"/>
          <TabLink to={`/sports/${sport}/media`} label="미디어"/>
          <TabLink to={`/sports/${sport}/players`} label="선수"/>
        </div>
      </div>
      <div className="p-4">
        <Routes>
          <Route path="overview" element={<Overview sport={sport!}/>}/>
          <Route path="matches" element={<Matches sport={sport!}/>}/>
          <Route path="matches/:id" element={<MatchDetail/>}/>
          <Route path="media" element={<Media sport={sport!}/>}/>
          <Route path="players" element={<Players sport={sport!}/>}/>
          <Route path="players/:id" element={<PlayerProfile/>}/>
        </Routes>
      </div>
      <FabUpload/>
      <BottomBar/>
    </div>
  );
}
