import React, { Component } from 'react'
import { View, Image, Animated } from 'react-native'
import styles from '../../Assets/Styles/welcome.js'

class Welcome extends Component {
  state = {
    fadeAnim: new Animated.Value(0)
  }

  componentDidMount() {
    Animated.timing(
      this.state.fadeAnim,
      {
        toValue: 1,
        duration: 2500,
      }
    ).start();
  }

  render() {
    return (
      <View style={styles.main}>
        <View style={styles.mainClass}>
          <View style={styles.topRight}></View>
          <View style={styles.topMiddle}></View>
          <View style={styles.topLeft}></View>
        </View>
        <View style={styles.logoArea}>
          <Animated.View style={{ opacity: this.state.fadeAnim, zIndex: 10 }}>
            <Image style={styles.logo} source={require('../../Assets/Images/logo.png')} />
          </Animated.View>
        </View>
        <View style={styles.mainClass}>
          <View style={styles.bottomRight}></View>
          <View style={styles.bottomMiddle}></View>
          <View style={styles.bottomLeft}></View>
        </View>
      </View >
    )
  }
}
export default Welcome;
