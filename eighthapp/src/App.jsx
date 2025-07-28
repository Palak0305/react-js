import { useContext } from 'react'
import { UserContext } from './contextfile/Wrapper'

const App = () => {
  const data = useContext(UserContext)
  console.log(data)
  return (
    <div>
      APP
    </div>
  )
}

export default App
