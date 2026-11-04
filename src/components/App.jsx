import { useEffect, useReducer } from 'react'
import Dashboard from './Dashboard.jsx'
import Header from './Header.jsx'
import Loader from './Loader.jsx'
import Error from './Error.jsx'
import StartScreen from './StartScreen.jsx'
import Question from './Question.jsx'
import NextQuestion from './NextQuestion.jsx'
import Progress from './Progress.jsx'
import FinishScreen from './FinishScreen.jsx'
import Footer from './Footer.jsx'
import Timer from './Timer.jsx'
const initialState = {
  questions: [],
  status: "loading",
  index: 0,
  answer: null,
  points: 0,
  highScore: 0,
  secondsRemaining: null
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
        status: "active",
        secondsRemaining: state.questions.length * 30
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
            answer: null,
            highScore: state.points > state.highScore ? state.points: state.highScore
          }
          case "finish":
            return {
              ...state,
              status: "finished"
            }
          case "restart":
            return {
              ...initialState,
              questions: state.questions,
              status: "ready" 
            }
            case "tick":
              return {
                ...state,
                secondsRemaining: state.secondsRemaining - 1,
                status: state.secondsRemaining === 0 ? "finished" : state.status
              }
    default:
      throw new Error("Unknown action type")
  }

}
function App() {
  const [{questions, status, index, answer, points, highScore, secondsRemaining}, dispatch] = useReducer(reducer, initialState);
  const numQuestions = questions.length;
  const maxPossiblePoints = questions.reduce((prev, cur) => prev + cur.points, 0);
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
        {status === "active" &&
          <>
          <Progress index={index} numQuestions = {numQuestions} points = {points} maxPossiblePoints = {maxPossiblePoints} answer={answer}/>
          <Question question={questions[index]} dispatch={dispatch} answer={answer}/>
          <Footer >
            <Timer secondsRemaining={secondsRemaining} dispatch={dispatch}/>
            <NextQuestion dispatch={dispatch} answer={answer} index={index} numQuestions={numQuestions}/>
          </Footer>
          </>
        } 
        {status === "finished" && <FinishScreen points={points} maxPossiblePoints={maxPossiblePoints} highScore={highScore} dispatch={dispatch}/>}
        {status === "error" && <Error />}
        
      </Dashboard>
    </div>
  )
}

export default App
