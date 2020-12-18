import React, { useState } from "react";
import Header from "./components/Header";
import QuestionCard from "./components/QuestionCard";
import { fetchQuestions, Difficulty, questionState } from "./api";
import "./App.css";
import { Form, Row, Col, Input, Button } from "antd";
import "antd/dist/antd.css";

const TOTAL = 10;
type AnswerProps = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

const App = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<questionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerProps[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  console.log(questions);

  const quizStart = async () => {
    setLoading(true);
    setGameOver(false);

    const roundOfQuestions = await fetchQuestions(TOTAL, Difficulty.EASY);

    setQuestions(roundOfQuestions);
    setScore(0);
    setUserAnswers([]);
    setLoading(false);
  };
  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      const answer = e.currentTarget.value;
      // Is correct?
      const correct = questions[number].correct_answer === answer;
      // If correct, give add score points
      if (correct) {
        setScore((prev) => prev + 1);
      }
      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correct_answer: questions[number].correct_answer,
      };
      setUserAnswers((prev) => [...prev, answerObject]);
    }
  };
  const nextQuestion = () => {
    const nextQuestion = number + 1;

    // check if last question
    if (nextQuestion === TOTAL) {
      setGameOver(true);
    } else {
      setNumber(nextQuestion);
    }
  };

  return (
    <div className="App">
      <Header />
      <Row>
        <Col span={24}>
          {gameOver || userAnswers.length === TOTAL ? (
            <Button onClick={quizStart} type="primary">
              Start the Quiz!
            </Button>
          ) : null}
        </Col>
      </Row>
      <Row>
        {!gameOver ? <Col span={24}>Score: </Col> : null}
        {loading && <Col span={24}>Loading...... </Col>}
      </Row>
      <Row>
        {!loading && !gameOver ? (
          <QuestionCard
            questionNumber={number + 1}
            totalQuestion={TOTAL}
            question={questions[number].question}
            answers={questions[number].answers}
            userAnswer={userAnswers ? userAnswers[number] : undefined}
            callback={checkAnswer}
          />
        ) : null}

        {!gameOver &&
        !loading &&
        userAnswers.length === number + 1 &&
        number !== TOTAL - 1 ? (
          <Button type="primary" onClick={nextQuestion}>
            Next Question please
          </Button>
        ) : null}
      </Row>
    </div>
  );
};

export default App;
