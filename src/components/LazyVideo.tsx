"use client";

import { useEffect, useRef } from "react";

type Props = {
  src: string;
  poster?: string;
  className?: string;
  ariaLabel?: string;
};

export function LazyVideo({ src, poster, className, ariaLabel }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !video.src) {
          video.src = src;
          video.load();
          video.play().catch(() => {});
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, [src]);

  return (
    <video
      ref={videoRef}
      autoPlay
      loop
      muted
      playsInline
      poster={poster}
      className={className}
      aria-label={ariaLabel}
    />
  );
}
