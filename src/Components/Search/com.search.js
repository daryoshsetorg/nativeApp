import React, { Component } from 'react'
import { View, TextInput } from 'react-native'
import Icon from 'react-native-ionicons'
import styles from '../../Assets/Styles/search.js'
class Search extends Component {
  state = {
    searchString: '',
  };
  render() {
    return (
      <View style={styles.mainSection}>
        <View style={styles.sideSection}></View>
        <View style={styles.searchSection}>
          <Icon style={styles.searchIcon} android="search" size={20} color="#000" />
          <TextInput
            style={styles.input}
            placeholder="جستجو"
            onChangeText={(searchString) => { this.setState({ searchString }) }}
            underlineColorAndroid="transparent"
          />
        </View>
        <View style={styles.sideSection}></View>
      </View>
    )
  }
}
export default Search;