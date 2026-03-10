export default function ProductCard(props) {
    console.log(props.name);

    return (
        <div className="w-64 bg-white rounded-2xl shadow-lg overflow-hidden 
                        hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

            {/* Product Image */}
            <img 
                src={props.image} 
                alt={props.name} 
                className="w-full h-40 object-cover"
            />

            {/* Content */}
            <div className="p-4 flex flex-col items-center justify-center gap-2">

                <h1 className="text-lg font-semibold text-gray-800">
                    {props.name}
                </h1>

                <p className="text-xl font-bold text-green-600">
                    {props.price}
                </p>

                <button className="mt-2 bg-green-600 text-white py-2 rounded-lg
                                   hover:bg-green-700 transition duration-300">
                    Buy Now
                </button>

            </div>
        </div>
    );
}
