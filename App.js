import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Home from './src/pages/Home';
import {NavigationContainer} from '@react-navigation/native';
import RotasTab from './src/RotasTab';

export default function App() {
  return (
    <NavigationContainer>
     <RotasTab />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

  
});
