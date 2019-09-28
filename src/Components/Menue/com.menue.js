// import React from 'react'
// import { createDrawerNavigator, DrawerActions } from 'react-navigation-drawer'
// import Icon from 'react-native-ionicons'
// import Header from '../Header/com.header.js'
// import Article from '../Article/com.article.js'

// const Menu = createDrawerNavigator(
//   {
//     testOne: { screen: Article },
//   },
//   {
//     drawerWidth: 300,
//     drawerPosition: 'left',
//     initialRouteName: testOne,
//   }
// )
// const MenuContainer = () => {
//   let pressMenu

//   return (
//     <React.Fragment>
//       <Header
//         backgroundColor="white"
//         leftComponent={
//           <Icon
//             name="menu"

//           />
//         }
//       />
//       <Menu
//         ref={navigatorRef => { pressMenu = navigatorRef }}
//       />
//     </React.Fragment>
//   )
// }
// export default MenuContainer