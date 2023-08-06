

import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/navbar';
import MovieLists from './Components/sliderCarousel';
import MovieDetails from './Components/details';
import MovieList from './Components/movies';
import Footer from './Components/footer';



function App() {
  return (
    <div className='main'>
      <BrowserRouter>
        <Navbar />
        <MovieLists />
        

        <Routes>
          <Route path='/' element={<MovieList />} />
          <Route path='/movies/:movieId' element={<MovieDetails />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

