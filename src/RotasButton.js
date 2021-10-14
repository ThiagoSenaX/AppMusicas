import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import PostMalone from './artista/PostMalone';
import Eminem from './artista/Eminem';
import BillieEilish from './artista/BillieEilish';
import LilNasX from './artista/LilNasX';
import Drake from './artista/Drake';
import TravisScott from './artista/TravisScott';

import Artista from './pages/Artista';

import LoseYourSelf from './musica/LoseYourSelf';
import BadGuy from './musica/BadGuy';
import BlindingLights from './musica/BlindingLights';
import IndustryBaby from './musica/IndustryBaby';

import Musica from './pages/Musica';


const Stack = createStackNavigator();

export default function RotasButton(){
  return(
    <Stack.Navigator>
      <Stack.Screen name='Artista' component={Artista} options = {{ headerShown: false}}/>
      <Stack.Screen name='PostMalone' component={PostMalone} options = {{title:"Post Malone"}}/>
      <Stack.Screen name='Eminem' component={Eminem} options = {{title:"Eminem"}}/>
      <Stack.Screen name='BillieEilish' component={BillieEilish} options = {{title:"Billie Eilish"}}/>
      <Stack.Screen name='Drake' component={Drake} options = {{title:"Drake"}}/>
      <Stack.Screen name='LilNasX' component={LilNasX} options = {{title:"Lil Nas X"}}/>
      <Stack.Screen name='TravisScott' component={TravisScott} options = {{title:"Travis Scott"}}/>

      <Stack.Screen name='Musica' component={Musica} options = {{ headerShown: false}}/>
      <Stack.Screen name='LoseYourSelf' component={LoseYourSelf} options = {{title:"Lose Your Self"}}/>
      <Stack.Screen name='BadGuy' component={BadGuy} options = {{title:"Bad Guy"}}/>
      <Stack.Screen name='BlindingLights' component={BlindingLights} options = {{title:"Blinding Lights"}}/>
      <Stack.Screen name='IndustryBaby' component={IndustryBaby} options = {{title:"Industry Baby"}}/>
    </Stack.Navigator>
  );
};