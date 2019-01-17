import { createStackNavigator } from 'react-navigation'
import Home from './scenes/home'
import Details from './scenes/details'
import List from './scenes/list'
import Todo from './scenes/todo'
import RepoList from './scenes/repo-list/RepoList'
import SliderView from './scenes/slider-view'
import CarouselView from './scenes/carousel-view'
import Login from './scenes/login'
import HtmlView from './scenes/html-view'
import WebviewView from './scenes/webview-view'

const AppNavigator = createStackNavigator(
  {
    Home,
    Details,
    List,
    Todo,
    RepoList,
    SliderView,
    CarouselView,
    Login,
    HtmlView,
    WebviewView,
  },
  {
    initialRouteName: 'WebviewView',
  },
)

export default AppNavigator
