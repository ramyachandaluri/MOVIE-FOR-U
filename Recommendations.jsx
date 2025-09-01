import React from "react";

export default function Recommendations() {
  const recs = ["Inception", "The Dark Knight", "Coco"];
  return (
    <section className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6">🤖 AI Recommendations</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {recs.map((r,i) => (
          <div key={i} className="p-4 bg-gradient-to-r from-purple-100 to-blue-100 rounded shadow">
            <h4 className="font-semibold">{r}</h4>
            <p className="text-sm text-gray-600">Suggested for you</p>
          </div>
        ))}
      </div>
    </section>
  );
}
