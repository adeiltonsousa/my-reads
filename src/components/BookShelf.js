import React, { Component } from 'react';
import BookList from './BookList';

class BookShelf extends Component {

    render() {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.shelfName}</h2>
                <div className="bookshelf-books">
                    <BookList 
                        books={this.props.shelfBooks} 
                        onChangeShelf={this.props.onChangeShelf} 
                    />
                </div>
            </div>
        )
    }

}

export default BookShelf;