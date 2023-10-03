import React from 'react'
import Options from './Options'
import { useQuiz } from '../context/QuizContext'

export default function Questions() {
    const { index, questions } = useQuiz()
    return (
        <div>
            <h4>{questions[index].question}</h4>
            <Options/>
        </div>
    )
}
