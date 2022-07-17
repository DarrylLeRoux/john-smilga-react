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
  return (
    <article className="book">
      <img
        src="https://m.media-amazon.com/images/I/8144Vic9C5L._AC_UL320_.jpg"
        alt="Book"
      />
      <h1>Love you to the moon and back</h1>
      <h4>Amelia Hepworth</h4>
    </article>
  );
};

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<Booklist />);
