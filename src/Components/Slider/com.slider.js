import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import Carousel from 'react-native-snap-carousel';
import { MainUrl, HyperImage } from '../../Utilities/Url.js'
import styles, { sliderWidth, itemWidth } from '../../Assets/Styles/slider.js'
import Axios from 'axios'
class Slider extends Component {
  state = {
    Articles: []
  }
  componentDidMount() {
    Axios.get(MainUrl + "GetSpecialMedia").then((res) => {
      console.log(res);
      this.setState({ Articles: res.data })
    });
  }
  _renderItem({ item, index }) {
    let imageUrl;
    if (item.ImageFile != null)
      imageUrl = { uri: HyperImage + item.ID + "/Images/" + item.ImageFile }
    else
      imageUrl = require('../../Assets/Images/noImage.png');
    console.log(imageUrl)
    return (
      <View style={[styles.slideInnerContainer]}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={imageUrl} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{item.Title}</Text>
          <Text style={styles.subtitle}>{item.Description}</Text>
        </View>
      </View>
    );
  }

  render() {
    return (
      <View >
        <Carousel
          data={this.state.Articles}
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