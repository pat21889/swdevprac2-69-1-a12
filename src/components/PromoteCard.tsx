'use client'

import { useState } from "react";
import VideoPlayer from "./VideoPlayer";
import useWindowListener from "@/hooks/useWindowListener";

export default function PromoteCard() {
  const [playing, setPlaying] = useState(true);

  useWindowListener("contextmenu", (e) => {
    e.preventDefault();
  });

  return (
    <div className="flex w-full max-w-3xl gap-6 rounded-lg bg-orange-50 p-5 shadow-lg">
      <div className="h-44 w-72 shrink-0 overflow-hidden border border-black bg-white">
        <VideoPlayer vdoSrc="/vdo/venue.mp4" isPlaying={playing} />
      </div>
      <div className="flex flex-col justify-between">
        <p>Book your venue today.</p>
        <button
          className="self-start rounded-lg bg-sky-600 px-4 py-2 text-white hover:bg-sky-700"
          onClick={() => setPlaying(!playing)}
        >
          {playing ? "Pause" : "Play"}
        </button>
      </div>
    </div>
  );
}
