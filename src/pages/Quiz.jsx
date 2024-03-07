import React, { createContext, useState } from 'react'
import Questions from '../components/quiz/Questions'


export const QuizContext = createContext({
    questions: [],
    setQuestions: (questions) => {},
    score: 0,
    setScore: (score) => {},
})

export default function Quiz() {

  const [questions, setQuestions] = useState([])
  const [score, setScore] = useState(0)

  return (
    <QuizContext.Provider value={{questions, setQuestions, score, setScore}}>
        <Questions />
    </QuizContext.Provider>
  )
}
