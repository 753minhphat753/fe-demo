import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Regist = () => {

    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !email || !phone || !password) {
            setError("please fill in all fields.");
            setSuccess("");
            return;
        }
        setError("");
        setSuccess("Registration successful! (Information will be saved when you complete the file saving feature)");
        setName("");
        setEmail("");
        setPhone("");
        setPassword("");
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-full max-w-sm">
                <h2 className="text-2xl font-bold mb-6 text-center">CREATE A NEW ACCOUNT</h2>
                {error && <div className="mb-4 text-red-500 text-center">{error}</div>}
                {success && <div className="mb-4 text-green-600 text-center">{success}</div>}
                <div className="mb-4">
                    <label className="block mb-1 text-gray-700">Name</label>
                    <input
                        type="text"
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Fill in your name"
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-1 text-gray-700">Email</label>
                    <input
                        type="email"
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-1 text-gray-700">Phone number</label>
                    <input
                        type="tel"
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Enter your phone number"
                    />
                </div>
                <div className="mb-6">
                    <label className="block mb-1 text-gray-700">Password</label>
                    <input
                        type="password"
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-black py-2 rounded hover:bg-blue-700 transition"
                >
                    Sign up
                </button>

                <button
                    type="button"
                    className="w-full bg-gray-200 text-blue-700 py-2 rounded hover:bg-gray-300 transition mt-2"
                    onClick={() => navigate("/enter")}
                >
                    Login
                </button>
            </form>
        </div>
    );
};
