import { useState, useEffect } from 'react';
import axios from 'axios';

const Planets = () => {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    const getPlanets = async () => {
      try {
        const response = await axios.get('https://swapi.dev/api/planets/');
        setPlanets(response.data.results);
      } catch (error) {
        console.error('Error fetching planets:', error);
      }
    };
    getPlanets();
  }, []);

  return (
    <div className="planets">
      <h2>List of Planets</h2>
      {planets.length > 0 ? (
        planets.map((planet, index) => (
          <div key={index} className="card">
            <h3>{planet.name}</h3>
          </div>
        ))
      ) : (
        <p>Loading planets...</p>
      )}
    </div>
  );
};

export default Planets;
