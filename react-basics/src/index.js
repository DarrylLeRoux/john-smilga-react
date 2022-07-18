import React from "react";
import ReactDom from "react-dom/client";

import "./index.css";

// Setup variables
const books = [
  {
    author: "Amelia Hepworth",
    title: "I Love You to the Moon and Back",
    img: "https://m.media-amazon.com/images/I/8144Vic9C5L._AC_UL320_.jpg",
  },

  {
    author: "Shannon Olsen",
    title: "Our Class is a Family",
    img: "https://m.media-amazon.com/images/I/71aLultW5EL._AC_UL320_.jpg",
  },
  {
    author: "Emily Winfield Martin",
    title: "The Wonderful Things you Will be",
    img: "https://m.media-amazon.com/images/I/91HHxxtA1wL._AC_UL320_.jpg",
  },
];

function Booklist() {
  return (
    <section className="booklist">
      {books.map((book) => {
        const { img, title, author } = book;
        return <Book book={book}></Book>;
      })}
    </section>
  );
}

const Book = (props) => {
  // props destructuring
  const { img, title, author } = props.book;
  return (
    <article className="book">
      <img src={img} alt="book" />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<Booklist />);
