import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup({ setCurrentUser }) {
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const nav = useNavigate();

  function handleChange(e) {
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || {};
    if (users[form.email]) return alert("Email already registered");
    users[form.email] = { username: form.username, email: form.email, password: form.password };
    localStorage.setItem("users", JSON.stringify(users));
    const publicProfile = { username: form.username, email: form.email };
    localStorage.setItem("currentUser", JSON.stringify(publicProfile));
    if (setCurrentUser) setCurrentUser(publicProfile);
    alert("Signup successful ✅");
    nav("/movies");
  }

  return (
    <div className="max-w-md mx-auto mt-12 p-6 bg-white rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">Create Account</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input name="username" required placeholder="Username" value={form.username} onChange={handleChange} className="border p-2 rounded" />
        <input type="email" name="email" required placeholder="Email" value={form.email} onChange={handleChange} className="border p-2 rounded" />
        <input type="password" name="password" required placeholder="Password" value={form.password} onChange={handleChange} className="border p-2 rounded" />
        <button type="submit" className="bg-blue-600 text-white py-2 rounded">Signup</button>
      </form>
    </div>
  );
}
