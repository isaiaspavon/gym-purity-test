import React, { useState } from "react";
import gymQuestions from "../data/questions";
import QuestionCard from "../components/QuestionCard";

type Props = {
  onFinish: (score: number) => void;
};

const QuizPage: React.FC<Props> = ({ onFinish }) => {
  const [selectedCount, setSelectedCount] = useState(0);

  const handleChange = (checked: boolean) => {
    setSelectedCount((prev) => prev + (checked ? 1 : -1));
  };

  const handleFinish = () => {
    const score = gymQuestions.length - selectedCount;
    onFinish(score);
  };

  return (
    <div>
      <h2>Gym Purity Test</h2>
      {gymQuestions.map((q, i) => (
        <QuestionCard key={i} index={i} question={q} onChange={handleChange} />
      ))}
      <button onClick={handleFinish}>Finish Quiz</button>
    </div>
  );
};

export default QuizPage;
