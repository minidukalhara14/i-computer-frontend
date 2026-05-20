import { useState } from "react";
import { addToCart, getCart, getCartTotal } from "../utils/cart";
import getFormattedPrice from "../utils/price-format";
import { Link } from "react-router-dom";

export default function CartPage() {
    const [cart, setCart] = useState(getCart());
    
    return (
        <div className="w-full min-h-full flex flex-col  items-center p-6 pb-[164px] lg:pb-20 gap-4 ">
            
            {
                cart.map(
                    (item) =>{
                        return (
                            <div    key={item.product.id} className="w-full lg:w-[500px]  lg:h-[150px] bg-white rounded-xl shadow-2xl flex flex-col lg:flex-row lg:items-center gap-6 p-4 lg:relative">
                                <div className=" flex justify-center">
                                    
                                    <img src={item.product.image} alt={item.product.name} className="w-[100px] h-[100px] object-cover rounded-l-lg "/>
                                
                                </div>
                                <div className="h-full  lg:w-[400px] flex items-center lg:items-start flex-col gap-2  ">

                                    <h1 className="font-bold text-lg ">{item.product.name}</h1>
                                    <p className="font-bold text-sm text-gray-500">{item.product.productId}</p>
                                    {
                                        item.product.labelledPrice > item.product.price && <span className="font-bold text-sm line-through text-gray-500">{getFormattedPrice(item.product.labelledPrice)}</span>
                                    }
                                    <p className="font-bold text-sm text-secondary">{getFormattedPrice(item.product.price)}</p>

                                </div>

                            {/* small screen quantity and price container */}

                            <div className=" relative w-full h-[50px]  lg:hidden">
                                <div className="w-full h-full  absolute top-0  flex items-center justify-between p-4">
                                    <div className="w-[100px] h-[30px] border rounded-full flex items-center justify-between px-2">
                                        <button className="text-lg font-bold text-gray-500 hover:text-accent"
                                            onClick={
                                                ()=>{
                                                    addToCart(item.product , -1)
                                                    setCart(getCart())
                                                }
                                            }
                                        >-</button>
                                        <span className=" text-sm">{item.quantity}</span>
                                        <button className="text-lg font-bold text-gray-500 hover:text-accent"
                                            onClick={
                                                ()=>{
                                                    addToCart(item.product , 1)
                                                    setCart(getCart())
                                                }
                                            }
                                        >+</button>
                                    </div>
                                    <p className="font-bold text-lg mt-2 text-secondary">{getFormattedPrice(item.product.price * item.quantity)}</p>
                                </div>
                            </div> 

                            {/* full screen quantity and price container */}
                            <div className="w-[200px] h-full hidden   absolute top-0 right-2 lg:flex flex-col justify-end items-end p-4">
                                    <div className="w-[100px] h-[30px] border rounded-full flex items-center justify-between px-2">
                                        <button className="text-lg font-bold text-gray-500 hover:text-accent"
                                            onClick={
                                                ()=>{
                                                    addToCart(item.product , -1)
                                                    setCart(getCart())
                                                }
                                            }
                                        >-</button>
                                        <span className=" text-sm">{item.quantity}</span>
                                        <button className="text-lg font-bold text-gray-500 hover:text-accent"
                                            onClick={
                                                ()=>{
                                                    addToCart(item.product , 1)
                                                    setCart(getCart())
                                                }
                                            }
                                        >+</button>
                                    </div>
                                    <p className="font-bold text-lg mt-2 text-secondary">{getFormattedPrice(item.product.price * item.quantity)}</p>
                                </div>

                            </div>
                        )
                    }
                    
                    ) 
            }

             <div className="w-full lg:w-[500px]  bg-white border rounded-t-xl shadow-2xl flex items-center justify-between p-4 fixed lg:bottom-0 bottom-[82px] ">
                <Link to = "/checkout" state={cart}  className="w-[100px] h-[30px] bg-accent text-white text-center font-bold py-1 text-xm rounded-lg hover:bg-purple-700 transition-colors duration-200">
                    Checkout
                </Link>
                <p className="font-bold text-lg mt-2 text-secondary">
                    Total: {getFormattedPrice(getCartTotal(cart))}
                </p>

             </div>

                
        </div>
    )
}