import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function AdminProductPage() {
    return (
        <div className="h-full w-screen flex ">
            
            <Link to="/admin/add-product" className="fixed bottom-8 right-8 w-[60px] h-[60px] bg-accent text-primary text-3xl rounded-full flex items-center justify-center hover:bg-[#5a04bb]">
                <FaPlus/>
            </Link>
        
        </div>
    )
}