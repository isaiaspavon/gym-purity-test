import React from "react";
import html2canvas from "html2canvas";

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

const downloadImage = async () => {
  const resultElement = document.getElementById("shareable-result");
  if (!resultElement) return;

  const canvas = await html2canvas(resultElement);
  const dataURL = canvas.toDataURL("image/png");

  const link = document.createElement("a");
  link.href = dataURL;
  link.download = "gym_purity_result.png";
  link.click();
};


const ResultPage: React.FC<Props> = ({ score, onRestart }) => {
  const shareLink = "https://yourapp.com"; // Replace with actual domain

  const copyLink = async () => {
    await navigator.clipboard.writeText(shareLink);
    alert("Link copied to clipboard!");
  };

  return (
    <div>
      <div className="result-card" id="shareable-result">
        <h2>Your Gym Purity Score</h2>
        <p>{score} -— {getPersonality(score)}</p>
      </div>

      <button onClick={downloadImage}>📸 Save & Share on IG Story</button>
      <div></div>
      <button onClick={copyLink}>📤 Copy Score Link</button>
      <p>
        <button onClick={onRestart}>Retake Quiz</button>
      </p>
    </div>
  );
};

export default ResultPage;

