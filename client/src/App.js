import React, { useState } from "react";
import Footer from "./components/Footer/Footer";
import LoginModal from "./components/LoginModal/LoginModal";
import ResponsiveNavbar from "./components/Navbar/ResponsiveNavbar";

function App() {
  const [open, setOpen] = useState(true);

  return (
    <div className="App">
      <ResponsiveNavbar setOpen={setOpen} />
      <LoginModal open={open} onClose={() => setOpen(false)} />
      <Footer />
    </div>
  );
}

export default App;
