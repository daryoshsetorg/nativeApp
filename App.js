
import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
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
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }

};

export default App;
