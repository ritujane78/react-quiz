import { useEffect, useReducer } from 'react'
import Dashboard from './Dashboard.jsx'
import Header from './Header.jsx'
import Loader from './Loader.jsx'
import Error from './Error.jsx'
const initialState = {
  questions: [],
  status: "loading",
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
    default:
      throw new Error("Unknown action type")
  }

}
function App() {
  const [{questions, status}, dispatch] = useReducer(reducer, initialState);
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
        {status === "error" && <Error />}
      </Dashboard>
    </div>
  )
}

export default App
