import React from 'react'
import './App.css';
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar';
import Home from './components/Home';
import Text from './components/Text';
import Image from './components/Image';
import Summary from './components/Summary';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/text' element={<Text />} />
        <Route exact path='/image' element={<Image />} />
        <Route exact path='/summary' element={<Summary />} />
        <Route exact path='*' element={<Home />} />

      </Routes>


    </div>
  );
}

export default App;
