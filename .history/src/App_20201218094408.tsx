import React from "react";
import Header from "./components/Header";
import "./App.css";
import { Form, Row, Col, Input, Button } from "antd";

const App = () => {
  const quizStart = async () => {};

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {};

  const nextQuestion = () => {};

  return (
    <div className="App">
      <Header />
      <Row>
        <Col span={24}>col</Col>
      </Row>
    </div>
  );
};

export default App;
