import axios from "axios";
import { useEffect, useState } from "react";

import { BiEdit } from "react-icons/bi";
import { FaPlus } from "react-icons/fa";

import { Link } from "react-router-dom";
import LoadingAnimation from "../../components/loadingAnimation";
import ProductDeletModal from "../../components/productDeletModal";

export default function AdminProductPage() {

    const [products, setProducts] = useState([]);
    const [isProductsAreLoaded , setIsProductsAreLoaded]= useState(false);
    
    useEffect(
        ()=>{
            
            if(!isProductsAreLoaded){

                const token = localStorage.getItem("token");

                axios.get(import.meta.env.VITE_API_URL + "/products",{
                    headers: {
                        "Authorization": "Bearer " + token
                    }
                }).then(
                    (response)=>{
                        setProducts(response.data);
                        setIsProductsAreLoaded(true);
                    }
                ).catch(
                    (error)=>{
                        console.log(error);
                    }
                )

    
    

        }
    },
        
        [isProductsAreLoaded]
        
    )
    
    return (
    <div className="h-full w-full rounded-2xl overflow-y-auto p-6 bg-gray-50">

        {/* Header */}
         <div className="sticky top-0 z-10 
    bg-gradient-to-r from-accent to-purple-600/90 
    backdrop-blur-md 
    border border-white/10 
    rounded-2xl 
    shadow-xl 
    px-6 py-4 
    flex items-center justify-between">

    <div className="flex flex-col">
        <h1 className="text-2xl font-bold text-white tracking-wide">
            Product Management
        </h1>
        <p className="text-sm text-white/80">
            Manage your inventory efficiently
        </p>
    </div>

</div>
        {/* Table Container */}
        <div className="w-full mt-6 rounded-2xl shadow-xl bg-white border border-gray-200 overflow-hidden">

            {
                isProductsAreLoaded ? (
                    <div className="max-h-[75vh] overflow-auto">

                        <table className="min-w-full text-sm text-gray-700">

                            {/* Table Head */}
                            <thead className="sticky top-0 z-10 bg-gradient-to-r from-accent to-purple-600 text-white text-xs uppercase tracking-wider shadow">
                                <tr>
                                    <th className="px-6 py-4">Image</th>
                                    <th className="px-6 py-4">ID</th>
                                    <th className="px-6 py-4">Name</th>
                                    <th className="px-6 py-4">Price</th>
                                    <th className="px-6 py-4">Label</th>
                                    <th className="px-6 py-4">Brand</th>
                                    <th className="px-6 py-4">Model</th>
                                    <th className="px-6 py-4">Category</th>
                                    <th className="px-6 py-4">Status</th>
                                    <th className="px-6 py-4">Stock</th>
                                    <th className="px-6 py-4 text-center">Actions</th>
                                </tr>
                            </thead>

                            {/* Table Body */}
                            <tbody className="divide-y divide-gray-100">

                                {products.map((item) => (
                                    <tr
                                        key={item.productId}
                                        className="hover:bg-purple-50 transition duration-200"
                                    >
                                        {/* Image */}
                                        <td className="px-6 py-4">
                                            <img
                                                src={item.images?.[0]}
                                                alt={item.name}
                                                className="w-14 h-14 object-cover rounded-xl border shadow-sm"
                                            />
                                        </td>

                                        {/* ID */}
                                        <td className="px-6 py-4 font-medium text-gray-600">
                                            {item.productId}
                                        </td>

                                        {/* Name */}
                                        <td className="px-6 py-4 font-semibold text-gray-900">
                                            {item.name}
                                        </td>

                                        {/* Price */}
                                        <td className="px-6 py-4 font-medium text-green-600">
                                            Rs. {item.price}
                                        </td>

                                        {/* Label Price */}
                                        <td className="px-6 py-4 text-gray-400 line-through">
                                            Rs. {item.labelledPrice}
                                        </td>

                                        {/* Brand */}
                                        <td className="px-6 py-4">{item.brand}</td>

                                        {/* Model */}
                                        <td className="px-6 py-4">{item.model}</td>

                                        {/* Category */}
                                        <td className="px-6 py-4">
                                            <span className="px-3 py-1 text-xs rounded-full bg-gray-100">
                                                {item.category}
                                            </span>
                                        </td>

                                        {/* Availability */}
                                        <td className="px-6 py-4">
                                            {item.isAvailable ? (
                                                <span className="px-3 py-1 text-xs rounded-full bg-green-100 text-green-700 font-semibold">
                                                    In Stock
                                                </span>
                                            ) : (
                                                <span className="px-3 py-1 text-xs rounded-full bg-red-100 text-red-700 font-semibold">
                                                    Out
                                                </span>
                                            )}
                                        </td>

                                        {/* Stock */}
                                        <td className="px-6 py-4 font-bold text-gray-800">
                                            {item.stock}
                                        </td>

                                        {/* Actions */}
                                        <td className="px-6 py-4 flex items-center gap-3 justify-center">

                                            <ProductDeletModal
                                                product={item}
                                                refresh={() => {
                                                    setIsProductsAreLoaded(false)
                                                }}
                                            />

                                            <Link to="/admin/edit-product" state={item}>
                                                <div className="p-2 rounded-lg bg-blue-100 hover:bg-blue-200 transition cursor-pointer">
                                                    <BiEdit className="text-xl text-blue-600" />
                                                </div>
                                            </Link>

                                        </td>
                                    </tr>
                                ))}

                            </tbody>
                        </table>
                    </div>
                ) : (
                    <div className="p-10 flex justify-center">
                        <LoadingAnimation />
                    </div>
                )
            }
        </div>

        {/* Floating Add Button */}
        <Link
            to="/admin/add-product"
            className="fixed bottom-8 right-8 w-[65px] h-[65px] bg-gradient-to-r from-accent to-purple-600 text-white text-3xl rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition duration-300"
        >
            <FaPlus />
        </Link>

    </div>
);
   
}