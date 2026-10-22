'use client'

import React, { useState } from "react";

interface InteractiveCardProps {
  children: React.ReactNode;
}

export default function InteractiveCard({ children }: InteractiveCardProps) {
  const [hovered, setHovered] = useState(false);

  const baseClass = "shadow-lg rounded-lg bg-white";
  const hoverClass = "shadow-2xl rounded-lg bg-neutral-200";

  return (
    <div
      className={hovered ? hoverClass : baseClass}
      onMouseOver={() => setHovered(true)}
      onMouseOut={() => setHovered(false)}
    >
      {children}
    </div>
  );
}
