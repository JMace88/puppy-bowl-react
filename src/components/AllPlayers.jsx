import axios from 'axios';
import { useState, useEffect } from 'react';
import { deletePlayer, getAllPlayers } from '../API';
import { useNavigate } from 'react-router-dom';
function AllPlayers() {
  const [players, setPlayers] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    async function fetchPlayers() {
      try {
        const players = await getAllPlayers();
        setPlayers(players);
      } catch (error) {
        console.error(error);
      }
    }
    fetchPlayers();
  }, []);
  console.log(players);

  async function deleteHandler(playerId) {
    await deletePlayer(playerId);
  }

  if (players.length === 0) {
    return <h1>Loading players . . .</h1>;
  }
  return (
    <section className='all-players'>
      {players.map((player) => (
        <div key={player.id} className='player-card'>
          <img src={`${player.imageUrl}`} alt='' />
          <h2>{`${player.name}`}</h2>
          <button onClick={() => navigate(`/players/${player.id}`)}>
            Player Details
          </button>
          <button onClick={() => deleteHandler(id)}>Remove Player</button>
        </div>
      ))}
    </section>
  );
}

export default AllPlayers;
