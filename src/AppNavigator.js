import { createStackNavigator } from 'react-navigation'
import Home from './scenes/home'
import Details from './scenes/details'
import List from './scenes/list'
import Todo from './scenes/todo'
import RepoList from './scenes/repo-list/RepoList'

const AppNavigator = createStackNavigator({
  Home,
  Details,
  List,
  Todo,
  RepoList,
}, {
  initialRouteName: 'RepoList'
})

export default AppNavigator
