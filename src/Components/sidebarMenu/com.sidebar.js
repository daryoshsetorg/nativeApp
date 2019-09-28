import React, { Component } from 'react'
import { Image, Button } from 'react-native'
import { } from 'react-navigation'

class Sidebar extends Component {
  static navigationOptions = {
    drawerLabel: 'Notifications',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('../../Assets/Images/chat.png')}
        style={{ height: 30, width: 30 }}
      />
    ),
  };

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.goBack()}
        title="Go back home"
      />
    );
  }
}
export default Sidebar;