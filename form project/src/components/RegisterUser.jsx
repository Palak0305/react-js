import React from 'react'

const RegisterUser = (props) => {
  const { users, setusers } = props

  const deletehendler = (id) => {
    const copyuser = [...users]
    const filteruser = copyuser.filter((val) => (val.id != id))
    console.log(filteruser)
    setusers(filteruser)
  }
  return (
    <div className='w-[30%] bg-gray-600 p-5 rounded overflow-y-auto'>
      <ul className='my-3 '>
        {users.map((val, indx) => (

          <li key={indx} className='mb-3 bg-gray-300 p-3 flex items-center justify-between rounded '>
            <p className='block'>
              <span className='block text-2xl'>{val.name}</span>
              <small className='block'>{val.email}</small>
            </p>
            <a
              onClick={() => deletehendler(val.id)}
              className='text-red-900'
            > delete
            </a>
          </li>
        ))}
      </ul>



    </div>
  )
}

export default RegisterUser