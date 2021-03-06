import React from "react";
import { Card, Row, Col, Button, Typography } from "antd";
import "../App.css";

const { Title } = Typography;

type questionProps = {
  question: string;
  answers: string[];
  callback: any;
  userAnswer: any;
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
    <Card>
      <Row>
        <Col span={24}>
          <p>
            Question: {questionNumber} / {totalQuestion}
          </p>
        </Col>
        <Col span={24}>
          <p dangerouslySetInnerHTML={{ __html: question }}></p>
        </Col>
        <Col span={24}>
          {answers.map((answer, i) => (
            <div>
              <Button
                key={i}
                disabled={userAnswer}
                value={answer}
                onClick={callback}
                size={"large"}
                className="answerBtn"
              >
                <span dangerouslySetInnerHTML={{ __html: answer }}></span>
              </Button>
            </div>
          ))}
        </Col>
      </Row>
    </Card>
  );
};

export default QuestionCard;
