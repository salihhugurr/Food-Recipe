import React from 'react';
import { createAppContainer,createSwitchNavigator} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from "react-navigation-drawer";

import DrawerMenu from "./components/DrawerMenu";
import Main from "./components/Main";
import Home from "./components/Home";



const HomeNavigator= createStackNavigator({
  Main:Main,

},{
  headerMode:"none"
});
const AppNavigator= createStackNavigator({
  Home:Home,




},{
  mode: 'modal',
  navigationOptions: { header: { visible: false } }
});
const DrawerNavigator=createDrawerNavigator({
  Home:AppNavigator,

},{
  contentComponent:DrawerMenu,
  drawerPosition:"right",
  drawerWidth:"60%"
});

const MainNavigator = createSwitchNavigator({
  home:HomeNavigator,
  app:DrawerNavigator,

},{
  initialRouteName:'home'
});



export default createAppContainer(MainNavigator);