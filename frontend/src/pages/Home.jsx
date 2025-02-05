import React from "react";

const Home = () => {
  const handleLogin = () => {
    console.log("Login clicked");
  };

  const handleRegister = () => {
    console.log("Register clicked");
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-teal-400 to-cyan-600 flex items-center justify-center p-4 pt-20"> 
      {/* Added pt-20 to create space for the navbar */}
      <div className="space-y-10 w-full max-w-4xl text-center">
        {/* Header Section */}
        <header>
          <h1 className="text-5xl font-extrabold text-white tracking-tight mb-4">
            Welcome to <span className="text-yellow-300">SecureLogin</span>
          </h1>
          <p className="text-gray-100 text-lg">
            Manage your account securely with seamless login and registration. Access your dashboard and view user information effortlessly.
          </p>
        </header>

        {/* Features Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-slate-800 p-6 rounded-xl shadow-lg hover:scale-105 transition-all duration-300">
            <h3 className="text-xl font-semibold text-teal-300 mb-2">
              🛡️ Secure Authentication
            </h3>
            <p className="text-gray-300">
              Experience robust and secure login and registration processes.
            </p>
          </div>
          <div className="bg-slate-800 p-6 rounded-xl shadow-lg hover:scale-105 transition-all duration-300">
            <h3 className="text-xl font-semibold text-teal-300 mb-2">
              📋 User Management
            </h3>
            <p className="text-gray-300">
              View and manage user details in a dynamic and responsive table.
            </p>
          </div>
          <div className="bg-slate-800 p-6 rounded-xl shadow-lg hover:scale-105 transition-all duration-300">
            <h3 className="text-xl font-semibold text-teal-300 mb-2">
              📊 Dashboard
            </h3>
            <p className="text-gray-300">
              Access your personalized dashboard with real-time data.
            </p>
          </div>
          <div className="bg-slate-800 p-6 rounded-xl shadow-lg hover:scale-105 transition-all duration-300">
            <h3 className="text-xl font-semibold text-teal-300 mb-2">
              🔒 Data Privacy
            </h3>
            <p className="text-gray-300">
              Your data is protected with advanced encryption techniques.
            </p>
          </div>
        </div>

      

        {/* Footer */}
        <footer className="text-gray-300 text-sm mt-6">
          <p>
            Built with ❤️ by <span className="text-teal-300">SecureLogin</span>.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Home;
