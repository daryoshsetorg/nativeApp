import * as types from '../Actions/ac.articles'


export default function Articles(state = {}, action) {
  switch (action.type) {
    case types.GET_ALL_ARTICLES:
      {
        return {
          List: action.payload
        }
      }
    default: return state

  }

}