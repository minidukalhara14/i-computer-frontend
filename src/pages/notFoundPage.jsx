import { Link } from "react-router-dom";

export default function NotFoundPage() {
    return (
        <div className="w-full h-full flex items-center justify-center">
            <h1 className="text-4xl font-bold text-gray-500">404 - Page Not Found</h1>

            <Link to="/" className="px-4 py-2 bg-accent text-white rounded ml-5">Go Home</Link>
        </div>
    )
}