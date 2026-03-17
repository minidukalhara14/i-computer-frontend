import axios from "axios"
import { useState } from "react"
import toast from "react-hot-toast"
import { Link, useNavigate } from "react-router-dom"

export default function LogingPage() {

    //hooks
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();

    function handleLogin() {
        console.log("Email:", email)
        console.log("Password:", password)

        axios.post(import.meta.env.VITE_API_URL + "/users/login",{
            email: email,
            password: password
        }).then((response)=>{
            toast.success("Login successful!");
            // console.log("Login successful:", response.data);
            localStorage.setItem("token", response.data.token);


            if(response.data.isAdmin){
                // Redirect to admin dashboard
                navigate("/admin");

            }else{
                // Redirect to home page
                navigate("/");
            }
           
        }).catch((error)=>{
            toast.error(error.response.data.message);
            // console.log("Login failed:", error);
        });
    }

    return(
        <div className="bg-[url('/login-bg.jpg')] bg-center bg-cover h-full w-screen flex justify-center items-center">
            <div className="w-1/2 h-full ">
            

            </div>
            <div className="w-1/2 h-full   flex justify-center items-center">
                <div className="w-[400px] h-[500px] backdrop-blur-lg rounded-xl flex flex-col justify-center items-center ">
                    
                    <h1 className="text-4xl font-bold text-secondary mb-8">
                        Sign in
                    </h1>
                    
                    
                    <input 
                        onChange={
                            (e)=>{
                                setEmail(e.target.value)    
                            }
                        }

                        type="text" 
                        placeholder="Email" 
                        className="w-3/4 p-3 mb-4 rounded-lg border-2 border-secondary focus:outline-none focus:border-primary" />
                    
                    <input 
                        onChange={
                            (e)=>{
                                setPassword(e.target.value)    
                            }
                        }
                        type="password" 
                        placeholder="Password" 
                        className="w-3/4 p-3 mb-6 rounded-lg border-2 border-secondary focus:outline-none focus:border-primary" />

                        <p className="mb-6 w-3/4 text-right ">Forgot Password?<Link to="/forgot-password" className="text-primary hover:text-accent"> Click here</Link></p>
                    
                    <button onClick={handleLogin} className="w-3/4 p-3 bg-secondary text-primary rounded-lg hover:bg-accent hover:text-secondary transition-colors duration-300">
                        Login
                    </button>
                    <p className="mt-6 w-3/4 text-center">Don't have an account? <Link to="/register" className="text-primary hover:text-accent"> Sign up</Link></p>
                </div>
            </div>
        </div>
    )
}