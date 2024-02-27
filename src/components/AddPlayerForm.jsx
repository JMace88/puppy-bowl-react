import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function AddPlayerForm() {
  const [name, setName] = useState('');
  const [breed, setBreed] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  function clearForm() {
    setName('');
    setBreed('');
    setImageUrl('');
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const payload = {
      name,
      breed,
      imageUrl,
    };

    try {
      const { data } = await axios.post(
        'https://fsa-puppy-bowl.herokuapp.com/api/JMace88/players',
        payload
      );
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Puppy's Name:
        <input value={name} onChange={(event) => setName(event.target.value)} />
      </label>
      <label>
        Puppy's Breed:
        <input
          value={breed}
          onChange={(event) => setBreed(event.target.value)}
        />
      </label>
      <label>
        Image URL:
        <input
          value={imageUrl}
          onChange={(event) => setImageUrl(event.target.value)}
        />
      </label>
      <button type= 'submit'>Add Player</button>
    </form>
  );
}

export default AddPlayerForm;
