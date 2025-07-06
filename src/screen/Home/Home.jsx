
import { Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const Home = () => {
    const navigate = useNavigate();
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-50">
            <h1 className="text-4xl font-bold mb-4 flex items-center justify-center gap-2">
                Welcome to Our Application
                <Heart className="text-red-500 w-9 h-9" />
            </h1>
            <p className="text-lg text-gray-700 max-w-xl text-center mb-6">
                This project showcases modern React development practices using Vite, React Router, and Tailwind CSS for styling.
            </p>
            <p className="text-md text-gray-600 max-w-xl text-center">
                Explore our features and enjoy a seamless user experience!
            </p>

            <button
                onClick={() => navigate("/enter")}
                className="bg-green-600 text-black px-5 py-2 rounded hover:bg-green-700 transition"
            >
                Go to Login
            </button>
        </div>
        
    );
}