import "../assets/css/style.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { apiRequest } from "../apiClient";
import { useAuth } from "../context/AuthContext";

export default function Masuk() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const res = await apiRequest("/auth/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
      });

      const { token, user } = res.data;

      login(token, user);

      if (user.role === "admin") {
        navigate("/ktadmin");
      } else {
        navigate("/ktuser");
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <img src="/assets/kiapotik-rmbg.png" alt="Login" className="login-image" />
      </div>

      <div className="login-right">
        <h1>Masuk</h1>

        {error && <p className="error-text">{error}</p>}

        <form className="login-form" onSubmit={handleSubmit}>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Password</label>
          <div className="password-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span className="toggle-password" onClick={() => setShowPassword(!showPassword)}>👁</span>
          </div>

          <button type="submit">Masuk</button>
        </form>

        <div className="divider"></div>
        <Link to="/daftar" className="register-link">Daftar Akun</Link>
      </div>
    </div>
  );
}
