import React from 'react'
import { useNavigate } from 'react-router-dom'

function Result({ correctAnswer, setCorrectAnswer, totalQuestion }) {
    const navigate = useNavigate();

    /**
     * to set the correct answer score to zero (0) and navigate to the main page
     */
    const handleReload = () => {
        setCorrectAnswer(0);
        navigate('/');
    }

    return (
        <>
            <div className='result-wrapper'>
                <h2>You answered correctly at {correctAnswer}/{totalQuestion} questions.</h2>
            </div>
            <button className='btn' onClick={handleReload}>Reload</button>
        </>
    )
}

export default Result