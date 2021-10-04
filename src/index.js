import React from "react"; //ES6 modules
import ReactDom from "react-dom";

//CSS
import './index.css'; 

//Imported Files
import { books } from "./books"
import Book from "./Book";

function BookList(){ //React Component
  return (
    <section className = 'booklist'>
      {books.map((book) => {
        return (
          <Book key = {book.id} {...book}></Book> //...book pass 
          //all the properties of the object instead of the object 
          //itself this is the spread operator
        );
      })}
    </section>
  );
}


ReactDom.render(<BookList/>,document.getElementById('root')
); // <BookList/> == <BookList></BookList>
