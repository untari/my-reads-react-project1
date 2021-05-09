import React, { Component } from 'react';

class ShelfBooks extendes Component {
    render(){
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
