import React, { Component } from 'react';
// import * as BooksAPI from './BooksAPI'
import { Link } from 'react-router-dom';
import Results from "./Results";
import './App.css';

class Search extends Component {
    clearQueryInput() {
        this.setState({
            query: ''
        });
    }
    render() {
        const { state, update, search } = this.props;
        return(
            <div className="search-books">
                <div className="search-books-bar">
                <Link to="/" className="close-search" onClick={this.clearQueryInput}>
                    Close
                </Link>
                <div className="search-books-input-wrapper">
                    <input
                        type="text" 
                        placeholder="Search by title or author"
                        value={state.query}
                        onChange={event => search(event.target.value)}
                    />
                </div>
                </div>
                <div className="search-books-results">
                <Results books={state.books}
                    results={state.results}
                    query={state.query}
                    onChange={update}
                </div>
            </div>
        );
    }
}
export default Search;
