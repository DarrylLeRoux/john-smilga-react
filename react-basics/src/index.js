import React from "react";
import ReactDom from "react-dom/client";

import "./index.css";

// Setup variables
const books = [
  {
    id: 1,
    author: "Amelia Hepworth",
    title: "I Love You to the Moon and Back",
    img: "https://m.media-amazon.com/images/I/8144Vic9C5L._AC_UL320_.jpg",
  },

  {
    id: 2,
    author: "Shannon Olsen",
    title: "Our Class is a Family",
    img: "https://m.media-amazon.com/images/I/71aLultW5EL._AC_UL320_.jpg",
  },
  {
    id: 3,
    author: "Emily Winfield Martin",
    title: "The Wonderful Things you Will be",
    img: "https://m.media-amazon.com/images/I/91HHxxtA1wL._AC_UL320_.jpg",
  },
];

function Booklist() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} {...book} />;
      })}
    </section>
  );
}

const Book = ({ img, author, title }) => {
  // onClick
  const clickHandler = () => {
    console.log("Added to cart");
  };

  // props destructuring
  // each book mapped over has an object of book containing the keys - so you need to destructure that object
  // const { img, title, author } = props;
  return (
    <article
      className="book"
      // onMouseOver
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img src={img} alt="book" />
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>
        Add to Cart
      </button>
    </article>
  );
};

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<Booklist />);
