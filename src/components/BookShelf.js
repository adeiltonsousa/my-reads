import React from 'react';
import BookList from './BookList';
import { Grid, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';

function BookShelf(props) {
    return (
        <Grid item xs={12}>
            <Typography
                variant="h5"
                color="inherit"
                className='bookshelf-title'
            >
                {props.shelfName}
            </Typography>
            <BookList
                books={props.shelfBooks}
                onChangeShelf={props.onChangeShelf}
            />
        </Grid>
    )
}

BookShelf.propTypes = {
    shelfName: PropTypes.string.isRequired,
    shelfBooks: PropTypes.array.isRequired,
    onChangeShelf: PropTypes.func.isRequired
}

export default BookShelf;