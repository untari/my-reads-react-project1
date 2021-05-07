import React from 'react'
import { Route } from 'react-router-dom';
import Shelf from './Shelf';
import Search from './Search';
import * as BooksAPI from "./BooksAPI";
import './App.css'

class BooksApp extends React.Component {
    state = {
        query: '',
        results: [],
        books: []
    }
    componentDidMount() {
        BooksAPI.getAll()
        .then(data => {
            this.setState({ books: data });
        });
    }
    searchBooks = query => {
        this.setState({ query: query });
        if(query.length >0){
            BooksAPI.search(query)
            .then(data => {
                this.seState({
                    results: data
                });
            });
        } else{
            while (this.state.results.length > 0){
                this.state.results.pop();
            }
            this.setState(() => ({ query: ''}));
        }
    };
    updateShelf = (book, shelf) => {
        BooksAPI.update(book, shelf)
        .then(() => {
            this.setState(prevState.books.filter(b => {
                if (b.id === book.id) {
                    return(book.shelf = shelf);
                } else {
                    return book;
                }
            }));
        });
    };
  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => ( 
            <Shelf state={this.state} update={this.updateShelf} />)}
        />
        <Route path='/search' render={() => (
            <Search state={this.state} update={this.updateShelf} search={this.searchBooks} />
        )} />
      </div>
    );
  }
}

export default BooksApp;
