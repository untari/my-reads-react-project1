import React, { Component } from 'react';

class SearchResult extends Component {
    render(){
        const { books, results, query, onChange } = this.props;
            let displayResults = [];

            if (results.length > 0 && query !== "") {
            results.forEach(result => {
                const matchBook = books.filter(book => book.id === result.id);
                if (matchBook.length > 0) {
                displayResults.push(...matchBook);
                } else {
                displayResults.push(result);
                }
            });
        }
        return(
            <ol className="books-grid">
                {displayResults.map(eachBook => (
                <li key={eachBook.id}>
                    <div className="book">
                    <div className="book-top">
                    {eachBook.imageLinks && (
                        <img
                            src={eachBook.imageLinks.thumbnail}
                            className="book-cover"
                            style={{ width: 128 }}
                        />
                        )}
                        <div
                        className="book-cover"
                        style={{
                            width: 128,
                            backgroundImage: `${eachBook.imageLinks.thumbnail}`
                        }}
                        />
                        <div className="book-shelf-changer">
                        <select 
                            id={eachBook.id}
                            value={eachBook.shelf ? eachBook.shelf : 'none'
                            onChange={e => update(eachBook, e.target.value)}
                            }
                        >
                            <option value="move" disabled>
                            Move to...
                            </option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                        </div>
                    </div>
                    <div className="book-title">{eachBook.title}</div>
                    {eachBook.authors && eachBook.authors.map(author =>(
                        <div className="book-authors" key={author}>{author}</div>
                    ))}
                    </div>
                </li>
                ))}
            </ol>
        );
    }
}
export default SearchResult;
