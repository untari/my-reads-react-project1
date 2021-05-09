import React, { Component } from 'react';

class BookList extends Component {
    render(){
        const {book, onShelfUpdate} = this.props
        return(
            <div>
                <li className='book'>
                    <div className='book-cover' style={{ width: 100, height: 100, backgroundImage: `url(${bokk.imageLinks ? book.imageLinks.thumbnail})`}}>
                    </div>
                    <div className='book-shelf-changer'>
                        <select value={book.shelf} onChange={e => onShelfUpdate(book, e.target.value)}>
                            <option value='move'>Move to...</option>
                            <option value='currentlyReading'>Currently Reading</option>
                            <option value='wantToRead'>Want To Read</option>
                            <option value='read'>Read</option>
                            <option value='none'>None</option>
                        </select>
                    </div>
                    <div className='book-title'>{book.title ? book.title : ''}</div>
                    <div className='book-authors'>{book.authors ? book.authors(', '): ''}<>
                </li>
            </div>
        );
    }
}

export default BookList;
