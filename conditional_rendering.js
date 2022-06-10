import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';


// function UserGreeting(props) {
//   return <h1>С возвращением!</h1>;
// }

// function GuestGreeting(props) {
//   return <h1>Войдите, пожалуйста.</h1>;
// }

// function Greeting(props) {
//   const isLoggedIn = props.isLoggedIn;
//   if(isLoggedIn) {
//     return <UserGreeting />;
//   }
//   return <GuestGreeting />
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// // root.render(<Greeting isLoggedIn={true}/>);
// root.render(<Greeting isLoggedIn={false}/>);

// function LoginButton(props) {
//   return(
//     <button onClick={props.onClick}>
//       Войти
//     </button>
//   );
// }

// function LogoutButton(props) {
//   return(
//     <button onClick={props.onClick}>
//       Выйти
//     </button>
//   );
// }

// class LoginControl extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleLoginClick = 
//     this.handleLoginClick.bind(this);
//     this.handleLogoutClick = 
//     this.handleLogoutClick.bind(this);
//     this.state = {isLoggedIn : false};
//   }
//   handleLoginClick() {
//     this.setState({isLoggedIn: true});
//   }
//   handleLogoutClick() {
//     this.setState({isLoggedIn: false});
//   }
//   render() {
//     const isLoggedIn = this.state.isLoggedIn;
//     let button;
//     if (isLoggedIn) {
//       button = <LogoutButton onClick = 
//       {this.handleLogoutClick} />;
//     } else {
//       button = <LoginButton onClick = 
//       {this.handleLoginClick} />;
//     }
//     return(
//       <div>
//         <Greeting isLoggedIn= {isLoggedIn } />
//         {button}
//         </div>
      
//     )
//   }
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<LoginControl />)

// function MailBox(props) {
//   const unreadMessages = props.unreadMessages;
//   return (
//     <div>
//       <h1>Здравствуйте</h1>
//       {unreadMessages.length > 0 &&
//       <h2>
//         У вас {unreadMessages.length} непрочитанных сообщений.
//         </h2>}
//     </div>
//   );
// }

// const messages = ['React','Re: React', 'Re:Re: React','React1'];
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<MailBox unreadMessages={messages} />)

// render() {
//   const isLoggedIn = this.state.isLoggedIn;
//   return (
//     <div>
//       {isLoggedIn
//         ? <LogoutButton onClick={this.handleLogoutClick} />
//         : <LoginButton onClick={this.handleLoginClick} />
//       }
//     </div>
//   );
// }

function WarningBanner(props) {
  if (!props.warn) {
    return null;
  }

  return (
    <div className="warning">
      Предупреждение!
    </div>
  );
}

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showWarning: true};
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick() {
    this.setState(state => ({
      showWarning: !state.showWarning
    }));
  }

  render() {
    return (
      <div>
        <WarningBanner warn={this.state.showWarning} />
        <button onClick={this.handleToggleClick}>
          {this.state.showWarning ? 'Спрятать' : 'Показать'}
        </button>
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Page />)