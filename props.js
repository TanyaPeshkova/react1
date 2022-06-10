import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';

// const props = (
//   'name': 'Tanya'
// );

// function Welcome(props) {
//   return <h1>Привет, {props.name}</h1>;
// }

// class Welcome extends React.Component {
//   render() {
//     return <h1>Привет, {this.props.name}</h1>;
//   }
// }

; // props

// function Welcome(props) {
//   return <h1>Привет, {props.name}</h1>;
// };
// // const element = <Welcome name = "Аня" />;


// function App() {
// return (
//   <div>
//     <Welcome name = "Алиса" />
//     <Welcome name = "Базилио" />
//     <Welcome name = "Буратино" />
//   </div>
// );

// }
// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );

// function formatDate(date) {
//   return date.toLocaleDateString();
// }

// function Comment(props) {
//   return (
//     <div className="Comment">
//       <div className="UserInfo">
//         <img className="Avatar"
//              src={props.author.avatarUrl}
//              alt={props.author.name} />
//         <div className="UserInfo-name">
//           {props.author.name}
//         </div>
//       </div>
//       <div className="Comment-text">
//         {props.text}
//       </div>
//       <div className="Comment-date">
//         {formatDate(props.date)}
//       </div>
//     </div>
//   );
// }
// function Comment(props) {
//   return (
//     <div className="Comment">
//       <UserInfo user={props.author} />
//       <div className="Comment-text">
//         {props.text}
//       </div>
//       <div className="Comment-date">
//         {formatDate(props.date)}
//       </div>
//     </div>
//   );
// };
// function Avatar(props) {
//   return (
//     <img className="Avatar"
//       src={props.user.avatarUrl}
//       alt={props.user.name}
//     />
//   );
// };

// function UserInfo(props) {
//   return (
//     <div className="UserInfo">
//       <Avatar user={props.user} />
//       <div className="UserInfo-name">
//         {props.user.name}
//       </div>
//     </div>
//   );
// };
// const comment = {
//   date: new Date(),
//   text: 'Здравствуйте!',
//   author: {
//     name: 'Котенок',
//     avatarUrl: 'http://placekitten.com/g/64/64'
//   }
// };

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <Comment
//     date={comment.date}
//     text={comment.text}
//     author={comment.author} />
// );

// Пропсы можно не только читать

// function sum(a,b) {
//   return a + b;
// };

function withdraw(account, amount) {
  account.total -= amount;
}
