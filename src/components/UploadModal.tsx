import React, { useState } from "react";
import { useMedia } from "../contexts/media";
import { X, Upload as UploadIcon, Plus, Trash2 } from "lucide-react";

interface UploadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface SelectedFile {
  file: File;
  preview: string;
  id: string;
}

export default function UploadModal({ isOpen, onClose }: UploadModalProps) {
  const { setMedia } = useMedia();
  const [selectedFiles, setSelectedFiles] = useState<SelectedFile[]>([]);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const newFiles: SelectedFile[] = [];
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const id = `temp_${Date.now()}_${i}`;
        const preview = URL.createObjectURL(file);
        newFiles.push({ file, preview, id });
      }
      setSelectedFiles(prev => [...prev, ...newFiles]);
    }
    // input 초기화하여 같은 파일도 다시 선택 가능하게 함
    event.target.value = '';
  };

  const removeFile = (id: string) => {
    setSelectedFiles(prev => {
      const fileToRemove = prev.find(f => f.id === id);
      if (fileToRemove) {
        URL.revokeObjectURL(fileToRemove.preview);
      }
      return prev.filter(f => f.id !== id);
    });
  };

  const handleUpload = () => {
    if (selectedFiles.length === 0) return;
    
    selectedFiles.forEach((selectedFile, index) => {
      const id = `m_${Date.now()}_${index}`;
      setMedia(prev => [{ 
        id, 
        sport: "futsal", // 기본값으로 설정
        type: 'photo', 
        thumb: selectedFile.preview, 
        ownerId: null, 
        caption: "" 
      }, ...prev]);
    });
    
    // 업로드 후 상태 초기화
    selectedFiles.forEach(file => {
      URL.revokeObjectURL(file.preview);
    });
    setSelectedFiles([]);
    onClose();
  };

  const handleClose = () => {
    selectedFiles.forEach(file => {
      URL.revokeObjectURL(file.preview);
    });
    setSelectedFiles([]);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-end sm:items-center justify-center z-50 p-0 sm:p-4">
      <div className="bg-white rounded-t-xl sm:rounded-xl w-full h-[90vh] sm:max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-4 border-b sticky top-0 bg-white">
          <h2 className="text-lg font-semibold">사진 업로드</h2>
          <button 
            onClick={handleClose}
            className="p-2 hover:bg-gray-100 rounded-full touch-manipulation"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <div className="p-4 space-y-4">
          {/* 파일 선택 영역 */}
          <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center">
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handleFileSelect}
              className="hidden"
              id="file-upload"
            />
            <label 
              htmlFor="file-upload"
              className="flex flex-col items-center justify-center cursor-pointer touch-manipulation"
            >
              <Plus className="w-12 h-12 text-gray-400 mb-2" />
              <div className="text-gray-600 font-medium mb-1">사진 선택</div>
              <div className="text-sm text-gray-500">여러 개 선택 가능</div>
            </label>
          </div>

          {/* 선택된 사진들 */}
          {selectedFiles.length > 0 && (
            <div>
              <div className="text-sm text-gray-600 mb-3">선택된 사진 ({selectedFiles.length}개)</div>
              <div className="grid grid-cols-2 gap-3">
                {selectedFiles.map((file) => (
                  <div key={file.id} className="relative">
                    <img 
                      src={file.preview} 
                      alt="미리보기" 
                      className="w-full aspect-square object-cover rounded-xl"
                    />
                    <button 
                      onClick={() => removeFile(file.id)}
                      className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 touch-manipulation"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* 버튼 영역 */}
          <div className="flex gap-3 pt-4">
            <button 
              onClick={handleClose}
              className="flex-1 border border-gray-300 text-gray-700 rounded-xl py-4 font-medium touch-manipulation"
            >
              취소
            </button>
            <button 
              onClick={handleUpload}
              disabled={selectedFiles.length === 0}
              className={`flex-1 text-white rounded-xl py-4 font-medium touch-manipulation ${
                selectedFiles.length === 0 ? 'opacity-50 cursor-not-allowed bg-gray-400' : 'bg-green-600 hover:bg-green-700'
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                <UploadIcon className="w-5 h-5" />
                업로드 ({selectedFiles.length})
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
