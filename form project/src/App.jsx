import { useContext } from 'react'
import Signup from './components/Signup'
import Signin from './components/Signin'
import RegisterUser from './components/Registeruser'
import { usercontext } from './contextfile/UserContest'

const App = () => {
  const {toggler} = useContext(usercontext)
  // const [users, setusers] = useContext(usercontext)

  return (
    <div className='flex item-center justify-center w-full h-screen bg-gray-700  p-10'>
      <div className='w-[70%]'>
        {toggler ? <Signup/> : <Signin/>}
      </div>
      <RegisterUser/>
    </div>
  )
}

export default App