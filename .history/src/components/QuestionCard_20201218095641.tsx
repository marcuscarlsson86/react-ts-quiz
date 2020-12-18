import React from "react";
import { Form, Row, Col, Input, Button } from "antd";

type questionProps = {
  question: string;
  answer: string[];
  callback: any;
  userAnswer: string;
  questionNumber: number;
  totalQuestion: number;
};

const QuestionCard: React.FC<questionProps> = ({
  question,
  answer,
  callback,
  userAnswer,
  questionNumber,
  totalQuestion,
}) => {
  return <div>QuestionCard</div>;
};

export default QuestionCard;
