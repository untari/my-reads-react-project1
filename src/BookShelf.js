import React, { Component } from 'react';
import RenderBooks from "./RenderBooks";
import { Link } from 'react-router-dom';
import './App.css';

class BookShelf extends Component {
    render() {
        const { state, update } = this.props;
        let booksReading = state.books.filter(book => book.shelf === 'curentlyReading');
        let bookWantToRead = state.books.filter(
            book => book.shelf === 'wantToRead'
        );
        let booksRead = state.books.filter(book => book.shelf === 'read');
        return(
            <div className="list-books">
                <div className="list-books-title">
                <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                <div>
                    {booksReading.length > 0 && (
                        <div className="bookshelf">
                        <h2 className="bookshelf-title">Currently Reading</h2>
                        <div className="bookshelf-books">
                            <RenderBooks books={booksReading} onChange={update} />
                        </div>
                      </div>
                    )}
                </div>
                <div>
                    {booksWantToRead.length > 0 &&(
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Want to Read</h2>
                            <div className="bookshelf-books">
                            <RenderBooks books={booksWantToRead}            onChange={update} />
                        </div>
                     </div>
                    )}
                </div>
             </div>
            </div>
        );
    }
}
export default BookShelf;
