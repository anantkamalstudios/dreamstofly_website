import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useScrollToTop = (options = {}) => {
  const { pathname } = useLocation();
  const {
    behavior = "smooth",
    block = "start",
    inline = "nearest",
    offset = 0,
  } = options;

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
  }, [pathname, behavior, offset]);

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

  const scrollToTop = (customOffset = offset) => {
    try {
      window.scrollTo({
        top: customOffset,
        left: 0,
        behavior: behavior,
      });
    } catch (error) {
      try {
        window.scrollTo(0, customOffset);
      } catch (fallbackError) {
        console.warn("Manual scroll to top failed:", fallbackError);
      }
    }
  };

  return { scrollToTop };
};

export default useScrollToTop;
