import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login({ setCurrentUser }) {
  const [form, setForm] = useState({ email: "", password: "" });
  const nav = useNavigate();

  function handleChange(e) {
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || {};
    const user = users[form.email];
    if (!user || user.password !== form.password) {
      return alert("Invalid credentials");
    }
    const publicProfile = { username: user.username, email: user.email };
    localStorage.setItem("currentUser", JSON.stringify(publicProfile));
    if (setCurrentUser) setCurrentUser(publicProfile);
    alert("Login successful 🎉");
    nav("/movies");
  }

  return (
    <div className="max-w-md mx-auto mt-12 p-6 bg-white rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">Login</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input type="email" name="email" required placeholder="Email" value={form.email} onChange={handleChange} className="border p-2 rounded" />
        <input type="password" name="password" required placeholder="Password" value={form.password} onChange={handleChange} className="border p-2 rounded" />
        <button type="submit" className="bg-green-600 text-white py-2 rounded">Login</button>
      </form>
    </div>
  );
}
