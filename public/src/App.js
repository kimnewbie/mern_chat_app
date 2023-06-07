// import SetAvatar from "components/SetAvatar";
import Chat from "pages/Chat";
import Login from "pages/Login";
import Register from "pages/Register";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Chat />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/setAvatar" element={<SetAvatar />} /> */}
      </Routes>
    </BrowserRouter>
  );
}