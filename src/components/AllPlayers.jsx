import { useState, useEffect } from 'react';
import { getAllPlayers } from '../API';
import { useNavigate } from 'react-router-dom';

function AllPlayers() {
  const [players, setPlayers] = useState([]);
  const [searchInput, setSearchInput] = useState('');
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
  // console.log(players);

  function searchHandler(event) {
    event.preventDefault();
    setSearchInput(event.target.value);
  }
  let filteredPlayers = players;
  if (searchInput !== '') {
    filteredPlayers = players.filter((player) => {
      const lowerCasePlayerName = player.name.toLowerCase();
      const lowerCaseSearch = searchInput.toLowerCase();
      return lowerCasePlayerName.includes(lowerCaseSearch);
    });
  }

  if (players.length === 0) {
    return <h1>Loading players . . .</h1>;
  }
  return (
    <>
      <label> Puppy Search
        <input id='search-bar' placeholder="type a puppy's name here . . ." value={searchInput} onChange={searchHandler} />
      </label>
      <section className='all-players'>
        {filteredPlayers.map((player) => (
          <div key={player.id} className='player-card'>
            <img src={player.imageUrl} alt='' />
            <h2>{player.name}</h2>
            <button onClick={() => navigate(`/players/${player.id}`)}>
              Player Details
            </button>
          </div>
        ))}
      </section>
    </>
  );
}

export default AllPlayers;
