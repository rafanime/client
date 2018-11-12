import React, {Component} from 'react';
import { createStackNavigator } from 'react-navigation';
import { HomeScreen } from './screens';

export default class App extends Component {
  render() {
    return <RootStack />;
  }
}

const RootStack = createStackNavigator({
    Home: HomeScreen,
  },
  {
    initialRouteName: 'Home',
  }
);