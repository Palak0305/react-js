import React from 'react'
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const Signin = (props) => {
    const { toggler, settoggler, users } = props;


    const { register, handleSubmit, reset } = useForm()

    const onsubmit = (data) => {
        const isPresent = users.find(
            (user) => user.email === data.email && user.password === data.password
        );
        if (isPresent) {
            toast.success("Login successful!");
        } else {
            toast.error("Invalid email or password!");
        }
        reset() 
    };


    return (
        <div className='  text-white  '>
            <form onSubmit={handleSubmit(onsubmit)} className='w-[400px] text-center py-8 px-2 border rounded bg-gray-800 ' >
                <h1 className='text-4xl mb-3'>SignIn  Form</h1>
                <input
                    {...register("email")}
                    type="email"
                    placeholder='Enter email'
                    className='px-2 py-2 border-non border-b m-3 '
                />
                <br />
                <input
                    {...register("password")}
                    type="text"
                    placeholder='Enter password'
                    className='px-2 py-2 border-non border-b m-3 '
                />
                <br />
                <button
                    // onClick={onsubmit}
                    className='px-4 py-2 bg-gray-900 rounded text-xl m-3'
                >SignIn
                </button>
                <small>
                    <p>Don'have in account?
                        <button
                            className='mx-3 text-red-300'
                            onClick={() => settoggler(!toggler)}
                            type='button'
                        >SignIn</button></p>
                </small>
            </form>
        </div>
    )
}

export default Signin