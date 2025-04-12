import React from "react";
import { motion } from "framer-motion";
import "./QuestionCard.css"; // 👈 make sure this CSS file exists

type Props = {
  question: string;
  index: number;
  onChange: (checked: boolean, question: string) => void;
};

const QuestionCard: React.FC<Props> = ({ question, index, onChange }) => {
  return (
    <motion.label
      className="question-card"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
    >
      <span className="question-index">{index + 1}.</span>
      <input
        type="checkbox"
        onChange={(e) => onChange(e.target.checked, question)}
      />
      <span className="custom-checkbox" />
      <span className="question-text">{question}</span>
    </motion.label>
  );
};

export default QuestionCard;
