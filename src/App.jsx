import { Routes, Route } from 'react-router-dom';
import './App.css';
import AddPlayerForm from './components/AddPlayerForm';
import Navbar from './components/Navbar';
import SinglePlayer from './components/SinglePlayer';
import AllPlayers from './components/AllPlayers';

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Routes>
          {/* <Route path='/' element={<Homepage />} /> */}
          <Route path='/newplayer' element={<AddPlayerForm />} />
          <Route path='/' element={<AllPlayers />} />
          <Route path='/players/:id' element={<SinglePlayer />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
