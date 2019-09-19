
import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Welcome from './src/Components/Welcome/com.welcome.js';
import Main from './src/Components/Main/com.main.js'
const stack = createStackNavigator(
  {
    // welcome: {
    //   screen: Welcome,
    //   navigationOptions: () => ({
    //     header: null
    //   })
    // },
    list: {
      screen: Main,
      navigationOptions: () => ({
        header: null
      })
    }
  });
const AppContainer = createAppContainer(stack);

class App extends React.Component {
  render() {
    return (
      <AppContainer />
    );
  }

};

export default App;
