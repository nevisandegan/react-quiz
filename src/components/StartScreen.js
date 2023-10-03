import React from 'react'
import { useQuiz } from '../context/QuizContext'

export default function StartScreen() {
  const { dispatch, numQuestions }=useQuiz()
  return (
    <div className='start'>
        <h2>به آزمون ری اکت خوش آمدید</h2>
          <h3>{numQuestions} سوال برای تسلط شما بر ری اکت </h3>
        <button onClick={()=>dispatch({type:'start'})} className='btn btn-ui'>بزن بریم</button>
    </div>
  )
}
