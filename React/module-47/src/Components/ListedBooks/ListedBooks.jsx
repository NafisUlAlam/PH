import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getLocalStorage } from "../../Utilities/addToDB";
import Book from "../Book/Book";
const ListedBooks = () => {
  const allBooks = useLoaderData();

  const [readBooks, setReadBooks] = useState([]);
  useEffect(() => {
    const myArray = getLocalStorage("read");
    const myArrayInt = myArray.map((item) => parseInt(item));

    const myBookList = allBooks.filter((book) =>
      myArrayInt.includes(book.bookId)
    );
    setReadBooks(myBookList);
  }, []);

  const [wishBooks, setWishBooks] = useState([]);
  useEffect(() => {
    const myBooks = getLocalStorage("wish");
    const myBooksInt = myBooks.map((item) => parseInt(item));
    const myWishList = allBooks.filter((book) =>
      myBooksInt.includes(book.bookId)
    );
    setWishBooks(myWishList);
  }, []);

  const [sort, setSort] = useState("");
  const handleSort = (str) => {
    setSort(str);
    console.log("clik");
    const sortedBooks = [...readBooks].sort((a, b) => a.rating - b.rating);
    setReadBooks(sortedBooks);
  };
  return (
    <div>
      <h2>Listed Books</h2>
      <div className="dropdown dropdown-bottom">
        <div tabIndex={0} role="button" className="btn m-1">
          {sort ? `Sort by: ${sort}` : "Sort by"}
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
        >
          <li onClick={() => handleSort("No of Pages")}>
            <a>No of Pages</a>
          </li>
          <li onClick={() => handleSort("Rating")}>
            <a>Rating</a>
          </li>
        </ul>
      </div>
      <Tabs>
        <TabList>
          <Tab>Read list</Tab>
          <Tab>Wish list</Tab>
        </TabList>

        <TabPanel>
          <h2>Books Read : {readBooks.length}</h2>
          <div>
            {readBooks.map((book) => (
              <Book book={book} key={book.bookId}></Book>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <h2>My Wishlist : {wishBooks.length}</h2>
          <div>
            {wishBooks.map((book) => (
              <Book book={book} key={book.bookId}></Book>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
