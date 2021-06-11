import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import configureStore from './store/configureStore'

const store = configureStore()
//console.log(store)

console.log('state', store.getState())

store.subscribe(() => {
    console.log('state updated', store.getState())
})


ReactDOM.render(<Provider store={store}>
    <BrowserRouter>
        <App />
    </BrowserRouter>
    </Provider>, document.getElementById('root'));


