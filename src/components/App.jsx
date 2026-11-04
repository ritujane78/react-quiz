import { useEffect, useReducer } from 'react'
import Dashboard from './Dashboard.jsx'
import Header from './Header.jsx'
import Loader from './Loader.jsx'
import Error from './Error.jsx'
import StartScreen from './StartScreen.jsx'
import Question from './Question.jsx'
import NextQuestion from './NextQuestion.jsx'
const initialState = {
  questions: [],
  status: "loading",
  index: 0,
  answer: null,
  points: 0
}
const reducer = (state, action) => {
  switch(action.type) {
    case "dataReceived":
      return {
        ...state,
        questions: action.payload,
        status: "ready"
      }
      case "dataFailed":
      return {
        ...state,
        status: "error"
      }
      case "start":
      return {
        ...state,
        status: "active"
      }
      case "newAnswer":
        const question = state.questions.at(state.index);
        return {
          ...state,
          answer: action.payload,
          points: action.payload === question.correctOption ? state.points + question.points : state.points
        }
        case "nextQuestion":
          return {
            ...state,
            index: state.index + 1,
            answer: null
          }
    default:
      throw new Error("Unknown action type")
  }

}
function App() {
  const [{questions, status, index, answer, points}, dispatch] = useReducer(reducer, initialState);
  const numQuestions = questions.length;
  useEffect(() => {
    fetch('http://localhost:8000/questions')
    .then((res) => res.json())
    .then((data) => dispatch({type: "dataReceived", payload: data}))
    .catch(error => dispatch({type: "dataFailed"}))
  }, [])
  return (
    <div>
      <Header />
      <Dashboard >
        {status === "loading" && <Loader />}
        {status === "ready" && <StartScreen numQuestions={numQuestions} dispatch={dispatch} />}
        {status === "active" && <><Question question={questions[index]} dispatch={dispatch} answer={answer}/>
        <NextQuestion dispatch={dispatch} answer={answer}/></>}
        {status === "error" && <Error />}
        
      </Dashboard>
    </div>
  )
}

export default App
