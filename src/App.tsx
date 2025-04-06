import React, { useState } from "react";
import QuizPage from "./pages/QuizPage";
import ResultPage from "./pages/ResultPage";

function App() {
  const [score, setScore] = useState<number | null>(null);

  const handleFinish = (finalScore: number) => {
    setScore(finalScore);
  };

  const handleRestart = () => {
    setScore(null);
  };

  return (
    <div className="App">
      {score === null ? (
        <QuizPage onFinish={handleFinish} />
      ) : (
        <ResultPage score={score} onRestart={handleRestart} />
      )}
    </div>
  );
}

export default App;
