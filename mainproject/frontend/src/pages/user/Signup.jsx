import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { asyncsignupuser } from "../../store/actions/userActions";

const Signup = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();

    const SigninHandler = (user) => {
        user.id = nanoid();
        user.isAdmin = false;
        user.cart = [];
        dispatch(asyncsignupuser(user));
        navigate("/signin");
    };
    return (
        <form onSubmit={handleSubmit(SigninHandler)} className="p-5  w-180 h-150 ml-95 mt-10 bg-[#FAF0E6] ">
            <div className="text-5xl pb-10 pl-10 pt-5">
                Backfor more deals?<br/> We’ve saved your favorites....
            </div>
            <input
                {...register("username")}
                className="w-full text-3xl border-b outline-0 p-2 mb-5"
                type="text"
                placeholder="john-doe"
            />
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
                Signup User
            </button>
            <p className="mt-5 ml-60">
                Already have an account?{" "}
                <Link className="text-blue-400" to="/signin">
                    Signin
                </Link>
            </p>
        </form>
    );
};

export default Signup;