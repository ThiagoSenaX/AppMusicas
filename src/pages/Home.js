import * as React from 'react';
import {View,Text,StyleSheet,ImageBackground} from 'react-native';

export default function Home(){
  return(
    <View style={estilo.container}>
      <ImageBackground style={estilo.fundoimg} resizeMode='cover' source={require('../../assets/bg-music.png')}>
        <Text style={estilo.titulo}>App de Música</Text>
      </ImageBackground>
    </View>
  );
}

const estilo = StyleSheet.create({
  container:{
    flex: 1
  },

  titulo:{
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FFFFFF',
    shadowColor: ''
  },

  fundoimg:{
    flex:1,
    justifyContent: 'center',
  }
})