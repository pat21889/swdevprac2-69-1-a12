"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import styles from "./banner.module.css";

const covers = [
  "/img/cover.jpg",
  "/img/cover2.jpg",
  "/img/cover3.jpg",
  "/img/cover4.jpg",
];

export default function Banner() {
  const [index, setIndex] = useState(0);
  const router = useRouter();
  const { data: session } = useSession();

  return (
    <div
      className={styles.banner}
      onClick={() => setIndex((i) => (i + 1) % covers.length)}
    >
      <Image
        className={styles.image}
        src={covers[index]}
        alt="Event venue background"
        fill
        priority
      />
      <div className={styles.overlay} />
      {session && (
        <div className="absolute right-4 top-3 z-10 text-lg font-semibold text-white">
          Welcome {session.user?.name}
        </div>
      )}
      <div className={styles.content}>
        <h1 className={styles.title}>where every event finds its venue</h1>
        <p className={styles.subtitle}>
          Finding the perfect venue has never been easier. Whether it&apos;s
          a wedding, corporate event, or private party, we&apos;re connecting
          people to the perfect place.
        </p>
      </div>
      <button
        aria-label="Previous banner"
        className={`${styles.arrow} ${styles.arrowLeft}`}
        onClick={(e) => {
          e.stopPropagation();
          setIndex((i) => (i - 1 + covers.length) % covers.length);
        }}
      >
        &#10094;
      </button>
      <button
        aria-label="Next banner"
        className={`${styles.arrow} ${styles.arrowRight}`}
        onClick={(e) => {
          e.stopPropagation();
          setIndex((i) => (i + 1) % covers.length);
        }}
      >
        &#10095;
      </button>
      <button
        className={styles.selectButton}
        onClick={(e) => {
          e.stopPropagation();
          router.push("/venue");
        }}
      >
        Select Venue
      </button>
    </div>
  );
}
