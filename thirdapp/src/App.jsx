import {useState} from 'react'

const App = () => {
    const [name , setname] = useState("John");

    const namechangehandler = () => {
        setname("Akarsh")
    }

    console.log(name);

  return (
    <div>
      <h1>{name}</h1>
      <button onClick={namechangehandler}>Change</button>
    </div>
  )
}

export default App
