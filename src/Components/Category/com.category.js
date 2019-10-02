import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from '../../Assets/Styles/category.js'
import Icon from 'react-native-ionicons'
class Category extends Component {
  render() {
    return (
      <View style={styles.mainSection}>
        <TouchableOpacity style={styles.items}>
          <Icon android="md-done-all" size={25}
            color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.items}>
          <Icon android="md-text" size={25}
            color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.items}>
          <Icon android="md-images" size={25}
            color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.items}>
          <Icon android="logo-youtube" size={25}
            color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.items}>
          <Icon android="md-musical-notes" size={25}
            color="#fff" />
        </TouchableOpacity>
      </View>
    )
  }
}
export default Category;