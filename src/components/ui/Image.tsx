'use client';

import Image from 'next/image';
import { useState } from 'react';
import { cn } from '@/lib/utils/cn';

interface CustomImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  fallbackSrc?: string;
  quality?: number;
  objectFit?: 'cover' | 'contain' | 'fill';
}

// 황금비율 (1:1.618)
const GOLDEN_RATIO = 1.618;

export const CustomImage = ({
  src,
  alt,
  width = 300,
  height = width / GOLDEN_RATIO,
  className,
  fallbackSrc = '/images/fallback.png',
  quality = 80,
  objectFit = 'cover',
}: CustomImageProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [imgSrc, setImgSrc] = useState(src);

  const handleError = () => {
    setImgSrc(fallbackSrc);
    setIsLoading(false);
  };

  return (
    <div className="relative overflow-hidden">
      {isLoading && (
        <div className="absolute inset-0 animate-pulse bg-gray-200" />
      )}
      <Image
        src={imgSrc}
        alt={alt}
        width={width}
        height={height}
        className={cn(
          'transition-opacity duration-300',
          isLoading ? 'opacity-0' : 'opacity-100',
          className
        )}
        onLoadingComplete={() => setIsLoading(false)}
        onError={handleError}
        quality={quality}
        objectFit={objectFit}
      />
    </div>
  );
};

CustomImage.displayName = 'CustomImage'; 