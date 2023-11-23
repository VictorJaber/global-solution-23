import { useState } from "react";
import "./style.css";

export default function Survey({ title, text, quiz }) {
  //   const [currentQuestion, setCurrentQuestion] = useState(questions[0]);

  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [selectedChoices, setSelectedChoices] = useState([]);
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });

  const { questions } = quiz;
  const { question, choices, correctAnswer } = questions[activeQuestion];

  const getAnswerTextColor = (answer, correctAnswer, totalWrongAnswer) => {
    let color = "orange";

    if (correctAnswer == answer) {
      color = "green";
    }

    if (totalWrongAnswer == answer) {
      color = "red";
    }

    return color;
  };

  const onClickNext = () => {
    setSelectedAnswerIndex(null);
    setResult((prev) =>
      selectedAnswer
        ? {
            ...prev,
            score: prev.score + 5,
            correctAnswers: prev.correctAnswers + 1,
          }
        : { ...prev, wrongAnswers: prev.wrongAnswers + 1 }
    );
    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1);
    } else {
      setActiveQuestion(0);
      setShowResult(true);
    }
  };

  const onAnswerSelected = (answer, index) => {
    setSelectedAnswerIndex(index);
    setSelectedChoices([...selectedChoices, { answer }]);

    if (answer === correctAnswer) {
      setSelectedAnswer(true);
    } else {
      setSelectedAnswer(false);
    }
  };

  const addLeadingZero = (number) => (number > 9 ? number : `0${number}`);

  return (
    <div className="quiz-container">
      {!showResult ? (
        <div>
          <div>
            <span className="active-question-no">
              {addLeadingZero(activeQuestion + 1)}
            </span>
            <span className="total-question">
              /{addLeadingZero(questions.length)}
            </span>
          </div>
          <h2>{question}</h2>
          <ul>
            {choices.map((answer, index) => (
              <li
                onClick={() => onAnswerSelected(answer, index)}
                key={answer}
                className={
                  selectedAnswerIndex === index ? "selected-answer" : null
                }
              >
                {answer}
              </li>
            ))}
          </ul>
          <div className="flex-right">
            <button
              onClick={onClickNext}
              disabled={selectedAnswerIndex === null}
            >
              {activeQuestion === questions.length - 1 ? "Finish" : "Next"}
            </button>
          </div>
        </div>
      ) : (
        <div className="result">
          <h3>Result</h3>

          {questions.map((question, index) => (
            <div key={question.question}>
              <span>{question.question}</span>
              <p
                style={{
                  color: getAnswerTextColor(
                    selectedChoices[index].answer,
                    question.correctAnswer,
                    question.totalWrongAnswer
                  ),
                }}
              >
                {selectedChoices[index].answer}
              </p>
              <p>{question.explanation}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  //   return (
  //     <>
  //       <h1>{title}</h1>
  //       <p>{text}</p>
  //       <div>
  //         <span>{currentQuestion.question}</span>
  //         <ul>
  //           {currentQuestion.alternativas.map((alternativa) => (
  //             <li key={alternativa.text}>{alternativa.text}</li>
  //           ))}
  //         </ul>
  //       </div>
  //     </>
  //   );
}
