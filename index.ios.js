import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import base from './rebaseConfig';

export default class ReactNativeRebase extends Component {
  constructor(props) {
    super(props);

    this.state = {
      shoppingList: []
    }
  }

  componentDidMount() {

    //uncomment and replace 'shoppingList' with your firebase data name

    // base.syncState(`shoppingList`, {
    //   context: this,
    //   state: 'items',
    //   asArray: true
    // });

    //now your firebase data is available on state!
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React-Native-Rebase!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit rebaseConfig.js with your API keys, & index.ios.js with your awesome app code!
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}

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
});

AppRegistry.registerComponent('ReactNativeRebase', () => ReactNativeRebase);
