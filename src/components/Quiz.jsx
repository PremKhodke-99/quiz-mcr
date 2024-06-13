import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { quizData } from '../quizData';

function Quiz({ setCorrectAnswer }) {

    const quizLength = quizData.length;
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answer, setAnswer] = useState('');

    /**
     * React-router-dom method to navigate in between pages
     */
    const navigate = useNavigate();

    /**
     * handlSubmit function is used to handle the submission of the answer and check if the answer is marked correct or not and update the score 
     */
    const handleSubmit = () => {
        let correctOption = quizData[currentQuestion].correct;
        let correctAnswer = quizData[currentQuestion][correctOption];

        if (currentQuestion !== quizLength - 1) {
            if (answer === correctAnswer) {
                setCorrectAnswer(prev => prev + 1);
            }
            setCurrentQuestion(prev => prev + 1);
        } else {
            if (answer === correctAnswer) {
                setCorrectAnswer(prev => prev + 1);
            }
            navigate('/result');
        }
        
        setAnswer(''); //will set answer blank for next question
    }

    return (
        <>
            <div className='quiz-wrapper'>
                <h2 className='question'>{quizData[currentQuestion].question}</h2>
                <div className='answers'>
                    <div>
                        <input
                            type="radio"
                            name="answer"
                            value={quizData[currentQuestion].a}
                            onChange={() => setAnswer(quizData[currentQuestion].a)}
                        />{' '}
                        {quizData[currentQuestion].a}
                    </div>
                    <div>
                        <input
                            type="radio"
                            name="answer"
                            value={quizData[currentQuestion].b}
                            onChange={() => setAnswer(quizData[currentQuestion].b)}
                        />{' '}
                        {quizData[currentQuestion].b}
                    </div>
                    <div>
                        <input
                            type="radio"
                            name="answer"
                            value={quizData[currentQuestion].c}
                            onChange={() => setAnswer(quizData[currentQuestion].c)}
                        />{' '}
                        {quizData[currentQuestion].c}
                    </div>
                    <div>
                        <input
                            type="radio"
                            name="answer"
                            value={quizData[currentQuestion].d}
                            onChange={() => setAnswer(quizData[currentQuestion].d)}
                        />{' '}
                        {quizData[currentQuestion].d}
                    </div>
                </div>
            </div>
            <button type="submit" className={`btn ${answer !== '' ? '' : 'active'}`} onClick={handleSubmit}>Submit</button>
        </>
    )
}

export default Quiz