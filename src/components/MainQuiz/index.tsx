import { useState, useEffect, useCallback } from "react";
import { QuizDataItem, quizData } from "./quizData";
import { Questions, Quiz, Result, ResultTitle } from "./styles";

export default function MainQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [myAnswer, setMyAnswer] = useState<string | null>(null);
  const [options, setOptions] = useState<string[]>([]);
  const [score, setScore] = useState(0);
  const [disabled, setDisabled] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const loadQuizData = useCallback(() => {
    setOptions(quizData[currentQuestion].options);
  }, [currentQuestion]);

  useEffect(() => {
    loadQuizData();
  }, [loadQuizData]);

  const nextQuestionHandler = () => {
    const answer = quizData[currentQuestion].answer;

    if (myAnswer === answer) {
      setScore(score + 1);
    }

    setCurrentQuestion(currentQuestion + 1);
  };

  useEffect(() => {
    setDisabled(true);
    setOptions(quizData[currentQuestion].options);
    setMyAnswer(null);
  }, [currentQuestion]);

  const checkAnswer = (answer: string) => {
    setMyAnswer(answer);
    setDisabled(false);
  };

  const finishHandler = () => {
    if (currentQuestion === quizData.length - 1) {
      setIsEnd(true);
    }

    if (myAnswer === quizData[currentQuestion].answer) {
      setScore(score + 1);
    }
  };

  return (
    <Quiz>
      {isEnd ? (
        <Result>
          <ResultTitle>
            Fim de Jogo, sua pontuação final é {score} pontos{" "}
          </ResultTitle>
          <div>
            As respostas corretas para as perguntas são:
            <ul>
              {quizData.map((item: QuizDataItem, index: number) => (
                <li className="ui floating message options" key={index}>
                  {item.answer}
                </li>
              ))}
            </ul>
          </div>
        </Result>
      ) : (
        <Questions>
          <h2>{quizData[currentQuestion].question} </h2>
          <span>{`Questão ${currentQuestion + 1} de ${quizData.length}`}</span>
          <div>
            {options.map((option, index) => (
              <p
                key={index}
                className={`ui floating message options ${
                  myAnswer === option ? "selected" : ""
                }`}
                onClick={() => checkAnswer(option)}
              >
                {option}
              </p>
            ))}
          </div>
          {currentQuestion < quizData.length - 1 && (
            <button
              className="ui inverted button"
              disabled={disabled}
              onClick={nextQuestionHandler}
            >
              Next
            </button>
          )}
          {currentQuestion === quizData.length - 1 && (
            <button className="ui inverted button" onClick={finishHandler}>
              Finish
            </button>
          )}
        </Questions>
      )}
    </Quiz>
  );
}
