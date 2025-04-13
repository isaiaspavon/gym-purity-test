import React, { useEffect, useRef } from "react";
import html2canvas from "html2canvas";
import { motion } from "framer-motion";
import ConfettiBurst from "../components/ConfettiBurst";

// Firebase Analytics
import { logEvent } from "firebase/analytics";
import analytics from "../firebase";

type Props = {
  score: number;
  onRestart: () => void;
};

// const MotionDiv = motion.div as typeof motion.div & React.FC<React.HTMLAttributes<HTMLDivElement>>;


const getPersonality = (score: number): string => {
  if (score > 90) return "Gym Virgin 😇";
  if (score > 70) return "Weekend Warrior 🏋️";
  if (score > 40) return "Certified Bro 💪";
  return "Full-Send Degenerate 😈";
};

const getBadge = (score: number): string => {
  if (score > 90) return "/public/assets/badge_virgin.png";
  if (score > 70) return "/public/assets/badge_warrior.png";
  if (score > 40) return "/public/assets/badge_bro.png";
  return "/public/assets/badge_demon.png";
};

const ResultPage: React.FC<Props> = ({ score, onRestart }) => {
  const resultRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    resultRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const downloadImage = async () => {
    const element = document.getElementById("shareable-result");
    if (!element) return;
    const canvas = await html2canvas(element);
    const dataUrl = canvas.toDataURL("image/png");

    // Log share event
    logEvent(analytics, "share_clicked", { method: "save_image" });

    const link = document.createElement("a");
    link.href = dataUrl;
    link.download = "gym_purity_result.png";
    link.click();
  };

  const copyLink = async () => {
    await navigator.clipboard.writeText("https://yourapp.com");

    // Log share event
    logEvent(analytics, "share_clicked", { method: "copy_link" });

    alert("Link copied to clipboard!");
  };

  return (
    <div ref={resultRef}>
      <ConfettiBurst />

      <motion.div
        id="shareable-result"
        className="result-card"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        
      >
       <img 
          src={getBadge(score)} 
          alt="Badge" 
          style={{ width: "100px", height: "100px", marginBottom: "1rem" }} 
        />
        <h2>Your Gym Purity Score</h2>
        <p>{score} </p>
        <h3>{getPersonality(score)}</h3>
      </motion.div>

      <p style={{ marginBottom: "1rem" }}>
        📲 Save this image and post it to your Instagram Story with #GymPurityTest!
      </p>

      <button onClick={downloadImage} style={{ marginRight: "2rem" }}>📸 Save Result Image</button>
      <button onClick={copyLink}>📤 Copy Link to Share</button>
      <div></div>
      <button onClick={onRestart}>🔁 Retake Quiz</button>
    </div>
  );
};

export default ResultPage;
