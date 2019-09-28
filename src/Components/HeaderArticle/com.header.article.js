import React, { Component } from 'react'
import { View } from 'react-native'
import Slider from '../Slider/com.slider'
import Search from '../Search/com.search'
import Category from '../Category/com.category'

export default class HeaderArticle extends Component {
  render() {
    return (
      <View>
        <Slider />
        <Search />
        <Category />
      </View>
    )
  }
}
