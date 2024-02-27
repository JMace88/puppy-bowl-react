import axios from 'axios';
import { useState, useEffect } from 'react';

function AllPlayers() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    async function fetchPlayers() {
      try {
        const { data } = await axios.get(
          'https://fsa-puppy-bowl.herokuapp.com/api/JMace88/players'
        );
        setPlayers(data.data.players);
      } catch (error) {
        console.error(error);
      }
    }
    fetchPlayers();
  }, []);
  console.log(players);

  if (players.length === 0) {
    return <h1>Loading players . . .</h1>;
  }
  return (
    <section className='all-players'>
      {players.map((player) => (
        <div key={player.id} className='player-card'>
          <img src={`${player.imageUrl}`} alt='' />
          <h2>{`${player.name}`}</h2>
          <button>Player Details</button>
          <button>Remove Player</button>
        </div>
      ))}
    </section>
  );
}

export default AllPlayers;
