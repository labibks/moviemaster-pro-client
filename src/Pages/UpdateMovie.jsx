import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

const UpdateMovie = ({ loggedInUserEmail }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movieData, setMovieData] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/movies/${id}`)
      .then((res) => res.json())
      .then((data) => setMovieData(data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!movieData) return <div className="text-center mt-10">Loading...</div>;

  const handleChange = (e) => {
    setMovieData({ ...movieData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:3000/movies/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(movieData),
    })
      .then(() => {
        alert("Movie updated successfully!");
        navigate("/mycollection");
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-6">Update Movie</h2>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        {Object.keys(movieData).map((key) => {
          if (key === "addedBy" || key === "_id") return null;
          return (
            <input
              key={key}
              type={
                key === "rating" || key === "duration" || key === "releaseYear"
                  ? "number"
                  : "text"
              }
              name={key}
              placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
              value={movieData[key]}
              onChange={handleChange}
              className="border p-2 rounded"
              required
            />
          );
        })}
        <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdateMovie;
