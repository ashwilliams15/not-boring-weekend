
import {createStore, combineReducers, applyMiddleware} from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import {createLogger} from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
// import auth from './auth';
import zip from './zip';
import morning from './morning';
import afternoon from './afternoon';
import lunch from './lunch';
import dinner from './dinner';

const persistConfig = {
  key: 'root',
  storage: storage,
  stateReconciler: autoMergeLevel2
}

const pReducer = persistReducer(persistConfig, combineReducers({ zip, morning, afternoon, lunch, dinner }))
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)
export const store = createStore(pReducer, middleware)
export const persistor = persistStore(store)

// export * from './auth'

