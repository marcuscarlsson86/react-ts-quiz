import React from "react";
import { Card, Row, Col, Button } from "antd";

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
        <Col>
          <p>
            Question: {questionNumber} / {totalQuestion}
          </p>
        </Col>
        <Col>
          <p dangerouslySetInnerHTML={{ __html: question }}></p>
        </Col>
        <div>
          {answers.map((answer) => (
            <div>
              <Button disabled={userAnswer} value={answer} onClick={callback}>
                <span dangerouslySetInnerHTML={{ __html: answer }}></span>
              </Button>
            </div>
          ))}
        </div>
      </Row>
    </Card>
  );
};

export default QuestionCard;
