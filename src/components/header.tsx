import Link from "next/link";
import { useEffect, useState } from "react";

const Header = () => {
  const [r, setR] = useState<HTMLElement>();
  useEffect(() => {
    setR(document.documentElement);
  }, []);

  return (
    <div
      className="myheader"
      onMouseEnter={() => {
        r?.style.setProperty("--height1", "12vh");
        r?.style.setProperty("--height2", "4vh");
      }}
      onMouseLeave={() => {
        r?.style.setProperty("--height1", "8vh");
        r?.style.setProperty("--height2", "8vh");
      }}
    >
      <Link href="/" className="mylink">
        WEBVAS
      </Link>
    </div>
  );
};

export default Header;
