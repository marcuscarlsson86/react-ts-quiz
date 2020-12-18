import React from "react";
import { Card, Row, Col, Button, Typography } from "antd";
import "../App.css";

const { Title } = Typography;

type questionProps = {
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
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
    <Card bodyStyle={{ backgroundColor: "#efefef" }}>
      <Row>
        <Col span={24}>
          <Title>
            Question: {questionNumber} / {totalQuestion}
          </Title>
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
