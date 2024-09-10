import  { useEffect, useRef, useState } from "react";
import "../styles/BubbleComponent.css";

const BubbleComponent = () => {
  const bubbleRef = useRef(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const bubble = bubbleRef.current;
    let positionX = window.innerWidth / 2; 
    let positionY = window.innerHeight / 2; 
    let velocityX = Math.random() * 2 - 1; 
    let velocityY = Math.random() * 2 - 1; 
    let speed = 0.5; 

    const handleScroll = () => {
      setIsActive(true);
    };

    const updateBubblePosition = () => {
      if (!isActive) return;

      positionX += velocityX * speed;
      positionY += velocityY * speed;

      if (
        positionX + bubble.clientWidth >= window.innerWidth ||
        positionX <= 0
      ) {
        velocityX = -velocityX;
      }
      if (
        positionY + bubble.clientHeight >= window.innerHeight ||
        positionY <= 0
      ) {
        velocityY = -velocityY; 
      }

      bubble.style.left = `${positionX}px`;
      bubble.style.top = `${positionY}px`;

      requestAnimationFrame(updateBubblePosition);
    };

    window.addEventListener("scroll", handleScroll);

    updateBubblePosition();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isActive]);

  return <div ref={bubbleRef} className="bubble"></div>;
};

export default BubbleComponent;
