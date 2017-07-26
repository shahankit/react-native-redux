import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  openRadioButton: {
    height: 50,
    width: 120,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#c6a0ff'
  },
});

export default class ReactNativeRedux extends Component {
  static navigationOptions = {
    header: null,
    headerBackTitle: 'Home'
  };

  openRadioScreen = () => {
    const { navigate } = this.props.navigation;
    navigate('Radio', { albumId: '123' });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit src/index.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
        <TouchableOpacity style={styles.openRadioButton} onPress={this.openRadioScreen}>
          <Text>Open Radio</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
