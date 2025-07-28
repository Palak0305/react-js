import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import 'remixicon/fonts/remixicon.css';

const Nav = () => {
    const { user } = useSelector((state) => state.userReducer);
    return (
        <div className="flex justify-between h-13 bg-[#B96966] pt-3 mb-15">

            <div className="pl-3 flex justify-between gap-3 ">
                <h4>SHOPPING ZONE</h4>
            </div>

           <div className="flex justify-center gap-x-20">
            <NavLink
                className={({ isActive }) => (isActive ? "text-white" : "")}
                to="/"
            >
                Home
            </NavLink>
            {user ? (
                <>
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? "text-white" : ""
                        }
                        to="/settings"
                    >
                        User Settings
                    </NavLink>
                    {user?.isAdmin && (
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? "text-white" : ""
                            }
                            to="/create-product"
                        >
                            Create Product
                        </NavLink>
                    )}
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? "text-white" : ""
                        }
                        to="/cart"
                    >
                        Cart
                    </NavLink>
                </>
            ) : (
                <>
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? "text-white" : ""
                        }
                        to="/signin"
                    >
                        Signin
                    </NavLink>
                </>
            )}

            <NavLink
                className={({ isActive }) => (isActive ? "text-white" : "")}
                to="/about"
            >
                About
            </NavLink>
            </div>

            <div className="pr-10 flex justify-center gap-4">
                <i class="ri-search-line"></i>
                <i class="ri-shopping-cart-2-line"></i>
            </div>
        </div>
    );
};
       
        

export default Nav;