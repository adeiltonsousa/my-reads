import React, { Component } from 'react';
import BookShelf from './BookShelf';
import { Link } from 'react-router-dom';

class ShelfList extends Component {

    render() {
        let { myBooks } = this.props

        let readingBooks = myBooks.filter(book => book.shelf === 'currentlyReading')
        let wnatToReadBooks = myBooks.filter(book => book.shelf === 'wantToRead')
        let readBooks = myBooks.filter(book => book.shelf === 'read')

        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
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
                    </div>
                </div>
                <div className="open-search">
                    <Link to='/search'>Add a book</Link>
                </div>
            </div>
        )
    }

}

export default ShelfList;