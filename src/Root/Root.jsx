import { Outlet } from "react-router-dom";
import Header from "../Components/Navbar/Header";
import Footer from "../Components/Footer/Footer";


const Root = () => {
    return (
        <div>
            <Header></Header>  
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;