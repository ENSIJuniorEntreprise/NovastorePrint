import Home from "./pages/Home/Home";
import { Contacts } from "./pages/Contacts/Contacts";
import Presentation from "./pages/Presentation/Presentation";
import Services from "./pages/Services/Services";
import NavBar from "./components/NavBar/NavBar";
import { Routes, Route } from "react-router-dom";

import Footer from "./components/Footer";
function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/services" element={<Services />} />
        <Route path="/presentation" element={<Presentation />} />
        <Route path="*" element={<div>404 not found</div>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
