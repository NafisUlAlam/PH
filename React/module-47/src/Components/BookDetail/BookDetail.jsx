import React from "react";
import { useLoaderData, useParams, Link } from "react-router-dom";
import { addToLocalStorage } from "../../Utilities/addToDB";

const BookDetail = () => {
  const { bookId } = useParams();
  const books = useLoaderData();
  const book = books.find((b) => parseInt(bookId) === b.bookId);
  //console.log(book);
  const { bookName, author, image, category, publisher, rating, totalPages } =
    book;

  const handleMarkAsRead = (bookId, str) => {
    addToLocalStorage(bookId, str);
  };
  return (
    <div className="my-12">
      <h2>book details : {bookId}</h2>
      <img src={image} alt="" className="w-36" /> <br />
      <button
        className="btn btn-accent btn-outline"
        onClick={(event) => {
          handleMarkAsRead(bookId, "read");
        }}
      >
        Read
      </button>
      <button
        className="btn btn-accent btn-outline"
        onClick={() => handleMarkAsRead(bookId, "wish")}
      >
        Wishlist
      </button>{" "}
      <br />
      <Link to="/">
        <button className="btn">Go to Home</button>
      </Link>
    </div>
  );
};

export default BookDetail;
