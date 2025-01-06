import Image from "next/image";
import React, { ReactElement } from "react";

/**
 * Generates a list of React elements representing a star rating.
 *
 * This function takes a numeric rating between 0 and 5 and returns an array of React elements,
 * where each element visually represents a full, partially filled, or empty star.
 * The stars are rendered as `<Image>` components from Next.js, and partially filled stars
 * are clipped dynamically to reflect the decimal portion of the rating.
 *
 * @param {number} rating - A numeric rating between 0 and 5 (inclusive), which may include a decimal
 *                          for partial stars (e.g., 4.8).
 *
 * @returns {ReactElement[]} An array of React elements where:
 * - Full stars are represented by `<Image>` components for the full star SVG.
 * - Partially filled stars are rendered using a `<div>` with clipping applied to the star SVG.
 * - Empty stars are not rendered (optional).
 *
 * @example
 * // Render 4 full stars and 1 partial star (80% filled)
 * renderStars(4.8);
 *
 * @example
 * // Render 3 full stars and 1 partial star (50% filled)
 * renderStars(3.5);
 */
export const renderStars = (rating: number): ReactElement[] => {
  const stars: ReactElement[] = [];

  for (let i = 0; i < 5; i++) {
    if (rating > i && rating >= i + 1) {
      // Full star
      stars.push(
        <div key={`full-${i}`} className="relative w-full h-full aspect-square">
          <Image
            alt="star"
            src="/assets/svgs/star.svg"
            layout="fill"
            objectFit="contain"
          />
        </div>
      );
    } else if (rating > i && rating < i + 1) {
      // Partially filled star (clipped)
      stars.push(
        <div
          key={`partial-${i}`}
          className="relative w-full h-full aspect-square overflow-hidden"
          style={{
            clipPath: `inset(0 ${100 - (rating - i) * 100}% 0 0)`, // Clip from the right
          }}
        >
          <Image
            alt="partial star"
            src="/assets/svgs/star.svg"
            layout="fill"
            objectFit="contain"
          />
        </div>
      );
    }
  }
  return stars;
};
