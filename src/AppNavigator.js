import { createStackNavigator } from 'react-navigation'
import Home from './scenes/home'
import Details from './scenes/details'
import List from './scenes/list'
import Todo from './scenes/todo'

const AppNavigator = createStackNavigator({
  Home,
  Details,
  List,
  Todo,
}, {
  initialRouteName: 'Todo'
})

export default AppNavigator
