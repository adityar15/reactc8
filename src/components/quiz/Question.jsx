import React, { useContext, useEffect, useState } from 'react'
import { QuizContext } from '../../pages/Quiz'

function Option({ correct_answer, option }) {
    const { setScore } = useContext(QuizContext)

    const [selected, setSelected] = useState(false)


    function checkAnswer() {
        if (selected)
            return

        setSelected(true)

        setTimeout(() => {

            if (correct_answer == option) {
                setScore(currentScore => currentScore + 1)
            }
            else {
                setScore(currentScore => currentScore - 1)
            }

        }, 1000)

    }

    return (
        <button onClick={checkAnswer}
            disabled={selected}
            className={`${selected ? 'bg-black text-white' : 'text-black'} ' border border-gray-500 rounded px-6 py-2 '`}>
            {option}
        </button>
    )


}




export default function Question({ question }) {

    const [options, setOptions] = useState([])

    useEffect(() => {
        if (!question?.incorrect_answers)
            return

        else if (question?.incorrect_answers && question?.incorrect_answers.length == 0)
            return


        let newOptions = [...question?.incorrect_answers, question?.correct_answer]

        newOptions = newOptions.sort(() => Math.random() - 0.5)

        setOptions(newOptions)

    }, [question?.incorrect_answers])

    return (
        <div className='flex flex-col gap-2'>
            <h1 className='text-lg text-gray-700'>{question?.question}</h1>

            {
                options.map((option, index) => <Option key={index} correct_answer={question?.correct_answer} option={option} />)
            }

        </div>
    )
}
