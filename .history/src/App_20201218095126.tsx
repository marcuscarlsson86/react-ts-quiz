import React from "react";
import Header from "./components/Header";
import QuestionCard from "./components/QuestionCard";
import "./App.css";
import { Form, Row, Col, Input, Button } from "antd";
import "antd/dist/antd.css";

const App = () => {
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
        <Col className="loading">Loading... </Col>
      </Row>
      <Row>
        <QuestionCard />
      </Row>
    </div>
  );
};

export default App;
