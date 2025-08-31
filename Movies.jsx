import React from "react";
import { useNavigate } from "react-router-dom";

function Recommendations() {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Recommendations Page</h2>
      <p>Here you will see personalized recommendations...</p>
      <button onClick={() => navigate("/login")}>Logout</button>
    </div>
  );
}

export default Recommendations;
