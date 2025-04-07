import React from "react";

type Props = {
  score: number;
  onRestart: () => void;
};

const getPersonality = (score: number): string => {
  if (score > 45) return "Gym Virgin 😇";
  if (score > 30) return "Weekend Warrior 🏋️";
  if (score > 15) return "Certified Bro 💪";
  return "Full-Send Degenerate 😈";
};

const ResultPage: React.FC<Props> = ({ score, onRestart }) => {
  return (
    <div>
      <h2>Your Gym Purity Score</h2>
      <p>
        {score}
      </p>
      <p>
      {getPersonality(score)}
      </p>
      <button onClick={onRestart}>Retake Quiz</button>
    </div>
  );
};

export default ResultPage;
