'use client'

import { useEffect, useRef } from "react";

interface VideoPlayerProps {
  vdoSrc: string;
  isPlaying: boolean;
}

export default function VideoPlayer({ vdoSrc, isPlaying }: VideoPlayerProps) {
  const vdoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (isPlaying) {
      vdoRef.current?.play();
    } else {
      vdoRef.current?.pause();
    }
  }, [isPlaying]);

  return (
    <video
      ref={vdoRef}
      src={vdoSrc}
      className="w-full h-full object-cover"
      muted
      loop
      playsInline
    />
  );
}
