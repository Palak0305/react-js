import {useState} from 'react'

// const App = () => {
//   const[score,setscore] = useState([23,54,25,67,58,93]);
//   let scorerender = score.map((score,index) => (
//     <li key={index}>{score}</li>
//   ));
//   return (
//     <div>
//       <h1>scores</h1>
//       <ol>{scorerender}</ol>
//     </div>
//   )
// }

// export default App






const App = () => {
  const [profile, setprofile] = useState([
    { name: "Mishti", age: "20", city: "Bhopal"},
    { name: "Isha", age: "23", city: "Raipur"},
  ])

  let profilerender = profile.map((profile,index) => (
    <div key={index}>
      <h1>Name: {profile.name}</h1>
      <h3>City: {profile.city}</h3>
      <h3>Age: {profile.age}</h3>
    </div>
  ))
  return (
    <div>
      {profilerender}
    </div>
  )
}

export default App

