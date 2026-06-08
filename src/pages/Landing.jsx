import React from "react";

export default function Landing({ onCreateAccount, onLogin }) {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'Nunito', sans-serif",
      }}
    >
      <div
        style={{
          width: 340,
          minHeight: 680,
          background: "#fff",
          borderRadius: 16,
          boxShadow: "0 8px 40px rgba(0,0,0,0.10)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "0 24px 36px",
        }}
      >
        <h1
          style={{
            fontSize: 26,
            fontWeight: 800,
            color: "#111",
            margin: "0 0 8px",
            lineHeight: 1.25,
          }}
        >
          Welcome to PopX
        </h1>
        <p
          style={{
            fontSize: 14,
            color: "#888",
            margin: "0 0 28px",
            lineHeight: 1.6,
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>

        <button
          onClick={onCreateAccount}
          style={{
            width: "100%",
            padding: "15px",
            background: "linear-gradient(90deg, #7c3aed, #6d28d9)",
            color: "#fff",
            border: "none",
            borderRadius: 8,
            fontSize: 15,
            fontWeight: 700,
            cursor: "pointer",
            marginBottom: 12,
            letterSpacing: 0.3,
            boxShadow: "0 4px 18px rgba(124,58,237,0.35)",
            transition: "transform 0.15s, box-shadow 0.15s",
            fontFamily: "inherit",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = "translateY(-2px)";
            e.currentTarget.style.boxShadow =
              "0 7px 22px rgba(124,58,237,0.45)";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow =
              "0 4px 18px rgba(124,58,237,0.35)";
          }}
        >
          Create Account
        </button>

        <button
          onClick={onLogin}
          style={{
            width: "100%",
            padding: "15px",
            background: "#e8e0fc",
            color: "#7c3aed",
            border: "none",
            borderRadius: 8,
            fontSize: 15,
            fontWeight: 700,
            cursor: "pointer",
            letterSpacing: 0.3,
            transition: "background 0.15s",
            fontFamily: "inherit",
          }}
          onMouseOver={(e) => (e.currentTarget.style.background = "#d6cafc")}
          onMouseOut={(e) => (e.currentTarget.style.background = "#e8e0fc")}
        >
          Already Registered? Login
        </button>
      </div>

      <style>{`@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&display=swap');`}</style>
    </div>
  );
}
