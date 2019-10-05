import React, { Component } from 'react'
import { View, Text, Button, Image, TouchableOpacity, ScrollView } from 'react-native'
// import Header from '../Header/com.header'
import article from '../../Assets/Styles/article'
import { HyperImage } from '../../Utilities/Url'
import Icon from 'react-native-ionicons'
import HeaderImageScrollView, { TriggeringView } from 'react-native-image-header-scroll-view';
import HTMLView from 'react-native-htmlview';
import { Url } from '../../Utilities/Url.js'

class Article extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: null
  });
  state = {
    Title: "",
    showTitle: false
  }

  backToList() {
    this.setState({ showTitle: false, Title: "" });
    this.props.navigation.navigate("list");
  }

  showTitle(title) {
    this.setState({ showTitle: true, Title: title });
  }
  hideTitle() {
    this.setState({ showTitle: false, Title: "" });
  }


  renderNode(node, index, siblings, parent, defaultRenderer) {
    if (node.name == "img") {
      let imageTag = { uri: Url + node.attribs.src }
      return (
        <View>
          <Image source={imageTag} style={{ height: 100, width: 100 }} />
        </View>
      );
    }

    if (node.name == "video") {
      console.log(node.attribs.src)
      // let imageTag = { uri: Url + node.attribs.src }
      // return (
      //   <View>
      //     <Image source={imageTag} style={{ height: 100, width: 100 }} />
      //   </View>
      // );
    }
  }

  fixedTop() {
    if (this.state.showTitle)
      return (
        <View>
          <TouchableOpacity onPress={this.backToList.bind(this)} style={article.backButton}>
            <Icon android="ios-arrow-back" size={20}
              color="#fff" />
          </TouchableOpacity>
          <View style={{ alignItems: 'center', justifyContent: 'center', height: 40 }}>
            <Text style={{ color: '#fff', fontWeight: '700' }}>{this.state.Title}</Text>
          </View>
        </View>
      )
    else
      return (
        <View>
          <TouchableOpacity onPress={this.backToList.bind(this)} style={article.backButton}>
            <Icon android="ios-arrow-back" size={20}
              color="#fff" />
          </TouchableOpacity>
        </View>
      )
  }

  render() {
    const pr = this;
    let x = this.props.navigation.state.params;
    let imageUrl;
    if (x.ImageFile != null)
      imageUrl = { uri: HyperImage + x.ID + "/Images/" + x.ImageFile }
    else
      imageUrl = require('../../Assets/Images/noImage.png');
    return (
      <HeaderImageScrollView
        maxHeight={200}
        minHeight={80}
        headerImage={imageUrl}
        maxOverlayOpacity={0.5}
        foregroundParallaxRatio={3}
        renderFixedForeground={() => (pr.fixedTop())}>
        <View style={{ height: 1000 }}>
          <TriggeringView onBeginHidden={() => { pr.showTitle(this.props.navigation.state.params.Title) }}
            onDisplay={() => { pr.hideTitle() }}
          >
            <View style={article.textContainer}>
              <View style={article.title}>
                <Text>{x.Title}</Text>
              </View>
              <View style={article.subTitle}>
                <Text>{x.Description}</Text>
              </View>
              <View>
                <HTMLView
                  value={x.Body}
                  stylesheet={articles.textContainer}
                  renderNode={this.renderNode}
                />
              </View>
            </View>
          </TriggeringView>
        </View>
      </ HeaderImageScrollView>
    );
  }
}
export default Article;
