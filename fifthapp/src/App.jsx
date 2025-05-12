import {useState} from 'react'

const App = () => {
  const [fullname , setfullname] = useState("");
  const [email , setemail] = useState("");
  const [gender , setgender] = useState("male");
  const [vote , setvote] = useState("eligible")

  const SubmitHandler = (e) => {
    e.preventDefault();
    const user = (
      fullname,
      email,
      gender,
      vote
    )
    console.log(user);
  }

  return (
    <div>
      <form onSubmit={SubmitHandler}>

        <input 
        onChange={(e) => setfullname(e.target.value)}
        value={fullname}
        type='text'
        placeholder='Full name'
       />

       <br /> <br />
        <input 
        onChange={(e) => setemail(e.target.value)}
        value={email}
        type='email'
        placeholder='Email address'
       />

       <br /> <br />
       <input 
       type='radio'
       name='gender'
       checked ={gender ==="male" && true}
        onChange={(e) => e.target.checked && setgender("male")}
         />
         Male <br />

         <input
          type='radio'
          name='gender'
          checked ={gender ==="female" && true}
           onChange={(e) => e.target.checked && setgender("female")}/>
           Female <br />

           <br /> <br />
           <input 
           type="checkbox"
           onChange={(e) => e.target.checked ? setvote("eligible") : setvote("not eligible")}
           checked={vote ==="eligible" ? true : false}
            />{" "}
            Eligible or Not eligible for Vote?
            <br /> <br />

          <button>Submit</button> 
        
      </form>
    </div>
  )
}

export default App
