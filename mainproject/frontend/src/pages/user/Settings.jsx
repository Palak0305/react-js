import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
    asyncdeleteuser,
    asynclogoutuser,
    asyncupdateuser,
} from "../../store/actions/userActions";

const Settings = () => {
    const { user } = useSelector((state) => state.userReducer);
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm({
        defaultValues: {
            username: user?.username,
            email: user?.email,
            password: user?.password,
        },
    });

    const UpdateHandler = (updateduser) => {
        dispatch(asyncupdateuser(user.id, updateduser));
    };

    const DeleteHandler = () => {
        dispatch(asyncdeleteuser(user.id));
    };

    const LogoutHandler = () => {
        dispatch(asynclogoutuser(user.id));
    };

    return (
        <>
                <form onSubmit={handleSubmit(UpdateHandler)} className="p-5  w-180 h-150 ml-95 mt-10 bg-[#FAF0E6] ">
                <div className="text-3xl pb-5 pl-10 pt-5">
                    This is your unique Shopping Zone ID,<br/> auto-assigned for secure access and order tracking.
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
                <div className="flex justify-between pt-5 pr-15 pl-15">
                    <button className="text-white text-xl px-5 py-3 rounded bg-blue-400">
                    Update User
                </button>
                <br /> <br />
                <button
                    onClick={LogoutHandler}
                    type="button"
                    className="text-white text-xl px-5 py-3 rounded bg-red-400"
                >
                    Logout User
                </button>
                <br /> <br />
                <button
                    onClick={DeleteHandler}
                    type="button"
                    className="text-white text-xl px-5 py-3 rounded bg-red-600"
                >
                    Delete User
                </button>
                </div>
            </form>
        </>
    );
};

export default Settings;