import React from "react";
import ReactDOM from "react-dom/client";
import Book from "./Book.js";
// importing books data and passing it to Book component as props
// books is array of objects (each object -> contains data about 1 book)
import books from "./data.js";
// css file in src folder
import "./index.css";

export const Booklist = () => {
  return (
    <>
      <h1>Best Selling books</h1>
      <section className="books-container">
        {books.map((book) => {
          return <Book {...book} key={book.id} />;
        })}
      </section>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Booklist />);
