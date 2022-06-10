import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';


// function activateLasers() {
  
// }
// ReactDOM.render(
//   <button onClick={activateLasers}>
//   Активировать лазеры
// </button>
// ,
//   document.getElementById('root')
// );

// function Form() {
//   function handleSubmit(e) {
//     e.preventDefault();
//     console.log('Отправлена форма.');
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <button type="submit">Отправить</button>
//     </form>
//   );
// }


// class Toggle extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {isToggleOn: true};
//     this.handleClick = this.handleClick.bind(this);
//   }
//   handleClick() {
//     this.setState(prevState => ({
//       isToggleOn: !prevState.isToggleOn
//     }));
//   }
//   render() {
//     return(
//       <button onClick={this.handleClick}>
//         {this.state.isToggleOn? 'Включено':'Выключено'}
//       </button>
//     )
//   }
// }
class LoggingButton extends React.Component {
  // Такой синтаксис гарантирует, что `this` привязан к handleClick.
  // Предупреждение: это экспериментальный синтаксис
  handleClick() {
    console.log('значение this:', this);
  }

//   render() {
//     return (
//       <button onClick={this.handleClick}>
//         Нажми на меня
//       </button>
//     );
//   }
// }


render() {
  return (
    <button onClick={() => this.handleClick()}>
      Нажми на меня
    </button>
  );
}
}
// ReactDOM.render(
//   <LoggingButton />,
//   document.getElementById('root')
// )

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<LoggingButton />);

