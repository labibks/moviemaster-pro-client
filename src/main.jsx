import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import RootLayout from "./layout/RootLayout.jsx";
import Home from "./Pages/Home.jsx";
import AllMovies from "./Pages/AllMovies.jsx";
import MyCollection from "./Pages/MyCollection.jsx";
import MovieDetails from "./Pages/MovieDetails.jsx";
import AddMovie from "./Pages/AddMovie.jsx";
import UpdateMovie from "./Pages/UpdateMovie.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import AuthProvider from "./context/AuthProvider.jsx";
import Login from "./Pages/Login.jsx";
import Register from "./Pages/Register.jsx";
import WatchList from './Pages/WatchList.jsx'
import Profile from "./Pages/Profile.jsx";

// dummy logged-in user (email or null)
const user = { email: "user@example.com" }; // logged-in
// const user = null; // not logged-in

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/allmovies", element: <AllMovies /> },

      // Protected Routes
      {
        path: "/movieDetails/:id",
        element: (
          <ProtectedRoute user={user}>
            <MovieDetails loggedInUserEmail={user?.email} />
          </ProtectedRoute>
        ),
      },
      {
        path: "/mycollection",
        element: (
          <ProtectedRoute user={user}>
            <MyCollection loggedInUserEmail={user?.email} />
          </ProtectedRoute>
        ),
      },
      {
        path: "/movies/add",
        element: (
          <ProtectedRoute user={user}>
            <AddMovie loggedInUserEmail={user?.email} />
          </ProtectedRoute>
        ),
      },
      {
        path: "/movies/update/:id",
        element: (
          <ProtectedRoute user={user}>
            <UpdateMovie loggedInUserEmail={user?.email} />
          </ProtectedRoute>
        ),
      },
      {
        path: "/addmovie",
        Component: AddMovie,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/watchlist",
        Component: WatchList
      },
      {
        path:'/profile',
        Component: Profile
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
