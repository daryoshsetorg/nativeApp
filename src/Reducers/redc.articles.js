import * as types from '../Actions/ac.link'


export default function Articles(state = {}, action) {
  switch (action.type) {
    case types.GET_ALL_ARTICLES:
      {
        return {
          List: action.payload.Superlinks,
          TotalPage: action.payload.Count
        }

      }
    default: return state

  }

}