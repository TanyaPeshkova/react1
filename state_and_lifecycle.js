import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';

// function Clock(props) {
//   return (
//     <div>
//       <h1>Привет, мир!</h1>
//       <h2>Сейчас {props.date.toLocaleTimeString()}.</h2>
//     </div>
//   );
// }

// function tick() {
//   ReactDOM.render(
//     <Clock date = {new Date()} />,
//     document.getElementById('root')
//   );
// }

// setInterval(tick,1000);

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }
  componentDidMount(){
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }
  componentWillUnmount(){
    clearInterval(this.timerID);
  }
  tick() {
    this.setState({
      date: new Date() 
    });
  }

  render () {
    return(
    <div>
      <h1>Привет, мир!</h1>
      <h2>Сейчас {this.state.date.toLocaleTimeString()}.</h2>
    </div>
    );
  }
}
ReactDOM.render(
  <Clock  />,
  document.getElementById('root')
);

// this.setState((state,props) => ({
//   counter:state.counter + props.increment
// })
// );
// this.setState(function(state,props) {
//  return{
//   counter:state.counter + props.increment
// };
// });

// constructor(props) {
//   super(props);
//   this.state = {
//     posts: [],
//     comments: []
//   };
// }

// componentDidMount() {
//   fetchPosts().then(response => {
//     this.setState({
//       posts: response.posts
//     });
//   });

//   fetchComments().then(response => {
//     this.setState({
//       comments: response.comments
//     });
//   });
// }

function App() {
  return (
    <div>
      <Clock />
      <Clock />
      <Clock />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);