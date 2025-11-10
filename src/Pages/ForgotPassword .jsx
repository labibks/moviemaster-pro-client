import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { ThemeContext } from "../context/ThemeContext";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ForgotPassword = () => {
  const { resetPassword } = useContext(AuthContext);
  const { theme } = useContext(ThemeContext);
  const [email, setEmail] = useState("");

  const handleReset = (e) => {
    e.preventDefault();
    resetPassword(email)
      .then(() => toast.success("Password reset email sent! "))
      .catch((err) => toast.error(err.message));
  };

  return (
    <div
      className={`min-h-screen flex items-center justify-center transition-colors duration-300 ${
        theme === "dark"
          ? "bg-gray-900 text-gray-100"
          : "bg-gray-100 text-gray-900"
      }`}
    >
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
      <div
        className={`max-w-md w-full p-6 rounded-lg shadow-lg transition-colors duration-300 ${
          theme === "dark" ? "bg-gray-800" : "bg-white"
        }`}
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Reset Password</h2>
        <form onSubmit={handleReset} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className={`border p-3 rounded focus:outline-none focus:ring-2 transition-colors duration-300 ${
              theme === "dark"
                ? "bg-gray-700 border-gray-600 focus:ring-blue-400 text-white"
                : "bg-gray-50 border-gray-300 focus:ring-blue-400 text-gray-900"
            }`}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            type="submit"
            className="bg-blue-500 text-white py-3 rounded hover:bg-blue-600 transition-colors duration-300"
          >
            Send Reset Email
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
