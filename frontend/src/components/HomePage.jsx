import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/HomePageDesign.css'; 

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm) {
      navigate(`/user/${searchTerm}`); 
    }
  };

  return (
    <div className="homepage">
      <h1>Search for a User</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Enter User ID"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          required
          className="search-input"
        />
        <button type="submit" className="search-button">Search</button>
      </form>
    </div>
  );
};

export default HomePage;
