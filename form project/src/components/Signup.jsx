import React from 'react'
import { useForm } from "react-hook-form"
import { nanoid } from "nanoid"

const Signup = (props) => {
  const { toggler, settoggler, users, setusers } = props
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
    <div className='text-white  '>
      <form onSubmit={handleSubmit(onSubmit)} className='w-[400px] text-center py-8 px-2 border rounded bg-gray-800' >
        <h1 className='text-4xl mb-3'>SignUp  Form</h1>
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
          className='px-4 py-2 bg-gray-900 rounded text-xl m-3'
        >SignUp
        </button>
        <small>
          <p>Already have an account?
            <button
              className='mx-3 text-red-300'
              onClick={() => settoggler(!toggler)}
              type='button'
            >SignUp
            </button></p>
        </small>
      </form>
    </div>
  )
}

export default Signup