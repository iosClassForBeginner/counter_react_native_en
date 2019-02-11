# Let's make app in an hour

  <div style="text-align:center"><img src ="https://github.com/iosClassForBeginner/counter_react_native_en/blob/master/assets/steps/demo.gif" width="50%" height="50%"/></div>  

# What you learn from the tutorial

Learn how to use [state](https://facebook.github.io/react-native/docs/state) by creating a simple counter app.

* expo: 32.0.0 / React Native: 0.57

# Setup dev environment

1. Download ***VSCode*** from [here](https://code.visualstudio.com/download)
2. Download and setup ***expo*** following the [instruction](https://expo.io/learn)
3. Download the latest ***Xcode*** from the Apple Store

# Full procedure

## 1, Create Project

* Open terminal
* `cd ~/Desktop/`
* `expo init {your-project-name}`

<img src ="https://github.com/iosClassForBeginner/counter_react_native_en/blob/master/assets/steps/1-expo-init.png" />

## 2, Assets

* Please download background image from [here](https://pixabay.com/en/fuzzy-background-gradient-1800136/).
* Create ***assets*** folder in the project. Set the image under assets folder.

## 3, Run on iOS simulator

* Go to terminal
* `cd ~/Desktop/{your-project-name}`
* `expo start`
* Click ***Run on iOS Simulator***

<img src ="https://github.com/iosClassForBeginner/counter_react_native_en/blob/master/assets/steps/3.open-ios-simulator.png" />

## 4, Edit App.js

* Data Control
	- [State](https://facebook.github.io/react-native/docs/state)
		
* Style
	- [Layout with Flexbox](https://facebook.github.io/react-native/docs/flexbox)
		

* UI Component
	- [View](https://facebook.github.io/react-native/docs/view)
	- [Text](https://facebook.github.io/react-native/docs/text)
	- [ImageBackground](https://facebook.github.io/react-native/docs/imagebackground)
	- [TouchableOpacity](https://facebook.github.io/react-native/docs/touchableopacity)

```Javascript
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
    marginVertical: 15,
    marginHorizontal: 20,
    borderRadius: 60,
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
```
