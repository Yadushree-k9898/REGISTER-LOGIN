import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  const handleRegister = () => {
    navigate("/register");
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-teal-400 to-cyan-600 flex items-center justify-center p-4">
      <div className="space-y-8 w-full max-w-sm text-center">
        {/* Header Section */}
        <header>
          <h1 className="text-6xl font-extrabold text-white tracking-tight mb-6">
            <span className="text-yellow-300">SecureLogin</span>
          </h1>
          <p className="text-gray-100 text-xl font-light">
            Simple. Secure. Seamless.
          </p>
        </header>

        {/* Action Buttons - Now Stacked */}
        <div className="flex flex-col gap-3 px-4">
          <button 
            onClick={handleLogin}
            className="w-full py-3 bg-white text-teal-600 rounded-lg font-semibold hover:bg-yellow-300 transition-colors duration-300 shadow-lg"
          >
            Login
          </button>
          <button 
            onClick={handleRegister}
            className="w-full py-3 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors duration-300"
          >
            Register
          </button>
        </div>

        {/* Minimal Feature */}
        <div className="mt-12 text-white/80 text-sm">
          <p>🔒 Enterprise-grade security for everyone</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
