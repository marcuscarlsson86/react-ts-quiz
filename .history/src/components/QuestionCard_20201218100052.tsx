import React from "react";
import { Form, Row, Col, Input, Button } from "antd";

type questionProps = {
  question: string;
  answers: string[];
  callback: any;
  userAnswer: string;
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
    <div>
      <p>
        Question: {questionNumber} / {totalQuestion}
      </p>
      <p dangerouslySetInnerHTML={{ __html: question }}> </p>
      <div>
        {answers.map((answer) => (
          <div>
            <Button></Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
