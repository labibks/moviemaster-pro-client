import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Link } from "react-router";
import { Volume2 } from "lucide-react";

const NotFound = () => {
  const { theme } = useContext(ThemeContext);

  const handleSpeak = () => {
    const message = "💣 বম বল, খ্যাংকির পোলা, উইড়া যা মাঙ্গারের পোল 💥";
    const utterance = new SpeechSynthesisUtterance(message);
    utterance.lang = "bn-BD"; // Bangla voice
    utterance.pitch = 1.4; // মজার টোন
    utterance.rate = 0.9; // একটু ধীরে বলবে
    utterance.volume = 1; // পূর্ণ ভলিউম

    // 👉 ভয়েসগুলো লোড হওয়ার পর মজার পুরুষ কণ্ঠ সিলেক্ট করা
    const voices = window.speechSynthesis.getVoices();
    const banglaVoice =
      voices.find((v) => v.lang === "bn-BD" && v.name.includes("Male")) ||
      voices.find((v) => v.lang.includes("bn")) ||
      voices.find((v) => v.lang.includes("en"));

    if (banglaVoice) {
      utterance.voice = banglaVoice;
    }

    // কিছু delay দিয়ে বলবে
    setTimeout(() => window.speechSynthesis.speak(utterance), 200);
  };

  return (
    <div
      className={`flex flex-col justify-center items-center h-screen text-center ${
        theme === "dark"
          ? "bg-gray-900 text-white"
          : "bg-gray-100 text-gray-900"
      }`}
    >
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
      <p className="mb-6 text-lg font-semibold text-red-500">
        💣 বম বল, খ্যাংকির পোলা, উইড়া যা মাঙ্গারের পোল 💥
      </p>

      <button
        onClick={handleSpeak}
        className="flex items-center gap-2 bg-green-500 text-white px-5 py-2 rounded hover:bg-green-600 transition mb-4"
      >
        <Volume2 size={20} />
        শুনে নাও 🎧
      </button>

      <Link
        to="/"
        className="bg-blue-500 text-white px-5 py-2 rounded hover:bg-blue-600 transition"
      >
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
