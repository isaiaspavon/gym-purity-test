import React from "react";

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
        <p>{score} / 100 — {getPersonality(score)}</p>
      </div>

      <button onClick={() => alert("Feature coming soon!")}>📸 Save & Share on IG Story</button>
      <button onClick={copyLink}>📤 Copy Score Link</button>
      <button onClick={onRestart}>Retake Quiz</button>
    </div>
  );
};

export default ResultPage;
