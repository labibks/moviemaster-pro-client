import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { AuthContext } from "../context/AuthContext"; // তোমার AuthContext import করো

const Profile = () => {
  const { theme } = useContext(ThemeContext);
  const { user } = useContext(AuthContext); // logged-in user info
  // user = { displayName, email, photoURL }

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

        {/* Edit / Logout Buttons */}
        <div className="mt-6 flex justify-center gap-4">
          <button className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Edit Profile
          </button>
          <button className="px-5 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
