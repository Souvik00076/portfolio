import { useState } from "react";

export const HoverImage = ({
  defaultSrc,
  hoverSrc,
}: {
  defaultSrc: string;
  hoverSrc: string;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <img
      className="w-8 h-8 transition-all duration-300"
      src={isHovered ? hoverSrc : defaultSrc}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      alt="Hoverable"
    />
  );
};
