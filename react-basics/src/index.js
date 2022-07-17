import React from "react";
import ReactDom from "react-dom/client";

import "./index.css";

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
  const author = "Amelia Hepworth";
  const title = "Love you to the moon and back";
  return (
    <article className="book">
      <img
        src="https://m.media-amazon.com/images/I/8144Vic9C5L._AC_UL320_.jpg"
        alt="Book"
      />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<Booklist />);
