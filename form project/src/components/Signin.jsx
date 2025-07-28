import { useContext} from 'react'
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { usercontext } from '../contextfile/UserContest';

const Signin = () => {
    const { toggler, settoggler, users, setusers } = useContext(usercontext)
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
        <div className='  text-white py-30 px-20 '>
            <form onSubmit={handleSubmit(onsubmit)} className='w-[400px] text-center py-8 px-2 border-none bg-gray-700 ' >
                <h1 className='text-4xl font-bold bold mb-3'>Get Back To Same...</h1>
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
                    className='px-4 py-2 bg-gray-800 rounded text-xl m-3 hover:opacity-50'
                >SignIn
                </button>
                <small>
                    <p>Don'have an account?
                        <button
                            className='mx-3 text-red-300'
                            onClick={() => settoggler(!toggler)}
                            type='button'
                        >SignUp
                        </button>
                        </p>
                </small>
            </form>
        </div>
    )
}

export default Signin