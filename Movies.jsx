import React from "react";

const movies = [
  { id: 1, title: "Avengers: Endgame", genre: "Action", language: "English", poster: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg" },
  { id: 2, title: "The Hangover", genre: "Comedy", language: "English", poster: "https://image.tmdb.org/t/p/w500/uluhlXqQpOohcXLu4q2UGu6gQCD.jpg" },
  { id: 3, title: "3 Idiots", genre: "Comedy", language: "Hindi", poster: "https://image.tmdb.org/t/p/w500/66A9MqXOyVFCssoloscw79z8Tew.jpg" },
  { id: 4, title: "Parasite", genre: "Drama", language: "English", poster: "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg" }
];

export default function Movies() {
  return (
    <section className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6">Now Showing</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {movies.map(m => (
          <div key={m.id} className="bg-white rounded-lg overflow-hidden shadow hover:shadow-xl transition">
            <img src={m.poster} alt={m.title} className="w-full h-56 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{m.title}</h3>
              <p className="text-sm text-gray-600">{m.genre} • {m.language}</p>
              <button className="mt-3 px-4 py-2 bg-purple-600 text-white rounded">Book Now</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
