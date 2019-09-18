import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import Carousel from 'react-native-snap-carousel';
import styles, { sliderWidth, itemWidth } from '../../Assets/Styles/slider.js'
class Slider extends Component {
  state = {
    ENTRIES1: [
      {
        title: 'سفر روحانی به تبریز',
        subtitle: 'همزمان با سفر روحانی به تبریز جمعی از',
        illustration: 'https://i.imgur.com/UYiroysl.jpg'
      },
      {
        title: 'Earlier this morning, NYC',
        subtitle: 'Lorem ipsum dolor sit amet',
        illustration: 'https://i.imgur.com/UPrs1EWl.jpg'
      },
      {
        title: 'White Pocket Sunset',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
        illustration: 'https://i.imgur.com/MABUbpDl.jpg'
      },
      {
        title: 'Acrocorinth, Greece',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
        illustration: 'https://i.imgur.com/KZsmUi2l.jpg'
      },
      {
        title: 'The lone tree, majestic landscape of New Zealand',
        subtitle: 'Lorem ipsum dolor sit amet',
        illustration: 'https://i.imgur.com/2nCt3Sbl.jpg'
      },
      {
        title: 'Middle Earth, Germany',
        subtitle: 'Lorem ipsum dolor sit amet',
        illustration: 'https://i.imgur.com/lceHsT6l.jpg'
      }
    ]
  }
  _renderItem({ item, index }) {
    return (
      <View style={[styles.slideInnerContainer]}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri: item.illustration }} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.subtitle}>{item.subtitle}</Text>
        </View>
      </View>

    );
  }

  render() {
    return (
      <View >
        <Carousel
          data={this.state.ENTRIES1}
          renderItem={this._renderItem}
          sliderWidth={sliderWidth}
          itemWidth={itemWidth}
          layout={'default'}

        />
      </View>

    );
  }
}
export default Slider;