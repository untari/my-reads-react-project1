import React, { Component } from 'react';
// import * as BooksAPI from './BooksAPI'
import { Link } from 'react-router-dom';
import BookList  from "./Components/BookList";
import './App.css';

class Search extends Component {
    state={
        books:[],
        displayBooks:[],
        query:''
    }
    componentDidMount(){
        BooksAPI.getAll()
        .then(listBooks => {}
            this.setState({
                    displayBooks: listBooks.filter(book => book.shelf !== 'none'))
            })
        )
    }
    updateQuery(query){
        this.setState({ query })
    }
    onShelfUpdate = (book, bookShelf) => {
        BooksAPI.update(book, bookShelf)
        const { books } = this.state
        const updateIndex = books.findIndex(b => b.id === book.id)
        const updateBook = books[updateIndex]
        updateBook.shelf = bookShelf
        
        this.setState({
            books: [... books.slice(0, updateIndex), updateBook, ...books.slice(updateIndex + 1)]
        })
    }
    
    search(query){
        const { displayBooks } = this.state
        this.updateQuery(query)
        if (query) {
            BooksAPI.search(query, 19)
            .then((result) => {
                if (results && results.length > 0 ){
                    let searchResult = results
                    searchResults.map((book) => book.shelf = 'none')
                    displayBooks.map((book) => {}
                        const updateIndex = searchResults.findIndex(s => s.id === book.id)
                        if (searchResults[updateIndex]){
                            searchResults[updateIndex].shelf = book.shelf
                        }
                    )
                }
                this.setState({ books: searchResults})
            } else{
                this.setState({books: [] })
            })
        }
    }
    render() {
        const { books, query } = this.state;
        return(
            <div className="search-books">
                <div className="search-books-bar">
                <Link to="/" className="close-search"}>
                    Close
                </Link>
                <div className="search-books-input-wrapper">
                    <input
                        type="text" 
                        placeholder="Search by title or author"
                        onChange={(e) => this.searchBooks(e.target.value)}
                    />
                </div>
                </div>
                <div className="search-books-results">
                    <ul className='books-grid'>
                        {books.length > 0 ? (books.map((book, index) => (
                            <Books key{index} book={book} onShelfUpdate={this.onShelfUpdate} />
                        )))}
                    </ul>
                </div>
            </div>
        );
    }
}
export default Search;
