import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { HiEye, HiEyeOff } from "react-icons/hi";

export default function Login() {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!identifier || !password) {
      setError("Please enter all fields");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/dashboard");
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex items-center justify-center relative overflow-hidden py-16">
      {/* Gradient overlay */}
      <div className="absolute inset-0 from-blue-500 to-purple-600 opacity-20 z-0"></div>

      {/* Optional subtle particles */}
      <div className="absolute inset-0 z-0">
        <div className="w-2 h-2 bg-white rounded-full absolute animate-pulse" style={{ top: "20%", left: "10%" }}></div>
        <div className="w-2 h-2 bg-white rounded-full absolute animate-pulse" style={{ top: "70%", left: "80%" }}></div>
        <div className="w-2 h-2 bg-white rounded-full absolute animate-pulse" style={{ top: "50%", left: "50%" }}></div>
      </div>

      {/* Animated login card */}
      <div
        className="relative bg-gray-900 rounded-2xl shadow-2xl p-10 w-full max-w-md z-10
          transition-transform transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50 border border-gray-700"
        data-aos="fade-up"
      >
        

        {/* Heading */}
        <h2 className="text-3xl font-bold text-center mb-6 text-white">
          Login
        </h2>

        {/* Error */}
        {error && (
          <p className="text-red-400 text-sm mb-4 text-center">{error}</p>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email / Phone */}
          <div className="relative">
            <input
              type="text"
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
              placeholder=" "
              className="peer w-full px-4 py-3 rounded-xl border border-gray-700 bg-gray-800 text-white
                focus:outline-none focus:ring-2 focus:ring-gradient-blue focus:border-gradient-blue
                transition-all duration-300"
              style={{
                borderImageSlice: 1,
                borderImageSource: "linear-gradient(to right, #3b82f6, #8b5cf6)",
              }}
            />
            <label className="absolute left-4 top-3 text-gray-400 text-sm
              peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base
              peer-focus:-top-2 peer-focus:text-blue-400 peer-focus:text-sm transition-all">
              Email or Phone
            </label>
          </div>

          {/* Password */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder=" "
              className="peer w-full px-4 py-3 rounded-xl border border-gray-700 bg-gray-800 text-white
                focus:outline-none focus:ring-2 focus:ring-gradient-blue focus:border-gradient-blue
                transition-all duration-300"
              style={{
                borderImageSlice: 1,
                borderImageSource: "linear-gradient(to right, #3b82f6, #8b5cf6)",
              }}
            />
            <label className="absolute left-4 top-3 text-gray-400 text-sm
              peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base
              peer-focus:-top-2 peer-focus:text-blue-400 peer-focus:text-sm transition-all">
              Password
            </label>
            <span
              className="absolute right-4 top-3 text-gray-400 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <HiEyeOff size={20} /> : <HiEye size={20} />}
            </span>
          </div>

          {/* Submit Button with gradient hover */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 px-4 from-blue-500 to-purple-500
              text-white font-semibold rounded-xl hover:from-purple-500 hover:to-blue-500
              transition-all duration-300 shadow-lg disabled:opacity-50"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        {/* Links */}
        <div className="flex justify-between mt-4 text-sm text-gray-400">
          <span
            className="cursor-pointer hover:text-blue-400"
            onClick={() => navigate("/register")}
          >
            Sign Up
          </span>
          <span
            className="cursor-pointer hover:text-blue-400"
            onClick={() => navigate("/forgot-password")}
          >
            Forgot Password?
          </span>
        </div>
      </div>
    </div>
  );
}
