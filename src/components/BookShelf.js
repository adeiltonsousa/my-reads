import React, { Component } from 'react';
import BookList from './BookList';
import { Grid, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';

class BookShelf extends Component {

    render() {
        return (
            <Grid item xs={12}>
                <Typography 
                    variant="h5" 
                    color="inherit"
                    className='bookshelf-title'
                >
                    {this.props.shelfName}
                </Typography>
                <BookList
                    books={this.props.shelfBooks}
                    onChangeShelf={this.props.onChangeShelf}
                />
            </Grid>
        )
    }

}

BookShelf.propTypes = {
    shelfName: PropTypes.string.isRequired,
    shelfBooks: PropTypes.array.isRequired,
    onChangeShelf: PropTypes.func.isRequired
}

export default BookShelf;