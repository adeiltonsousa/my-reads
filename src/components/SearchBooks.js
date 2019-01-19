import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BookList from './BookList';
import { Grid, IconButton, TextField } from '@material-ui/core';
import BackIcon from '@material-ui/icons/ArrowBack';
import * as BooksAPI from '../api/BooksAPI';
import PropTypes from 'prop-types';

class SearchBooks extends Component {

    state = {
        query: '',
        books: []
    }

    onQueryChange = (query) => {
        this.setState({ query })
        if(this.timeout) {
            clearTimeout(this.timeout)
        }
        this.timeout = setTimeout(this.getBooks, 300);
    }

    getBooks = () => {
        let { query } = this.state

        if(query.length > 0) {
            BooksAPI.search(query)
            .then(books => {
                if(!books.error) {
                    this.setState({ 
                        books: books.map(book => {
                            return {
                                ...book,
                                shelf: this.getShelf(book)
                            }
                        }) 
                    })
                } else {
                    this.setState({ books: [] })
                }
            })
        } else {
            this.setState({ books: [] })
        }
    }

    getShelf = (book) => {
        let filter = this.props.myBooks.filter(myBook => myBook.id === book.id)
        if(filter.length > 0) {
            return filter[0].shelf
        } else {
            return 'none'
        }
    }

    onChangeShelf = (book, shelf) => {
        this.setState((prevState) => ({
            books: prevState.books.map(prevBook => {
                return {
                    ...prevBook,
                    shelf: prevBook.id === book.id ? shelf : prevBook.shelf
                }
            })
        }))
        this.props.onChangeShelf(book, shelf)
    }

    render() {
        return (
            <Grid item xs={12}>
                <div className="search-books-bar">
                    <IconButton 
                        aria-label="Close"
                        component={Link}
                        to='/'
                    >
                        <BackIcon />
                    </IconButton>
                    <TextField
                        type="text"
                        className='search-books-bar-input'
                        placeholder="Search by title or author"
                        value={this.state.query}
                        onChange={event => this.onQueryChange(event.target.value)}
                    />
                </div>
                <div style={{ marginTop: '40px' }}>
                    <BookList
                        books={this.state.books}
                        onChangeShelf={this.onChangeShelf}
                    />
                </div>
            </Grid>
        )
    }

}

SearchBooks.propTypes = {
    myBooks: PropTypes.array.isRequired,
    onChangeShelf: PropTypes.func.isRequired
}

export default SearchBooks;