import { useState, useEffect } from "react";

/**
 * A hook that returns a header height that shrinks when scrolling down
 * and grows when scrolling up. The header is full size only at the top.
 *
 * @param {number} maxHeight - Maximum height when at top of page.
 * @param {number} minHeight - Minimum height when scrolled down.
 * @param {number} shrinkFactor - How aggressively the header shrinks with scroll.
 */
export function useScrollHeader(
  maxHeight = 200,
  minHeight = 70,
  shrinkFactor = 0.5
) {
  const [headerHeight, setHeaderHeight] = useState(maxHeight);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.scrollY;

      // Shrink proportionally to scroll distance
      let newHeight = maxHeight - currentScrollTop * shrinkFactor;

      // Clamp between min and max
      if (newHeight > maxHeight) newHeight = maxHeight;
      if (newHeight < minHeight) newHeight = minHeight;

      setHeaderHeight(newHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [maxHeight, minHeight, shrinkFactor]);

  return headerHeight;
}
