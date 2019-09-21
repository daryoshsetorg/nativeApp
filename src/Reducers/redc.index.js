import { combineReducers } from 'redux'
import initialState from '../../Store.js';
import Articles from '../Reducers/redc.articles'

const appReducer = combineReducers({
  Articles
})

const rootReducer = (state, action) => {
  if (action.type === 'STORE_RESET') {
    state = initialState;
  }

  return appReducer(state, action);
}

export default rootReducer