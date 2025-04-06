import React from "react";

type Props = {
  question: string;
  index: number;
  onChange: (checked: boolean) => void;
};

const QuestionCard: React.FC<Props> = ({ question, index, onChange }) => {
  return (
    <div className="question-card" style={{ display: "flex", alignItems: "center", gap: "0.5rem", margin: "0.5rem 0" }}>
      <span style={{ width: "2rem", textAlign: "right" }}>{index + 1}.</span>
      <input type="checkbox" onChange={(e) => onChange(e.target.checked)} />
      <label>{question}</label>
    </div>
  );
};

export default QuestionCard;
