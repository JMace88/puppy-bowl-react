import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import AddPlayerForm from './components/AddPlayerForm';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import AllPlayers from './components/AllPlayers';

function App() {
  return (
    <>
    
      <Navbar />
      
      <main>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/newplayer' element={<AddPlayerForm />} />
          <Route path='/roster' element={<AllPlayers />} />
          
        </Routes>
      </main>
    </>
  );
}

export default App;
