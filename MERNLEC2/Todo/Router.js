import React from 'react';
import {Router, Scene} from 'react-native-router-flux'
import Welcome from './src/scripts/components/Welcome'
import Add from './src/scripts/components/Add'
export default function Routers(){
  return(
    <Router>
      <Scene key="root">
    <Scene key="Home" component={Welcome} hideNavBar/>
    <Scene key="Add" component={Add} hideNavBar/>
      </Scene>
    </Router>
  )
}