import { useState, useEffect } from 'react';
import { deletePlayer, getSinglePlayer } from '../API';
import { useNavigate, useParams } from 'react-router-dom';

function SinglePlayer() {
  const [player, setPlayer] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchPlayer() {
      try {
        const player = await getSinglePlayer(id);
        setPlayer(player);
      } catch (error) {
        console.error(error);
      }
    }
    fetchPlayer();
  }, []);
  console.log(player);

  async function deleteHandler(playerId) {
    await deletePlayer(playerId);
    navigate('/');
  }

  function backHome() {
    navigate('/');
  }

  if (!player) {
    return <h1>Loading player {id}. . .</h1>;
  }
  return (
    <section className='all-players'>
      <div key={player.id} className='player-card'>
        <img src={player.imageUrl} alt='' />
        <h2>{player.name}</h2>
        <h3>Breed: {player.breed}</h3>
        <h3>Status: {player.status}</h3>
        <p>Created at: {new Date(player.createdAt).toLocaleString()}</p>
        <p>Updated at: {new Date(player.updatedAt).toLocaleString()}</p>
        <p>Team Id: {player.teamId}</p>
        <p>Cohort Id: {player.cohortId}</p>
        <button onClick={backHome}>Return to Roster</button>
        <button
          onClick={() => {
            if (confirm('Do you want to remove this player?')) {
              deleteHandler(player.id);
            } else {
              return false;
            }
          }}
        >
          Remove Player
        </button>
      </div>
    </section>
  );
}

export default SinglePlayer;
