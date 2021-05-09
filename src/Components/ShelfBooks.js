import React, { Component } from 'react';
import Books from './Book';

class ShelfBooks extendes Component {
    render(){
        const {title, books, onShelfUpdate = this.props}
        return(
            <div className='bookshelf'>
                <div className='bookshelf-title'>
                  <div className='bookshelf-books'>
                    <ul className='books-grid'>
                        {books.length > 0 ? (books.map((book, index) => (
                            <BookList key={index}
                                book={book}
                                onShelfUpdate={onShelfUpdate} />
                        )))}
                    </ul>
                  </div>  
                </div>
            </div>
        )
    }
}
export default ShelfBooks;
