import React from 'react';
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';
import { SocialIcon } from 'react-native-elements'

import { WebBrowser } from 'expo';
import { BasicButton } from '../components/Buttons/';
import * as Color from '../constants/Colors';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      loggingIn: false,
      signingUp: false
    }
  }

  logIn(){
    this.setState({loggingIn : true});
  }

  signUp(){
    this.signingUp = true;
  }

  render() {
    const {loggingIn} = this.state;

    return (
      <View style={styles.container}>
          <View style={styles.welcomeContainer}>
            <Image
              source={
                __DEV__
                  ? require('../assets/images/robot-dev.png')
                  : require('../assets/images/robot-prod.png')
              }
              style={styles.welcomeImage}
            />
          </View>

          <View style={styles.getStartedContainer}>
            {this._maybeRenderDevelopmentModeWarning()}

            <Text style={styles.getStartedText}>Welcome to Gymie!</Text>
          </View>

          <View style={styles.helpContainer}>

              <View
                style={{
                  borderBottomColor: 'black',
                  borderBottomWidth: 1,
                  width: '80%',
                }}>
                <TextInput 
                  editable={true} 
                  style={{height: 40}}
                  placeholder="Email"
                  autoCapitalize = 'none'
                  style={{paddingBottom: 15, fontSize: 15, alignSelf: "flex-start"}}
                />              
              </View>

              <View
                style={{
                  paddingTop:15,
                  borderBottomColor: 'black',
                  borderBottomWidth: 1,
                  width: '80%',
                }}>
                <TextInput 
                  editable={true} 
                  style={{height: 40}}
                  placeholder="Password"
                  secureTextEntry={true}
                  autoCapitalize = 'none'
                  style={{paddingBottom: 15, fontSize: 15, alignSelf: "flex-start"}}
                />              
              </View>

            <BasicButton
              name={"Login"}
              onPress={this.logIn.bind(this)}
              loading={loggingIn}
              color={Color.tintColor}
              style={{marginTop: 15}}
            />
            <BasicButton
              name={"Sign Up"}
              onPress={this.signUp}
              loading={this.state.signingUp}
              color={Color.tintColor}
              style={{marginTop: 10}}
              disabled={!this.state.loggingIn}
            />

            <View
            style={{
              marginTop: 40,
              marginBottom: 10,
              borderBottomColor: 'black',
              borderBottomWidth: 1,
              width: '80%',
            }}/>

            <SocialIcon
              title='Sign In With Facebook'
              button
              type='facebook'
              style={{width: "80%", borderRadius: 5}}
            />

            <SocialIcon
              title='Sign In With Google'
              button
              type='google'
              style={{width: "80%", borderRadius: 5, 
              backgroundColor: 'rgba(223, 66, 37, 0.8)',}}
              
            />
   
          </View>

          
      </View>
    );
  }

  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Learn more
        </Text>
      );

      return (
        <Text style={styles.developmentModeText}>
          Development mode is enabled, your app will be slower but you can use useful development
          tools. {learnMoreButton}
        </Text>
      );
    } else {
      return (
        <Text style={styles.developmentModeText}>
          You are not in development mode, your app will run at full speed.
        </Text>
      );
    }
  }

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
    );
  };
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
    flex: 1,
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
