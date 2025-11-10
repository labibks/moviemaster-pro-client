import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Link } from "react-router";
import { Volume2 } from "lucide-react";

const NotFound = () => {
  const { theme } = useContext(ThemeContext);

  const handleSpeak = () => {
    const message = "💣 বম বল, খ্যাংকির পোলা, উইড়া যা মাঙ্গারের পোল 💥";
    const utterance = new SpeechSynthesisUtterance(message);
    utterance.lang = "bn-BD";
    utterance.pitch = 1.4;
    utterance.rate = 0.9;
    utterance.volume = 1;

    const voices = window.speechSynthesis.getVoices();
    const banglaVoice =
      voices.find((v) => v.lang === "bn-BD" && v.name.includes("Male")) ||
      voices.find((v) => v.lang.includes("bn")) ||
      voices.find((v) => v.lang.includes("en"));

    if (banglaVoice) {
      utterance.voice = banglaVoice;
    }

    setTimeout(() => window.speechSynthesis.speak(utterance), 200);
  };

  return (
    <div
      className={`flex flex-col justify-center items-center h-screen text-center p-4 overflow-hidden ${
        theme === "dark"
          ? "bg-gray-900 text-white"
          : "bg-gray-100 text-gray-900"
      }`}
    >
      {/* Floating 404 text */}
      <h1 className="text-[10rem] font-extrabold mb-4 animate-bounce text-red-600 select-none">
        404
      </h1>

      {/* Page not found message */}
      <h2 className="text-3xl font-semibold mb-4 animate-pulse">
        Page Not Found
      </h2>

      <p className="mb-6 text-lg animate-fadeIn">
        The page you’re looking for doesn’t exist. 😢
      </p>

     
      {/* Go home button */}
      <Link
        to="/"
        className="bg-blue-500 text-white px-5 py-2 rounded hover:bg-blue-600 transition shadow-lg animate-pulse"
      >
        Go Home
      </Link>

      {/* Extra floating stars for fun */}
      <div className="absolute top-10 left-5 w-2 h-2 bg-yellow-400 rounded-full animate-spin-slow"></div>
      <div className="absolute top-20 right-10 w-3 h-3 bg-yellow-300 rounded-full animate-spin-slow"></div>
      <div className="absolute bottom-20 left-20 w-2 h-2 bg-yellow-200 rounded-full animate-spin-slow"></div>
    </div>
  );
};

export default NotFound;
