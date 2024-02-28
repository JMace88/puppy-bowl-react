import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function AddPlayerForm() {
  const [name, setName] = useState('');
  const [breed, setBreed] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const navigate = useNavigate();

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
      clearForm();
      navigate('/')
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className='formBox'>
      <form onSubmit={handleSubmit}>
        <label>
          Puppy's Name:
          <input
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="enter they puppy player's name"
          />
        </label>
        <label>
          Puppy's Breed:
          <input
            value={breed}
            onChange={(event) => setBreed(event.target.value)}
            placeholder="enter the puppy's breed or 'Mixed' if unknown"
          />
        </label>
        <label>
          Puppy's Selfie:
          <input
            value={imageUrl}
            onChange={(event) => setImageUrl(event.target.value)}
            placeholder="enter the URL to your puppy's image here"
          />
        </label>
        <button type='submit'>Add Player</button>
      </form>
    </div>
  );
}

export default AddPlayerForm;
