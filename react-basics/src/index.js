import React from "react";
import ReactDom from "react-dom/client";

import "./index.css";

// Setup variables
const firstBook = {
  author: "Amelia Hepworth",
  title: "I Love You to the Moon and Back",
  img: "https://m.media-amazon.com/images/I/8144Vic9C5L._AC_UL320_.jpg",
};

const secondBook = {
  author: "Shannon Olsen",
  title: "Our Class is a Family",
  img: "https://m.media-amazon.com/images/I/71aLultW5EL._AC_UL320_.jpg",
};

function Booklist() {
  return (
    <section className="booklist">
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit enim
          dolorem reiciendis accusantium molestiae voluptatibus, eligendi
          recusandae veritatis deserunt dolores.
        </p>
      </Book>
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  );
}

const Book = (props) => {
  // props destructuring
  const { img, title, author } = props;
  return (
    <article className="book">
      <img src={img} alt="book" />
      <h1>{title}</h1>
      <h4>{author}</h4>
      {props.children}
    </article>
  );
};

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<Booklist />);
