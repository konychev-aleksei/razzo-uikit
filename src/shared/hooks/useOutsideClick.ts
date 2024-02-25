import { useEffect, RefObject } from "react";

export default function useOutsideClick(
  ref: RefObject<HTMLElement> | undefined,
  handler?: () => void
) {
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (!handler) return;

      if (
        event.target === document.getElementsByTagName("html")[0] &&
        event.clientX >= document.documentElement.offsetWidth
      ) {
        return;
      }

      let containedToAnyRefs = false;

      if (ref && ref.current && ref.current.contains(event.target)) {
        containedToAnyRefs = true;
      }

      if (!containedToAnyRefs) {
        handler();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, handler]);
}
