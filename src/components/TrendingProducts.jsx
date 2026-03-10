import ProductCard from "./productCard";

export default function TrendingProducts() {
    return (
        <div className="bg-[#282727] w-full min-h-screen flex justify-center items-center">

            <div className="bg-[#b6b1b1] w-full h-full flex flex-col items-center justify-center p-10">

                {/* Section Title */}
                <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
                    🔥 Trending Products
                </h1>

                {/* Product Grid */}
                <div className="
                    max-w-6xl 
                    w-full
                    grid 
                    gap-8
                    grid-cols-1
                    sm:grid-cols-2
                    md:grid-cols-3
                    lg:grid-cols-4
                ">

                    <ProductCard
                        name="MacBook Air"
                        price="LKR 150,000"
                        image="https://picsum.photos/id/1/200/300"
                    />

                    <ProductCard
                        name="MacBook Pro"
                        price="LKR 200,000"
                        image="https://picsum.photos/id/2/200/300"
                    />

                    <ProductCard
                        name="iMac"
                        price="LKR 300,000"
                        image="https://picsum.photos/id/3/200/300"
                    />

                </div>

            </div>

        </div>
    );
}