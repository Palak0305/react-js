import { useContext} from 'react'
import { useForm } from "react-hook-form"
import { nanoid } from "nanoid"
import { usercontext } from '../contextfile/UserContest'

const Signup = () => {
  const { toggler, settoggler, users, setusers } = useContext(usercontext)
  const { register, handleSubmit, reset } = useForm("")
  
  const onSubmit = (data) => {
    data.id = nanoid()
    const copyuser = [...users];
    copyuser.push(data)
    setusers(copyuser)
    // setusers([...users, data])
    reset()
  }


  console.log(users)
  return (
    <div className='text-white  py-30 px-20'>
      <form onSubmit={handleSubmit(onSubmit)} className='w-[400px] text-center py-8 px-2 border-none bg-gray-700' >
        <h1 className='text-4xl font-bold mb-3'>Make A Fresh Start...</h1>
        <input
          type="text"
          placeholder='Enter name'
          className='px-2 py-2  border-non border-b m-3 '
          {...register("name")}
        />
        <br />
        <input
          type="text"
          placeholder='Enter email'
          className='px-2 py-2 border-non border-b m-3 '
          {...register("email")}
         />
        <br />
        <input
          type="text"
          placeholder='Enter password'
          className='px-2 py-2 border-non border-b m-3 '
          {...register("password")}
          />
        <br />
        <button
          onClick={() => register("")}
          className='px-4 py-2 bg-gray-800 rounded text-xl m-3 hover:opacity-50'
        >SignUp
        </button>
        <small>
          <p>Already have an account?
            <button
              className='mx-3 text-red-300'
              onClick={() => settoggler(!toggler)}
              type='button'
            >SignIn
            </button>
            </p>
        </small>
      </form>
    </div>
  )
}

export default Signup