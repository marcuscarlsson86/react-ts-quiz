import React, { useState } from "react";
import Header from "./components/Header";
import QuestionCard from "./components/QuestionCard";
import { fetchQuestions, Difficulty, questionState } from "./api";
import "./App.css";
import { Form, Row, Col, Input, Button } from "antd";
import "antd/dist/antd.css";

const TOTAL = 10;

const App = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  console.log(fetchQuestions(TOTAL, Difficulty.EASY));

  const quizStart = async () => {};
  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {};
  const nextQuestion = () => {};

  return (
    <div className="App">
      <Header />
      <Row>
        <Col span={24}>
          <Button onClick={quizStart} type="primary">
            Start the Quiz!
          </Button>
        </Col>
      </Row>
      <Row>
        <Col span={24}>Score: </Col>
        <Col span={24}>Loading: </Col>
      </Row>
      <Row>
        {/* <QuestionCard
          questionNumber={number + 1}
          totalQuestion={TOTAL}
          question={questions[number].question}
          answers={questions[number].answers}
          userAnswer={userAnswers ? userAnswers : undefined}
          callback={checkAnswer}
        /> */}
        <Button type="primary">Next Question please</Button>
      </Row>
    </div>
  );
};

export default App;
