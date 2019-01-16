import { Alert } from 'react-native'
import { handleActions } from 'redux-actions'
import { GET_REPOS, GET_REPOS_SUCCESS, GET_REPOS_FAIL } from '../types'

export default handleActions({
  [GET_REPOS] (state, action) {
    console.log(GET_REPOS, action)
    return {
      ...state,
      loading: true
    }
  },
  [GET_REPOS_SUCCESS] (state, action) {
    console.log(GET_REPOS_SUCCESS, action)
    return {
      ...state,
      loading: false,
      repos: action.payload.data
    }
  },

  [GET_REPOS_FAIL] (state, action) {

    Alert.alert('123 GET_REPOS_FAIL')

    console.log(GET_REPOS_FAIL, action.error.message)
    console.log(action)
    return {
      ...state,
      loading: false,
      error: action.error
    }
  },
}, {
  repos: [],
  loading: false,
  error: null
})
