import React, { useState } from "react";
import QuizPage from "./pages/QuizPage";
import ResultPage from "./pages/ResultPage";

function App() {
  const [score, setScore] = useState<number | null>(null);
  const [darkMode, setDarkMode] = useState(true);

  const handleFinish = (finalScore: number) => {
    setScore(finalScore);
  };

  const handleRestart = () => {
    setScore(null);
  };

  const toggleDarkMode = () => {
    document.body.classList.toggle("light-mode");
    setDarkMode(!darkMode);
  };

  return (
    <div className="App">
      <button onClick={toggleDarkMode}>
        Toggle {darkMode ? "Light" : "Dark"} Mode
      </button>

      {score === null ? (
        <QuizPage onFinish={handleFinish} />
      ) : (
        <ResultPage score={score} onRestart={handleRestart} />
      )}

      <footer style={{ marginTop: "2rem", fontSize: "0.9rem", color: "#777", textAlign: "center" }}>
        Made with 💪 by @yourhandle • #GymPurityTest
      </footer>
    </div>
  );
}

export default App;
