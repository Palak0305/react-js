import React from 'react'

const App = () => {
  const clicked = ()=>{
    alert("mai pagal hu")
  }
  return (
    <div>
      <h1>dev pagal hai</h1>
      <button onClick={clicked}>change</button>
    </div>
  )
}

export default App

