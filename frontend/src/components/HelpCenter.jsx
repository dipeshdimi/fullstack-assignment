import { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';
import SearchBar from './SearchBar';
import './HelpCenter.css';

const HelpCenter = () => {
  const [cards, setCards] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchCards = async () => {
      const response = await axios.get('http://localhost:5000/cards');
      setCards(response.data);
    };
    fetchCards();
  }, []);

  const filteredCards = cards.filter(card =>
    card.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="cards-container">
        {filteredCards.map((card) => (
          <Card key={card._id} title={card.title} description={card.description} />
        ))}
      </div>
    </div>
  );
};

export default HelpCenter;
