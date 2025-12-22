import "../assets/css/style.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { apiRequest } from "../apiClient";
import SuccessDaftar from "../components/SuccessDaftar";

export default function Daftar() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [agree, setAgree] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (password !== confirm) {
      setError("Password tidak sama");
      return;
    }

    try {
      await apiRequest("/auth/register", {
        method: "POST",
        body: JSON.stringify({
          name,
          email,
          password,
          password_confirmation: confirm,
        }),
      });
    
      setSuccess(true);

      setTimeout(() => {
      navigate("/masuk");
      }, 2000);

      } catch (err) {
        setError(err.message);
      }
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <img
          src="/assets/kiapotik-rmbg.png"
          alt="Login"
          className="login-image"
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/")}
        />
      </div>

      <div className="login-right">
        <h1>Daftar</h1>

        {error && <p className="error-text">{error}</p>}

        <form className="login-form" onSubmit={handleSubmit}>
          <label>Nama Lengkap</label>
          <input value={name} onChange={(e) => setName(e.target.value)} required />

          <label>Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

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

          <label>Konfirmasi Password</label>
          <div className="password-wrapper">
            <input
              type={showConfirm ? "text" : "password"}
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              required
            />
            <span
              className="toggle-password"
              onClick={() => setShowConfirm(!showConfirm)}
            >
              👁
            </span>
          </div>
          
          <div className="terms-wrapper">
            <input type="checkbox" checked={agree} onChange={() => setAgree(!agree)} />
            <label>Saya setuju dengan syarat & ketentuan</label>
          </div>

          <button type="submit" disabled={!agree}>Daftar</button>
        </form>

        <div className="divider"></div>
        <Link to="/masuk" className="register-link">Sudah punya akun?</Link>
      </div>
      {success && (
      <SuccessDaftar
        title="Berhasil Daftar!"
        message="Silahkan Login Untuk Melanjutkan"
        onConfirm={() => navigate("/masuk")}
      />
      )}
    </div>
  );
}
