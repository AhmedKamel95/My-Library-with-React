import React from "react";

const RemoveBook = ({ books, removeBook }) => {
  const bookList = books.length ? (
    books.map(book => {
      return (
        <div className="collection-item" key={book.id}>
          <span>{book.title} </span>
          <button
            onClick={() => {
              removeBook(book.id);
            }}
          >
            X
          </button>
        </div>
      );
    })
  ) : (
    <p className="center"> Book List is Empty </p>
  );

  return <div className="book collection">{bookList}</div>;
};

export default RemoveBook;
