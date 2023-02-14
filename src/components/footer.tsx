import Image from "next/image";
import { useEffect, useState } from "react";

const Footer = () => {
  const [r, setR] = useState<HTMLElement>();
  useEffect(() => {
    setR(document.documentElement);
  }, []);
  return (
    <div
      className="myfooter"
      onMouseEnter={() => {
        r?.style.setProperty("--height2", "12vh");
        r?.style.setProperty("--height1", "4vh");
      }}
      onMouseLeave={() => {
        r?.style.setProperty("--height2", "8vh");
        r?.style.setProperty("--height1", "8vh");
      }}
    >
      Copyright cyantr09. All rights reserved.
    </div>
  );
};

export default Footer;
