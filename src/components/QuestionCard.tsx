import React from "react";
import { Card, Row, Col, Button, Typography } from "antd";
import { AnswerProps } from "../App";

import "../App.css";

const { Title } = Typography;

type questionProps = {
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerProps | undefined;
  questionNumber: number;
  totalQuestion: number;
};

const QuestionCard: React.FC<questionProps> = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNumber,
  totalQuestion,
}) => {
  return (
    <Card bodyStyle={{ backgroundColor: "#1F2124" }} bordered={false}>
      <Row>
        <Col span={24}>
          <h1 className="questionHeadline">
            Question: {questionNumber} / {totalQuestion}
          </h1>
        </Col>
        <Col span={24}>
          <p
            className="question"
            dangerouslySetInnerHTML={{ __html: question }}
          ></p>
        </Col>
        <Col span={24}>
          {answers.map((answer, i) => (
            <div>
              <button
                key={i}
                disabled={!!userAnswer}
                value={answer}
                onClick={callback}
                className="primary"
              >
                <span dangerouslySetInnerHTML={{ __html: answer }}></span>
              </button>
            </div>
          ))}
        </Col>
      </Row>
    </Card>
  );
};

export default QuestionCard;
