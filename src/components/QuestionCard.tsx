import React from "react";
import { motion } from "framer-motion";

type Props = {
  question: string;
  index: number;
  onChange: (checked: boolean, question: string) => void;
};

const QuestionCard: React.FC<Props> = ({ question, index, onChange }) => {
  return (
    <motion.div
      className="question-card"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
        margin: "0.5rem 0",
      }}
    >
      <span style={{ width: "2rem", textAlign: "right" }}>{index + 1}.</span>
      <input
        type="checkbox"
        onChange={(e) => onChange(e.target.checked, question)}
      />
      <label>{question}</label>
    </motion.div>
  );
};

export default QuestionCard;
