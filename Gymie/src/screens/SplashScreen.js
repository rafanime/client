import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import * as Color from '../constants/Colors';
import { connect } from 'react-redux';
import TimerMixin from 'react-timer-mixin';
import { request } from '../network';

class SplashScreen extends React.Component {

  constructor(props) {
    super(props);
    this.checkLogin();
  }

  checkLogin = async () => {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1NDI2NDg5NjUsImV4cCI6MTU0MjczNTQwNX0.eKgHSctPXDsiH7Ej8L47pk5utoTIeGgnaMaJ2IahFLo";

    const users = await request('http://127.0.0.1:3000/api/users', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': token
      },
    })
  }

  render() {
    return (
      <View style={styles.container}>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    backgroundColor: Color.tintColor
  },
});


const mapStateToProps = (state) => ({

})

export default connect(mapStateToProps)(SplashScreen);