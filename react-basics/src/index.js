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
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (
  <img
    src="https://m.media-amazon.com/images/I/8144Vic9C5L._AC_UL320_.jpg"
    alt="Book"
  />
);

const Title = () => {
  return <h1>Love you to the moon and back</h1>;
};

const Author = () => <h4>Amelia Hepworth</h4>;

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<Booklist />);
