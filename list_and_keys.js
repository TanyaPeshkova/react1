import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';

// const listItems = numbers.map((number) =>
//   <li>{number}</li>
// );;

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<ul>{listItems}</ul>)

// function NumberList(props) {
//   const number = props.numbers;
//   const listItems = numbers.map((number) => 
//   <li key={number.toString()}>
//     {number}</li>
//   );
//   return (
//     <ul>{listItems}</ul>
//   )
// };
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<NumberList number={numbers}/>)

// const todoItems = todos.map((todo) =>
//   <li key={todo.id}>
//     {todo.text}
//   </li>
// );

// const todoItems = todos.map((todo, index) =>
//   <li key={index}>
//     {todo.text}
//   </li>
// );

// function ListItem(props) {
//   return <li>{props.value}</li>;
// }

// function NumberList(props) {
//   const numbers = props.numbers;
//   const listItems = numbers.map((number) =>  
//     <ListItem key={number.toString()} value={number} />
//   );
//   return (
//     <ul>
//       {listItems}
//     </ul>
//   );
// }

// const numbers = [1, 2, 3, 4, 5];
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<NumberList numbers={numbers}/>)

// function Blog(props) {
//   const sidebar = (
//     <ul>
//       {props.posts.map((post) =>
//         <li key={post.id}>
//           {post.title}
//         </li>
//       )}
//     </ul>
//   );
//   const content = props.posts.map((post) =>
//     <div key={post.id}>
//       <h3>{post.title}</h3>
//       <p>{post.content}</p>
//     </div>
//   );
//   return (
//     <div>
//       {sidebar}
//       <hr />
//       {content}
//     </div>
//   );
// }

// const posts = [
//   {id: 1, title: 'Привет, мир', content: 'Добро пожаловать в документацию React!'},
//   {id: 2, title: 'Установка', content: 'React можно установить из npm.'}
// ];
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Blog posts={posts}/>)

function NumberList(props) {
  const numbers = props.numbers;
  return (
    <ul>
      {numbers.map((number) =>
        <ListItem key={number.toString()}
                  value={number} />
      )}
    </ul>
  );
}
