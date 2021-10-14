import * as React from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, ScrollView} from 'react-native';


export default function Eminem() {
  return (
    <View style={estilo.container}>
       
        <ImageBackground
        style={estilo.fundoimg}
        resizeMode="cover"
        source={require('../../assets/bg-artistas.png')}>
        <ScrollView>

        <Text style={estilo.titulo}>Eminem</Text>

          <View style={estilo.centro}>
            <ScrollView horizontal={true}>

            <View style={estilo.descricao}>
            <Image style={estilo.img} source={{ uri: 'https://www.tenhomaisdiscosqueamigos.com/wp-content/uploads/2020/02/eminem-rapper-2019.jpg',}}/>
            </View>

            <View style={estilo.descricao}>
            <Image style={estilo.img} source={{ uri: 'https://www.vagalume.com.br/dynimage/news19824-big.jpg',}}/>
            </View>

          </ScrollView> 
          </View>          
          
          <View style={estilo.box}>
          <Text style={estilo.subtitulo}> Quem é?</Text>
          <Text style={estilo.bio}>Marshall Bruce Mathers III, mais conhecido pelo seu nome artístico Eminem (St. Joseph, 17 de outubro de 1972), é um rapper, compositor, produtor musical e ator estadunidense. Adquiriu rápida popularidade em 1999 com o lançamento do disco The Slim Shady LP, o qual venceu o Grammy Award de Melhor Álbum de Rap do ano.</Text>
       </View>
      
      
       <Text style={estilo.subtitulo}> Músicas Populares</Text>
       
       <View style={estilo.centro}>
            <ScrollView horizontal={true}>

            <View style={estilo.descricao}>
            <Image style={estilo.musicas} source={{ uri: 'https://pbs.twimg.com/media/Ema1tc0W4AIBEz-.jpg',}}/>
            <Text style={estilo.descricao}>Lose Your Self</Text>
            </View>

            <View style={estilo.descricao}>
            <Image style={estilo.musicas} source={{ uri: 'https://img.discogs.com/zOeocTaFZg7T_cTCyWeKW_TUjLo=/fit-in/600x593/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-429259-1415454720-1867.jpeg.jpg',}}/>
            <Text style={estilo.descricao}>Without Me</Text>
            </View>

            <View style={estilo.descricao}>
            <Image style={estilo.musicas} source={{ uri: 'https://pbs.twimg.com/media/EYG-tYiWAAE17Ml.jpg',}}/>
            <Text style={estilo.descricao}>Venom</Text>
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
