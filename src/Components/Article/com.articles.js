import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity, SafeAreaView, FlatList } from 'react-native'
import articles from '../../Assets/Styles/articles'
import { connect } from 'react-redux'
import { getAllArticles } from '../../Actions/ac.articles'


class Articles extends Component {
  state = {
    Loading: true,
  }
  componentDidMount() {
    console.log("in didmount")
    this.props.GetArticles();
  }
  Items(params) {
    return (
      <View style={articles.mainContainer}>
        <View style={articles.itemContainer}>
          <View style={articles.imageContainer}>
            <Image resizeMode='cover' style={articles.image} source={{ uri: params.ImageFiles }} />
          </View>
          <View style={articles.textContainer}>
            <View style={articles.title}>
              <TouchableOpacity>
                <Text>{params.Title}</Text>
              </TouchableOpacity>
            </View>
            <View style={articles.subTitle}>
              <Text>{params.Description}</Text>
            </View>
          </View>
          <View style={articles.oprationContainre}>
            <View style={articles.oprationItems}>
              <Image style={{ height: 20, width: 20 }}
                source={require('../../Assets/Images/comment.png')} />
            </View>
            <View style={articles.oprationItems}>
              <Image style={{ height: 20, width: 20 }}
                source={require('../../Assets/Images/like.png')} />
            </View>
            <View style={articles.oprationItems}>
              <Image style={{ height: 20, width: 20 }}
                source={require('../../Assets/Images/share.png')} />
            </View>
          </View>
        </View>
      </View>
    )
  }

  beforRender() {
    let render = <View>
      <Image source={require('../../Assets/Images/like.png')} />
    </View>
    if (!this.state.Loading)
      render = <SafeAreaView >
        <FlatList
          data={this.props.ArticlesData}
          renderItem={({ item }) => this.Items(item)}
          keyExtractor={item => item.ID}
        />
      </SafeAreaView>
    return render;
  }


  render() {
    return (
      this.beforRender
    )
  }
}

const mapDispatchToProps = function (dispatch) {
  return {
    GetArticles: () => dispatch(getAllArticles())
  }
}

const mapStateToProps = function (state) {
  return {
    ArticlesData: state.Articles.List
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Articles);