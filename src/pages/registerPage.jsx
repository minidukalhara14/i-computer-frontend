import axios from "axios"
import { useState } from "react"
import toast from "react-hot-toast"
import { Link, useNavigate } from "react-router-dom"

export default function RegisterPage() {

    //hooks
    const [email, setEmail] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const navigate = useNavigate();

    function handleRegister() {
        if(password !== confirmPassword){
            toast.error("Passwords do not match!");
            return;
        }
        
        
        

        axios.post(import.meta.env.VITE_API_URL + "/users/register",{
            email: email,
            password: password,
            firstName: firstName,
            lastName: lastName
        }).then((response)=>{
            toast.success("Registration successful!");
            // console.log("Registration successful:", response.data);
            


           
                // Redirect to home page
                navigate("/login");
            
           
        }).catch((error)=>{
            toast.error(error.response.data.message);
            console.log("Registration failed:", error);
        });
    }

    return(
        <div className="bg-[url('/login-bg.jpg')] bg-center bg-cover h-full w-screen flex justify-center items-center">
            <div className="w-0 lg:w-1/2 h-full ">
            

            </div>
            <div className="w-[90%] lg:w-1/2 h-full   flex justify-center items-center">
                <div className="w-[500px]  h-[600px] backdrop-blur-lg rounded-xl flex flex-col justify-center items-center ">
                    
                    <h1 className="text-4xl font-bold text-secondary mb-8">
                        Sign Up
                    </h1>
                    <div className="w-3/4 mb-4 flex gap-4">
                        <input 
                            onChange={
                                (e)=>{
                                    setFirstName(e.target.value)
                                }
                            }
                            type="text" 
                            value={firstName}
                            placeholder="First Name" 
                            className="w-full p-3 mb-4 rounded-lg border-2 border-secondary focus:outline-none focus:border-primary" />
                        <input 
                            onChange={
                                (e)=>{
                                    setLastName(e.target.value)
                                }
                            }
                            type="text" 
                            value={lastName}
                            placeholder="Last Name" 
                            className="w-full p-3 mb-4 rounded-lg border-2 border-secondary focus:outline-none focus:border-primary" />

                    </div>
                    
                    <input 
                        onChange={
                            (e)=>{
                                setEmail(e.target.value)    
                            }
                        }

                        type="text" 
                        value={email}
                        placeholder="Email" 
                        className="w-3/4 p-3 mb-4 rounded-lg border-2 border-secondary focus:outline-none focus:border-primary" />
                    
                    <input 
                        onChange={
                            (e)=>{
                                setPassword(e.target.value)    
                            }
                        }
                        type="password" 
                        value={password}
                        placeholder="Password" 
                        className="w-3/4 p-3 mb-6 rounded-lg border-2 border-secondary focus:outline-none focus:border-primary" />

                        <input
                        onChange={
                            (e)=>{
                                setConfirmPassword(e.target.value)    
                            }
                        }
                        type="password" 
                        value={confirmPassword}
                        placeholder="Confirm Password" 
                        className="w-3/4 p-3 mb-6 rounded-lg border-2 border-secondary focus:outline-none focus:border-primary" />

                        
                    
                    <button onClick={handleRegister} className="w-3/4 p-3 bg-secondary text-primary rounded-lg hover:bg-accent hover:text-secondary transition-colors duration-300">
                        Register
                    </button>
                    <p className="mt-6 w-3/4 text-center">alreday have an account? <Link to="/login" className="text-primary hover:text-accent"> Sign in</Link></p>
                </div>
            </div>
        </div>
    )
}