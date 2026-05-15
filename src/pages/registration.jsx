import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    if (name && email && password) {
      alert("Registration Successful");
      navigate("/");
    } else {
      alert("Fill all fields");
    }
  };

  return (
    <div className="container">
      <div className="form-header">
        <span className="brand">MyFlow</span>
        <h2>Create your account</h2>
        <p className="subtext">Join today and start using a clean, production-ready authentication experience.</p>
      </div>

      <form onSubmit={handleRegister}>
        <div className="field">
          <label htmlFor="signup-name">Full name</label>
          <input
            id="signup-name"
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoComplete="name"
          />
        </div>

        <div className="field">
          <label htmlFor="signup-email">Email address</label>
          <input
            id="signup-email"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
          />
        </div>

        <div className="field">
          <label htmlFor="signup-password">Password</label>
          <input
            id="signup-password"
            type="password"
            placeholder="Create a password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="new-password"
          />
        </div>

        <button type="submit">Register</button>
      </form>

      <p className="form-footer">
        Already have an account? <Link to="/">Login</Link>
      </p>
    </div>
  );
}

export default Register;
