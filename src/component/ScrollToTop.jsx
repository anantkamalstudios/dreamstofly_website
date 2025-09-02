import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = ({ children, behavior = "smooth", offset = 0 }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top when pathname changes
    try {
      window.scrollTo({
        top: offset,
        left: 0,
        behavior: behavior,
      });
    } catch (error) {
      // Fallback for older browsers
      try {
        window.scrollTo(0, offset);
      } catch (fallbackError) {
        console.warn("Scroll to top failed:", fallbackError);
      }
    }
  }, [pathname, behavior, offset]);

  // Also scroll to top when component mounts
  useEffect(() => {
    try {
      window.scrollTo({
        top: offset,
        left: 0,
        behavior: behavior,
      });
    } catch (error) {
      try {
        window.scrollTo(0, offset);
      } catch (fallbackError) {
        console.warn("Scroll to top failed:", fallbackError);
      }
    }
  }, [behavior, offset]);

  return children || null;
};

export default ScrollToTop;
