import { useState } from 'react'
import { quizData } from './quizData'
import Quiz from './components/Quiz'
import Result from './components/Result';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  const [correctAnswer, setCorrectAnswer] = useState(0);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Quiz setCorrectAnswer={setCorrectAnswer} />} />
          <Route path='/result' element={<Result correctAnswer={correctAnswer} setCorrectAnswer={setCorrectAnswer} totalQuestion={quizData.length}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
