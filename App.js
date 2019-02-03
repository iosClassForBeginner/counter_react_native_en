import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native';

import bgImg from './assets/bg.jpg'

export default class App extends React.Component {
  state = {
    count: 0,
  }

  onUp = () => {
    const { count } = this.state
    this.setState({ count: count + 1 })
  }

  onDown = () => {
    const { count } = this.state
    const newCount = count > 0 ? count - 1 : 0
    this.setState({ count: newCount })
  }

  onReset = () => {
    this.setState({ count: 0 })
  }

  render() {
    const { count } = this.state
    return (
      <ImageBackground style={styles.container} source={bgImg}>
        <View style={styles.headerContainer}>
          <Text style={styles.title}>{count}</Text>
        </View>
        <View style={styles.bodyContainer}>
          <TouchableOpacity style={styles.button} onPress={this.onUp}>
            <Text style={styles.buttonTitle}>Count Up!</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={this.onDown}>
            <Text style={styles.buttonTitle}>Count Down</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={this.onReset}>
            <Text style={styles.buttonTitle}>Reset</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  headerContainer: {
    flex: 2,
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bodyContainer: {
    flex: 1,
    flexDirection: 'column',
    alignSelf: 'stretch',
    justifyContent: 'space-between',
    paddingBottom: 20,
  },
  button: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    margin: 20,
    borderRadius: 60,
  },
  titleText: {
    color: 'white',
    fontSize: 20,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  title: {
    color: 'white',
    fontSize: 140,
    fontWeight: 'bold',
  },
  buttonTitle: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
