import { createAction } from 'redux-actions'
import { GET_REPOS } from '../types'

export const listRepos = createAction(GET_REPOS, user => ({
  request: {
    url: `/users/${user}/reposdd`
  }
}))
