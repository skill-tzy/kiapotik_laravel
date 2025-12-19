import { useEffect, useState } from "react";

const phrases = [
  { text: "Terlengkap", icon: "/assets/product.svg" },
  { text: "Termurah", icon: "/assets/cheap.svg" },
  { text: "Terjangkau", icon: "/assets/location.svg" },
  { text: "Terpercaya", icon: "/assets/mingcute.svg" },
];

export default function ChangingText() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <p className="sub">
      <span className="slide" key={phrases[index].text}>
        {phrases[index].text}
      </span>

      <img
        src={phrases[index].icon}
        alt="Ikon"
        className="sub-icon slide-img"
        key={phrases[index].icon}
      />
    </p>
  );
}
