import React from "react";
import ReactDom from "react-dom/client";

function Booklist() {
  return (
    <section>
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article>
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => {
  <img
    src="https://m.media-amazon.com/images/I/8144Vic9C5L._AC_UY218_.jpg"
    alt=""
  />;
};

const Title = () => {
  return <h1>Love you to the moon and back</h1>;
};

const Author = () => <h4>Amelia Hepworth</h4>;

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<Booklist />);
