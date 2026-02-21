import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="container">
      {/* Existing Hero Section */}
      <div className="hero">
        <img 
          src="/src/assets/heroimg.jpg"
          alt="Hero Background" 
          className="hero-bg-image"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        />

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
          <img src="/src/assets/DownButton.png" alt="Scroll Down" />
        </div>
      </div>

      {/* NEW: Captures Gallery Section */}
      <section className="captures-section">
        <div className="gallery-grid">
          <div className="column">
            <img src="/src/assets/tiger.jpg" alt="Tiger" className="img-small" />
            <img src="/src/assets/deer.jpg" alt="Deer" className="img-large" />
          </div>
          <div className="column">
            <img src="/src/assets/eagle.jpg" alt="Eagle" className="img-main" />
          </div>
          <div className="column">
            <img src="/src/assets/wolf.jpg" alt="Wolf" className="img-mid" />
            <img src="/src/assets/fish.jpg" alt="Fish" className="img-tiny" />
            <img src="/src/assets/parrot.jpg" alt="Parrot" className="img-medium" />
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