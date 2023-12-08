import React from "react";
import ReactDOM from "react-dom/client";

function Greating() {
  return <h2>hello world</h2>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Greatings></Greatings>)
root.render(<Greating />);











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

// NOTE: if there is no parentices after the return, u must make sure ur opening is on the same line as the return


// function Greating() {
//   return React.createElement('h2', {}, 'Hello world!');
// }
