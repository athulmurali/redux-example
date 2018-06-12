import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {createStore} from 'redux'
import {Provider} from 'react-redux'
import counterReducer from "./reducers/counterReducer";
import CounterApp from "./containers/CounterApp";



const store = createStore(counterReducer)

ReactDOM.render(
    <Provider store={store}>
        <CounterApp/>
    </Provider>
 , document.getElementById('root'));

