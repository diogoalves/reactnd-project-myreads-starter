import React from 'react';
import { Link } from 'react-router-dom';
import Bookshelf from './Bookshelf';

const ListBooks = ({books}) => (
  <div className="list-books">
  {console.log(books)}
    <div className="list-books-title">
      <h1>MyReads</h1>
    </div>
    <div className="list-books-content">
      <div>
        <Bookshelf 
          title='Currently Reading'
          filter='currentlyReading'
          books={books}
        />
        <Bookshelf 
          title='Want to Read'
          filter='wantToRead'
          books={books}
        />
        <Bookshelf 
          title='Read'
          filter='read'
          books={books}
        />        
      </div>
    </div>
    <div className="open-search">
      <Link to='/search'>Add a book</Link>
    </div>
  </div>
);

export default ListBooks;