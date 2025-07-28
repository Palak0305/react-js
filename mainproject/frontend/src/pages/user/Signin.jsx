import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { asyncsigninuser } from "../../store/actions/userActions";
const Signin = () => {
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm();

    const SigninHandler = (user) => {
        dispatch(asyncsigninuser(user));
    };
    return (
        <form onSubmit={handleSubmit(SigninHandler)} className="p-5  w-180 h-150 ml-95 mt-10 bg-[#FAF0E6] ">
            <div className="text-5xl pb-10 pl-20 pt-5">
                <h1>Welcome back,<br/> savvy shopper!<br/> Your cart missed you....</h1>
            </div>
            <input
                {...register("email")}
                className="w-full text-3xl border-b outline-0 p-2 mb-5"
                type="email"
                placeholder="john@doe.example"
            />
            <input
                {...register("password")}
                className="w-full text-3xl border-b outline-0 p-2 mb-5"
                type="password"
                placeholder="********"
            />
            <button className="text-white ml-70 mt-5 text-xl px-5 py-3 rounded bg-red-400">
                Signin User
            </button>
            <p className="mt-5 ml-60">
                Don't have an account?{" "}
                <Link className="text-blue-400" to="/signup">
                    Signup
                </Link>
            </p>
        </form>
    );
};

export default Signin;