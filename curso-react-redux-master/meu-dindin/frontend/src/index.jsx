import React from 'react'
import ReactDOM from 'react-dom'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'

import primise from 'redux-promise'

import App from './main/app'
import reducers from './main/reducers'

const store = applyMiddleware(primise)(createStore)(reducers)
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
, document.getElementById('app'))