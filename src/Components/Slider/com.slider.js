import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import Carousel from 'react-native-snap-carousel';
import { MainUrl, HyperImage } from '../../Utilities/Url.js'
import styles, { sliderWidth, itemWidth } from '../../Assets/Styles/slider.js'
import Spinner from 'react-native-loading-spinner-overlay';
import Axios from 'axios'
import slider from '../../Assets/Styles/slider.js';

class Slider extends Component {
  state = {
    Articles: [],
    Loading: true,
  }
  componentDidMount() {
    Axios.get(MainUrl + "GetSpecialMedia").then((res) => {
      this.setState({ Articles: res.data, Loading: false })
    });
  }
  _renderItem({ item, index }) {
    let imageUrl;
    if (item.ImageFile != null)
      imageUrl = { uri: HyperImage + item.ID + "/Images/" + item.ImageFile }
    else
      imageUrl = require('../../Assets/Images/noImage.png');

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

  beforRender() {
    let render = <View style={slider.spinnerContainer} >
      <Spinner
        visible={true}
        textContent={'درحال دریافت..'}
        textStyle={{ color: '#fff' }}
        visible={true}
      />
    </View>
    if (!this.state.Loading)
      render = <Carousel
        data={this.state.Articles}
        renderItem={this._renderItem}
        sliderWidth={sliderWidth}
        itemWidth={itemWidth}
        layout={'default'} />
    return render;
  }

  render() {
    return (
      this.beforRender()
    );
  }
}
export default Slider;