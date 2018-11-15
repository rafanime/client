import React from 'react';
import {
  StyleSheet,
} from 'react-native';

import { Button } from 'react-native-elements'


export default class BasicButton extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Button
      onPress={this.props.onPress}
      raised
      title={this.props.loading ? '' : this.props.name}
      loading={this.props.loading}
      textStyle={styles.buttonText}
      buttonStyle={{...styles.button, backgroundColor: this.props.color}}
      containerViewStyle={[styles.container, {...this.props.style, backgroundColor: this.props.color}]}
      />
    );
  }
}


const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: '100%',
    borderRadius: 5,
  },
  container: {
    width: "80%",
    height: "10%",
    borderRadius: 5
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
  }

});