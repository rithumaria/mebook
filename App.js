import React from 'react';
import { createDrawerNavigator } from 'react-navigation';
import { HomeScreen } from './Home';
import { ViewerScreen } from './Viewer';
import { AboutScreen } from './About';
import { ShelfScreen } from './Shelf';
import { SearchScreen } from './Search';

const RootStack = createDrawerNavigator (
  {
    Home: HomeScreen,
    Shelf: ShelfScreen,
		Search: SearchScreen,
    Viewer: ViewerScreen,
    About: AboutScreen,
  },
  {
    initialRouteName: 'Home'
  }
);
export default class App extends React.Component {
  render() {
    return (
      <RootStack />
    );
  }
}
