import React from "react";
import "./answerButton.css";

export default function AnswerButon({
  potentialAnswer,
  selectedAnswer,
  onClick,
  id,
  disabled,
}) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`answer-btn ${selectedAnswer ? "selected-answer" : null}`}
    >
      <span>{id}</span>
      {potentialAnswer}
    </button>
  );
}
