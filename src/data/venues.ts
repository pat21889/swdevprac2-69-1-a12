export interface Venue {
  vid: string;
  venueName: string;
  imgSrc: string;
}

export const venues: Venue[] = [
  { vid: "001", venueName: "The Bloom Pavilion", imgSrc: "/img/bloom.jpg" },
  { vid: "002", venueName: "Spark Space", imgSrc: "/img/sparkspace.jpg" },
  { vid: "003", venueName: "The Grand Table", imgSrc: "/img/grandtable.jpg" },
];

export const venueMap = new Map<string, Venue>(venues.map((v) => [v.vid, v]));
