import React, { Component } from 'react'
import { View, Text, DrawerLayoutAndroid, YellowBox, Dimensions } from 'react-native'
import styles from '../../Assets/Styles/header'
import Icon from 'react-native-ionicons'
import { NavigationActions } from 'react-navigation'
// import Drawer from '../Drawer/com.drawer'
// import { createAppContainer } from 'react-navigation';
// import { createStackNavigator } from 'react-navigation-stack';
// import { createDrawerNavigator } from 'react-navigation-drawer'



export default class Header extends Component {

  // toggleDrawer = () => {
  //   console.log(this.props.navigationProps);
  //   this.props.navigationProps.toggleDrawer();
  // }

  render() {
    return (
      <View style={styles.mainSection}>
        <View style={styles.menuIcon}>
          <Icon android="menu" size={20} onPress={() => {
            this.props.navigation.openDrawer();
          }} color="#000" />

        </View>
        <View style={styles.logoArea}>
          <Text>هایپر مدیا</Text>
        </View>
      </View>
    )
  }
}

// class Custom_Side_Menu extends Component {
//   render() {
//     return (
//       <View style={styles.mainSection}>
//         <View style={styles.menuIcon}>
//           <Icon android="menu" size={20} color="#000" />
//         </View>
//         <View style={styles.logoArea}>
//           <Text>هایپر مدیا</Text>
//         </View>
//       </View>
//     );
//   }
// }

// class MainActivity extends Component {
//   constructor(props) {
//     super(props);
//     YellowBox.ignoreWarnings([
//       'Warning: componentWillMount is deprecated',
//       'Warning: componentWillReceiveProps is deprecated',
//     ]);
//   }

//   render() {
//     return (
//       <View >
//         <Text style={{ fontSize: 23 }}> This is Activity - 1 </Text>
//       </View>
//     );
//   }
// }
// const FirstActivity_StackNavigator = createStackNavigator({
//   First: {
//     screen: MainActivity,
//     navigationOptions: ({ navigation }) => ({
//       title: 'MainActivity',
//       // headerLeft: <Header navigationProps={navigation} />,
//     })
//   },
// });

// export default MyDrawerNavigator = createDrawerNavigator({
//   MainStack: {
//     screen: FirstActivity_StackNavigator
//   },
// },
//   {
//     contentComponent: Custom_Side_Menu,
//     drawerWidth: Dimensions.get('window').width - 130,
//   });


