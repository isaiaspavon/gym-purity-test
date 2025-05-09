import React, { useEffect, useRef } from "react";
import html2canvas from "html2canvas";
import { motion, MotionProps } from "framer-motion";
import ConfettiBurst from "../components/ConfettiBurst";

// Firebase Analytics
import { logEvent } from "firebase/analytics";
import analytics from "../firebase";

type Props = {
  score: number;
  onRestart: () => void;
};

const MotionDiv = motion.div as React.FC<
  React.HTMLAttributes<HTMLDivElement> & MotionProps
>;

const getPersonality = (score: number): string => {
  if (score > 90) return "Gym Virgin 😇";
  if (score > 70) return "Weekend Warrior 🏋️";
  if (score > 40) return "Certified Bro 💪";
  return "Full-Send Degenerate 😈";
};

const getBadge = (score: number): string => {
  if (score > 90) return "/assets/badge_virgin.png";
  if (score > 70) return "/assets/badge_warrior.png";
  if (score > 40) return "/assets/badge_bro.png";
  return "/assets/badge_demon.png";
};

const ResultPage: React.FC<Props> = ({ score, onRestart }) => {
  const resultRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    resultRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const shareToInstagram = async () => {
    const element = document.getElementById("shareable-result");
    if (!element) return;

    try {
      const canvas = await html2canvas(element, {
        scale: 2,
        backgroundColor: null,
        logging: false,
        useCORS: true,
      });

      const dataUrl = canvas.toDataURL("image/png");

      const link = document.createElement("a");
      link.href = dataUrl;
      link.download = "gym_purity_result.png";

      logEvent(analytics, "share_clicked", { method: "instagram" });

      alert(
        "Image saved! To share to Instagram Story:\n1. Open Instagram\n2. Create a new Story\n3. Upload the saved image\n4. Add #GymPurityTest to your story!"
      );

      link.click();
    } catch (error) {
      console.error("Error generating image:", error);
      alert("Sorry, there was an error generating the image. Please try again.");
    }
  };

  const copyLink = async () => {
    const url = `${window.location.origin}?score=${score}`;
    await navigator.clipboard.writeText(url);

    logEvent(analytics, "share_clicked", { method: "copy_link" });

    alert("Link copied to clipboard! Share your results with friends!");
  };

  return (
    <div ref={resultRef}>
      <ConfettiBurst />

      <div style={{ height: "2.5rem" }} />
      <MotionDiv
        className="result-card"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        style={{
          background: "linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)",
          padding: "2rem",
          borderRadius: "1rem",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          color: "white",
          textAlign: "center",
          maxWidth: "500px",
          margin: "2.5rem auto 0 auto",
          position: "relative",
        }}
      >
        <div id="shareable-result">
          <img
            src={getBadge(score)}
            alt="Badge"
            style={{
              width: "120px",
              height: "120px",
              marginBottom: "1.5rem",
              filter: "drop-shadow(0 4px 6px rgba(0, 0, 0, 0.2))",
            }}
          />
          <h2
            style={{
              fontSize: "2rem",
              marginBottom: "0.5rem",
              background: "linear-gradient(45deg, #ff3c3c, #ff6b6b)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Your Gym Purity Score
          </h2>
          <p
            style={{
              fontSize: "3rem",
              fontWeight: "bold",
              margin: "1rem 0",
              color: "#ff3c3c",
            }}
          >
            {score}
          </p>
          <h3
            style={{
              fontSize: "1.5rem",
              marginBottom: "2rem",
              color: "#ff6b6b",
            }}
          >
            {getPersonality(score)}
          </h3>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              justifyContent: "center",
              marginTop: "2rem",
              padding: "1rem",
              background: "rgba(255, 255, 255, 0.1)",
              borderRadius: "0.5rem",
            }}
          >
            <img
              src="/logo.svg"
              alt="GymPurity Logo"
              style={{ width: "32px", height: "32px" }}
            />
            <span
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "1.2rem",
                letterSpacing: "1px",
                color: "#ff3c3c",
              }}
            >
              GymPurity
            </span>
          </div>
        </div>
      </MotionDiv>

      <div style={{ height: "2.5rem" }} />
      <p style={{ marginBottom: "1rem", textAlign: "center" }}>
        📲 Save this image and post it to your Instagram Story with #GymPurityTest!
      </p>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "1rem",
          justifyContent: "center",
          flexWrap: "wrap",
          marginBottom: "1rem",
        }}
      >
        <button onClick={shareToInstagram}>📸 Share to Instagram Story</button>
        <button onClick={copyLink}>📤 Copy Link to Share</button>
      </div>
      <button onClick={onRestart} style={{ display: "block", margin: "0 auto" }}>
        🔁 Retake Quiz
      </button>
    </div>
  );
};

export default ResultPage;

