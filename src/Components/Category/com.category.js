import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from '../../Assets/Styles/category.js'
class Category extends Component {
  render() {
    return (
      <View style={styles.mainSection}>
        <TouchableOpacity style={styles.items}>
          <Text>همه دسته ها</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.items}>
          <Text>متنی</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.items}>
          <Text>تصویری</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.items}>
          <Text>ویدیو</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.items}>
          <Text>صوت</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
export default Category;