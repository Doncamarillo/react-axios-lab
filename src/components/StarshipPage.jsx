import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const StarshipPage = () => {
  const [starship, setStarship] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const getStarship = async () => {
      try {
        const response = await axios.get('https://swapi.dev/api/starships/');
        setStarship(response.data.results[id]);
      } catch (error) {
        console.error('Error fetching starship:', error);
      }
    };
    getStarship();
  }, [id]);

  return starship ? (
    <div className="detail">
      <h2>Name: {starship.name}</h2>
      <p>Model: {starship.model}</p>
      <p>Manufacturer: {starship.manufacturer}</p>
      <p>Cost in Credits: {starship.cost_in_credits}</p>
      <p>Length: {starship.length}</p>
      <Link to="/starships">Return to Starship List</Link>
    </div>
  ) : (
    <h3>Loading starship...</h3>
  );
};

export default StarshipPage;
