// useScrollAnimation.js
import { useState, useEffect } from "react";

const useScrollAnimation = () => {
  const [isVisible, setVisible] = useState(true);
  const [isAnimating, setAnimating] = useState(true);
  const [isExiting, setExiting] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY; // Get the current scroll position
      const viewportHeight = window.innerHeight; // Get the viewport height
      const viewportWidth = window.innerWidth; // Get the viewport width

      // Check if the viewport is on mobile or desktop and adjust threshold accordingly
      const threshold =
        viewportWidth >= 1024 ? (2 / 3) * viewportHeight : 1 * viewportHeight; // 2/3 for desktop, 100% for mobile

      // Reverse animations if scroll position exceeds the threshold
      if (position > threshold && isVisible) {
        setAnimating(false);
        setExiting(true); // Trigger exit animation after scroll
        setTimeout(() => {
          setVisible(false); // Hide the sections after the animation completes
        }, 500);
      } else if (position <= threshold && !isVisible) {
        setVisible(true);
        setAnimating(true); // Trigger entrance animation to start
        setExiting(false);
      }
    };

    // Listen for scroll events
    window.addEventListener("scroll", handleScroll);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isVisible]);

  return { isVisible, isAnimating, isExiting };
};

export default useScrollAnimation;
