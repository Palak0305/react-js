import { useDispatch, useSelector } from "react-redux";
import Nav from "./components/Nav";
import Mainroutes from "./routes/Mainroutes";
import { useEffect } from "react";
import { asynccurrentuser } from "./store/actions/userActions";
// import { asyncloadproducts } from "./store/actions/productAction";
import 'remixicon/fonts/remixicon.css'

const App = () => {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.userReducer);
    // const { products } = useSelector((state) => state.productReducer);

    useEffect(() => {
        !user && dispatch(asynccurrentuser());
    }, [user]);

    // useEffect(() => {
    //     products.length == 0 && dispatch(asyncloadproducts());
    // }, [products]);

    return (
        <div className=" py-5 px-5 font-serif bg-[#FFFAF1]">
            <Nav />
            <Mainroutes />
        </div>
    );
};

export default App;