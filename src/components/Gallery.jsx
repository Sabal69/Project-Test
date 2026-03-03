import { Link } from "react-router-dom";
import { useState } from "react";

function Gallery() {
  const [menuOpen, setMenuOpen] = useState(false);

  const photos = [
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
    "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800",
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800",
    "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800",
    "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800",
    "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=800",
    "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800",
    "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?w=800",
    "https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?w=800",
    "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=800",
    "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=800",
    "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=800",
    "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=800",
    "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=800",
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800",
    "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=800",
    "https://images.unsplash.com/photo-1504893524553-b855bce32c67?w=800",
    "https://images.unsplash.com/photo-1494500764479-0c8f2919a3d8?w=800"
  ];

  return (
    <div className="gallery-page">
      <nav className="navbar-gallery">
        <div className="logo">LOGO</div>
        <div className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/gallery" onClick={() => setMenuOpen(false)}>Gallery</Link></li>
          <li>Locations</li>
          <li>About</li>
        </ul>
      </nav>

      <div className="gallery-header">
        <h1>GALLERY</h1>
        <div className="line"></div>
        <p>Explore our collection of captured moments</p>
      </div>

      <div className="gallery-masonry">
        {photos.map((photo, index) => (
          <div key={index} className="gallery-item">
            <img src={photo} alt={`Gallery ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
