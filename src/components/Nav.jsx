import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/starships">Starships</Link>
      <Link to="/films">Films</Link>
      <Link to="/planets">Planets</Link>
      <Link to="/Characters">Characters</Link>
    </nav>
  );
};

export default Nav;
