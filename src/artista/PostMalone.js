import * as React from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, ScrollView} from 'react-native';

export default function PostMalone() {
  return (
    <View style={estilo.container}>
       
        <ImageBackground
        style={estilo.fundoimg}
        resizeMode="cover"
        source={require('../../assets/bg-artistas.png')}>
        <ScrollView>

        <Text style={estilo.titulo}>Post Malone</Text>

          <View style={estilo.centro}>
            <ScrollView horizontal={true}>

            <View style={estilo.descricao}>
            <Image style={estilo.img} source={{ uri: 'https://i1.wp.com/cloud.estacaonerd.com/wp-content/uploads/2020/07/23191232/Post-Malone-HyperX-Capa.jpg?fit=1280%2C720&ssl=1',}}/>
            </View>

            <View style={estilo.descricao}>
            <Image style={estilo.img} source={{ uri: 'https://bandmulti.com.br/wp-content/uploads/2020/07/Post-Malone-Feio.png',}}/>
            </View>

            <View style={estilo.descricao}>
            <Image style={estilo.img} source={{ uri: 'https://www.musicjournal.com.br/wp-content/uploads/2020/04/post-malone-1.jpg',}}/>
            </View>
          </ScrollView> 
          </View>          
          
          <View style={estilo.box}>
          <Text style={estilo.subtitulo}>Quem é?</Text>
          <Text style={estilo.bio}>Austin Richard Post, conhecido como Post Malone, é um rapper, cantor, compositor, produtor musical e ator norte-americano. Conhecido por suas tatuagens, composições introspectivas e estilo vocal lacônico, Malone ganhou aclamação por misturar uma variedade de gêneros, incluindo hip hop, R&B, pop, trap, rap rock e cloud rap. </Text>
       </View>
      
      
       <Text style={estilo.subtitulo}>Músicas Populares</Text>
       
       <View style={estilo.centro}>
            <ScrollView horizontal={true}>

            <View style={estilo.descricao}>
            <Image style={estilo.musicas} source={{ uri: 'https://i.ytimg.com/vi/ZHVKlgfiYmU/maxresdefault.jpg',}}/>
            <Text style={estilo.descricao}>Sunflower</Text>
            </View>

            <View style={estilo.descricao}>
            <Image style={estilo.musicas} source={{ uri: 'https://tracklist.com.br/wp-content/uploads/2019/09/cropped-post_malone_circles.png',}}/>
            <Text style={estilo.descricao}>Circles</Text>
            </View>

            <View style={estilo.descricao}>
            <Image style={estilo.musicas} source={{ uri: 'https://www.rap-up.com/app/uploads/2017/01/post-malone-congratulations.jpg',}}/>
            <Text style={estilo.descricao}>Congratulations</Text>
            </View>
          </ScrollView> 
          </View>
          </ScrollView> 
        </ImageBackground>  
    </View>
  );
}


const estilo = StyleSheet.create({
  container: {
    flex: 1,
  },

  titulo:{
    textAlign: 'center',
    fontSize: 36,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginTop: 50,
    marginBottom: 20,
  },

  subtitulo:{
    fontSize: 26,
    fontWeight: 'bold',
    marginStart:15,
    color: '#FFFFFF',

  },

  fundoimg:{
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
  
  img:{
  marginHorizontal: 15,
  width: 335,
  height: 195,
  borderRadius: 10,
  borderColor: '#00FFFF',
  borderWidth: 2,
  },

  musicas:{
  marginHorizontal: 15,
  width: 120,
  height: 120,
  borderRadius: 10,
  },

  centro:{
    justifyContent: "center",
    alignItems: "center",
  },

  descricao:{
    fontSize: 16,
    color: '#FFFFFF',
    textAlign: 'center',
    marginVertical: 15
  },

  bio:{
    fontSize: 14,
    color: '#FFFFFF',
    margin: 15
  },

  box:{
    backgroundColor: '#00000090',
    borderRadius: 15,
    margin:10,
    padding: 10,
    textAlign:'justify',
    

  }

});
