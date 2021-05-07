import React from 'react'
// import * as BooksAPI from './BooksAPI'
import { Route } from 'react-router-dom';
import BookShelf from './BookShelf';
import BookShelf from './SearchPage';
import './App.css'

class BooksApp extends React.Component {

  render() {
    return (
      <div className="app">
        <Route exact path='/' component={BookShelf} />
        <Route exact path='/search' component={SearchPage} />
      </div>
    )
  }
}

export default BooksApp
