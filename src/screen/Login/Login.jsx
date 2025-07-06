import { useState } from "react";

export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simple validation
        if (!email || !password) {
            setError("Please enter both email and password.");
            return;
        }
        setError("");
        // Handle login logic here
        alert(`Logged in as ${email}`);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-full max-w-sm">
                <h2 className="text-2xl font-bold mb-6 text-center">JOIN OUR TEAM</h2>
                {error && <div className="mb-4 text-red-500 text-center">{error}</div>}
                <div className="mb-4">
                    <label className="block mb-1 text-gray-700 text-left">Email</label>
                    <input
                        type="email"
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                    />
                </div>
                <div className="mb-6">
                    <label className="block mb-1 text-gray-700 text-left">Password</label>
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
                    Login
                </button>
            </form>
        </div>
    );
}