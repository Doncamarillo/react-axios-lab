import { useState, useEffect } from "react";
import axios from "axios";

function Characters() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const getCharacters = async () => {
      const response = await axios.get("https://swapi.dev/api/people/");
      setCharacters(response.data.results);
    };
    getCharacters();
  }, []);

  return (
    <div>
      <h2>Characters</h2>
      {characters.map((character, index) => (
        <div key={index}>
          <h3>{character.name}</h3>
          <p>Gender: {character.gender}</p>
        </div>
      ))}
    </div>
  );
}

export default Characters;
