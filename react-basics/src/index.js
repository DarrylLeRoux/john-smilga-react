import React from "react";
import ReactDom from "react-dom/client";

import "./index.css";

// Setup variables
const author = "Amelia Hepworth";
const title = "Love you to the moon and back";
const img = "https://m.media-amazon.com/images/I/8144Vic9C5L._AC_UL320_.jpg";

function Booklist() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
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
