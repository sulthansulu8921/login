import { useState } from "react";
import { loginUser } from "../api/authService";
import { useNavigate, Link } from "react-router-dom";
import "../styles/login.css"

export default function Login() {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const submit = (e) => {
    e.preventDefault();

    const res = loginUser(form);

    if (!res.success) {
      setError("Email or password incorrect");
    } else {
      navigate("/dashboard");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="auth-card p-4" style={{ width: 400 }}>
        <h4 className="text-center mb-3">Log in</h4>

        {error && <div className="alert alert-danger">{error}</div>}

        <label>Email</label>
        <input
          type="email"
          className="form-control auth-input mb-3"
          placeholder="Enter your email"
          value={form.email}
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
        />

        <div className="d-flex justify-content-between">
          <label>Password</label>
          <Link to="/forgot-password" className="text-decoration-none">
            Forgot password?
          </Link>
        </div>

        <input
          type="password"
          className="form-control auth-input mb-3"
          placeholder="Enter your password"
          value={form.password}
          onChange={(e) =>
            setForm({ ...form, password: e.target.value })
          }
        />

        <button className="btn auth-btn w-100" onClick={submit}>
          Log in
        </button>

        <p className="text-center mt-3">
          Don’t have an account? <Link to="/register">Sign up</Link>
        </p>
      </div>
    </div>
  );
}
