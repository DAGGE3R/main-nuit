"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { quizData, Question } from "@/data/quizz-data"
import { motion, AnimatePresence } from "motion/react"
import { OrganId } from "@/types/organs"

interface QuizGameProps {
  organId: OrganId
}

export default function QuizGame({ organId }: QuizGameProps) {
  const organQuestions = quizData[organId]
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [score, setScore] = useState(0)
  const [showResult, setShowResult] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    setProgress(((currentQuestion + 1) / organQuestions.length) * 100)
  }, [currentQuestion, organQuestions.length])

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex)
  }

  const handleNextQuestion = () => {
    if (selectedAnswer === organQuestions[currentQuestion].correctAnswer) {
      setScore(score + 1)
    }

    setSelectedAnswer(null)

    if (currentQuestion + 1 < organQuestions.length) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setShowResult(true)
    }
  }

  const handleRestart = () => {
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setScore(0)
    setShowResult(false)
  }

  const renderQuestion = (question: Question) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-primary">{question.question}</CardTitle>
      </CardHeader>
      <CardContent>
        <RadioGroup value={selectedAnswer?.toString()} onValueChange={(value) => handleAnswerSelect(parseInt(value))}>
          {question.options.map((option, index) => (
            <motion.div
              key={index}
              className="flex items-center space-x-2 p-2 rounded-lg transition-colors duration-200 ease-in-out hover:bg-secondary"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <RadioGroupItem value={index.toString()} id={`option-${index}`} />
              <Label htmlFor={`option-${index}`} className="flex-grow cursor-pointer">{option}</Label>
            </motion.div>
          ))}
        </RadioGroup>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <div className="text-sm text-muted-foreground">
          Question {currentQuestion + 1} sur {organQuestions.length}
        </div>
        <Button onClick={handleNextQuestion} disabled={selectedAnswer === null} className="bg-blue-600 hover:bg-blue-500">
          {currentQuestion === organQuestions.length - 1 ? "Terminer" : "Suivant"}
        </Button>
      </CardFooter>
    </motion.div>
  )

  const renderResult = () => (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <CardHeader>
        <CardTitle className="text-3xl font-bold text-primary">Quiz Terminé!</CardTitle>
        <CardDescription>Voici votre résultat :</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center">
        <div className="text-5xl font-bold mb-4">{score} / {organQuestions.length}</div>
        <Progress value={(score / organQuestions.length) * 100} className="w-full h-4" />
        <p className="mt-4 text-center text-muted-foreground">
          {score === organQuestions.length
            ? "Score parfait ! Vous êtes un expert !"
            : score > organQuestions.length / 2
              ? "Bien joué ! Vous maîtrisez le sujet !"
              : "Continuez à pratiquer, vous y arriverez !"}
        </p>
      </CardContent>
      <CardFooter className="flex justify-center">
        <Button onClick={handleRestart} size="lg" className="bg-red-500 hover:bg-red-600">
          Recommencer le Quiz
        </Button>
      </CardFooter>
    </motion.div>
  )

  return (
    <div className="min-h-fit flex items-center justify-center bg-gradient-to-br from-primary/20 to-secondary/20">
      <Card className="w-[400px] shadow-lg p-3 rounded-none">
        <Progress value={progress} className="rounded-lg text-red-600 [&>*]:bg-blue-600" />
        <AnimatePresence mode="wait">
          {showResult ? renderResult() : renderQuestion(organQuestions[currentQuestion])}
        </AnimatePresence>
      </Card>
    </div>
  )
}
