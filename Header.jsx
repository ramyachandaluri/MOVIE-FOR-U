import React from "react";
import { Link } from "react-router-dom";

export default function Header({ currentUser, onLogout }) {
  return (
    <header className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-4 shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="text-3xl">🎬</div>
          <h1 className="text-2xl font-bold">Movies For U</h1>
        </div>

        <nav className="flex items-center gap-4">
          <Link to="/movies" className="hover:underline">
            Movies
          </Link>
          <Link to="/recommendations" className="hover:underline">
            AI Picks
          </Link>

          {!currentUser ? (
            <>
              <Link to="/login" className="px-3 py-1 border rounded">
                Login
              </Link>
              <Link
                to="/signup"
                className="px-3 py-1 bg-yellow-400 text-purple-800 rounded"
              >
                Signup
              </Link>
            </>
          ) : (
            <>
              <span className="mr-3">Hi, {currentUser.username}</span>
              <button
                onClick={onLogout}
                className="px-3 py-1 bg-red-500 rounded hover:bg-red-600"
              >
                Logout
              </button>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
