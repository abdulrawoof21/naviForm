import Home from "./src/pages/Home"
import Next from "./src/pages/Next"

import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'

const navigator=createStackNavigator({
  Home:Home,
  Next:Next,
},{
  initialRouteName:'Home',
  defaultNavigationOptions:{
    title:'Registration'
  }
})

export default createAppContainer(navigator)