import React, { useEffect, useState } from "react";
import Button from "../component/button/button";
import QuestionText from "../component/question/question";
import AnswerButon from "../component/answerButton/answerButton";
import PageCounter from "../component/pageCounter/pageCounter";
import { questionBank } from "./questions";
import { useNavigate } from "react-router-dom";

const QuestionPage = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [currentSelectedAnswer, setCurrentSelectedAnswer] = useState(false);
  const totalPage = questionBank.length;
  const [questionBankStatus, setQuestionBankStatus] = useState(questionBank);

  const onSelectAnswer = (choice) => {
    // updating state of selected answer
    setQuestionBankStatus(
      questionBankStatus.map((item) => {
        // first math the correct question id
        if (
          item.questionId === questionBankStatus[currentPage - 1].questionId
        ) {
          // go to the answers array and updated the selected one
          const updatedChoose = item.answers.map((answer) => {
            if (answer.id === choice.id) {
              return {
                ...answer,
                selectedAnswer: true,
              };
            } else {
              return {
                ...answer,
                selectedAnswer: false,
              };
            }
          });
          // return  with the updated answers array
          return {
            ...item,
            answers: updatedChoose,
          };
        } else {
          return item;
        }
      })
    );
  };

  useEffect(() => {
    // check if an answer has been selected for the current question
    const isAnswerSelected = questionBankStatus[currentPage - 1].answers.filter(
      (answer) => {
        return answer.selectedAnswer === true;
      }
    );

    if (isAnswerSelected.length > 0) {
      setCurrentSelectedAnswer(true);
    } else {
      setCurrentSelectedAnswer(false);
    }

    sessionStorage.setItem(
      "questionBankStatus",
      JSON.stringify(questionBankStatus)
    );
  }, [currentPage, questionBankStatus]);

  return (
    <div className="container">
      <div className="questions-continer">
        <QuestionText question={questionBankStatus[currentPage - 1].question} />
        {questionBankStatus[currentPage - 1].answers.map((choice, index) => {
          return (
            <AnswerButon
              onClick={() => onSelectAnswer(choice)}
              potentialAnswer={choice.answer}
              id={choice.id}
              key={index}
              selectedAnswer={choice.selectedAnswer}
            />
          );
        })}
      </div>

      <div className="btns-container">
        {" "}
        <Button
          onClick={() => {
            if (currentPage > 1) {
              setCurrentPage(currentPage - 1);
            }
          }}
          disabled={currentPage === 1 ? true : false}
          btnText="previous question"
        />
        <PageCounter currentPage={currentPage} totalPage={totalPage} />
        <Button
          disabled={currentSelectedAnswer ? false : true}
          onClick={() => {
            if (currentSelectedAnswer && totalPage > currentPage) {
              setCurrentPage(currentPage + 1);
            } else {
              navigate("/result");
            }
          }}
          btnText={currentPage === totalPage ? "Finish test" : "next question"}
        />
      </div>
    </div>
  );
};

export default QuestionPage;
