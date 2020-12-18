import { shuffleAnswers } from "./utils";
export type Question = {
  category: string;
  correct_answer: string;
  incorrect_answers: string[];
  difficulty: string;
  question: string;
  type: string;
};

export type questionState = Question & { answers: string[] };

export enum Difficulty {
  EASY = "easy",
  MEDIUM = "medium",
  HARD = "hard",
}

export const fetchQuestions = async (
  amount: number,
  difficulty: Difficulty
): Promise<questionState[]> => {
  const endPoint = `https://opentdb.com/api.php?amount=${amount}&category=21&type=multiple&difficulty=${difficulty}`;
  const data = await (await fetch(endPoint)).json();
  console.log(data);
  return data.results.map((question: Question) => ({
    ...question,
    answers: shuffleAnswers([
      ...question.incorrect_answers,
      question.correct_answer,
    ]),
  }));
};
