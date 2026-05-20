import axios from "axios"
import { useState } from "react"
import toast from "react-hot-toast"
import { TbTrash } from "react-icons/tb"

export default function ProductDeletModal(props){

    const [isModalOpen , setIsModalOpen] = useState(false)

    const product = props.product
    const refresh = props.refresh
    function handleDelete(){
                        
                    const token = localStorage.getItem("token")
                    axios.delete(import.meta.env.VITE_API_URL+ "/products/"+ product.productId ,{
                        headers:{
                                    "Authorization": "Bearer " + token 
                                }
                        }).then(
                                (responce)=>{
                                        toast.success("Product Delete Succesfully")
                                        refresh()
                                    }
                        ).catch(
                                (error)=>{
                                        toast.error("Faild to delete Product")
                                        console.log(error)
                                    }
                                )

                                                
                    }
                
            
        
        
    

    return(
        <>
        
        <TbTrash className="text-2xl text-red-500 cursor-pointer hover:text-red-700"

            onClick={
                ()=>{
                    setIsModalOpen(true)
                }
            }
        />

        {
            isModalOpen&&
            <div className="w-screen h-screen fixed bg-black/30 top-0 left-0 flex justify-center items-center">
                <div className="w-[420px] bg-white rounded-2xl shadow-2xl p-6 flex flex-col gap-6">

                    {/* Icon + Title */}
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-red-100 text-red-600 text-2xl">
                            ⚠️
                        </div>
                        <div>
                            <h1 className="text-lg font-semibold text-gray-800">
                                Delete Product
                            </h1>
                            <p className="text-sm text-gray-500">
                                This action cannot be undone
                            </p>
                        </div>
                    </div>

                    {/* Message */}
                    <p className="text-gray-600 text-sm leading-relaxed">
                        Are you sure you want to delete product with ID 
                        <span className="font-semibold text-gray-800">
                            {" "}{product.productId}
                        </span> ?
                    </p>

                    {/* Buttons */}
                    <div className="flex justify-end gap-3 mt-2">

                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="px-4 py-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-100 transition"
                        >
                            Cancel
                        </button>

                        <button
                            onClick={() => {
                                handleDelete();
                                setIsModalOpen(false);
                            }}
                            className="px-4 py-2 rounded-lg bg-red-600 text-white font-medium hover:bg-red-700 transition shadow-md"
                        >
                            Delete
                        </button>

                    </div>
                </div>
            </div>
        }


        </>


    )
}