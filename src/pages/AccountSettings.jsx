import React from "react";

export default function AccountSettings({ user, onBack }) {
  const displayName =
    user?.fullName || user?.email?.split("@")[0] || "Marry Doe";
  const displayEmail = user?.email || "Marry@Gmail.Com";

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
          overflow: "hidden",
        }}
      >
        {/* ── Header ── */}
        <div
          style={{
            padding: "22px 24px 18px",
            borderBottom: "1.5px dashed #e8e8e8",
          }}
        >
          <h2
            style={{
              fontSize: 17,
              fontWeight: 800,
              color: "#111",
              margin: "0 0 18px",
            }}
          >
            Account Settings
          </h2>

          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            {/* Avatar */}
            <div style={{ position: "relative" }}>
              <div
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #ddd 0%, #bbb 100%)",
                  overflow: "hidden",
                  border: "2px solid #e8e8e8",
                }}
              >
                <svg viewBox="0 0 60 60" width="60" height="60">
                  <circle cx="30" cy="22" r="12" fill="#a0a0a0" />
                  <ellipse cx="30" cy="52" rx="20" ry="14" fill="#a0a0a0" />
                </svg>
              </div>

              {/* Camera icon badge */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                  width: 20,
                  height: 20,
                  borderRadius: "50%",
                  background: "#7c3aed",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "2px solid #fff",
                  cursor: "pointer",
                }}
              >
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                  <circle cx="12" cy="13" r="4" />
                </svg>
              </div>
            </div>

            <div>
              <p
                style={{
                  margin: 0,
                  fontWeight: 800,
                  fontSize: 15,
                  color: "#111",
                }}
              >
                {displayName}
              </p>
              <p style={{ margin: "2px 0 0", fontSize: 12.5, color: "#888" }}>
                {displayEmail}
              </p>
            </div>
          </div>
        </div>

        {/* ── Bio ── */}
        <div
          style={{
            padding: "18px 24px 24px",
            borderBottom: "1.5px dashed #e8e8e8",
          }}
        >
          <p
            style={{
              fontSize: 13.5,
              color: "#555",
              lineHeight: 1.7,
              margin: 0,
            }}
          >
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
            Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
            Erat, Sed Diam
          </p>
        </div>

        {/* ── Spacer ── */}
        <div style={{ height: 160 }} />

        {/* ── Back button ── */}
        <div style={{ padding: "0 24px 28px" }}>
          <button
            onClick={onBack}
            style={{
              width: "100%",
              padding: "13px",
              background: "#f3eeff",
              color: "#7c3aed",
              border: "none",
              borderRadius: 8,
              fontSize: 14,
              fontWeight: 700,
              cursor: "pointer",
              fontFamily: "inherit",
              transition: "background 0.15s",
            }}
            onMouseOver={(e) => (e.currentTarget.style.background = "#e8dcff")}
            onMouseOut={(e) => (e.currentTarget.style.background = "#f3eeff")}
          >
            ← Back to Home
          </button>
        </div>
      </div>

      <style>{`@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&display=swap');`}</style>
    </div>
  );
}
