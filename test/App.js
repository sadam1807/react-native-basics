import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Main from './components/Main';

export default class App extends React.Component {
  state = {
    content: 'test component123'
  }

  

  render() {
    return (
      <View style={styles.container}>
        <Main  content={this.state.content}/>
        <Text style={styles.red}>just red</Text>
        <Text style={styles.bigBlue}>just bigBlue</Text>
        <Text style={[styles.bigBlue, styles.red]}>bigBlue, then red</Text>
        <Text style={[styles.red, styles.bigBlue]}>red, then bigBlue</Text>
        <Text>hello world</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 32,
  },
  red: {
    color: 'red',
    fontSize: 18
  }
});
