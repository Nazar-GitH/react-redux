import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


let posts = [
  {id: 1, message: "Lime", likesCount: 24},
  {id: 2, message: "Cherry", likesCount: 16},
  {id: 3, message: "Mango", likesCount: 42}
]

let dialogs = [
  {id: 1, name: 'John'},
  {id: 2, name: 'Paul'},
  {id: 3, name: 'James'},
  {id: 4, name: 'Anderson'}
]

let messages = [
  {id: 1, message: 'Hi'},
  {id: 2, message: 'How your new tastes pepsi?'},
  {id: 3, message: 'It is so good!'}
]

ReactDOM.render(
  <React.StrictMode>
    <App posts = {posts} dialogs = {dialogs} messages = {messages}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