/*import React, { useEffect, useRef } from "react";
import html2canvas from "html2canvas";
import { motion, MotionProps } from "framer-motion";
import ConfettiBurst from "../components/ConfettiBurst";

// Firebase Analytics
import { logEvent } from "firebase/analytics";
import analytics from "../firebase";

type Props = {
  score: number;
  onRestart: () => void;
};

const getPersonality = (score: number): string => {
  if (score > 90) return "Gym Virgin 😇";
  if (score > 70) return "Weekend Warrior 🏋️";
  if (score > 40) return "Certified Bro 💪";
  return "Full-Send Degenerate 😈";
};

const getBadge = (score: number): string => {
  if (score > 90) return "/assets/badge_virgin.png";
  if (score > 70) return "/assets/badge_warrior.png";
  if (score > 40) return "/assets/badge_bro.png";
  return "/assets/badge_demon.png";
};

const MotionDiv = motion.div as React.FC<
  React.HTMLAttributes<HTMLDivElement> & MotionProps
>;

const ResultPage: React.FC<Props> = ({ score, onRestart }) => {
  const resultRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    resultRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const shareToInstagram = async () => {
    const element = document.getElementById("shareable-result");
    if (!element) return;
    
    try {
      const canvas = await html2canvas(element, {
        scale: 2, // Higher quality
        backgroundColor: null,
        logging: false,
        useCORS: true
      });
      
      const dataUrl = canvas.toDataURL("image/png");
      
      // Create a temporary link to download the image
      const link = document.createElement("a");
      link.href = dataUrl;
      link.download = "gym_purity_result.png";
      
      // Log share event
      logEvent(analytics, "share_clicked", { method: "instagram" });
      
      // Show instructions
      alert("Image saved! To share to Instagram Story:\n1. Open Instagram\n2. Create a new Story\n3. Upload the saved image\n4. Add #GymPurityTest to your story!");
      
      // Trigger download
      link.click();
    } catch (error) {
      console.error("Error generating image:", error);
      alert("Sorry, there was an error generating the image. Please try again.");
    }
  };

  const copyLink = async () => {
    const url = `${window.location.origin}?score=${score}`;
    await navigator.clipboard.writeText(url);
    
    // Log share event
    logEvent(analytics, "share_clicked", { method: "copy_link" });
    
    alert("Link copied to clipboard! Share your results with friends!");
  };

  return (
    <div ref={resultRef}>
      <ConfettiBurst />

      <div style={{ height: '2.5rem' }} />
      <motion.div
        className="result-card"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        style={{
          background: "linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)",
          padding: "2rem",
          borderRadius: "1rem",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          color: "white",
          textAlign: "center",
          maxWidth: "500px",
          margin: "2.5rem auto 0 auto",
          position: "relative"
        }}
      >
        <div id="shareable-result">
          <img 
            src={getBadge(score)} 
            alt="Badge" 
            style={{ 
              width: "120px", 
              height: "120px", 
              marginBottom: "1.5rem",
              filter: "drop-shadow(0 4px 6px rgba(0, 0, 0, 0.2))"
            }} 
          />
          <h2 style={{ 
            fontSize: "2rem", 
            marginBottom: "0.5rem",
            background: "linear-gradient(45deg, #ff3c3c, #ff6b6b)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}>Your Gym Purity Score</h2>
          <p style={{ 
            fontSize: "3rem", 
            fontWeight: "bold",
            margin: "1rem 0",
            color: "#ff3c3c"
          }}>{score}</p>
          <h3 style={{ 
            fontSize: "1.5rem",
            marginBottom: "2rem",
            color: "#ff6b6b"
          }}>{getPersonality(score)}</h3>
          <div style={{ 
            display: "flex", 
            alignItems: "center", 
            gap: "0.5rem", 
            justifyContent: "center", 
            marginTop: "2rem",
            padding: "1rem",
            background: "rgba(255, 255, 255, 0.1)",
            borderRadius: "0.5rem"
          }}>
            <img src="/logo.svg" alt="GymPurity Logo" style={{ width: "32px", height: "32px" }} />
            <span style={{ 
              fontFamily: "'Bebas Neue', sans-serif", 
              fontSize: "1.2rem", 
              letterSpacing: "1px", 
              color: "#ff3c3c" 
            }}>GymPurity</span>
          </div>
        </div>
      </motion.div>
      <div style={{ height: '2.5rem' }} />
      <p style={{ marginBottom: "1rem", textAlign: 'center' }}>
        📲 Save this image and post it to your Instagram Story with #GymPurityTest!
      </p>
      <div style={{ display: 'flex', flexDirection: 'row', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '1rem' }}>
        <button onClick={shareToInstagram}>
          📸 Share to Instagram Story
        </button>
        <button onClick={copyLink}>
          📤 Copy Link to Share
        </button>
      </div>
      <button onClick={onRestart} style={{ display: 'block', margin: '0 auto' }}>🔁 Retake Quiz</button>
    </div>
  );
};

export default ResultPage;
*/