import { useState } from "react";
import { Link } from "react-router-dom";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const submit = (e) => {
    e.preventDefault();

    // demo logic (replace with backend later)
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find((u) => u.email === email);

    if (!user) {
      setMessage("Email not registered");
    } else {
      setMessage("Password reset link sent to your email (demo)");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="auth-card p-4" style={{ width: 360 }}>
        <h4 className="text-center mb-3">Forgot Password</h4>

        {message && <div className="alert alert-info">{message}</div>}

        <input
          type="email"
          className="form-control auth-input mb-3"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button className="btn auth-btn w-100" onClick={submit}>
          Send Reset Link
        </button>

        <p className="text-center mt-3">
          Back to <Link to="/">Login</Link>
        </p>
      </div>
    </div>
  );
}
