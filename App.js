import {createBottomTabNavigator, createAppContainer} from 'react-navigation';
import Home from './containers/Home';
import HShose from './containers/HShose';
import HWatch from './containers/HWatch';
import HBackpack from './containers/HBackpack';

const App = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
    },
    HShose: {
      screen: HShose
    },
    HWatch: {
      screen: HWatch
    },
    HBackpack: {
      screen: HBackpack
    }
  },
  

);

export default createAppContainer(App);