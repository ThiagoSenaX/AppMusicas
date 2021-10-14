import * as React from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, ScrollView} from 'react-native';

export default function LoseYourSelf() {
  return (
    <View style={estilo.container}>
       
        <ImageBackground
        style={estilo.fundoimg}
        resizeMode="cover"
        source={require('../../assets/bg-artistas.png')}>
        <ScrollView>
        <View style={estilo.artista}>
        <Image style={estilo.img} source={{ uri: 'https://rapforte.com/wp-content/uploads/2021/06/the-weeknd.jpg',}}/><Text style={estilo.artistatxt}>The Weeknd{"\n"}Blinding Lights</Text></View>
        

          <View style={estilo.centro}>
 
          </View>          
          
          <View style={estilo.box}>
          <Text style={estilo.subtitulo}>Letra da Música:</Text>
          <Text style={estilo.letra}>
                                    {"\n"}Yeah{"\n"}{"\n"}
                                    I've been tryin' to call{"\n"}
                                    I've been on my own for long enough{"\n"}
                                    Maybe you can show me how to love, maybe{"\n"}{"\n"}
                                    I'm going through withdrawals{"\n"}
                                    You don't even have to do too much{"\n"}
                                    You can turn me on with just a touch, baby{"\n"}{"\n"}
                                    I look around and{"\n"}
                                    Sin City's cold and empty (oh){"\n"}
                                    No one's around to judge me (oh){"\n"}
                                    I can't see clearly when you're gone{"\n"}{"\n"}
                                    I said, ooh, I'm blinded by the lights{"\n"}
                                    No, I can't sleep until I feel your touch{"\n"}
                                    I said, ooh, I'm drowning in the night{"\n"}
                                    Oh, when I'm like this, you're the one I trust{"\n"}
                                    Hey, hey, hey{"\n"}{"\n"}
                                    I'm running out of time{"\n"}
                                    'Cause I can see the sun light up the sky{"\n"}
                                    So I hit the road in overdrive, baby, oh{"\n"}{"\n"}
                                    The city's cold and empty (oh){"\n"}
                                    No one's around to judge me (oh){"\n"}
                                    I can't see clearly when you're gone{"\n"}{"\n"}
                                    I said, ooh, I'm blinded by the lights{"\n"}
                                    No, I can't sleep until I feel your touch{"\n"}
                                    I said, ooh, I'm drowning in the night{"\n"}
                                    Oh, when I'm like this, you're the one I trust{"\n"}{"\n"}
                                    I'm just walking by to let you know (by to let you know){"\n"}
                                    I could never say it on the phone (say it on the phone){"\n"}
                                    Will never let you go this time (ooh){"\n"}{"\n"}
                                    I said, ooh, I'm blinded by the lights{"\n"}
                                    No, I can't sleep until I feel your touch{"\n"}
                                    Hey, hey, hey{"\n"}{"\n"}
                                    Hey, hey, hey{"\n"}{"\n"}
                                    I said, ooh, I'm blinded by the lights{"\n"}
                                    No, I can't sleep until I feel your touch</Text>{"\n"}
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
    marginTop: 10,
    marginBottom: 20,
  },

  artistatxt:{
    marginLeft: 15,
    marginTop: 50,
    fontSize: 25,
    color: '#F0FFFF',
    fontWeight: '700'
   },

  subtitulo:{
    fontSize: 26,
    fontWeight: 'bold',
    marginStart:15,
    color: '#FFFFFF',

  },

  artista:{
    flexDirection: 'row',
  },

  fundoimg:{
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
  
  img:{
  marginTop: 50,
  marginLeft: 20,
  width: 70,
  height: 70,
  borderRadius: 100,
  borderColor: '#00FFFF',
  borderWidth: 2,
  },

  centro:{
    justifyContent: "center",
    alignItems: "center",
  },

  letra:{
    fontSize: 14,
    color: '#FFFFFF',
    margin: 15
  },

  box:{
    backgroundColor: '#00000090',
    borderRadius: 15,
    margin:10,
    marginTop:30,
    padding: 10,
    

  }

});

