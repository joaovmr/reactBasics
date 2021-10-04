import React from "react"; //ES6 modules
import ReactDom from "react-dom";

//CSS
import './index.css'; 

//Setup variables
const books = [
  {
    id:1,
    img: 'https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg',
    title:'I Love You to the Moon and Back',
    author: 'Amelia Hepworth'
  },

  {
    id:2,
    img: 'https://images-na.ssl-images-amazon.com/images/I/81MgsNre3IL._AC_UL200_SR200,200_.jpg',
    title:'The Wish',
    author: 'Nicholas Sparks'
  },

  {
    id:3,
    img: 'https://images-na.ssl-images-amazon.com/images/I/81Ta5Jce%2BeL._AC_UL200_SR200,200_.jpg',
    title:'Cloud Cuckoo Land: A Novel',
    author: 'Anthony Doerr'
  },
]

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

const Book = ({img,title,author}) => {   
  const clickHandler = (e) => {
    console.log(e)
    console.log(e.target)
    alert('hello world');
  }

  const complexExample = (author) => {
    console.log(author);
  }

  return (
    <article className = 'book' onMouseOver = {() => {
      console.log(title);
    }}>
      <img src = {img} alt = ""/>
      <h1 onClick = {() => console.log(title)}>{title}</h1>
      <h4>{author}</h4>
      <button type = "button" onClick = {clickHandler}>
        Reference Example
      </button>
      <button type = "button" onClick = {() => complexExample(author)}> More complex example</button>
    </article>
  )
}


ReactDom.render(<BookList/>,document.getElementById('root')
); // <BookList/> == <BookList></BookList>
