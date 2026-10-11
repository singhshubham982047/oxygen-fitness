import React, { useState, useRef } from 'react';
import { useOwnerImage } from '../../context/OwnerImageContext.tsx';
import { useToast } from '../../context/ToastContext.tsx';
import { FOUNDER_INFO } from '../../config/founder.ts';
import { X, Upload, Link as LinkIcon, RotateCcw, Check, Sparkles, Image as ImageIcon } from 'lucide-react';

export const OwnerImageUploadModal: React.FC = () => {
  const { isModalOpen, closeModal, ownerImage, setOwnerImage, resetOwnerImage } = useOwnerImage();
  const toast = useToast();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [previewUrl, setPreviewUrl] = useState<string>(ownerImage);
  const [urlInput, setUrlInput] = useState<string>('');
  const [activeTab, setActiveTab] = useState<'upload' | 'url'>('upload');
  const [isProcessing, setIsProcessing] = useState(false);

  // Sync preview when modal opens
  React.useEffect(() => {
    if (isModalOpen) {
      setPreviewUrl(ownerImage);
    }
  }, [isModalOpen, ownerImage]);

  if (!isModalOpen) return null;

  const compressAndSetImage = (file: File) => {
    setIsProcessing(true);
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        let width = img.width;
        let height = img.height;
        const maxDim = 1200;

        if (width > maxDim || height > maxDim) {
          if (width > height) {
            height = Math.round((height * maxDim) / width);
            width = maxDim;
          } else {
            width = Math.round((width * maxDim) / height);
            height = maxDim;
          }
        }

        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.drawImage(img, 0, 0, width, height);
          const compressed = canvas.toDataURL('image/jpeg', 0.85);
          setPreviewUrl(compressed);
        } else {
          setPreviewUrl(e.target?.result as string);
        }
        setIsProcessing(false);
      };
      img.onerror = () => {
        setIsProcessing(false);
        toast.error('Invalid image file format.');
      };
      img.src = e.target?.result as string;
    };
    reader.readAsDataURL(file);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      compressAndSetImage(file);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file && file.type.startsWith('image/')) {
      compressAndSetImage(file);
    }
  };

  const handleApplyUrl = () => {
    if (!urlInput.trim()) return;
    setPreviewUrl(urlInput.trim());
    toast.info('Image URL loaded for preview');
  };

  const handleSave = () => {
    if (!previewUrl) return;
    setOwnerImage(previewUrl);
    toast.success(`Owner image for ${FOUNDER_INFO.name} updated successfully!`);
    closeModal();
  };

  const handleReset = () => {
    resetOwnerImage();
    setPreviewUrl(FOUNDER_INFO.image);
    toast.info('Reset to default official owner portrait.');
    closeModal();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div
        className="relative w-full max-w-lg bg-neutral-900 border border-neutral-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-neutral-800 bg-neutral-950/60">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-neutral-800 text-zinc-200">
              <ImageIcon className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white font-['Plus_Jakarta_Sans',sans-serif]">
                Update Owner Photo
              </h3>
              <p className="text-xs text-zinc-400">
                Arpit Singh ({FOUNDER_INFO.role})
              </p>
            </div>
          </div>
          <button
            onClick={closeModal}
            className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-neutral-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-5">
          {/* Preview Area */}
          <div className="flex flex-col sm:flex-row items-center gap-5 p-4 rounded-xl bg-neutral-950/60 border border-neutral-800/80">
            <div className="relative w-28 h-36 rounded-xl overflow-hidden bg-neutral-800 border border-neutral-700 shrink-0 shadow-md">
              <img
                src={previewUrl}
                alt="Preview"
                className="w-full h-full object-cover"
                onError={() => {
                  setPreviewUrl(FOUNDER_INFO.fallbackImage);
                }}
              />
              {isProcessing && (
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                  <div className="w-5 h-5 border-2 border-zinc-400 border-t-white rounded-full animate-spin" />
                </div>
              )}
            </div>

            <div className="space-y-1 text-center sm:text-left text-xs">
              <span className="font-bold text-white text-sm block">Live Preview</span>
              <p className="text-zinc-400">
                This image will appear on the Home page, About page, Contact section, and footer as Owner Arpit Singh.
              </p>
              <span className="inline-flex items-center gap-1 text-[11px] text-zinc-300 font-medium pt-1">
                <Sparkles className="w-3.5 h-3.5 text-zinc-400" />
                Updates instantly across all pages
              </span>
            </div>
          </div>

          {/* Mode Switcher */}
          <div className="flex border-b border-neutral-800">
            <button
              onClick={() => setActiveTab('upload')}
              className={`flex-1 pb-3 text-xs font-bold transition-colors border-b-2 cursor-pointer flex items-center justify-center gap-2 ${
                activeTab === 'upload'
                  ? 'border-white text-white'
                  : 'border-transparent text-zinc-400 hover:text-zinc-200'
              }`}
            >
              <Upload className="w-3.5 h-3.5" />
              Upload Image File
            </button>
            <button
              onClick={() => setActiveTab('url')}
              className={`flex-1 pb-3 text-xs font-bold transition-colors border-b-2 cursor-pointer flex items-center justify-center gap-2 ${
                activeTab === 'url'
                  ? 'border-white text-white'
                  : 'border-transparent text-zinc-400 hover:text-zinc-200'
              }`}
            >
              <LinkIcon className="w-3.5 h-3.5" />
              Paste Image URL
            </button>
          </div>

          {activeTab === 'upload' ? (
            <div
              onDragOver={(e) => e.preventDefault()}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current?.click()}
              className="border-2 border-dashed border-neutral-700 hover:border-zinc-500 rounded-xl p-8 text-center cursor-pointer transition-colors bg-neutral-950/40 group"
            >
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                accept="image/*"
                className="hidden"
              />
              <div className="w-12 h-12 rounded-full bg-neutral-800 group-hover:bg-neutral-700 flex items-center justify-center mx-auto mb-3 text-zinc-300 transition-colors">
                <Upload className="w-6 h-6" />
              </div>
              <p className="text-sm font-semibold text-white">
                Click to browse or drag and drop your photo
              </p>
              <p className="text-xs text-zinc-400 mt-1">
                Supports JPG, PNG, WEBP from your phone or PC
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              <label className="text-xs font-bold text-zinc-300 block">
                Direct Image Link (HTTPS)
              </label>
              <div className="flex gap-2">
                <input
                  type="url"
                  value={urlInput}
                  onChange={(e) => setUrlInput(e.target.value)}
                  placeholder="https://example.com/arpit-singh.jpg"
                  className="flex-1 px-3.5 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-sm text-white focus:outline-none focus:border-zinc-400"
                />
                <button
                  onClick={handleApplyUrl}
                  className="px-4 py-2.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-bold transition-colors cursor-pointer"
                >
                  Load
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-neutral-800 bg-neutral-950/80 flex items-center justify-between gap-3">
          <button
            onClick={handleReset}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-zinc-400 hover:text-zinc-200 hover:bg-neutral-800 transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Reset to Default
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={closeModal}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-zinc-400 hover:text-white transition-colors cursor-pointer"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-zinc-200 hover:bg-white text-neutral-950 text-xs font-bold transition-all shadow-md cursor-pointer"
            >
              <Check className="w-4 h-4" />
              Apply Owner Photo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
