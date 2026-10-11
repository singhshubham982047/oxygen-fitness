import React, { createContext, useContext, useState, useEffect } from 'react';
import { FOUNDER_INFO } from '../config/founder.ts';

interface OwnerImageContextType {
  ownerImage: string;
  setOwnerImage: (imageUrl: string) => void;
  resetOwnerImage: () => void;
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const STORAGE_KEY = 'oxygen_owner_image_v2';

const OwnerImageContext = createContext<OwnerImageContextType | undefined>(undefined);

export const OwnerImageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [ownerImage, setOwnerImageState] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) return stored;
      // also check previous key if any
      const legacy = localStorage.getItem('oxygen_founder_image');
      if (legacy) return legacy;
    }
    return FOUNDER_INFO.image;
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const setOwnerImage = (imageUrl: string) => {
    setOwnerImageState(imageUrl);
    try {
      localStorage.setItem(STORAGE_KEY, imageUrl);
      localStorage.setItem('oxygen_founder_image', imageUrl);
    } catch {
      // ignore storage quota error if image is very large
    }
  };

  const resetOwnerImage = () => {
    setOwnerImageState(FOUNDER_INFO.image);
    try {
      localStorage.removeItem(STORAGE_KEY);
      localStorage.removeItem('oxygen_founder_image');
    } catch {
      // ignore
    }
  };

  return (
    <OwnerImageContext.Provider
      value={{
        ownerImage,
        setOwnerImage,
        resetOwnerImage,
        isModalOpen,
        openModal: () => setIsModalOpen(true),
        closeModal: () => setIsModalOpen(false)
      }}
    >
      {children}
    </OwnerImageContext.Provider>
  );
};

export const useOwnerImage = () => {
  const context = useContext(OwnerImageContext);
  if (!context) {
    throw new Error('useOwnerImage must be used within an OwnerImageProvider');
  }
  return context;
};
