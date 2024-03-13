import { useEffect, useRef, useState } from "react";

const useClickOutside = () => {
  const [show, setShow] = useState<boolean>(false);

  const nodeRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (nodeRef.current && !nodeRef.current.contains(e.target as Node)) {
        if (nodeRef.current && nodeRef.current.contains(e.target as Node)) {
          return;
        }
        setShow(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [show]);

  return { show, setShow, nodeRef };
};

export default useClickOutside;
