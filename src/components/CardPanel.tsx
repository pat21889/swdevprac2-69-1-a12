"use client";

import { useReducer } from "react";
import Card from "./Card";

import { venues as defaultVenues, type Venue } from "@/data/venues";

interface CardPanelProps {
  venues?: Venue[];
}

type RatingMap = Map<string, number>;

type RatingAction =
  | { type: "SET_RATING"; venueName: string; rating: number }
  | { type: "REMOVE"; venueName: string };

function ratingReducer(state: RatingMap, action: RatingAction): RatingMap {
  switch (action.type) {
    case "SET_RATING": {
      const next = new Map(state);
      next.set(action.venueName, action.rating);
      return next;
    }
    case "REMOVE": {
      const next = new Map(state);
      next.delete(action.venueName);
      return next;
    }
    default:
      return state;
  }
}

export default function CardPanel({ venues = defaultVenues }: CardPanelProps) {
  const [ratings, dispatch] = useReducer(
    ratingReducer,
    new Map(venues.map((v) => [v.venueName, 0])),
  );

  return (
    <div className="flex w-full flex-col items-center gap-6">
      <div className="flex w-full flex-wrap items-stretch justify-center gap-6">
        {venues.map((v) => (
          <Card
            key={v.vid}
            vid={v.vid}
            venueName={v.venueName}
            imgSrc={v.imgSrc}
            onRatingChange={(venueName, rating) =>
              dispatch({ type: "SET_RATING", venueName, rating })
            }
          />
        ))}
      </div>
      <div className="flex w-full max-w-4xl flex-col gap-1">
        {Array.from(ratings.entries()).map(([venueName, rating]) => (
          <div
            key={venueName}
            data-testid={venueName}
            onClick={() => dispatch({ type: "REMOVE", venueName })}
            className="cursor-pointer rounded px-2 py-1 hover:bg-gray-100"
          >
            {venueName} Rating : {rating}
          </div>
        ))}
      </div>
    </div>
  );
}
