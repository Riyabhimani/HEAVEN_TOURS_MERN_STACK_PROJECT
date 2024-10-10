import React, { useState, useEffect } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { ViewDetails } from './ViewDetails';
import '../Style/Cards.css';

export function Cards() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/tours') 
      .then(res => res.json())
      .then(res => setData(res))
      .catch(err => console.error('Error fetching data:', err));
  }, []);

  const formattedData = data.map((des) => {
    return (
      <div className="col-md-4" key={des.Id} style={{ marginBottom: '20px' }}>
        <div className="card">
          <img
            src={des.Image}
            alt="destination"
            className="card-img-top"
            style={{ width: '100%', height: '200px' }}
          />
          <div className="card-body">
            <h5 className="card-title">{des.Destination}</h5>
            {/* Passing tour data as state */}
            <Link 
              to={`/des/${des.Id}`} 
              className="btn btn-primary"
              state={{ tour: des }} // Passing the tour data in state
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="container">
      {/* Back to Home Button */}
      <div className="row">
        <div className="col-md-12 text-left mb-4">
          <Link to="/" className="btn btn-secondary">
            Back to Home
          </Link>
        </div>
      </div>

      {/* Cards Section */}
      <div className="row">
        {formattedData.length > 0 ? formattedData : <p>No tours available</p>}
      </div>

      {/* Define routes for navigating between cards and details */}
      <Routes>
        <Route path="/des/:id" element={<ViewDetails />} />
      </Routes>
    </div>
  );
}
