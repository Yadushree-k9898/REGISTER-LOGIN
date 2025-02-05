



import React from "react";
import { useLocation } from "react-router-dom";

const Navbar = ({ isAuthenticated, onLogout, onNavigate }) => {
  const location = useLocation();

  // Check if the user is on the Login or Register page
  const isAuthPage = location.pathname === "/login" || location.pathname === "/register";

  return (
    <nav className="fixed top-0 w-full bg-gradient-to-r from-cyan-500 to-teal-600 shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <button
              onClick={() => onNavigate("/")}
              className="text-white font-bold text-xl"
            >
              SecureLogin
            </button>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => onNavigate("/")}
              className="text-white hover:text-cyan-100 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
            >
              Home
            </button>

            {!isAuthPage && isAuthenticated ? (
              // Show Logout button if user is authenticated and not on Login/Register page
              <button
                onClick={onLogout}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                Logout
              </button>
            ) : (
              // Show Login and Register buttons if user is not authenticated
              !isAuthenticated && (
                <>
                  <button
                    onClick={() => onNavigate("/login")}
                    className="text-white hover:text-cyan-100 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                  >
                    Login
                  </button>
                  <button
                    onClick={() => onNavigate("/register")}
                    className="bg-white text-teal-600 hover:bg-cyan-50 px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                  >
                    Register
                  </button>
                </>
              )
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
