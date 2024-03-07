import React, { useContext, useEffect } from 'react'
import { QuizContext } from '../../pages/Quiz'
import Question from './Question'

export default function Questions() {

    const { questions, setQuestions, score } = useContext(QuizContext)

    useEffect(() => {
        fetch("https://opentdb.com/api.php?amount=10&category=27&difficulty=medium&type=multiple")
            .then(res => res.json())
            .then(data => {

                if (data.response_code == 0) {
                    setQuestions(data.results)
                }

            })
    }, [])

    return (
        <>
            <h1 className="text-xl text-gray-500 my-8">Your score: {score}</h1>
            <div className='flex flex-col gap-4'>
                {
                    questions.map((question, index) => <Question key={index} question={question} />)
                }
            </div>
        </>
    )
}
