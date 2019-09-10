import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore,combineReducers } from "redux"
import Reactjs from "./reducer/react"
import Angularjs from "./reducer/angular"
import {Provider} from "react-redux"


const allreducer=combineReducers({
  react:Reactjs,
  angular:Angularjs
})

const store=createStore(allreducer,{
  react:"React",
  angular:"Angular"
})



ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
