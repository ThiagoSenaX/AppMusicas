import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Artista from './RotasButton';
import Musica from './RotasButtonM';
import Home from './pages/Home';

const Tab = createBottomTabNavigator();

export default function RotasTab() {
  return (
    <Tab.Navigator initialRouteName="Home"
    tabBarOptions={{
      activeTintColor: '#00FFFF',
      inactiveTintColor: '#FFFFFF',
      activeBackgroundColor: '#696969'
    }}
    screenOptions={{ 
      tabBarStyle: { backgroundColor: '#363636'},
      headerShown: false 
    }}>

      <Tab.Screen 
      name="Artista"
      component={Artista}
      options= {{
        tabBarLabel: 'Artista', 
        tabBarIcon:({color,size})=><MaterialCommunityIcons name="star" size="34" color="#00FFFF" />}} 
          />

      <Tab.Screen 
      name="Home"
      component={Home}
      options= {{
       tabBarLabel: 'Home',
       tabBarIcon:({color,size})=><MaterialCommunityIcons name="home" size="34" color="#00FFFF" />}} />

      <Tab.Screen 
      name="Musica" 
      component={Musica}
      options= {{
        tabBarLabel: 'Musica', 
        tabBarIcon:({color,size})=><MaterialCommunityIcons name="music" size="34" color="#00FFFF" />}} />
    </Tab.Navigator>
  );
}
