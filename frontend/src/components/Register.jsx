
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { Eye, EyeOff } from "lucide-react";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !dob || !email || !password || !confirmPassword) {
      setErrorMessage("All fields are required");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    setErrorMessage("");

    try {
      setLoading(true);
      const response = await axios.post(
        "http://localhost:5000/api/auth/register",
        {
          name,
          dob,
          email,
          password,
        }
      );

      localStorage.setItem("user", JSON.stringify(response.data.user));
      localStorage.setItem("token", response.data.token);
      toast.success("Registration successful!");
      navigate("/dashboard");
    } catch (error) {
      console.error("Registration failed:", error);
      setErrorMessage(
        error.response?.data?.message ||
          "Registration failed. Please try again."
      );
      toast.error("Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#009688] flex items-center justify-center p-4 mt-16">
      <div className="w-full max-w-2xl mx-4 bg-[#1a2234] rounded-xl shadow-2xl overflow-visible relative mt-8">
        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
          <div className="bg-[#00f2ea] text-[#1a2234] px-16 py-2 rounded-md shadow-lg">
            <h2 className="text-lg font-semibold">REGISTER</h2>
          </div>
        </div>

        <div className="p-12 pt-16">
          <div className="w-24 h-24 mx-auto mb-10 rounded-full bg-[#2a324a] flex items-center justify-center">
            <svg
              className="w-14 h-14 text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clipRule="evenodd"
              />
            </svg>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 max-w-xl mx-auto">
            <div className="relative">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                required
                className="w-full pl-12 pr-4 py-3 rounded-lg bg-[#2a324a] text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00f2ea] transition-all duration-200"
              />
            </div>
            <div className="relative">
              <input
                type="date"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                required
                className="w-full pl-12 pr-4 py-3 rounded-lg bg-[#2a324a] text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00f2ea] transition-all duration-200"
              />
            </div>
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
                className="w-full pl-12 pr-4 py-3 rounded-lg bg-[#2a324a] text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00f2ea] transition-all duration-200"
              />
            </div>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
                className="w-full pl-12 pr-12 py-3 rounded-lg bg-[#2a324a] text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00f2ea] transition-all duration-200"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-300 focus:outline-none"
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm Password"
                required
                className="w-full pl-12 pr-12 py-3 rounded-lg bg-[#2a324a] text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00f2ea] transition-all duration-200"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-300 focus:outline-none"
              >
                {showConfirmPassword ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>
            {errorMessage && (
              <div className="text-red-500 text-center">{errorMessage}</div>
            )}
            <div className="pt-2">
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#00f2ea] text-[#1a2234] font-semibold py-3 px-4 rounded-lg hover:bg-[#00f2ea]/90 transition-all duration-300 shadow-lg shadow-[#00f2ea]/20"
              >
                {loading ? "Registering..." : "REGISTER"}
              </button>
            </div>

            <div className="text-center text-gray-400 text-sm pt-2">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-[#00f2ea] hover:text-[#00f2ea]/80 font-medium"
              >
                LOGIN
              </Link>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default RegisterForm;
