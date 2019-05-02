import React, { Component } from "react";
import RemoveBook from "./RemoveBook";
import AddBook from "./AddBook";

class App extends Component {
  state = {
    books: [
      { id: 1, title: "In Search of Lost Time" },
      { id: 2, title: "Don Quixote" },
      { id: 3, title: "Ulysses" },
      { id: 4, title: "The Great Gatsby" },
      { id: 5, title: "Hamlet" },
      { id: 6, title: "War and Peace" },
      { id: 7, title: "The Odyssey" },
      { id: 8, title: "One Hundred Years of Solitude" },
      { id: 9, title: "The Divine Comedy" },
      { id: 10, title: "The Brothers Karamazov" }
    ]
  };

  removeBook = id => {
    const books = this.state.books.filter(book => {
      return book.id !== id;
    });
    this.setState({
      books: books
    });
  };

  addBook = book => {
    book.id = Math.random();
    let books = [...this.state.books, book];
    this.setState({
      books: books
    });
  };

  render() {
    return (
      <div className="book-app container">
        <h1 className="center blue-text">My Books List</h1>
        <RemoveBook books={this.state.books} removeBook={this.removeBook} />
        <AddBook addBook={this.addBook} />
        <label>
          Total number of books: <span>{this.state.books.length}</span>
        </label>
      </div>
    );
  }
}

export default App;
