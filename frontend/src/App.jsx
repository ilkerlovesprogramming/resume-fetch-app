import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate, useParams } from 'react-router-dom';
import ProfilePreview from './components/ProfilePreview';
import axios from 'axios';

const fetchUserData = async (userId) => {
  try {
    const response = await axios.get(`http://localhost:8000/api/users/${userId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user data:', error);
    return null;
  }
};

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

const Profile = () => {
  const { userId } = useParams();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const getUserData = async () => {
      const data = await fetchUserData(userId);
      setUserData(data);
    };
    if (userId) getUserData();
  }, [userId]);

  if (!userId) {
    return <HomePage />;
  }
  
  return userData ? <ProfilePreview location={{ state: { userData } }} /> : <p>Loading...</p>;
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/user/:userId" element={<Profile />} />
      </Routes>
    </Router>
  );
};

export default App;