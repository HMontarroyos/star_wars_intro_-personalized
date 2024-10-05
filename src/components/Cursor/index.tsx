import React, { useState, useEffect } from "react";
import * as S from "./styled";

const Cursor = (): JSX.Element => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setCursorPosition({ x: event.clientX, y: event.clientY });
      const elements = document.querySelectorAll('[id="hoverable"]');
      const isHovered = Array.from(elements).some((element) => {
        return element.contains(event.target as Node);
      });
      setIsHovered(isHovered);
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <S.Cursor
      style={{ left: cursorPosition.x + "px", top: cursorPosition.y + "px" }}
      hover={isHovered}
    />
  );
};

export default Cursor;
