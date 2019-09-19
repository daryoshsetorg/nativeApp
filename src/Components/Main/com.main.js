import React, { Component } from 'react'
import { View, ScrollView, Text } from 'react-native'
import styles from '../../Assets/Styles/main.js'

import Slider from '../Slider/com.slider'
import Search from '../Search/com.search'
import Category from '../Category/com.category'
import Articles from '../Article/com.articles'
import Header from '../Header/com.header'

class Main extends Component {
  render() {
    return (

      <View style={styles.mainSection}>

        <ScrollView >
          <Header />
          <Slider />
          <Search />
          <Category />
          <Articles />
        </ScrollView>
      </View>

    )
  }
}
export default Main;

