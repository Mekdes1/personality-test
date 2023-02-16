import React, { useEffect, useState } from "react";
import Title from "../component/title/title";
import Button from "../component/button/button";
import QuestionText from "../component/question/question";
import AnswerButon from "../component/answerButton/answerButton";
import { useNavigate } from "react-router-dom";

const FinalResult = () => {
  const navigate = useNavigate();
  const [questionBank, setQuestionBank] = useState([]);

  const [result, setResult] = useState("");
  useEffect(() => {
    // get questionBank status from the session storage
    const questionBankStatus = JSON.parse(
      sessionStorage.getItem("questionBankStatus")
    );
    setQuestionBank(questionBankStatus);

    // calculate total score by counting the rank of the answers
    const totalScore = questionBankStatus
      .map((questions) => {
        const myAnswers = questions.answers.filter((answer) => {
          return answer.selectedAnswer === true;
        });
        return myAnswers;
      })
      .reduce((accumulator, currentValue) => {
        return accumulator + currentValue[0].rank;
      }, 0);

    // set result based on score
    if (totalScore > 1) {
      setResult("You are an Extrovert!");
    } else {
      setResult("You are an Introvert!");
    }
  }, []);

  return (
    <div className="container">
      <div className="title-container">
        <Title title={result} />
      </div>

      {questionBank.map((question, index) => {
        return (
          <div className="questions-continer" key={index}>
            <QuestionText question={question.question} />
            {question.answers.map((answer, inx) => {
              return (
                <AnswerButon
                  potentialAnswer={answer.answer}
                  id={answer.id}
                  key={inx}
                  selectedAnswer={answer.selectedAnswer}
                  disabled={true}
                />
              );
            })}
          </div>
        );
      })}

      <div className="start-btn-container">
        <Button
          onClick={() => {
            navigate("/");
          }}
          btnText={"Retake test"}
        />
      </div>
    </div>
  );
};

export default FinalResult;
