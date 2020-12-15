import React from 'react';
import './styles/App.scss';
import BookSearch from './book-search/BookSearch';
import SearchResults from './search-results/SearchResults';
import ReadingWishList from './reading-wishlist/ReadingWishlist';

function App() {
  return (
      <div className="main">
        <header className="header">
          <div className="header--content">
            <h1>My Good Reads</h1>
          </div>
        </header>
        <div className="grid-container">
          <div className="book-search"><BookSearch /></div>
          <div className="search-results"><SearchResults /></div>
          <div className="wishlist"><ReadingWishList /></div>
        </div>
      </div>
  );
}

export default App;
