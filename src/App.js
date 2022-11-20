import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import { AuthContextProvider } from "./Context/auth-context";
import Home from "./Pages/Home";
import Signin from "./Auth/SignIn";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="/signin" element={<Signin />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
