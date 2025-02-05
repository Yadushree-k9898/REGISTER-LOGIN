import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Logout = () => {
  const [isLoggingOut, setIsLoggingOut] = useState(true); // State to track loading
  const navigate = useNavigate();

  useEffect(() => {
    // Ask user for confirmation before logging out
    const confirmLogout = window.confirm("Are you sure you want to log out?");
    if (confirmLogout) {
      // Simulate logout process with a delay
      setTimeout(() => {
        // Clear the token and user information from localStorage
        localStorage.removeItem("token");
        localStorage.removeItem("user");

        // Show success toast
        toast.success("Logged out successfully!");

        // Redirect to login page after 1 second (for smooth UX)
        navigate("/login");
      }, 1000); // Simulate a 1-second delay for the logout process
    } else {
      // If the user cancels the logout, redirect them back to the dashboard
      navigate("/dashboard");
    }
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#009688]">
      {isLoggingOut ? (
        <div className="text-center">
          <div className="flex justify-center items-center space-x-2">
            <div className="spinner-border animate-spin h-8 w-8 border-4 border-t-4 border-gray-300 rounded-full" />
            <span className="text-white text-xl font-semibold">Logging out...</span>
          </div>
        </div>
      ) : (
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-[#00f2ea]">Logging out...</h1>
        </div>
      )}
    </div>
  );
};

export default Logout;
