import * as React from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, ScrollView} from 'react-native';

export default function Travis() {
  return (
    <View style={estilo.container}>
       
        <ImageBackground
        style={estilo.fundoimg}
        resizeMode="cover"
        source={require('../../assets/bg-artistas.png')}>
        <ScrollView>

        <Text style={estilo.titulo}>Travis Scott</Text>

          <View style={estilo.centro}>
            <ScrollView horizontal={true}>

            <View style={estilo.descricao}>
            <Image style={estilo.img} source={{ uri: 'https://portalrapmais.com/wp-content/uploads/2020/04/travis-scott-1.jpg',}}/>
            </View>

            <View style={estilo.descricao}>
            <Image style={estilo.img} source={{ uri: 'https://pt.unbilgi.com/wp-content/uploads/2021/02/Travis-Scott-770x433.jpg',}}/>
            </View>

          </ScrollView> 
          </View>          
          
          <View style={estilo.box}>
          <Text style={estilo.subtitulo}>Quem é?</Text>
          <Text style={estilo.bio}>Jacques Berman Webster II (Houston, 30 de abril de 1991), mais conhecido por seu nome artístico Travis Scott (antes estilizado como Travi$ Scott), é um rapper, compositor e produtor musical norte-americano. Em 2012, Scott assinou seu primeiro grande contrato com a gravadora Epic Records. Em novembro do mesmo ano, Scott assinou um contrato com a GOOD Music, gravadora de Kanye West.</Text>
       </View>
      
      
       <Text style={estilo.subtitulo}>Músicas Populares</Text>
       
       <View style={estilo.centro}>
            <ScrollView horizontal={true}>

            <View style={estilo.descricao}>
            <Image style={estilo.musicas} source={{ uri: 'https://i1.sndcdn.com/artworks-XMwmDzKziz5RjWJZ-s2C7Fg-t500x500.jpg',}}/>
            <Text style={estilo.descricao}>Sicko Mode</Text>
            </View>

            <View style={estilo.descricao}>
            <Image style={estilo.musicas} source={{ uri: 'https://i.scdn.co/image/ab67616d0000b273f54b99bf27cda88f4a7403ce',}}/>
            <Text style={estilo.descricao}>Goosebumps</Text>
            </View>

            <View style={estilo.descricao}>
            <Image style={estilo.musicas} source={{ uri: 'https://m.media-amazon.com/images/I/71DI8QfTkzL._AC_SS450_.jpg',}}/>
            <Text style={estilo.descricao}>Highest in the Room</Text>
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
