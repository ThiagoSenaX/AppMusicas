import * as React from 'react';
import { View, Text, StyleSheet, ImageBackground, FlatList, Image, ScrollView, TouchableOpacity} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';

export default function Artista(props) {
  return (
    <View style={estilo.container}>
      <ImageBackground
        style={estilo.fundoimg}
        resizeMode="cover"
        source={require('../../assets/bg-artistas.png')}>
        
        <ScrollView style={[estilo.scrollview]}>
            
        

        <Text style={estilo.titulo}><MaterialCommunityIcons name="star" size="40" color="white" /> Melhores Artistas</Text>
        <FlatList 
        data={artistas}
        renderItem={({item})=>

        <View style={estilo.artista}>
         
          <View style={estilo.centro}>
            <TouchableOpacity onPress={()=>{props.navigation.navigate(item.buttom)}}>
              <Text style={estilo.txtArtista}>{item.nome}</Text>
              <Image style={estilo.img} source={{uri:item.imagem}}/>
              </TouchableOpacity>
          </View>
          
          <View style={estilo.rede}>
          
            <Text style={estilo.curtidas}>
            <MaterialCommunityIcons name="thumb-up" size="25" color="#00aeff" /> {item.like} {"\n"}Curtidas
            </Text>
            <Text style={estilo.seguidores}>
            <MaterialCommunityIcons name="heart" size="25" color="#fa285f" /> {item.seguidores} {"\n"}Seguidores</Text>
          </View>

        </View>
      

        }
        />   
        </ScrollView>   
      </ImageBackground>
    </View>
  );
}

const artistas = [
  {
    uid:1,
    nome: 'Post Malone',
    like: '1,2B',
    imagem: 'https://studiosol-a.akamaihd.net/uploadfile/letras/fotos/f/b/e/1/fbe18cd280210357f346b9b08bb78640.jpg',
    seguidores: '826M', 
    buttom: 'PostMalone'
  },
  {
    uid:2,
    nome: 'Travis Scott',
    like: '746M',
    imagem: 'https://studiosol-a.akamaihd.net/uploadfile/letras/fotos/6/2/b/0/62b02da019ef29b6f3621ed2912449ca.jpg',
    seguidores: '263M', 
    buttom: 'TravisScott'
  },
  {
    uid:3,
    nome: 'Lil Nas X',
    like: '800M',
    imagem: 'https://observatoriog.bol.uol.com.br/wordpress/wp-content/uploads/2020/01/LilNasX.jpg',
    seguidores: '286M',
    buttom: 'LilNasX' 
  },
  {
    uid:5,
    nome: 'Billie Eilish',
    like: '684M',
    imagem: 'https://media.vanityfair.com/photos/5f05db06f519da95a3b4164f/2:3/w_824,h_1236,c_limit/billie-eilish.jpg',
    seguidores: '290M', 
    buttom: 'BillieEilish'
  },
  {
    uid:5,
    nome: 'Drake',
    like: '786M',
    imagem: 'https://images.impresa.pt/blitz/2021-09-03-Drake.jpg-5cd1d869/original',
    seguidores: '310M', 
    buttom: 'Drake'
  },
  {
    uid:6,
    nome: 'Eminem',
    like: '977M',
    imagem: 'https://www.tenhomaisdiscosqueamigos.com/wp-content/uploads/2020/02/eminem-rapper-2019.jpg',
    seguidores: '296M', 
    buttom: 'Eminem'
  },
]

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
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },

  artista: {
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

  txtArtista:{
    fontSize: 25,
    fontWeight: 700,
    fontWeight: 'bold',
    color: '#00FFFF'
  },

  curtidas:{
    fontWeight: 400,
    color: '#FFFFFF'
  },

  seguidores:{
    fontWeight: 400,
    color: '#FFFFFF'
  },

  rede:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 5
  },
  
  img:{
  margin: 10,
  width: 120,
  height: 120,
  borderRadius: 100,
  borderColor: '#CFFFFF',
  borderWidth: 4
  },

  centro:{
    justifyContent: "center",
    alignItems: "center",
  },

  scrollview: {
   backgroundColor: 'transparent'
  }
});
