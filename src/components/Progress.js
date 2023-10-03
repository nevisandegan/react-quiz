import { useQuiz } from "../context/QuizContext"




function Progress() {
    const { answer, points, index, numQuestion, maxPossiblePoints }=useQuiz()
    return (
        <header className="progress">
        <progress max={numQuestion} value={index + Number(answer!==null)}/>
            <p> <span style={{ marginLeft: '5px' }}>سوال</span>   <strong>{index + 1}</strong>/{numQuestion}</p>
            <p><strong>{points}/{maxPossiblePoints}</strong></p>
        </header>
    )
}


export default Progress