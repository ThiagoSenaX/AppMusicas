import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import LoseYourSelf from './musica/LoseYourSelf';
import BadGuy from './musica/BadGuy';
import BlindingLights from './musica/BlindingLights';
import IndustryBaby from './musica/IndustryBaby';

import Musica from './pages/Musica';


const Stack = createStackNavigator();

export default function RotasButton(){
  return(
    <Stack.Navigator>
      <Stack.Screen name='Musica' component={Musica} options = {{ headerShown: false}}/>
      <Stack.Screen name='LoseYourSelf' component={LoseYourSelf} options = {{title:"Lose Your Self"}}/>
      <Stack.Screen name='BadGuy' component={BadGuy} options = {{title:"Bad Guy"}}/>
      <Stack.Screen name='BlindingLights' component={BlindingLights} options = {{title:"Blinding Lights"}}/>
      <Stack.Screen name='IndustryBaby' component={IndustryBaby} options = {{title:"Industry Baby"}}/>
    </Stack.Navigator>
  );
};