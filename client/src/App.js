import React, { useState } from "react";
import LoginModal from "./components/LoginModal/LoginModal";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.js";
import LandingPage from "./pages/LandingPage";
import FAQPage from "./pages/FAQPage";
import ResultsPage from "./pages/ResultsPage";
import DashboardPage from "./pages/DashboardPage";
import ResponsiveNavbar from "./components/Navbar/ResponsiveNavbar";
import Footer from "./components/Footer/Footer";

function App() {
  const [open, setOpen] = useState(true);

  return (
    <div
      className="App"
      style={{
        background: "linear-gradient(#4285f49f, #ffff00b3)",
        height: "100vh",
        width: "auto",
      }}
    >
      <ResponsiveNavbar setOpen={setOpen} />
      <LoginModal open={open} onClose={() => setOpen(false)} />
      <BrowserRouter>
        <Routes>
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/results" element={<ResultsPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
