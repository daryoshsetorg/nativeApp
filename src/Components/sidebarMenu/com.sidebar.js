import React, { Component } from 'react'
import { Image, Button, View, TouchableOpacity, Text } from 'react-native'
import { } from 'react-navigation'
import { FlatList } from 'react-native-gesture-handler';

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
      <View>
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="بازگشت"
        />
        <View>
          <TouchableOpacity>
            <Text>لیست</Text>
          </TouchableOpacity>
        </View>
      </View>

    );
  }
}
export default Sidebar;