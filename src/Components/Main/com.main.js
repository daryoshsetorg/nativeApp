import React, { Component } from 'react'
import { View, Image } from 'react-native'
import styles from '../../Assets/Styles/main.js'

import Articles from '../Article/com.articles'
import Header from '../Header/com.header.js'

class Main extends Component {
  // toggleDrawer = () => {
  //   console.log(this.props.navigationProps);
  //   this.props.navigationProps.toggleDrawer();
  // }
  static navigationOptions = ({ navigation }) => ({
    header: <Header navigation={navigation} />,
  });
  render() {
    return (
      <View styles={styles.mainSection}>
        <Articles />
      </View>
    )
  }
}
export default Main;

