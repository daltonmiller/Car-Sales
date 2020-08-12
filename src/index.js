import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { createStore } from 'redux'
import { rootReducer } from './reducers/Reducer'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import 'bulma/css/bulma.css';
import './styles.scss';

const store = createStore(rootReducer)
console.log(store.getState())


const rootElement = document.getElementById('root');
ReactDOM.render(
<Provider store={store}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
</Provider>,
 rootElement);
