import NavigationBar from "./NavigationBar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import "./styles.css";
import User from "./pages/User";

export default function App() {
  return (
    <>
      <div className="App">
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/user/:userId" element={<User />} />
        </Routes>
      </div>
    </>
  );
}
