import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router } from 'react-router-dom'
import { PersistGate } from 'redux-persist/lib/integration/react';
import history from './history'
import { store, persistor} from './store'
import App from './App'
import Loading from './components/Loading';

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <PersistGate loading={<Loading />} persistor={persistor}>
        <App />
      </PersistGate>
    </Router>,
   </Provider>,
  document.getElementById('app')
)
