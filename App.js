
import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer'

import { applyMiddleware, createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducer from './src/Reducers/redc.index';
import initialState from './Store';


const middleware = [thunk];
if (process.env.NODE_ENV !== 'production') {
  middleware.push(logger);
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancers(applyMiddleware(...middleware)));

import Welcome from './src/Components/Welcome/com.welcome.js';
import Main from './src/Components/Main/com.main.js'
import Sidebar from './src/Components/sidebarMenu/com.sidebar.js'

const st_welcom = createStackNavigator({
  welcome: {
    screen: Welcome,
  },
});

const stack = createStackNavigator(
  {
    list: {
      screen: Main
    },
  });

const drawer = createDrawerNavigator({
  MainScreen: {
    screen: stack,
    navigationOptions: {
      drawerLabel: 'خبرها'
    }
  },
  Welcome: {
    screen: st_welcom,
    navigationOptions: {
      drawerLabel: 'خوش آمدید'
    }
  }
},
  {
    initialRouteName: 'MainScreen',
    drawerWidth: 200,
    drawerPosition: 'right',
    drawerType: 'front',
    hideStatusBar: true
  }
);

const AppContainer = createAppContainer(drawer);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }

};

export default App;
