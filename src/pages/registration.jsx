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
        <input
          type="text"
          placeholder="Full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Register</button>
      </form>

      <p className="form-footer">
        Already have an account? <Link to="/">Login</Link>
      </p>
    </div>
  );
}

export default Register;
