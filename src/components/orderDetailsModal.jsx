import axios from "axios"
import { useState } from "react"
import toast from "react-hot-toast"
import { FaEnvelope, FaEye, FaUser } from "react-icons/fa6"
import getFormattedPrice from "../utils/price-format"
import { FaInfoCircle, FaMapMarkerAlt, FaPhoneAlt, FaShoppingBag, FaStickyNote, FaTimes } from "react-icons/fa"
import api from "../utils/api"


export default function OrderDetailsModal(props){

    const [isModalOpen , setIsModalOpen] = useState(false)
    const [notes , setNotes] = useState("")
    const [status , setStatus] = useState("")
    const [isUpdating , setIsUpdating] = useState(false)

    const order = props.order
    const refresh = props.refresh


    async function updateOrder(){
        
        setIsUpdating(true)
        const token = localStorage.getItem("token");

        try{
            api.put("/orders/" + order.orderId, {
                status : status,
                notes : notes
            }, {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            })
            toast.success("Order updated successfully!")
            refresh();
            setIsUpdating(false)

        } catch (error) {
            console.log(error)
            toast.error("Failed to update order.")
            setIsUpdating(false)
        }

    }



   
            
        
        
    

    return(
        <>
        
        <FaEye className="text-2xl text-secondary cursor-pointer hover:text-red-700"

            onClick={
                ()=>{
                    setIsModalOpen(true)
                }
            }
        />

        {
            isModalOpen&&
           <div className="w-screen h-screen fixed top-0 left-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50 px-4">

                {/* Modal */}
                <div className="w-[600px] max-h-[92vh] overflow-y-auto bg-white rounded-3xl shadow-2xl border border-gray-100 animate-scaleIn">

                    {/* Header */}
                    <div className="px-6 py-4 border-b flex justify-between items-center">
                    <div>
                        <h2 className="text-lg font-bold text-gray-800">Order Details</h2>
                        <p className="text-xs text-gray-500">Customer • Items • Payment</p>
                    </div>

                    <button 
                        onClick={() => setIsModalOpen(false)}
                        className="w-9 h-9 rounded-full bg-gray-100 hover:bg-red-100 hover:text-red-600 flex justify-center items-center transition cursor-pointer"
                    >
                        <FaTimes size={14} />
                    </button>
                    </div>

                    <div className="p-6 flex flex-col gap-5">

                    {/* Compact Customer Details */}
                    <div className="bg-gray-50 border rounded-2xl p-4 flex flex-col gap-3">

                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-secondary/10 text-secondary flex items-center justify-center">
                                <FaUser size={14} />
                            </div>

                            <div>
                                <p className="text-sm font-semibold text-gray-800">
                                {order.firstName} {order.lastName}
                                </p>
                                <p className="text-xs text-gray-500">{order.orderId}</p>
                            </div>
                            </div>

                            <div className="grid grid-cols-1 gap-2 text-sm">

                            <div className="flex items-center gap-2 text-gray-600">
                                <FaEnvelope size={12} />
                                <span className="truncate">{order.email}</span>
                            </div>

                            <div className="flex items-center gap-2 text-gray-600">
                                <FaPhoneAlt size={12} />
                                <span>{order.phone}</span>
                            </div>

                            <div className="flex items-start gap-2 text-gray-600">
                                <FaMapMarkerAlt size={12} className="mt-1" />
                                <span className="leading-relaxed text-xs">
                                {order.addressLineOne}, {order.addressLineTwo},{" "}
                                {order.city}, {order.state}, {order.zipCode}
                                </span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-600">
                                <FaInfoCircle size={12} />
                                <span className="font-bold text-blue-600">{order.status}</span>
                            </div>

                            <div className="flex items-start gap-2 text-gray-600">
                                <FaStickyNote size={12} className="mt-1" />
                                <span className="leading-relaxed text-xs">
                                    {order.notes}
                                </span>
                            </div>



                        </div>
                        
                    </div>

                    {/* Products */}
                    <div>
                        <h3 className="text-base font-bold text-gray-800 mb-3 flex items-center gap-2">
                        <FaShoppingBag className="text-secondary" />
                        Ordered Items
                        </h3>

                        <div className="w-full h-[200px] overflow-y-auto flex flex-col gap-3 pr-1">
                        {
                            order.items.map((item, index) => {
                            return (
                                <div
                                key={index}
                                className="flex justify-between items-center bg-gray-50 border rounded-2xl p-3"
                                >
                                <div className="flex gap-3 items-center">
                                    <img
                                    src={item.product.image}
                                    className="w-[65px] h-[65px] rounded-xl object-cover border"
                                    />

                                    <div>
                                    <p className="font-semibold text-sm text-gray-800">
                                        {item.product.name}
                                    </p>

                                    <p className="text-xs text-gray-500">
                                        Qty: {item.quantity}
                                    </p>

                                    <p className="text-xs text-gray-500">
                                        {getFormattedPrice(item.product.price)}
                                    </p>
                                    </div>
                                </div>

                                <div className="text-sm font-bold text-secondary">
                                    {getFormattedPrice(
                                    item.product.price * item.quantity
                                    )}
                                </div>
                                </div>
                            );
                            })
                        }
                        </div>
                    </div>

                    {/* Total */}
                    <div className="bg-secondary/10 rounded-2xl border px-5 py-4 flex justify-between items-center">
                        <span className="text-sm text-gray-600">Total Amount</span>
                        <span className="text-2xl font-bold text-secondary">
                        {getFormattedPrice(order.total)}
                        </span>
                    </div>
                   <div className="bg-secondary/10 rounded-2xl border px-5 py-4 flex items-end gap-6">

                            {/* Notes */}
                            <div className="flex-1 flex flex-col">
                                <label className="text-sm font-semibold text-black mb-1">
                                    Edit Notes
                                </label>
                                <textarea type="text"
                                    value={notes}
                                    className="w-full h-[40px] px-3 py-2 text-xs rounded-lg border-2 border-secondary resize-none focus:outline-none focus:border-primary"
                                    onChange={(e) => setNotes(e.target.value)}
                                />
                            </div>

                            {/* Status */}
                            <div className="flex-1 flex flex-col">
                                <label className="text-sm font-semibold text-black mb-1">
                                    Update Status
                                </label>

                                <select
                                    value={status}
                                    className="w-full h-[40px] px-2 text-xs rounded-lg border-2 border-secondary focus:outline-none focus:border-primary"
                                    onChange={(e) => setStatus(e.target.value)}
                                >
                                    <option value="pending">Pending</option>
                                    <option value="processing">Processing</option>
                                    <option value="shipped">Shipped</option>
                                    <option value="delivered">Delivered</option>
                                    <option value="cancelled">Cancelled</option>
                                </select>
                            </div>

                            {/* Button */}
                            <button
                                className="w-[110px] h-[40px] bg-secondary text-primary font-semibold text-sm rounded-lg hover:bg-accent hover:text-secondary transition-colors duration-300"
                                onClick={() => updateOrder()}
                            >
                                {  isUpdating ? "Wait..." : "Update"}
                            </button>

                        </div>
                </div>
            </div>
        </div>
    }


        </>


    )
}