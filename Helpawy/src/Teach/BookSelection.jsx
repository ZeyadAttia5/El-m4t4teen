// BookSelection.js

import React from 'react';
import './BookSelection.css';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const books = [
  { id: 1, name: 'Physics Book', author: 'John Doe', edition: '2nd Edition', summary: 'A comprehensive guide to physics.' },
  { id: 2, name: 'Programming Book', author: 'Jane Smith', edition: '1st Edition', summary: 'Learn programming languages.' },
  { id: 3, name: 'IT Book', author: 'Michael Johnson', edition: '3rd Edition', summary: 'Information technology essentials.' },
];



const BookSelection = () => {
  return (
    <div className="books-container">
      <h1 className="heading">
      <Link to="/teacher-dashboard" className="back-arroww" id = "LinkArrow"><FaArrowLeft /></Link> Books </h1>
      <ul className="books-list">
        {books.map(book => (
          <li key={book.id}>

           <Link to={`/books/${book.id}`} className="book-link">{book.name}</Link>
          
           
          </li>
        ))}
      </ul>
   

    </div>
  );
}

export default BookSelection;
