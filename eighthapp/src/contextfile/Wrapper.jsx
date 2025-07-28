import { createContext, useState } from "react"

export const UserContext = createContext(null)

const Wrapper = (props) => {
  const [users,setusers] = useState([
    {id:"khdnnf", name:"john", age:12},
  ])
  return (
    <UserContext value={[users,setusers]}>
        {props.children}
    </UserContext>)
}

export default Wrapper
