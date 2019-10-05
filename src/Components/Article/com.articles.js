import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity, SafeAreaView, FlatList, ActivityIndicator } from 'react-native'
import articles from '../../Assets/Styles/articles'
import { connect } from 'react-redux'
import { getAllArticles } from '../../Actions/ac.articles'
import Spinner from 'react-native-loading-spinner-overlay';
import { HyperImage } from '../../Utilities/Url.js'
import HeaderArticle from '../HeaderArticle/com.header.article.js'



class Articles extends Component {
  state = {
    data: [],
    Loading: true,
    Filter: {
      MediaTypes: "all",
      PageIndex: 1,
      PageSize: 5
    },
    loadingMore: false,
    Article: {
      ID: 0,
      Title: '',
      SubTitle: ''
    }
  }
  componentDidMount() {
    this.fetchData();
  }

  sendData = (id) => {
    let filterArticle = this.state.data.filter((article) => {
      return article.ID === id
    })
    this.setState(() => {
      this.state.Article = filterArticle[0]
    }, () => {
      this.props.ArticleParam.navigate("article", this.state.Article);
    })
  }

  fetchData = () => {
    this.props.GetArticles(this.state.Filter).then(() => {
      var a = this.state.data;
      var b = this.props.ArticlesData;
      this.state.data.push.apply(a, b);
      this.setState({ Loading: false, loadingMore: false });
    });
  }

  _handleLoadMore = () => {
    console.log("on handle more")
    var index = this.state.Filter.PageIndex + 1;
    this.setState(() => {
      this.state.Filter.PageIndex = index;
      this.state.loadingMore = true;
    }, this.fetchData());
  };

  _renderFooter = () => {
    if (!this.state.loadingMore) return null;

    return (
      <View
        style={{
          position: 'relative',
          width: '100%',
          height: 100,
          paddingVertical: 20,
          borderTopWidth: 1,
          marginTop: 10,
          marginBottom: 10,
          borderColor: '#ccc'
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

    console.log(imageUrl);
    return (
      <View style={articles.mainContainer}>
        <View style={articles.itemContainer}>
          <TouchableOpacity onPress={() => {
            this.sendData(params.ID)
          }} style={articles.imageContainer}>
            <Image resizeMode='cover' style={articles.image} source={imageUrl} />
          </TouchableOpacity>
          <View style={articles.textContainer}>
            <View style={articles.title}>
              <TouchableOpacity>
                <Text >{params.Title}</Text>
              </TouchableOpacity>
            </View>
            <View style={articles.subTitle}>
              <Text>{params.Description}</Text>
            </View>
          </View>

          <View style={articles.oprationContainre}>
            <TouchableOpacity style={articles.oprationItems}>
              <Image style={{ height: 20, width: 20 }}
                source={require('../../Assets/Images/chat.png')} />
            </TouchableOpacity>
            <TouchableOpacity style={articles.oprationItems}>
              <Image style={{ height: 20, width: 20 }}
                source={require('../../Assets/Images/like.png')} />
            </TouchableOpacity>
            <View style={articles.dateItems}>
              <Text>تاریخ : {params.Date}</Text>
            </View>
          </View>
        </View>
      </View>
    )
  }

  beforRender() {
    let render = <View style={articles.spineerContainer}>
      <Spinner
        visible={true}
        textContent={'درحال دریافت..'}
        textStyle={{ color: '#fff' }}
      />
    </View>
    if (!this.state.Loading)
      render = <SafeAreaView >
        <FlatList
          data={this.state.data}
          renderItem={({ item }) => this.Items(item)}
          keyExtractor={item => item.ID}
          onEndReachedThreshold={0.5}
          onEndReached={this._handleLoadMore}
          ListFooterComponent={this._renderFooter}
          ListHeaderComponent={HeaderArticle}
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