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
        <Image style={estilo.img} source={{ uri: 'https://i.pinimg.com/originals/d9/41/9f/d9419f978706c01b9933757699d62577.jpg',}}/><Text style={estilo.artistatxt}>Billie Eilish{"\n"}Bad Guy</Text></View>
        

          <View style={estilo.centro}>
 
          </View>          
          
          <View style={estilo.box}>
          <Text style={estilo.subtitulo}>Letra da Música:</Text>
          <Text style={estilo.letra}>
                                    {"\n"}White shirt now red, my bloody nose{"\n"}
                                    Sleepin', you're on your tippy toes{"\n"}
                                    Creepin' around like no one knows{"\n"}
                                    Think you're so criminal{"\n"}
                                    Bruises on both my knees for you{"\n"}
                                    Don't say thank you or please{"\n"}
                                    I do what I want when I'm wanting to{"\n"}
                                    My soul? So cynical{"\n"}{"\n"}
                                    So you're a tough guy{"\n"}
                                    Like it really rough guy{"\n"}
                                    Just can't get enough guy{"\n"}
                                    Chest always so puffed guy{"\n"}
                                    I'm that bad type{"\n"}
                                    Make your mama sad type{"\n"}
                                    Make your girlfriend mad tight{"\n"}
                                    Might seduce your dad type{"\n"}
                                    I'm the bad guy, duh{"\n"}{"\n"}
                                    I'm the bad guy{"\n"}{"\n"}
                                    I like it when you take control{"\n"}
                                    Even if you know that you don't{"\n"}
                                    Own me, I'll let you play the role{"\n"}
                                    I'll be your animal{"\n"}
                                    My mommy likes to sing along with me{"\n"}
                                    But she won't sing this song{"\n"}
                                    If she reads all the lyrics{"\n"}
                                    She'll pity the men I know{"\n"}{"\n"}
                                    So you're a tough guy{"\n"}
                                    Like it really rough guy{"\n"}
                                    Just can't get enough guy{"\n"}
                                    Chest always so puffed guy{"\n"}
                                    I'm that bad type{"\n"}
                                    Make your mama sad type{"\n"}
                                    Make your girlfriend mad tight{"\n"}
                                    Might seduce your dad type{"\n"}
                                    I'm the bad guy, duh{"\n"}{"\n"}
                                    I'm the bad guy, duh{"\n"}{"\n"}
                                    I'm only good at being bad, bad{"\n"}{"\n"}
                                    I like when you get mad{"\n"}
                                    I guess I'm pretty glad that you're alone{"\n"}
                                    You said she's scared of me?{"\n"}
                                    I mean, I don't see what she sees{"\n"}
                                    But maybe it's 'cause I'm wearing your cologne{"\n"}{"\n"}
                                    I'm a bad guy{"\n"}
                                    I'm, I'm a bad guy{"\n"}
                                    Bad guy, bad guy{"\n"}
                                    I'm a bad{"\n"}</Text>
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

