import React from "react";
import { NavLink } from "react-router-dom";
import { Upload, Home as HomeIcon, User, LogIn } from "lucide-react";
import { useAuth } from "../contexts/auth";

export default function BottomBar() {
  const { user } = useAuth() || { user: null };
  const active = (a:boolean) => ({ color: a ? "var(--primary)" : "#6B7280" });
  return (
    <nav className="fixed bottom-0 inset-x-0 h-14 bg-white border-t z-20 grid grid-cols-3 text-xs">
      <NavLink to="/" className="flex items-center justify-center gap-1" style={({isActive})=>active(isActive)}><HomeIcon className="w-5 h-5" />홈</NavLink>
      <NavLink to="/upload" className="flex items-center justify-center gap-1" style={({isActive})=>active(isActive)}><Upload className="w-5 h-5" />업로드</NavLink>
      <NavLink to={user ? "/me" : "/login"} className="flex items-center justify-center gap-1" style={({isActive})=>active(isActive)}>{user ? <><User className="w-5 h-5" />내정보</> : <><LogIn className="w-5 h-5" />로그인</>}</NavLink>
    </nav>
  );
}
