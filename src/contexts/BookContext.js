import React, { createContext, useState } from "react";

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, setBooks] = useState([
    { id: 1, title: "Brotherhood" },
    { id: 2, title: "Sommer Zeit" },
    { id: 3, title: "Good ideas" },
    { id: 3, title: "blind spot" },
  ]);

  return (
    <BookContext.Provider value={{ books }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
