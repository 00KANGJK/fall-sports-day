import React from "react";
import { Link } from "react-router-dom";
import { Upload } from "lucide-react";
export default function FabUpload(){
  return (
    <Link to="/upload" className="fixed bottom-16 right-4 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg" style={{background:'var(--primary)'}}>
      <Upload className="w-6 h-6" />
    </Link>
  );
}
