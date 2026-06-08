import { useState } from "react";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AccountSettings from "./pages/AccountSettings";

export default function App() {
  const [screen, setScreen] = useState("landing"); 
  const [user, setUser] = useState(null);

  const navigate = (to) => setScreen(to);

  switch (screen) {
    case "login":
      return (
        <Login
          onBack={() => navigate("landing")}
          onLogin={(data) => {
            setUser(data);
            navigate("account");
          }}
        />
      );

    case "register":
      return (
        <Register
          onBack={() => navigate("landing")}
          onRegister={(data) => {
            setUser(data);
            navigate("account");
          }}
        />
      );

    case "account":
      return <AccountSettings user={user} onBack={() => navigate("landing")} />;

    default:
      return (
        <Landing
          onCreateAccount={() => navigate("register")}
          onLogin={() => navigate("login")}
        />
      );
  }
}
