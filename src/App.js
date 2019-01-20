import React, { Component } from 'react';
import ShelfList from './components/ShelfList';
import SearchBooks from './components/SearchBooks';
import * as BooksAPI from './api/BooksAPI';
import { Route } from 'react-router-dom'
import './App.css';

class MyReadApp extends Component {

  state = {
    myBooks: []
  }

  componentDidMount() {
    BooksAPI.getAll()
    .then(myBooks => this.setState({ myBooks }))
  }

  changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf)
    .then(_ => this.setState((prevState) => {
      let bookInMyShelf = prevState.myBooks.find(myBook => myBook.id === book.id);
      if(bookInMyShelf) {
        return {
          myBooks: prevState.myBooks.map(prevBook => {
            return {
              ...prevBook,
              shelf: prevBook.id === book.id ? shelf : prevBook.shelf
            }
          })
        }
      } else {
        return {
          myBooks: [...prevState.myBooks, {...book, shelf}]
        }
      }
    }))
  }

  render() {
    return ( 
      <div>
        <Route exact path='/' render={_ => (
          <ShelfList 
            myBooks={this.state.myBooks} 
            onChangeShelf={this.changeShelf}
          /> 
        )} />
        <Route exact path='/search' render={_ => (
          <SearchBooks
            myBooks={this.state.myBooks}
            onChangeShelf={this.changeShelf} 
          />
        )} />  
      </div>
      
    );
  }
}

export default MyReadApp;
