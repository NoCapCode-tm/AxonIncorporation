import React, { useState } from 'react';
import { cn } from '@/utils/helpers'; // Assuming your helper is here

const OptimizedImage = ({ 
  src, 
  alt, 
  webpSrc, 
  className, 
  priority = false,
  width,
  height 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div 
      className={cn(
        "overflow-hidden relative bg-slate-200", // Gray skeleton background before load
        className
      )}
      style={{ width, height }}
    >
      <picture>
        {webpSrc && <source srcSet={webpSrc} type="image/webp" />}
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : "auto"}
          onLoad={() => setIsLoaded(true)}
          className={cn(
            "w-full h-full object-cover transition-opacity duration-500",
            isLoaded ? "opacity-100" : "opacity-0"
          )}
        />
      </picture>
    </div>
  );
};

export default OptimizedImage;