import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Gallery from "./components/Gallery";

function App() {
  const [trail, setTrail] = useState([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const newDot = {
        x: e.clientX,
        y: e.clientY,
        id: Date.now(),
      };
      setTrail((prev) => [...prev, newDot].slice(-15));
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <Router>
      <div className="container">
        {trail.map((dot, index) => (
          <div
            key={dot.id}
            className="cursor-trail"
            style={{
              left: dot.x,
              top: dot.y,
              opacity: index / trail.length,
            }}
          />
        ))}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;