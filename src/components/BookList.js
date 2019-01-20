import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import PropTypes from 'prop-types'
import BookDetail from './BookDetails';

class BookList extends Component {

    state = {
        selectedBook: null
    }

    setSelectedBook = (book) => {
        this.setState({ selectedBook: book })
    }

    render() {
        return (
            <Grid item xs={12} className='books-grid'>
                {this.props.books.map(book => (
                    <div key={book.id}>
                        <div className="book">
                            <div className="book-top">
                                <div
                                    onClick={_ => this.setSelectedBook(book)}
                                    className="book-cover"
                                    style={{
                                        width: 128,
                                        height: 193,
                                        backgroundImage: `url("${book.imageLinks ? book.imageLinks.thumbnail : ''}")`
                                    }}
                                ></div>
                                <div className="book-shelf-changer">
                                    <select
                                        value={book.shelf}
                                        onChange={event => this.props.onChangeShelf(book, event.target.value)}
                                    >
                                        <option value="move" disabled>Move to...</option>
                                        <option value="currentlyReading">Currently Reading</option>
                                        <option value="wantToRead">Want to Read</option>
                                        <option value="read">Read</option>
                                        <option value="none">None</option>
                                    </select>
                                </div>
                            </div>
                            <div className="book-title">{book.title}</div>
                            <div className="book-authors">{book.authors ? book.authors.join(', ') : ''}</div>
                        </div>
                    </div>
                ))}
                <BookDetail 
                    book={this.state.selectedBook} 
                    onClose={_ => this.setSelectedBook(null)}
                />
            </Grid>
        )
    }

}

BookList.propTypes = {
    books: PropTypes.array.isRequired,
    onChangeShelf: PropTypes.func.isRequired
}

export default BookList