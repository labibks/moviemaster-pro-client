import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { AuthContext } from "../context/AuthContext";
import { signOut, updateProfile } from "firebase/auth";
import { auth } from "../firebase/firebase.config"; // 🔥 তোমার Firebase config import করো
import { useNavigate } from "react-router";

const Profile = () => {
  const { theme } = useContext(ThemeContext);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  // ✅ Logout Handler
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        alert("You have been logged out successfully!");
        navigate("/login"); // লগইন পেজে পাঠানো
      })
      .catch((error) => {
        console.error("Logout Error:", error.message);
      });
  };

  // ✅ Edit Profile Handler (Demo)
  const handleEditProfile = () => {
    const newName = prompt("Enter your new display name:", user.displayName);
    if (newName && newName.trim() !== "") {
      updateProfile(auth.currentUser, {
        displayName: newName,
      })
        .then(() => {
          alert("Profile updated successfully!");
          window.location.reload(); // refresh to see changes
        })
        .catch((error) => {
          console.error("Profile update failed:", error.message);
        });
    }
  };

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center p-6 ${
        theme === "dark"
          ? "bg-gray-900 text-white"
          : "bg-gray-100 text-gray-900"
      }`}
    >
      <div
        className={`shadow-lg rounded-2xl p-8 w-full max-w-md text-center transition-transform transform hover:scale-105 ${
          theme === "dark" ? "bg-gray-800" : "bg-white"
        }`}
      >
        {/* Profile Photo */}
        <img
          src={
            user?.photoURL ||
            "https://cdn-icons-png.flaticon.com/512/847/847969.png"
          }
          alt="User Avatar"
          className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-blue-500"
        />

        {/* Name */}
        <h2 className="text-2xl font-semibold mb-2">
          {user?.displayName || "Anonymous User"}
        </h2>

        {/* Email */}
        <p className="text-gray-500 mb-4">
          {user?.email || "No email available"}
        </p>

        {/* Account Info */}
        <div
          className={`p-4 rounded-lg ${
            theme === "dark" ? "bg-gray-700" : "bg-gray-200"
          }`}
        >
          <h3 className="font-semibold mb-2 text-lg">Account Details</h3>
          <ul className="text-left text-sm space-y-2">
            <li>
              <strong>Member Since:</strong>{" "}
              {user?.metadata?.creationTime || "N/A"}
            </li>
            <li>
              <strong>Last Login:</strong>{" "}
              {user?.metadata?.lastSignInTime || "N/A"}
            </li>
          </ul>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex justify-center gap-4">
          <button
            onClick={handleEditProfile}
            className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Edit Profile
          </button>
          <button
            onClick={handleLogout}
            className="px-5 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
