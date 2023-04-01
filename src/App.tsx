import './App.css'
import {BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import { HomeScreen } from './pages/homescreen';
import { MoviesScreen } from './pages/moviesScreen';
import { TvScreen } from './pages/tvscreen';
import { Details } from './pages/details';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={ <HomeScreen/>}/>
        <Route path="/movies" element={ <MoviesScreen/>}/>
        <Route path="/tv" element={ <TvScreen/>}/>
        <Route path="/movies/details/:type/:id" element={ <Details/>}/>
      </Routes>
    </Router>
  )
}

export default App
