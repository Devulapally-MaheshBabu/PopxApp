import React, { useState } from "react";

export default function Login({ onBack, onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [focused, setFocused] = useState(null);

  const fieldStyle = (name) => ({
    width: "100%",
    padding: "13px 14px",
    border: `1.5px solid ${focused === name ? "#7c3aed" : "#ddd"}`,
    borderRadius: 8,
    fontSize: 14,
    outline: "none",
    boxSizing: "border-box",
    transition: "border-color 0.2s",
    color: "#222",
    background: "#fff",
    fontFamily: "inherit",
  });

  const labelStyle = {
    display: "block",
    fontSize: 12,
    fontWeight: 600,
    color: "#7c3aed",
    marginBottom: 4,
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f5f5f7",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'Nunito', sans-serif",
      }}
    >
      <div
        style={{
          width: 340,
          background: "#fff",
          borderRadius: 16,
          boxShadow: "0 8px 40px rgba(0,0,0,0.08)",
          padding: "36px 28px 40px",
        }}
      >
        <h1
          style={{
            fontSize: 24,
            fontWeight: 800,
            color: "#111",
            margin: "0 0 8px",
            lineHeight: 1.3,
          }}
        >
          Signin to your
          <br />
          PopX account
        </h1>
        <p
          style={{
            fontSize: 13.5,
            color: "#999",
            margin: "0 0 28px",
            lineHeight: 1.6,
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>

        <div style={{ marginBottom: 18 }}>
          <label style={labelStyle}>Email Address</label>
          <input
            type="email"
            placeholder="Enter email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onFocus={() => setFocused("email")}
            onBlur={() => setFocused(null)}
            style={fieldStyle("email")}
          />
        </div>

        <div style={{ marginBottom: 28 }}>
          <label style={labelStyle}>Password</label>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onFocus={() => setFocused("password")}
            onBlur={() => setFocused(null)}
            style={fieldStyle("password")}
          />
        </div>

        <button
          onClick={() => onLogin({ email, password })}
          style={{
            width: "100%",
            padding: "15px",
            background:
              email && password
                ? "linear-gradient(90deg, #7c3aed, #6d28d9)"
                : "#ccc",
            color: "#fff",
            border: "none",
            borderRadius: 8,
            fontSize: 15,
            fontWeight: 700,
            cursor: email && password ? "pointer" : "default",
            letterSpacing: 0.3,
            transition: "background 0.2s, box-shadow 0.2s",
            boxShadow:
              email && password ? "0 4px 18px rgba(124,58,237,0.30)" : "none",
            fontFamily: "inherit",
          }}
        >
          Login
        </button>

        <p
          style={{
            textAlign: "center",
            marginTop: 18,
            fontSize: 13,
            color: "#aaa",
            cursor: "pointer",
          }}
          onClick={onBack}
        >
          ← Back to Home
        </p>
      </div>

      <style>{`@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&display=swap');`}</style>
    </div>
  );
}
