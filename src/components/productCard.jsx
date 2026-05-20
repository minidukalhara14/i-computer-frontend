import { Link } from "react-router-dom";
import getFormattedPrice from "../utils/price-format";

export default function ProductCard(props) {
    
    const product = props.product;

    return (
        <Link 
            to={"/overview/" + product.productId} 
            className="w-[300px] h-[450px] bg-white rounded-3xl shadow-lg m-6 overflow-hidden 
                       hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 flex flex-col 
                       justify-between cursor-pointer group border border-gray-100
                       hover:[&_.primary-image]:opacity-0"
        >

            {/* Image Container */}
            <div className="relative w-full h-[250px] overflow-hidden">

                {/* Background subtle gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent z-10"></div>

                {/* First Image */}
                <img  
                    src={product.images?.[1]} 
                    alt={product.name}
                    className="w-full h-full object-cover absolute top-0 left-0 
                               transition-transform duration-500 group-hover:scale-110"
                />

                {/* Second Image */}
                <img  
                    src={product.images?.[0]} 
                    alt={product.name}
                    className="w-full h-full object-cover absolute top-0 left-0 primary-image 
                               transition-all duration-500 group-hover:scale-110"
                />

            </div>

            {/* Content */}
            <div className="p-4 flex flex-col items-center gap-2">

                {/* Product Name */}
                <h1 className="text-md font-semibold text-gray-800 text-center line-clamp-2">
                    {product.name}
                </h1>

                {/* Price Section */}
                <div className="w-full flex flex-col justify-center items-center gap-1 mt-2">
                    
                    {
                        product.labelledPrice > product.price && (
                            <span className="text-sm text-gray-400 line-through">
                                {getFormattedPrice(product.labelledPrice)}
                            </span>
                        )
                    }

                    <span className="text-xl font-bold text-green-600">
                        {getFormattedPrice(product.price)}
                    </span>

                </div>

            </div>

        </Link>
    );
}