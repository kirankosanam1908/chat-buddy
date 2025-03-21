import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Messages from "./pages/Messages";

import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";
import Verification from "./pages/auth/Verification";

const App = () => {
  useEffect(() => {
    const colorMode = JSON.parse(window.localStorage.getItem("color-theme"));

    const className = "dark";

    const bodyClass = window.document.body.classList;

    colorMode === "dark"
      ? bodyClass.add(className)
      : bodyClass.remove(className);
  }, []);

  return (
    <Routes>
      <Route index={true} path="/" element={<Messages />} />
      <Route path="/auth/login" element={<Login />} />
      <Route path="/auth/signup" element={<SignUp />} />
      <Route path="/auth/verification" element={<Verification />} />
    </Routes>
  );
};

export default App;
