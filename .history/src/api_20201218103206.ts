export type Question = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrectAnswer: string[];
  question: string;
  type: string;
};

export enum Difficulty {
  EASY = "easy",
  MEDIUM = "medium",
  HARD = "hard",
}

export const fetchQuestions = async (
  amount: number,
  difficulty: Difficulty
) => {
  const endPoint = `https://opentdb.com/api.php?amount=${amount}&category=21&type=multiple&difficulty=${difficulty}`;
  const data = await (await fetch(endPoint)).json();
  console.log("data", data);
};
