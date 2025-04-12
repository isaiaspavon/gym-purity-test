import { useEffect } from "react";
import confetti from "canvas-confetti";

const ConfettiBurst = () => {
  useEffect(() => {
    confetti({
      particleCount: 150,
      spread: 100,
      origin: { y: 0.6 },
    });
  }, []);

  return null;
};

export default ConfettiBurst;
