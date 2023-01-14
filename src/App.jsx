import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <center><h2>Registration System</h2></center>
      <form action='#' method='post'>
        <h6>Username</h6>
        <input type="text" name="" id="" placeholder='Enter your username' />
        <h6>Full Email</h6>
        <input type="email" name="" id="" placeholder='Enter your email' />
        <h6>date of birth</h6>
        <input type="date" name="date" id="" />
        <h6>Passowrd</h6>
        <input type="password" name="" id="" placeholder='Enter your passowrd' />
        <input type="password" name="" id="" placeholder='Retype your password' /> <br /> &nbsps
<button>Submit</button>
<button>clear</button>
        
      </form>
    </div>
  )
}

export default App
