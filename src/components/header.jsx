import { BiCart } from "react-icons/bi";
import { Link } from "react-router-dom";
import UserData from "./userData";

export default function Header() {
        return (
            <header className="w-full h-[100px]  bg-accent relative flex items-center justify-center flex-shrink-0  shadow-2xl">
                <Link to="/" className=" lg:w-[200px] h-full absolute  lg:left-10 flex justify-center items-center" >
                   
                   <img src="logo.png" alt="Logo" className=" h-[100px] mr-2" />
                       
                </Link>

                <div className="h-full hidden lg:flex justify-center items-center">
                    <Link to="/" className="text-white   text-lg font-semibold px-4 py-2 rounded-lg hover:bg-red-700 transition-colors duration-200">
                        Home
                    </Link>
                    <Link to="/products" className="text-white text-lg font-semibold px-4 py-2 rounded-lg hover:bg-red-700 transition-colors duration-200">
                        Products
                    </Link>
                    <Link to="/contact-us" className="text-white text-lg font-semibold px-4 py-2 rounded-lg hover:bg-red-700 transition-colors duration-200">
                        Contact Us
                    </Link>
                </div>
                <div className="h-[50px] hidden lg:flex   absolute right-30  justify-center items-center">
                 <UserData/> 
               </div>
                <Link to="/cart" className="w-[50px] h-[50px] absolute right-10 hidden lg:flex justify-center items-center">
                    <BiCart className="text-white text-3xl"/>
                </Link>
                
            </header>
        )
}