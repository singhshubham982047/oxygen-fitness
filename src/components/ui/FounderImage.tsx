import React, { useState, useRef } from 'react';
import { FOUNDER_INFO } from '../../config/founder.ts';
import { useOwnerImage } from '../../context/OwnerImageContext.tsx';
import { Camera, ShieldCheck, Instagram, Upload } from 'lucide-react';

interface FounderImageProps {
  className?: string;
  showBadge?: boolean;
  showUploadButton?: boolean;
}

export const FounderImage: React.FC<FounderImageProps> = ({
  className = 'w-full h-full object-cover',
  showBadge = true,
  showUploadButton = true
}) => {
  const { ownerImage, setOwnerImage, openModal } = useOwnerImage();
  const [hasError, setHasError] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleError = () => {
    if (!hasError) {
      setHasError(true);
      // Fallback to high-res athletic portrait
      setOwnerImage(FOUNDER_INFO.fallbackImage);
    }
  };

  const handleQuickUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result as string;
        setOwnerImage(result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="relative group overflow-hidden rounded-2xl bg-neutral-900 border border-neutral-800 shadow-2xl">
      <img
        src={ownerImage}
        alt={`Arpit Singh - Owner and Founder of Oxygen Fitness`}
        className={`${className} transition-transform duration-700 group-hover:scale-105`}
        onError={handleError}
        loading="lazy"
      />

      {/* Subtle Dark Vignette & Grain */}
      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent pointer-events-none" />

      {/* Top right quick upload action badge */}
      {showUploadButton && (
        <div className="absolute top-3 right-3 opacity-90 group-hover:opacity-100 transition-opacity pointer-events-auto">
          <button
            onClick={openModal}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-neutral-950/85 hover:bg-neutral-900 text-zinc-300 hover:text-white border border-neutral-800 backdrop-blur-md text-xs font-semibold shadow-lg transition-all cursor-pointer"
            title="Upload or change owner photo"
          >
            <Camera className="w-3.5 h-3.5" />
            <span className="hidden sm:inline text-[11px]">Change Photo</span>
          </button>
        </div>
      )}

      {/* Founder / Owner Badge Overlay */}
      {showBadge && (
        <div className="absolute bottom-2.5 left-2.5 right-2.5 sm:bottom-4 sm:left-4 sm:right-4 flex items-center justify-between pointer-events-auto gap-1.5">
          <div className="bg-neutral-950/90 backdrop-blur-md px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-xl border border-neutral-800">
            <div className="flex items-center gap-1.5">
              <span className="text-xs sm:text-sm font-bold text-white font-['Plus_Jakarta_Sans',sans-serif]">
                {FOUNDER_INFO.name}
              </span>
              <ShieldCheck className="w-3.5 h-3.5 text-zinc-300" />
            </div>
            <span className="text-[10px] sm:text-[11px] text-zinc-400 block font-medium">
              {FOUNDER_INFO.role}
            </span>
          </div>

          <div className="flex items-center gap-1 sm:gap-1.5">
            <a
              href={FOUNDER_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 sm:p-2.5 rounded-xl bg-neutral-950/90 backdrop-blur-md border border-neutral-800 text-zinc-300 hover:text-white hover:border-zinc-600 transition-colors cursor-pointer"
              title={`Follow ${FOUNDER_INFO.instagram} on Instagram`}
            >
              <Instagram className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </a>

            <button
              onClick={openModal}
              className="p-2 sm:p-2.5 rounded-xl bg-neutral-950/90 backdrop-blur-md border border-neutral-800 text-zinc-400 hover:text-white hover:border-zinc-600 transition-colors cursor-pointer"
              title="Upload / Change owner photo"
            >
              <Upload className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </button>
          </div>
        </div>
      )}

      <input
        type="file"
        ref={fileInputRef}
        onChange={handleQuickUpload}
        accept="image/*"
        className="hidden"
      />
    </div>
  );
};
