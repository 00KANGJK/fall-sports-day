import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Home as HomeIcon, ChevronLeft, User, LogIn } from "lucide-react";
import { useAuth } from "../contexts/auth";

export default function AppBar({ title, backTo }: { title: string; backTo?: number | string }) {
  const navigate = useNavigate();
  const { user } = useAuth() || { user: null };
  return (
    <div className="sticky top-0 z-20 bg-white/90 backdrop-blur border-b h-14 flex items-center px-3">
      {backTo !== undefined ? (
        <button onClick={() => navigate(backTo as any)} className="p-2 mr-1"><ChevronLeft className="w-5 h-5" /></button>
      ) : (
        <Link to="/" className="p-2 mr-1"><HomeIcon className="w-5 h-5" /></Link>
      )}
      <h1 className="text-base font-semibold flex-1 truncate">{title}</h1>
      {user ? <Link to="/me" className="p-2"><User className="w-5 h-5" /></Link> : <Link to="/login" className="p-2"><LogIn className="w-5 h-5" /></Link>}
    </div>
  );
}
