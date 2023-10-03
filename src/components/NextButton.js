import React from 'react'
import { useQuiz } from '../context/QuizContext';

export default function NextButton() {
    const { dispatch, answer, index, numQuestion } = useQuiz()
    if (answer === null) return null;
    if (index < numQuestion - 1) {
        return <button className='btn btn-ui' onClick={() => dispatch({ type: "nextQuestion" })}>سوال بعدی</button>
    }
    if (index === numQuestion - 1) {
        return <button className='btn btn-ui' onClick={() => dispatch({ type: "finish" })}>نتایج آزمون</button>
    }
}
