export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

export const quizData: Question[] = [
  {
    id: 1,
    question: "What is the capital of France?",
    options: ["London", "Berlin", "Paris", "Madrid"],
    correctAnswer: 2,
  },
  {
    id: 2,
    question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Jupiter", "Saturn"],
    correctAnswer: 1,
  },
  {
    id: 3,
    question: "Who painted the Mona Lisa?",
    options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
    correctAnswer: 2,
  },
  {
    id: 4,
    question: "What is the largest mammal in the world?",
    options: ["African Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
    correctAnswer: 1,
  },
  {
    id: 5,
    question: "Which element has the chemical symbol 'O'?",
    options: ["Gold", "Silver", "Oxygen", "Iron"],
    correctAnswer: 2,
  },
];
