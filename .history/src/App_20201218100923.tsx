import React, { useState } from "react";
import Header from "./components/Header";
import QuestionCard from "./components/QuestionCard";
import "./App.css";
import { Form, Row, Col, Input, Button } from "antd";
import "antd/dist/antd.css";

const TOTAL = 10;

const App = () => {
  const [loading, setLoading] = useState(false);
  const [question, setQuestions] = useState([]);
  const [number, setNumber] = useState(0);
  const [userAnswer, setUserAnswer] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

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
        <QuestionCard questionNumber={number + 1} totalQuestion={TOTAL} />
      </Row>
    </div>
  );
};

export default App;
