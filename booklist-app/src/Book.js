import React from "react";

const Book = (props) => {
  // destructing the props object to directly use the properties
  const { img, title, author, key } = props;
  return (
    <article className="book" key={key}>
      <img src={img} alt="" />
      <h3>{title}</h3>
      <p>{author}</p>
    </article>
  );
};
export default Book;
