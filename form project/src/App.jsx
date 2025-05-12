import React, { useState } from 'react'
import Signup from './components/Signup'
import Signin from './components/Signin'
import RegisterUser from './components/Registeruser'



const App = () => {
  const [toggler, settoggler] = useState(true)
  const [users, setusers] = useState([])

  return (
    <div className='flex item-center justify-center w-full h-screen bg-gray-700  p-10'>
      <div className='w-[70%]'>
        {toggler ? (
          <Signup
            users={users}
            setusers={setusers}
            toggler={toggler}
            settoggler={settoggler}
          />
        ) :
          (
            <Signin
              users={users}
              setusers={setusers}
              toggler={toggler}
              settoggler={settoggler}
            />)}
      </div>
      <RegisterUser 
      users={users}
      setusers={setusers}
      />

    </div>
  )
}

export default App