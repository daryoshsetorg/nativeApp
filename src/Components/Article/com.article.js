import React, { Component } from 'react'
import { View, Text, Button, Image, TouchableOpacity } from 'react-native'
import Header from '../Header/com.header'
import article from '../../Assets/Styles/Article'
import { HyperImage } from '../../Utilities/Url'

export default class Article extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTintColor: 'blue',
    headerLeft: <Button title="بازگشت" onPress={() => {
      this.props.navigation.navigate("list")
    }} />
  });
  render() {
    let x = this.props.navigation.state.params;
    console.log(x);
    let imageUrl;
    if (x.ImageFile != null)
      imageUrl = { uri: HyperImage + x.ID + "/Images/" + x.ImageFile }
    else
      imageUrl = require('../../Assets/Images/noImage.png');
    return (
      <View style={article.mainContainer}>
        <View style={article.itemContainer}>
          <Image resizeMode='cover' style={article.image} source={imageUrl} />
          <View style={article.textContainer}>
            <View style={article.title}>
              <Text>{x.Title}</Text>
            </View>
            <View style={article.subTitle}>
              <Text>{x.Description}</Text>
            </View>
          </View>
          <View style={article.oprationContainre}>
            <Image style={{ height: 20, width: 20 }}
              source={require('../../Assets/Images/chat.png')} />
            <TouchableOpacity style={article.oprationItems}>
              <Image style={{ height: 20, width: 20 }}
                source={require('../../Assets/Images/like.png')} />
            </TouchableOpacity>
            <View style={article.dateItems}>
              <Text>تاریخ : {x.Date}</Text>
            </View>
          </View>
        </View>
      </View>
    )
  }
}
