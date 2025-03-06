import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(20);
  const increasecounter = () =>{ 
    alert(0);
    //setCount(count + 1);
    //setCounter(counter + 1);

    console.log(count);
  }

  return (
    <>
      <button onClick={increasecounter()}>
          count iss {count}
        </button>
    </>
  )
}

export default App
