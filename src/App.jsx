import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementBy5 } from './redux/slices/counterSlice'
import Navbar from './components/Navbar'
import { useEffect } from "react"

const App = () => {

  const dispatch = useDispatch()
  const num = useSelector((state) => state.counter.value)
  const theme = useSelector((state) => state.theme.value)

  useEffect(() => {
    document.body.className = theme
  }, [theme])

  return (
    <div className="app">
      <h1 className="counter">{num}</h1>
      
      <button className="increment"
      onClick={() => dispatch(increment())}>Increment</button>
      
      <button className="decrement"
      onClick={() => dispatch(decrement())}>Decrement</button>
      
      <button className="increment5"
      onClick={() => dispatch(incrementBy5())} >Increment by 5</button>
      
      <Navbar />
    </div>
  )
}

export default App