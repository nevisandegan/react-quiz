import React from 'react'
import { useQuiz } from '../context/QuizContext';

export default function FinishScreen() {
    const { points, hightscore, dispatch, maxPossiblePoints } = useQuiz()
    const percentage = (points / maxPossiblePoints) * 100
    let emoji;
    if (percentage === 100) emoji = '🥇'
    if (percentage >= 80 && percentage < 100) emoji = "🎉"
    if (percentage >= 50 && percentage < 80) emoji = "😊"
    if (percentage >= 0 && percentage < 50) emoji = "🤨"
    if (percentage === 0) emoji = "🤦‍♂️"

    return (
        <>
            <p className='result'>امتیاز شما  <strong>{points}</strong> از <strong>{maxPossiblePoints}</strong>
                <span style={{ marginRight: '6px' }}>({Math.ceil(percentage)}%)</span> <span>{emoji}</span></p>
            <p className='highscore'>(بالاترین نمره کسب شده {hightscore})</p>
            <button className='btn btn-ui' onClick={() => dispatch({ type: "restart" })}>آزمون مجدد</button>
        </>

    )
}
