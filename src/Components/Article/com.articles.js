import React, { Component } from 'react'
import { View, ScrollView } from 'react-native'
import Slider from '../Slider/com.slider'
import Search from '../Search/com.search'
class Articles extends Component {
  render() {
    return (
      <View>
        <ScrollView>
          <Slider />
          <Search />
        </ScrollView>
      </View>
    )
  }
}
export default Articles;