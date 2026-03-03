import "./App.css";
import { useEffect, useState } from "react";
import image1 from "./assets/heroimg.jpg";
import image2 from "./assets/DownButton.png";
import image3 from "./assets/tiger.jpg";
import image4 from "./assets/deer.jpg";
import image5 from "./assets/eagle.jpg";
import image6 from "./assets/wolf.jpg";
import image7 from "./assets/fish.jpg";
import image8 from "./assets/parrot.jpg";

function App() {
  const [scrollY, setScrollY] = useState(0);
  const [trail, setTrail] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      {/* Existing Hero Section */}
      <div className="hero">
        <img 
          src={image1}
          alt="Hero Background" 
          className="hero-bg-image"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        />

        <div className="gradient-overlay"></div>

        <nav className="navbar">
          <div className="logo">LOGO</div>
          <ul className="nav-links">
            <li>Home</li>
            <li>Gallery</li>
            <li>Locations</li>
            <li>About</li>
          </ul>
        </nav>

        <div className="hero-content">
          <h1>PEACE</h1>
          <div className="line"></div>
          <p>
            Capturing moments that last a lifetime. From portraits to events,
            we bring your story to life through timeless photography.
          </p>
          <button>See Plans & Prices</button>
        </div>

        <div className="bottom-left">
          <h4>Everyday Moments,<br />Timelessly Framed</h4>
          <p>Lifestyle photography with a natural touch.</p>
        </div>

        <div className="scroll-icon">
          <img src={image2} alt="Scroll Down" />
        </div>
      </div>

      {/* NEW: Captures Gallery Section */}
      <section className="captures-section">
        <div className="gallery-grid-wrapper">
          <div className="gallery-grid">
          <div className="column">
            <img src={image3} alt="Tiger" className="img-small" />
            <img src={image4} alt="Deer" className="img-large" />
          </div>
          <div className="column">
            <img src={image5} alt="Eagle" className="img-main" />
          </div>
          <div className="column">
            <img src={image6} alt="Wolf" className="img-mid" />
            <img src={image7} alt="Fish" className="img-tiny" />
            <img src={image8} alt="Parrot" className="img-medium" />
          </div>
        </div>
        </div>

        <div className="captures-content">
          <h2 className="captures-title">CAPTURES</h2>
          <hr className="short-line" />
          <p>
            Step into our gallery and discover the stories we've captured through our lens. 
            From heartfelt portraits and candid moments to unforgettable events, 
            each frame reflects our passion for preserving memories that last a lifetime.
          </p>
          <button className="see-more-btn">See More Photos</button>
        </div>
      </section>
    </div>
  );
}

export default App;