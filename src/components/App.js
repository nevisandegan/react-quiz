import { useEffect } from 'react';
import Header from './Header.js'
import Main from './Main'
import Loader from './Loader.js'
import Error from './Error.js'
import StartScreen from './StartScreen.js';
import Questions from './Questions.js';
import NextButton from './NextButton.js';
import Progress from './Progress.js';
import FinishScreen from './FinishScreen.js';
import Timer from './Timer.js'
import Footer from './Footer.js';
import { useQuiz } from '../context/QuizContext.js';


export default function App() {
    const { status, dispatch } = useQuiz()
    useEffect(function () {
        fetch('http://localhost:9000/questions')
            .then(res => res.json())
            .then(data => dispatch({ type: 'dataReceived', payload: data }))
            .catch(err => dispatch({ type: 'dataFailed' }))
    }, [])

    return (
        <div className='app'>
            <Header />
            <Main>
                {status === 'loading' && <Loader />}
                {status === 'error' && <Error />}
                {status === 'ready' && <StartScreen />}
                {status === 'active' &&
                    <>
                        <Progress />
                        <Questions />
                        <Footer>
                            <Timer />
                            <NextButton />
                        </Footer>
                    </>
                }
                {status === 'finished' && <FinishScreen />}
            </Main>
        </div>
    )
}