import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthProvider.jsx";

const ForgotPassword = () => {
  const { resetPassword } = useContext(AuthContext);
  const [email, setEmail] = useState("");

  const handleReset = (e) => {
    e.preventDefault();
    resetPassword(email)
      .then(() => alert("Password reset email sent!"))
      .catch((err) => alert(err.message));
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-6 bg-white rounded shadow">
      <h2 className="text-2xl mb-4">Reset Password</h2>
      <form onSubmit={handleReset} className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="Enter your email"
          className="border p-2 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
          Send Reset Email
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;
