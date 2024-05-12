import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './BookDetails.css';
import physicsbook from './assets/Physicsbookimage.jpg';
import programmingbook from './assets/ProgrammingBookimage.png';
import itbook from './assets/Informationtechnologybookimage.jpg';

const BookDetails = () => {
  const { id } = useParams();
  const [books, setBooks] = useState([
    { id: 1, name: 'Physics Book', author: 'John Doe', edition: '2nd Edition', summary: 'A comprehensive guide to physics.', quantity: 3, image: physicsbook },
    { id: 2, name: 'Programming Book', author: 'Jane Smith', edition: '1st Edition', summary: 'Learn programming languages.', quantity: 5, image: programmingbook },
    { id: 3, name: 'IT Book', author: 'Michael Johnson', edition: '3rd Edition', summary: 'Information technology essentials.', quantity: 7, image: itbook },
  ]);
  const book = books.find(book => book.id === parseInt(id));
  const [quantity, setQuantity] = useState(1);
  const [selectedQuantity, setSelectedQuantity] = useState(null);
  const [processing, setProcessing] = useState(false);
  const [accepted, setAccepted] = useState(false);

  const handleQuantityChange = (e) => {
    setQuantity(parseInt(e.target.value));
  };

  const handleAcceptClick = () => {
    setProcessing(true);
    setTimeout(() => {
      setProcessing(false);
      setAccepted(true);
      const updatedQuantity = book.quantity - quantity;
      const updatedBook = { ...book, quantity: updatedQuantity };
      const bookIndex = books.findIndex(b => b.id === book.id);
      const updatedBooks = [...books];
      updatedBooks[bookIndex] = updatedBook;
      setBooks(updatedBooks);
      setSelectedQuantity(quantity);
    }, 1500);
  };

  return (
    <div className="book-details-container">
      <h2>{book.name}</h2>
      <img src={book.image} alt={book.name} className="book-image" />
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Edition:</strong> {book.edition}</p>
      <p><strong>Summary:</strong> {book.summary}</p>
      <p><strong>Quantity required:</strong> {book.quantity}</p>
      <label htmlFor="quantity" id='lastelement'>Quantity:</label>
      <input type="number" id="quantity" min = "0" max = {book.quantity} value={quantity} onChange={handleQuantityChange} />
      <button onClick={handleAcceptClick} id='button2' disabled={processing || accepted}>
        {processing ? 'Processing...' : accepted ? 'Donated' : 'Donate'}
      </button>
      {selectedQuantity !== null && <p className="selected-quantity">{selectedQuantity} Books Donated</p>}
    </div>
  );
};

export default BookDetails;
