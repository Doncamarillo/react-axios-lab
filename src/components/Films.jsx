import { useState, useEffect } from 'react';
import axios from 'axios';

const Films = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    const getFilms = async () => {
      try {
        const response = await axios.get('https://swapi.dev/api/films/');
        setFilms(response.data.results);
      } catch (error) {
        console.error('Error fetching films:', error);
      }
    };
    getFilms();
  }, []);

  return (
    <div className="films">
      <h2>List of Films</h2>
      {films.length > 0 ? (
        films.map((film, index) => (
          <div key={index} className="card">
            <h3>{film.title}</h3>
            <p>Director: {film.director}</p>
            <p>Release Date: {film.release_date}</p>
          </div>
        ))
      ) : (
        <p>Loading films...</p>
      )}
    </div>
  );
};

export default Films;
