import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const StarshipList = () => {
  const [starships, setStarships] = useState([]);

  useEffect(() => {
    const getStarships = async () => {
      try {
        const response = await axios.get('https://swapi.dev/api/starships/');
        setStarships(response.data.results);
      } catch (error) {
        console.error('Error fetching starships:', error);
      }
    };
    getStarships();
  }, []);

  const navigate = useNavigate();

  const showShip = (index) => {
    navigate(`/starships/${index}`);
  };

  return (
    <div className="starship">
      <h2>List of Starships</h2>
      {starships.length > 0 ? (
        starships.map((starship, index) => (
          <div key={index} onClick={() => showShip(index)} className="card">
            <h3>{starship.name}</h3>
          </div>
        ))
      ) : (
        <p>Loading starships...</p>
      )}
    </div>
  );
};

export default StarshipList;

