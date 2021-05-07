import React, { Component } from 'react';
import * as BooksAPI from "./BooksAPI";
import { Link } from 'react-router-dom';
import './App.css';

class Shelf extends Component {
    state = {
        listBooks:[]
    }
    componentDidMount(){
        BooksAPI.getAll()
        .then(books => {
            this.setState({ listBooks: books})
        })
    }
    onShelfUpdate = (book, bookShelf) => {
        const { listBooks } = this.state
        const updateIndex = listBooks.findIndex(b => b.id === book.id)
        const updateBook = listBooks[updateIndex]
        updateBook.shelf = bookShelf
        
        this.setState({
            listBooks: [...listBooks.slice(0, updateIndex), updateBooks, ...allBooks.slice(updateIndex + 1)]
        })
        BooksAPI.update(book, bookShelf)
    }
    render() {
        const { listBooks } = this.state
        const shelfBooks = [
            {
                name: 'Read',
                books: listBooks.filter(book => book.shelf === 'read')
            },
            {
                name: 'Currently Reading',
                books: listBooks.filter(book => book.shelf === 'currentlyReading')
            },
            {
                name: 'Wanr To Read',
                books: listBooks.filter(book => book.shelf === 'wantToRead')
            }
        ]
        return(
            <div className="list-books">
                <div className="list-books-title">
                <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                <div>
                    {shelfBooks && shelfBooks.map((shelf, index) => (
                        <ShelfBooks 
                            key={index}
                            title={shelf.name}
                            books={shelf.books}
                            onShelfUpdate={this.onShelfUpdate}
                        />
                    ))}
                </div>
             </div>
            </div>
        );
    }
}
export default Shelf;
