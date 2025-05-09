import  { useState } from "react";
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

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="App">
      <button onClick={toggleDarkMode}>
        Toggle {darkMode ? "Light" : "Dark"} Mode
      </button>

      <button onClick={scrollToBottom} style={{marginLeft:"1.25rem"}}>
        Skip to Bottom
      </button>

      {score === null ? (
        <QuizPage onFinish={handleFinish} />
      ) : (
        <ResultPage score={score} onRestart={handleRestart} />
      )}

      <footer style={{ marginTop: "2rem", fontSize: "0.9rem", color: "#777", textAlign: "center" }}>
        Made with 💪 by <a href="https://isaiaspavon.github.io/developer-portfolio/" target="_blank" rel="noopener noreferrer" style={{ color: '#ff3c3c', textDecoration: 'none', fontWeight: 'bold' }}>@isaiaspavon</a> • #GymPurityTest
      </footer>
    </div>
  );
}

export default App;
