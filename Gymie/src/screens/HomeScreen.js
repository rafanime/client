import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { BasicButton } from '../components/Buttons'
import * as Color from '../constants/Colors';
import { connect } from 'react-redux';
import { actionCreators } from '../reducers/myReducer'


class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  updateStore = () => {
    const {dispatch} = this.props

    dispatch(actionCreators.add("ONE MORE"))
  }

  render() {
    const cens = this.props;
    console.log(this.props);
    
    return (
      <View style={styles.container}>
        <BasicButton
          name={"Log out"}
          color={Color.tintColor}
          style={{marginTop: 10}}
          onPress={this.updateStore}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',

  },
});


const mapStateToProps = (state) => ({
  todos: state.todos,
})

export default connect(mapStateToProps)(HomeScreen);