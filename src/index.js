import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let appName = "Learning React"
let information = [{title:"Information 1", desc: "This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information."},
					{title:"Information 2", desc: "This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information."},
					{title:"Information 3", desc: "This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information."}]
ReactDOM.render(<App title={appName} information={information}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
