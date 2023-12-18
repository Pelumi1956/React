import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

const author = "Jordan Moore";
const title = "Interesting Facts For Curious Minds";
const img = "./images/book-1.jpg";

function BookList() {
  return (
    <section className="booklist">
      <Book author={author} title={title} img={img} />
      <Book author={author} title={title} img={img} />
    </section>
  );
}
const Book = (props) => {
  console.log(props)
  return (
    <article className="book">
      <img src={props.img} alt={props.title} />
      <h2>{props.title}</h2>
      <h4>{props.author}</h4>
    </article>
  );
};


const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Greatings></Greatings>)
root.render(<BookList />);





















// ```start
// function Greating() {
//   return (
//     <>
//       <div>
//         {/* <h2>My First Component</h2> */}
//         <h3>hello people!</h3>
//         <ul>
//           <li>
//             <a href="#">hello world</a>
//           </li>
//         </ul>
//       </div>
//       <h2>hello world</h2>
//       <input type="text" name="" id="" />
//     </>
//   );
// }

// or

// function Greating() {
//   return (
//     <div>
//       <Person />
//       <Message />
//     </div>
//   );
// }

// const Person = () => <h2>john doe</h2>;
// const Message = () => {
//   return <p>this is my message</p>;
// };
// ```

// NOTE: if there is no parentices after the return, u must make sure ur opening is on the same line as the return

//``` First Component in Detail

// function Greating() {
//   return React.createElement('h2', {}, 'Hello world!');
// }
// ```
