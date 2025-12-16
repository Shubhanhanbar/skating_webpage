import { useState } from "react";
import { parentLogin, staffLogin } from "../utils/api";

export default function Login({ onLogin }) {
  const [role, setRole] = useState("parent");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleParentLogin = async () => {
    const data = await parentLogin(phone);
    localStorage.setItem("token", data.token);
    localStorage.setItem("role", "parent");
    onLogin("parent");
  };

  const handleStaffLogin = async () => {
    const data = await staffLogin(email, password);
    localStorage.setItem("token", data.token);
    localStorage.setItem("role", "staff");
    onLogin("staff");
  };

  return (
    <div style={{ padding: 40 }}>
      <h1>Skating Academy Login</h1>

      <button onClick={() => setRole("parent")}>Parent</button>
      <button onClick={() => setRole("staff")}>Staff</button>

      {role === "parent" && (
        <div>
          <input
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <button onClick={handleParentLogin}>Login</button>
        </div>
      )}

      {role === "staff" && (
        <div>
          <input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleStaffLogin}>Login</button>
        </div>
      )}
    </div>
  );
}
