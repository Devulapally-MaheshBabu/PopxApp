import React, { useState } from "react";

export default function Register({ onBack, onRegister }) {
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    isAgency: "yes",
  });
  const [focused, setFocused] = useState(null);

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const fieldStyle = (name) => ({
    width: "100%",
    padding: "12px 14px",
    border: `1.5px solid ${focused === name ? "#7c3aed" : "#e0e0e0"}`,
    borderRadius: 8,
    fontSize: 14,
    outline: "none",
    boxSizing: "border-box",
    color: "#222",
    background: "#fff",
    fontFamily: "inherit",
    transition: "border-color 0.2s",
  });

  const labelStyle = {
    display: "block",
    fontSize: 11.5,
    fontWeight: 700,
    color: "#7c3aed",
    marginBottom: 4,
    letterSpacing: 0.2,
  };

  const fields = [
    {
      key: "fullName",
      label: "Full Name*",
      placeholder: "",
      type: "text",
    },
    {
      key: "phone",
      label: "Phone Number*",
      placeholder: "",
      type: "tel",
    },
    {
      key: "email",
      label: "Email Address*",
      placeholder: "",
      type: "email",
    },
    {
      key: "password",
      label: "Password*",
      placeholder: "",
      type: "password",
    },
    {
      key: "company",
      label: "Company Name",
      placeholder: "",
      type: "text",
    },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f5f5f7",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'Nunito', sans-serif",
        padding: "20px 0",
      }}
    >
      <div
        style={{
          width: 340,
          background: "#fff",
          borderRadius: 16,
          boxShadow: "0 8px 40px rgba(0,0,0,0.08)",
          padding: "32px 28px 36px",
        }}
      >
        <h1
          style={{
            fontSize: 24,
            fontWeight: 800,
            color: "#111",
            margin: "0 0 24px",
            lineHeight: 1.3,
          }}
        >
          Create your
          <br />
          PopX account
        </h1>

        {fields.map(({ key, label, placeholder, type }) => (
          <div key={key} style={{ marginBottom: 14 }}>
            <label style={labelStyle}>{label}</label>
            <input
              type={type}
              placeholder={placeholder}
              value={form[key]}
              onChange={set(key)}
              onFocus={() => setFocused(key)}
              onBlur={() => setFocused(null)}
              style={fieldStyle(key)}
            />
          </div>
        ))}

        <div style={{ marginBottom: 28 }}>
          <label style={{ ...labelStyle, marginBottom: 10 }}>
            Are you an Agency?*
          </label>
          <div style={{ display: "flex", gap: 28 }}>
            {["yes", "no"].map((v) => (
              <label
                key={v}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  cursor: "pointer",
                  fontSize: 14,
                  color: "#444",
                  fontWeight: 600,
                }}
              >
                <div
                  onClick={() => setForm((f) => ({ ...f, isAgency: v }))}
                  style={{
                    width: 18,
                    height: 18,
                    borderRadius: "50%",
                    border: `2px solid ${form.isAgency === v ? "#7c3aed" : "#bbb"}`,
                    background: form.isAgency === v ? "#7c3aed" : "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "all 0.15s",
                  }}
                >
                  {form.isAgency === v && (
                    <div
                      style={{
                        width: 7,
                        height: 7,
                        borderRadius: "50%",
                        background: "#fff",
                      }}
                    />
                  )}
                </div>
                {v.charAt(0).toUpperCase() + v.slice(1)}
              </label>
            ))}
          </div>
        </div>

        <button
          onClick={() => onRegister(form)}
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
            letterSpacing: 0.3,
            boxShadow: "0 4px 18px rgba(124,58,237,0.30)",
            fontFamily: "inherit",
            transition: "transform 0.15s",
          }}
          onMouseOver={(e) =>
            (e.currentTarget.style.transform = "translateY(-2px)")
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.transform = "translateY(0)")
          }
        >
          Create Account
        </button>

        <p
          style={{
            textAlign: "center",
            marginTop: 16,
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
