import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


function formatName(user) {
  return user.firstName + ' ' + user.lastName;
};
function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>
  }
  return <h1>Здравствуй, незнакомец.</h1>
};


const user = {
  firstName : 'Petr',
  lastName : 'Lavrov',
  avaterUrl: 'https://ria.ru/20100507/https://ru.wikipedia.org/wiki/%D0%9F%D1%91%D1%82%D1%80_I.html'
};

// const element = (
// <h1>Hello, {formatName(user)}!</h1>
// );

// const element = (getGreeting(user));

// ReactDOM.render(
//   element,
//   document.getElementById('root')
// );

// const element = (getGreeting());

// ReactDOM.render(
//   element,
//   document.getElementById('root')
// );

//Использование атрибутов JSX

// const element = <a href="https://www.reactjs.org"> link</a>;
// const element1 = <img src={user.avaterUrl}></img>;
// ReactDOM.render(
//   element1,
//   document.getElementById('root')
// );


// Использование дочерних элементов в JSX

// const element = <img src={user.avaterUrl} />;
// const element = (
// <div>
//   <h1>Здравствуйте!</h1>
//   <h2>Рады вас видеть.</h2>
// </div>

// )
// ReactDOM.render(
//   element,
//   document.getElementById('root')
// );

//JSX предотвращает атаки, основенные на инъекции кода

// const title = response.potentiallyMaliciousInput;
// // Этот код безопасен
// const element = <h1>{title}</h1>;

// ReactDOM.render(
//   element,
//   document.getElementById('root')
// );

const element = React.createElement(
  'h1',
  {className : 'greeting'},
  'Hello World!'
)
ReactDOM.render(
  element,
  document.getElementById('root')
);