import 'react-native-gesture-handler';
import * as React from 'react';
import { Button, View, Image } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Home from './Home';
import Second from './Second';
import Trois from './Trois';
import Quatre from './Quatre';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <>
    <NavigationContainer>
 <Tab.Navigator
     >
       <Tab.Screen name="Home" component={Home}
        options={{
         tabBarIcon: () => (<Image source={require("./assets/champignon.png")} style={{width: 30, height: 30}} />)}}
         />
       <Tab.Screen name="Second" component={Second}
       options={{
         tabBarIcon: () => (<Image source={require("./assets/plante-carnivore.png")} style={{width: 30, height: 30}} />)}}/>
      <Tab.Screen name="Trois" component={Trois}
        options={{
         tabBarIcon: () => (<Image source={require("./assets/icon.png")} style={{width: 30, height: 30}} />)}}
         />
          <Tab.Screen name="Quatre" component={Quatre}
        options={{
         tabBarIcon: () => (<Image source={require("./assets/favicon.png")} style={{width: 30, height: 30}} />)}}
         />
     </Tab.Navigator>
     </NavigationContainer>
</>
  );
}