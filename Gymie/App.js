import React, {Component} from 'react';
import { createStackNavigator } from 'react-navigation'
import { HomeScreen } from './src/screens';
import { Provider } from 'react-redux'
import { createStore, compose, applyMiddleware } from 'redux'
import { persistReducer, persistStore } from 'redux-persist'
import {reducer} from './src/reducers/myReducer';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage: storage,
  stateReconciler: autoMergeLevel2 // see "Merge Process" section for details.
 };

const pReducer = persistReducer(persistConfig, reducer);


const store = createStore(pReducer);
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