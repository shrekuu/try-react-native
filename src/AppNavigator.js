import { createStackNavigator } from 'react-navigation'
import Home from './scenes/home'
import Details from './scenes/details'
import List from './scenes/list'
import Todo from './scenes/todo'
import RepoList from './scenes/repo-list/RepoList'
import SliderView from './scenes/slider-view'
import CarouselView from './scenes/carousel-view'

const AppNavigator = createStackNavigator(
  {
    Home,
    Details,
    List,
    Todo,
    RepoList,
    SliderView,
    CarouselView,
  },
  {
    initialRouteName: 'CarouselView',
  },
)

export default AppNavigator
