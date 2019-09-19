import React, { Component } from 'react'
import { View, Text } from 'react-native'
import styles from '../../Assets/Styles/header'
import Icon from 'react-native-ionicons'

class Header extends Component {
  render() {
    return (
      <View style={styles.mainSection}>
        <View style={styles.menuIcon}>
          <Icon android="menu" size={20} color="#000" />
        </View>

        <View style={styles.logoArea}>
          <Text>هایپر مدیا</Text>
        </View>

      </View>
    )
  }
}
export default Header;