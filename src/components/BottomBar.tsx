import React from "react";
import { NavLink } from "react-router-dom";
import { Upload, Home as HomeIcon } from "lucide-react";

interface BottomBarProps {
  onUploadClick: () => void;
}

export default function BottomBar({ onUploadClick }: BottomBarProps) {
  const active = (a:boolean) => ({ color: a ? "var(--primary)" : "#6B7280" });
  return (
    <nav className="fixed bottom-0 inset-x-0 h-16 bg-white border-t z-20 grid grid-cols-2 text-xs safe-area-pb">
      <NavLink 
        to="/" 
        className="flex items-center justify-center gap-1 touch-manipulation py-2" 
        style={({isActive})=>active(isActive)}
      >
        <HomeIcon className="w-6 h-6" />
        <span className="hidden sm:inline">홈</span>
      </NavLink>
      <button 
        onClick={onUploadClick}
        className="flex items-center justify-center gap-1 text-gray-600 hover:text-green-600 touch-manipulation py-2"
      >
        <Upload className="w-6 h-6" />
        <span className="hidden sm:inline">사진 업로드</span>
      </button>
    </nav>
  );
}
