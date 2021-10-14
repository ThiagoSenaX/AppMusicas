import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  FlatList,
  Image,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Musica(props) {
  return (
    <View style={estilo.container}>
      <ImageBackground
        style={estilo.fundoimg}
        resizeMode="cover"
        source={require('../../assets/bg-artistas.png')}>
        <ScrollView  style={[estilo.scrollview]}>
          <Text style={estilo.titulo}>
            <MaterialCommunityIcons name="music" size="40" color="white" />{' '}
            Músicas + Ouvidas
          </Text>
          <FlatList
            data={musicas}
            keyExtractor={(item) => {
              item.uid.toString();
            }}
            renderItem={({ item }) => (
              <View style={estilo.musica}>
                
                <View style={estilo.centro}>
                  <TouchableOpacity onPress={()=>{props.navigation.navigate(item.buttom)}}>
                    <Text style={estilo.txtArtista}>{item.nome}</Text>
                    <Image style={estilo.img} source={{uri: item.imagem}} />
                  </TouchableOpacity>
                </View>

                <View style={estilo.rede}>
                  
                  <Text style={estilo.curtidas}>
                    <MaterialCommunityIcons
                      name="thumb-up"
                      size="25"
                      color="#00aeff"
                    />{' '}
                    {item.like} {"\n"}Curtidas
                  </Text>
                  <Text style={estilo.reproducoes}>
                    <MaterialCommunityIcons
                      name="headphones"
                      size="25"
                      color="#fa285f"
                    />{' '}
                    {item.reproducoes} {"\n"}Reproduções
                  </Text>
                
                </View>
              
              </View>
            )}
          />
        </ScrollView>
      </ImageBackground>
    </View>
  );
}

const musicas = [
  {
    uid: 1,
    nome: 'Lose Your Self',
    like: '368M',
    imagem:
      'https://pbs.twimg.com/media/Ema1tc0W4AIBEz-.jpg',
    reproducoes: '1.2B',
    buttom: 'LoseYourSelf'
  },
  {
    uid: 2,
    nome: 'Industry Baby',
    like: '300M',
    imagem: 'https://palcopop.com/wp-content/uploads/2021/07/lil-nas-x-youtube-industry-baby.jpg',
    reproducoes: '774M',
    buttom: 'IndustryBaby'
  },
  {
    uid: 3,
    nome: 'Blinding Lights',
    like: '280M',
    imagem: 'https://upload.wikimedia.org/wikipedia/pt/a/a3/Capa_de_Blinding_Lights.png',
    reproducoes: '872M',
    buttom: 'BlindingLights'
  },
  {
    uid: 4,
    nome: 'Bad Guy',
    like: '223M',
    imagem:
      'https://api.dialbrasil.com.br/files/Contents/image_large_name/20210223164023Billie-Eilish-libera-video-inusitado-de-versao-ao-vivo-do-single-ilomilo.jpg',
    reproducoes: '962M',
    buttom: 'BadGuy'
  },
  
];

const estilo = StyleSheet.create({
  container: {
    flex: 1,
  },

  titulo: {
    textAlign: 'center',
    fontSize: 26,
    fontWeight: 800,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginTop: 30,
    marginBottom: 30,
  },

  fundoimg: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },

  musica: {
    marginEnd: 40,
    marginStart: 40,
    marginBottom: 35,
    justifyContent: 'center',
    backgroundColor: 'rgba(56, 56, 65, 0.81)',
    padding: 10,
    borderRadius: 10,
    alignContent: 'center',
    textAlign: 'center',
    shadowColor: '#00FFFF',
    shadowRadius: 25,
    borderColor: '#00FFFF',
    borderWidth: 2          
  },

  txtArtista: {
    fontSize: 25,
    fontWeight: 700,
    fontWeight: 'bold',
    color: '#00FFFF',
  },

  curtidas: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },

  reproducoes: {
    fontWeight: 'bold',
    color: '#FFFFFF',
  },

  rede: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 5,
  },

  img: {
    margin: 10,
    width: 120,
    height: 120,
    borderRadius: 100,
    borderColor: '#CFFFFF',
    borderWidth: 4
  },

  centro: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },

  scrollview: {
    backgroundColor: 'transparent',
  },
});
