import { createContext, useContext, useReducer } from "react";



const QuizeContext = createContext()
const initalState = {
    questions: [],
    status: 'loading',
    index: 0,
    answer: null,
    points: 0,
    hightscore: 0,
    secondsRemaning: null
}
const SEC_PER_QUESITON = 30;
function reducer(state, action) {
    switch (action.type) {
        case 'dataReceived':
            return {
                ...state, questions: action.payload, status: "ready"
            }
        case 'dataFailed':
            return {
                ...state, status: "error"
            }
        case 'start':
            return { ...state, status: 'active', secondsRemaning: state.questions.length * SEC_PER_QUESITON }
        case 'newAnswer':
            const question = state.questions.at(state.index)
            return {
                ...state,
                answer: action.payload,
                points: action.payload === question.correctOption ? state.points + question.points : state.points

            }
        case 'nextQuestion':
            return { ...state, index: state.index + 1, answer: null }
        case 'finish':

            return { ...state, status: "finished", hightscore: state.points > state.hightscore ? state.points : state.hightscore }
        case 'restart':
            return { ...state, answer: null, points: 0, index: 0, status: 'active' }
        case 'tick':
            return {
                ...state, secondsRemaning: state.secondsRemaning - 1,
                status: state.secondsRemaning === 0 ? 'finished' : state.status
            }
        default:
            throw new Error("Action unkonwn")
    }
}


export function QuizProvider({ children }) {
    const [{ secondsRemaning, points, answer, index, questions, status, hightscore }, dispatch] = useReducer(reducer, initalState)
    const numQuestions = questions?.length;
    const maxPossiblePoints = questions.reduce((prev, cur) => prev + cur.points, 0)
    return (
        <QuizeContext.Provider value={{
            secondsRemaning, points, answer, index, questions, status, hightscore, dispatch, numQuestions, maxPossiblePoints
        }}>
            {children}
        </QuizeContext.Provider>
    )
}

export function useQuiz() {
    const context = useContext(QuizeContext)
    if (context === undefined) throw new Error('outSide of QuizeProvider')
    return context
}