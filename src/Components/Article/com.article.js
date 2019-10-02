import React, { Component } from 'react'
import { View, Text, Button, Image, TouchableOpacity, ScrollView } from 'react-native'
import Header from '../Header/com.header'
import article from '../../Assets/Styles/article'
import { HyperImage } from '../../Utilities/Url'
import Icon from 'react-native-ionicons'

class Article extends Component {
  static navigationOptions = ({ navigation }) => ({
    // headerTintColor: 'blue',
    // headerLeft: <Button title="بازگشت" onPress={() => {
    //   this.props.navigation.navigate("list")
    // }} />
    header: null
  });

  backToList() {
    this.props.navigation.navigate("list");
  }

  render() {
    let x = this.props.navigation.state.params;
    let imageUrl;
    if (x.ImageFile != null)
      imageUrl = { uri: HyperImage + x.ID + "/Images/" + x.ImageFile }
    else
      imageUrl = require('../../Assets/Images/noImage.png');
    return (
      <ScrollView >
        <View style={article.itemContainer}>
          <TouchableOpacity onPress={this.backToList.bind(this)} style={article.backButton}>
            <Icon android="ios-arrow-back" size={20}
              color="#fff" />
          </TouchableOpacity>
          <View style={article.imageContainer}>
            <Image resizeMode='cover' style={article.image} source={imageUrl} />
          </View>
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
      </ScrollView>
    )
  }
}
export default Article;