import React, {Component} from 'react';
import { createStackNavigator } from 'react-navigation'
import { HomeScreen } from './src/screens';
import { Provider } from 'react-redux'
import { createStore, compose, applyMiddleware } from 'redux'
import { persistReducer, persistStore } from 'redux-persist'
import reducer from './src/reducers/';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import {createLogger} from 'redux-logger';

const persistConfig = {
  key: 'root',
  storage: storage,
  stateReconciler: autoMergeLevel2 // see "Merge Process" section for details.
 };
const logger = createLogger();
const enchancer = compose(applyMiddleware(thunk, promise, logger));

const pReducer = persistReducer(persistConfig, reducer, enchancer);


const store = createStore(pReducer, {}, enchancer);
const persistor = persistStore(store);
const Navigator = createStackNavigator({
    Home:  { screen: HomeScreen},
  },
  {
    initialRouteName: 'Home',
  }
);

export default class App extends Component {
  render() {
    return (
      <Provider store= { store }>
        <Navigator />
      </Provider>
    );
  }
}