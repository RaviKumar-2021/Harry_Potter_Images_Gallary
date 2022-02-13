import logo from './logo.svg';
import './App.css';
import Navbar from './NaviGationBar/Navbar';
import Banner from './Banner/Banner';
import Featured from './Featured/Featured';
import FanFavorites from './Fan Favourites/FanFavorites';
import BornToday from './Born Today/BornToday';
import MoviesList from './MoviesList/MoviesList';

function App() {
  return (
    <div className="App">
 <Navbar />
<Banner />
 <Featured />
<FanFavorites />
 <BornToday />
<MoviesList />

    </div>
  );
}

export default App;
