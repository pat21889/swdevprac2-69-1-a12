"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Rating from "@mui/material/Rating";
import InteractiveCard from "./InteractiveCard";

interface CardProps {
  vid: string;
  venueName: string;
  imgSrc: string;
  onRatingChange?: (venueName: string, rating: number) => void;
}

export default function Card({ vid, venueName, imgSrc, onRatingChange }: CardProps) {
  const [rating, setRating] = useState(0);

  return (
    <InteractiveCard>
      <div className="w-64 overflow-hidden">
        <Link href={`/venue/${vid}`} className="block">
          <div className="relative h-40 w-full">
            <Image
              src={imgSrc}
              alt={venueName}
              fill
              sizes="256px"
              className="object-cover"
            />
          </div>
          <h3 className="px-4 pt-3 text-base font-bold text-gray-900">
            {venueName}
          </h3>
        </Link>
        {onRatingChange && (
        <div className="px-4 pb-3">
          <Rating
            id={venueName}
            name={venueName}
            data-testid={`${venueName} Rating`}
            value={rating}
            onChange={(_, newValue) => {
              const value = newValue ?? 0;
              setRating(value);
              onRatingChange(venueName, value);
            }}
          />
        </div>
        )}
      </div>
    </InteractiveCard>
  );
}
