import { useState } from "react";
import "../styles/passwordModal.css";

function PasswordModal({ onSuccess, onClose }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleVerify() {
    try {
      const res = await fetch(
        "https://portfolio-backend-3-hm5b.onrender.com/api/projects/verify",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ password }),
        },
      );

      if (!res.ok) throw new Error("Invalid Password");

      onSuccess();
      onClose();
    } catch {
      setError("Wrong Password");
    }
  }

  return (
    <div className="modal-overlay ">
      <div className="modal-box">
        <h3>Admin Verification</h3>
        <input
          type="password"
          placeholder="Enter Admin Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p style={{ color: "red" }}> {error}</p>}
        <div className="modal-actions">
          <button onClick={handleVerify}>Verify</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default PasswordModal;
