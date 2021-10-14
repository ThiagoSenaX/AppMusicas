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

        <Text style={estilo.titulo}>Billie Eilish</Text>

          <View style={estilo.centro}>
            <ScrollView horizontal={true}>

            <View style={estilo.descricao}>
            <Image style={estilo.img} source={{ uri: 'https://rollingstone.uol.com.br/media/_versions/billie-eilish-spotify-matt_winkelmeyer-getty_images_for_spotify_widelg.jpg',}}/>
            </View>

            <View style={estilo.descricao}>
            <Image style={estilo.img} source={{ uri: 'https://palcopop.com/wp-content/uploads/2020/11/2020-01-30T124112Z_1_LYNXMPEG0T18P_RTROPTP_4_AWARDS-GRAMMYS.jpg',}}/>
            </View>

          </ScrollView> 
          </View>          
          
          <View style={estilo.box}>
          <Text style={estilo.subtitulo}>Quem é?</Text>
          <Text style={estilo.bio}>Billie Eilish Pirate Baird O'Connell (Los Angeles, 18 de dezembro de 2001), mais conhecida como Billie Eilish, é uma cantora e compositora estadunidense. Ela ganhou popularidade em 2016, quando lançou seu single de estreia "Ocean Eyes" no SoundCloud,[1] posteriormente lançado pelas gravadoras Darkroom e Interscope Records. A canção foi escrita e produzida por seu irmão Finneas O'Connell, com quem ela colabora em músicas e shows ao vivo.</Text>
       </View>
      
      
       <Text style={estilo.subtitulo}>Músicas Populares</Text>
       
       <View style={estilo.centro}>
            <ScrollView horizontal={true}>

            <View style={estilo.descricao}>
            <Image style={estilo.musicas} source={{ uri: 'https://p2.trrsf.com/image/fget/cf/1200/1200/filters:quality(85)/images.terra.com/2020/11/12/billieeilish-badguy-yellowoutfit.jpg',}}/>
            <Text style={estilo.descricao}>Bad Guy</Text>
            </View>

            <View style={estilo.descricao}>
            <Image style={estilo.musicas} source={{ uri: 'https://i.pinimg.com/originals/40/d7/25/40d72565b6fd0cc66aea3528d8f19e90.png',}}/>
            <Text style={estilo.descricao}>When the Party's O</Text>
            </View>

            <View style={estilo.descricao}>
            <Image style={estilo.musicas} source={{ uri: 'https://i.pinimg.com/564x/cd/8a/aa/cd8aaa23d373a812284db79e35be4e28.jpg',}}/>
            <Text style={estilo.descricao}>Bury a Friend</Text>
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
