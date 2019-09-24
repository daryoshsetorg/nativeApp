import React, { Component } from 'react'
import { View, Image, Animated } from 'react-native'
import welcome from '../../Assets/Styles/welcome.js'

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
      <View style={welcome.main}>
        <View style={welcome.mainClass}>
          <View style={welcome.topRight}></View>
          <View style={welcome.topMiddle}></View>
          <View style={welcome.topLeft}></View>
        </View>
        <View style={welcome.logoArea}>
          <Animated.View style={{ opacity: this.state.fadeAnim, zIndex: 10 }}>
            <Image style={welcome.logo} source={require('../../Assets/Images/logo.png')} />
          </Animated.View>
        </View>
        <View style={welcome.mainClass}>
          <View style={welcome.bottomRight}></View>
          <View style={welcome.bottomMiddle}></View>
          <View style={welcome.bottomLeft}></View>
        </View>
      </View >
    )
  }
}
export default Welcome;
