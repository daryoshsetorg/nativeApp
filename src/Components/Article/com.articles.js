import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity, SafeAreaView, FlatList, ActivityIndicator } from 'react-native'
import articles from '../../Assets/Styles/articles'
import { connect } from 'react-redux'
import { getAllArticles } from '../../Actions/ac.articles'
import Spinner from 'react-native-loading-spinner-overlay';
import { HyperImage } from '../../Utilities/Url.js'


class Articles extends Component {
  state = {
    Loading: true,
    Filter: {
      MediaTypes: "all",
      PageIndex: 1,
      PageSize: 5
    }
  }
  componentDidMount() {
    this.props.GetArticles(this.state.Filter);
  }

  _handleLoadMore = () => {
    this.setState(
      (prevState, nextProps) => ({
        PageIndex: prevState.page + 1,
      }),
      () => {
        this.props.GetArticles(this.state.Filter);
      }
    );
  };

  _handleRefresh = () => {
    this.setState(
      {
        PageIndex: 1,
        refreshing: true
      },
      () => {
        this.props.GetArticles(this.state.Filter);
      }
    );
  };

  _renderFooter = () => {
    if (!this.state.loadingMore) return null;

    return (
      <View
        style={{
          position: 'relative',
          width: width,
          height: height,
          paddingVertical: 20,
          borderTopWidth: 1,
          marginTop: 10,
          marginBottom: 10,
          borderColor: colors.veryLightPink
        }}
      >
        <ActivityIndicator animating size="large" />
      </View>
    );
  };

  Items(params) {
    let imageUrl;
    if (params.ImageFile != null)
      imageUrl = { uri: HyperImage + params.ID + "/Images/" + params.ImageFile }
    else
      imageUrl = require('../../Assets/Images/noImage.png');
    return (
      <View style={articles.mainContainer}>
        <View style={articles.itemContainer}>
          <View style={articles.imageContainer}>
            <Image resizeMode='cover' style={articles.image} source={imageUrl} />
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
    console.log("before render")
    let render = <View style={articles.spineerContainer}>
      <Spinner
        visible={this.state.spinner}
        textContent={'درحال دریافت..'}
        textStyle={{ color: '#fff' }}
      />
    </View>
    if (!this.state.Loading)
      render = <SafeAreaView >
        <FlatList
          data={this.props.ArticlesData}
          renderItem={({ item }) => this.Items(item)}
          keyExtractor={item => item.ID}
          onEndReached={this._handleLoadMore}
          onEndReachedThreshold={0.5}
          ListFooterComponent={this._renderFooter}
          onRefresh={this._handleRefresh}
          refreshing={this.state.refreshing}
        />
      </SafeAreaView>
    return render;
  }

  render() {
    return (
      this.beforRender()
    )
  }
}

const mapDispatchToProps = function (dispatch) {
  return {
    GetArticles: (params) => dispatch(getAllArticles(params))
  }
}

const mapStateToProps = function (state) {
  return {
    ArticlesData: state.Articles.List
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Articles);