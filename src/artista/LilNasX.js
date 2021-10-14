import * as React from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, ScrollView} from 'react-native';

export default function LilNasX() {
  return (
    <View style={estilo.container}>
       
        <ImageBackground
        style={estilo.fundoimg}
        resizeMode="cover"
        source={require('../../assets/bg-artistas.png')}>
        <ScrollView>

        <Text style={estilo.titulo}>Lil Nas X</Text>

          <View style={estilo.centro}>
            <ScrollView horizontal={true}>

            <View style={estilo.descricao}>
            <Image style={estilo.img} source={{ uri: 'https://portalrapmais.com/wp-content/uploads/2019/07/Lil-Nas-X-1.jpg',}}/>
            </View>

            <View style={estilo.descricao}>
            <Image style={estilo.img} source={{ uri: 'https://studiosol-a.akamaihd.net/tb/letras-blog/wp-content/uploads/2021/06/8c55f48-lil-nas-x-1024x683.jpg',}}/>
            </View>

            

          </ScrollView> 
          </View>          
          
          <View style={estilo.box}>
          <Text style={estilo.subtitulo}>Quem é?</Text>
          <Text style={estilo.bio}>Montero Lamar Hill (Lithia Springs, 9 de abril de 1999), conhecido por seu nome artístico Lil Nas X, é um rapper, cantor e compositor norte-americano. Ele ganhou destaque com o lançamento de seu single de country rap "Old Town Road", que se tornou viral no início de 2019 antes de subir nas paradas musicais internacionalmente.</Text>
       </View>
      
      
       <Text style={estilo.subtitulo}>Músicas Populares</Text>
       
       <View style={estilo.centro}>
            <ScrollView horizontal={true}>

            <View style={estilo.descricao}>
            <Image style={estilo.musicas} source={{ uri: 'https://media.gqmagazine.fr/photos/5de646ebc6b0590008eb2829/16:9/w_2560%2Cc_limit/thumbnail_lil-nas.jpg',}}/>
            <Text style={estilo.descricao}>Old Town Road</Text>
            </View>

            <View style={estilo.descricao}>
            <Image style={estilo.musicas} source={{ uri: 'https://palcopop.com/wp-content/uploads/2021/07/lil-nas-x-youtube-industry-baby.jpg',}}/>
            <Text style={estilo.descricao}>Industry Baby</Text>
            </View>

            <View style={estilo.descricao}>
            <Image style={estilo.musicas} source={{ uri: 'https://i0.wp.com/br.nacaodamusica.com/wp-content/uploads/2021/07/lil-nas-x.jpg',}}/>
            <Text style={estilo.descricao}>Montero</Text>
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
