import React, { useState, useEffect } from "react";
import gymQuestions from "../data/questions";
import QuestionCard from "../components/QuestionCard";

// Firebase Analytics
import { logEvent } from "firebase/analytics";
import analytics from "../firebase";

type Props = {
  onFinish: (score: number) => void;
};

const QuizPage: React.FC<Props> = ({ onFinish }) => {
  const [selectedCount, setSelectedCount] = useState(0);

  useEffect(() => {
    logEvent(analytics, "quiz_started", {
      started_at: new Date().toISOString(),
    });
  }, []);

  const handleChange = (checked: boolean) => {
    setSelectedCount((prev) => prev + (checked ? 1 : -1));
  };

  const handleFinish = () => {
    const score = gymQuestions.length - selectedCount;

    // Log quiz completion
    logEvent(analytics, "quiz_completed", {
      score,
      completed_at: new Date().toISOString(),
    });

    onFinish(score);
  };

  return (
    <div>
      <h2 className="branding">The Gym Purity Test</h2>
      <p className="subtagline">How unhinged is your fitness journey?</p>

      <p>{selectedCount} / {gymQuestions.length} questions checked</p>
      <progress value={selectedCount} max={gymQuestions.length}></progress>

      {gymQuestions.map((q, i) => (
        <QuestionCard key={i} index={i} question={q} onChange={handleChange} />
      ))}
      <button onClick={handleFinish}>Finish Quiz</button>
    </div>
  );
};

export default QuizPage;
