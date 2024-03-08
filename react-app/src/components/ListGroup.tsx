// import { Fragment } from "react";
// import { MouseEvent, useState } from "react";
import "../App.css";
import { useState } from "react";

function ListGroup() {
  const items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  //   let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  //   items = [];

  //   const message = items.length === 0 ? <p>No items found</p> : null;
  //   const getMessage = () => {
  //     return items.length === 0 ? <p>No items found</p> : null;
  //   };

  const message = items.length === 0 && <p>No items found</p>; // when the first part is true it will return the second part of the AND. When it false it will return false
  //  Event Handler
  //   const handleClick = (event: MouseEvent) => console.log(event);

  // Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    // <> Auto generates fragment without the need of importing
    <>
      <h1>List</h1>
      {message}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            // onClick={(event) => console.log(item, index, event)} //How to handle api actions from a click ?
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }} // passing a reference
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
