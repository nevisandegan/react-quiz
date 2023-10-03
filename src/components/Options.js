import React from 'react'
import { useQuiz } from '../context/QuizContext'

export default function Options() {
  const { index, questions, answer, dispatch } = useQuiz()
  const hasAnswer=answer!==null
  return (
    <div className='option'>
      {questions[index].options.map((option, i) => <button key={option} disabled={hasAnswer}
        onClick={() => dispatch({ type: 'newAnswer', payload: i })}
        className={`btn btn-option 
        ${i === answer ? 'answer' : ""}
        ${hasAnswer ? i===questions[index].correctOption ? 'correct' : 'wrong' : ""}
        `}>{option}</button>)}
    </div>
  )
}
