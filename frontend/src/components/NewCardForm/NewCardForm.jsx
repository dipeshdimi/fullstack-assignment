import { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import './NewCardForm.css';

const NewCardForm = ({ onCardAdded }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newCard = { title, description };
    try {
      const response = await axios.post('http://localhost:5000/cards', newCard);
      onCardAdded(response.data);
      setTitle('');
      setDescription('');
    } catch (error) {
      console.error('Error creating card:', error);
    }
  };

  return (
    <form className="new-card-form" onSubmit={handleSubmit}>
      <h2>Create New Card</h2>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <button type="submit">Create Card</button>
    </form>
  );
};

NewCardForm.propTypes = {
  onCardAdded: PropTypes.func.isRequired,
};

export default NewCardForm;
