import { useState, useRef, useEffect } from "react";

interface OptimizedImageProps {
    src: string;
    alt: string;
    className?: string;
    priority?: boolean;
    draggable?: boolean;
}

/**
 * OptimizedImage — A performance-focused image component.
 *
 * - `loading="lazy"` + `decoding="async"` for off-screen images
 * - `fetchPriority="high"` for hero/above-fold images (set `priority={true}`)
 * - Smooth fade-in on load with a subtle placeholder background
 */
const OptimizedImage = ({
    src,
    alt,
    className = "",
    priority = false,
    draggable,
}: OptimizedImageProps) => {
    const [loaded, setLoaded] = useState(false);
    const imgRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        // If the image is already cached, mark as loaded immediately
        if (imgRef.current?.complete && imgRef.current?.naturalWidth > 0) {
            setLoaded(true);
        }
    }, [src]);

    return (
        <img
            ref={imgRef}
            src={src}
            alt={alt}
            loading={priority ? "eager" : "lazy"}
            decoding="async"
            fetchPriority={priority ? "high" : "auto"}
            draggable={draggable}
            onLoad={() => setLoaded(true)}
            className={`${className} transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"
                }`}
            style={{
                backgroundColor: loaded ? "transparent" : "hsl(220 15% 92%)",
            }}
        />
    );
};

export default OptimizedImage;
