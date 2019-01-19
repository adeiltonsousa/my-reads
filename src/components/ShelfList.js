import React, { Component } from 'react';
import BookShelf from './BookShelf';
import { Link } from 'react-router-dom';
import { Grid, AppBar, Toolbar, Typography, Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import PropTypes from 'prop-types';

class ShelfList extends Component {

    render() {
        let { myBooks } = this.props

        let readingBooks = myBooks.filter(book => book.shelf === 'currentlyReading')
        let wnatToReadBooks = myBooks.filter(book => book.shelf === 'wantToRead')
        let readBooks = myBooks.filter(book => book.shelf === 'read')

        return (
            <Grid item xs={12}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h4" color="inherit">
                            MyReads
                        </Typography>
                    </Toolbar>
                </AppBar>
                <BookShelf
                    shelfName='Currently Reading'
                    shelfBooks={readingBooks}
                    onChangeShelf={this.props.onChangeShelf}
                />
                <BookShelf
                    shelfName='Want to Read'
                    shelfBooks={wnatToReadBooks}
                    onChangeShelf={this.props.onChangeShelf}
                />
                <BookShelf
                    shelfName='Read'
                    shelfBooks={readBooks}
                    onChangeShelf={this.props.onChangeShelf}
                />
                <Fab 
                    color="primary" 
                    className='open-search'
                    aria-label="Add"
                    component={Link}
                    to='/search'
                >
                    <AddIcon />
                </Fab>
           </Grid>
        )
    }

}

ShelfList.propTypes = {
    myBooks: PropTypes.array.isRequired,
    onChangeShelf: PropTypes.func.isRequired
}

export default ShelfList;