import * as React from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, ScrollView} from 'react-native';

export default function Drake() {
  return (
    <View style={estilo.container}>
       
        <ImageBackground
        style={estilo.fundoimg}
        resizeMode="cover"
        source={require('../../assets/bg-artistas.png')}>
        <ScrollView>

        <Text style={estilo.titulo}>Drake</Text>

          <View style={estilo.centro}>
            <ScrollView horizontal={true}>

            <View style={estilo.descricao}>
            <Image style={estilo.img} source={{ uri: 'https://f.i.uol.com.br/fotografia/2020/04/08/15863776255e8e339902312_1586377625_3x2_md.jpg',}}/>
            </View>

            <View style={estilo.descricao}>
            <Image style={estilo.img} source={{ uri: 'https://studiosol-a.akamaihd.net/uploadfile/letras/fotos/f/a/6/6/fa661213485b58837579fd312e40f3c2.jpg',}}/>
            </View>

          </ScrollView> 
          </View>          
          
          <View style={estilo.box}>
          <Text style={estilo.subtitulo}>Quem é?</Text>
          <Text style={estilo.bio}>Aubrey Drake Graham (Toronto, 24 de outubro de 1986), conhecido por seu nome artístico Drake, é um rapper, cantor, compositor, produtor musical, ator e empresário canadense. Drake inicialmente ganhou reconhecimento como ator na série de televisão de drama adolescente Degrassi: The Next Generation, no início dos anos 2000. </Text>
       </View>
      
      
       <Text style={estilo.subtitulo}> Músicas Populares</Text>
       
       <View style={estilo.centro}>
            <ScrollView horizontal={true}>

            <View style={estilo.descricao}>
            <Image style={estilo.musicas} source={{ uri: 'https://i1.sndcdn.com/artworks-000463468011-ws8yh6-t500x500.jpg',}}/>
            <Text style={estilo.descricao}>God's Plan</Text>
            </View>

            <View style={estilo.descricao}>
            <Image style={estilo.musicas} source={{ uri: 'https://img.discogs.com/6YvhE-9fxA0Pvm3sinA77sT_Oq0=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-17795731-1615486969-6565.jpeg.jpg',}}/>
            <Text style={estilo.descricao}>Toosie Slide</Text>
            </View>

            <View style={estilo.descricao}>
            <Image style={estilo.musicas} source={{ uri: 'https://i.ytimg.com/vi/JFm7YDVlqnI/maxresdefault.jpg',}}/>
            <Text style={estilo.descricao}>Laught Now Cry L.</Text>
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
    color: '#E0FFFF',

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
  shadowOffset: (1,1,10,'#00FF00')
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
