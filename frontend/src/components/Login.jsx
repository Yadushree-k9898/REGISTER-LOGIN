



import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import { Eye, EyeOff } from "lucide-react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      if (response.ok) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        toast.success("Login successful!");
        navigate("/dashboard");
      } else {
        toast.error(data.message || "Login failed");
      }
    } catch (error) {
      toast.error("Login failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#009688] flex items-center justify-center p-4">
      <div className="w-full max-w-lg bg-[#1a2234] rounded-xl shadow-2xl overflow-visible relative mt-8">
        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
          <div className="bg-[#00f2ea] text-[#1a2234] px-16 py-2 rounded-md shadow-lg">
            <h2 className="text-lg font-semibold">SIGN IN</h2>
          </div>
        </div>

        <div className="p-8 pt-16">
          <div className="w-24 h-24 mx-auto mb-10 rounded-full bg-[#2a324a] flex items-center justify-center">
            <svg className="w-14 h-14 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clipRule="evenodd"
              />
            </svg>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-5">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  required
                  className="w-full pl-12 pr-4 py-3 rounded-lg bg-[#2a324a] text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00f2ea]"
                />
              </div>

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  required
                  className="w-full pl-12 pr-12 py-3 rounded-lg bg-[#2a324a] text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00f2ea]"
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
            </div>

            <div className="flex items-center justify-between text-sm text-gray-400">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="mr-2 h-4 w-4 rounded border-gray-300 text-[#00f2ea] focus:ring-[#00f2ea]"
                />
                Remember me
              </label>
              <button type="button" className="text-[#00f2ea] hover:text-[#00f2ea]/80">
                Forgot your password?
              </button>
            </div>

            <button
              type="submit"
              className="w-full bg-[#00f2ea] text-[#1a2234] font-semibold py-3 px-4 rounded-lg hover:bg-[#00f2ea]/90 transition-all duration-300"
            >
              LOGIN
            </button>

            <div className="text-center text-gray-400 text-sm">
              Don't have an account?{" "}
              <Link 
                to="/register" 
                className="text-[#00f2ea] hover:text-[#00f2ea]/80 font-medium"
              >
                REGISTER
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;