

import React from "react";

type Props = {
  question: string;
  index: number;
  onChange: (checked: boolean) => void;
};

const QuestionCard: React.FC<Props> = ({ question, index, onChange }) => {
  return (
    <div className="question-card">
      <label>
        <input type="checkbox" onChange={(e) => onChange(e.target.checked)} />
        {question}
      </label>
    </div>
  );
};

export default QuestionCard;
