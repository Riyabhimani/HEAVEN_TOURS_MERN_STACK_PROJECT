import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Style/Home.css';  // External CSS for cleaner JSX

export function Home() {
  const navigate = useNavigate();  // Hook to navigate programmatically

  const handleClick = () => {
    navigate('/cards');  // Navigate to the /cards route
  };

  return (
    <div className="home-container">
      <div className="image-overlay">
        <img 
          src="http://www.visitplovdiv.com/sites/default/files/Travel-and-Tours.jpg" 
          className="background-image" 
          alt="Travel and Tours" 
        />
      </div>
      <button 
        type="button" 
        className="cta-button" 
        onClick={handleClick}  // Navigate to Cards component when clicked
      >
        Click To See Our Special Destination
      </button>
    </div>
  );
}
