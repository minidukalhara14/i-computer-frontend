import {Link, Route, Routes } from "react-router-dom";
import AdminProductPage from "./admin/adminProductPage";
import AdminAddProduct from "./admin/adminAddProduct";

export default function AdminPage() {
    return (
        <div className="w-full h-screen flex  items-center bg-accent">
            <div className="h-full w-[300px] ">
                

                <Link to="/admin" className="block text-2xl text-secondary p-4 hover:bg-primary">Orders</Link>
                <Link to="/admin/products" className="block text-2xl text-secondary p-4 hover:bg-primary">Products</Link>
                <Link to="/admin/users" className="block text-2xl text-secondary p-4 hover:bg-primary">Users</Link>
                <Link to="/admin/reviews" className="block text-2xl text-secondary p-4 hover:bg-primary">Reviews</Link>
            </div>

            <div className="h-full w-[calc(100%-300px)] bg-primary border-[10px] border-accent rounded-2xl">
            <Routes>
                <Route path="/" element={<h1 className="text-3xl text-secondary">Oder Dashbord</h1>} />
                <Route path="/products" element={<AdminProductPage />} />
                <Route path="/add-product" element={<AdminAddProduct />} />

                <Route path="/users" element={<h1 className="text-3xl text-secondary">User Dashbord</h1>} />
                <Route path="/reviews" element={<h1 className="text-3xl text-secondary">Review Dashbord</h1>} />
                

            </Routes>
            </div>
            
           
        </div>
    )
}