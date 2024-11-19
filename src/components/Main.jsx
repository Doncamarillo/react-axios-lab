import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import StarshipList from './StarshipList';
import StarshipPage from './StarshipPage';
import Planets from './Planets';
import Films from './Films';
import Characters from './Characters'

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/starships" element={<StarshipList />} />
        <Route path="/starships/:id" element={<StarshipPage />} />
        <Route path="/planets" element={<Planets />} />
        <Route path="/films" element={<Films />} />
        <Route path="/Characters" element={<Characters/>} />
      </Routes>
    </main>
  );
};

export default Main;
