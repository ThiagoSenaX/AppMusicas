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
        <Image style={estilo.img} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDrkxQIXW0QEJL69FN9mevTQYQvWYLUKENZ-J25DbW_O_AxtxAAJmD-NA8LUNi3TnHGJg&usqp=CAU',}}/><Text style={estilo.artistatxt}>Eminem{"\n"}Lose Your Self</Text></View>
        

          <View style={estilo.centro}>
 
          </View>          
          
          <View style={estilo.box}>
          <Text style={estilo.subtitulo}>Letra da Música:</Text>
          <Text style={estilo.letra}>
{"\n"}Look{"\n"}
If you had{"\n"}
One shot{"\n"}
Or one opportunity{"\n"}
To seize everything you ever wanted{"\n"}
In one moment{"\n"}
Would you capture it{"\n"}
Or just let it slip?{"\n"}
Yo{"\n"}{"\n"}
His palms are sweaty, knees weak, arms are heavy{"\n"}
There's vomit on his sweater already, mom's spaghetti{"\n"}
He's nervous, but on the surface he looks calm and ready{"\n"}
To drop bombs, but he keeps on forgettin'{"\n"}
What he wrote down, the whole crowd goes so loud{"\n"}
He opens his mouth, but the words won't come out{"\n"}
He's chokin', how, everybody's jokin' now{"\n"}
The clocks run out, times up, over, blaow{"\n"}
Snap back to reality, ope there goes gravity{"\n"}
Ope, there goes Rabbit, he choked{"\n"}
He's so mad, but he won't give up that easy? No{"\n"}
He won't have it, he knows his whole back's to these ropes{"\n"}
It don't matter, he's dope, he knows that, but he's broke{"\n"}
He's so stagnant, he knows, when he goes back to this mobile home, that's when it's{"\n"}
Back to the lab again, yo, this whole rhapsody{"\n"}
Better go capture this moment and hope it don't pass him{"\n"}{"\n"}
You better lose yourself in the music, the moment{"\n"}
You own it, you better never let it go{"\n"}
You only get one shot, do not miss your chance to blow{"\n"}
This opportunity comes once in a lifetime{"\n"}{"\n"}
You better lose yourself in the music, the moment{"\n"}
You own it, you better never let it go{"\n"}
You only get one shot, do not miss your chance to blow{"\n"}
This opportunity comes once in a lifetime{"\n"}
You better{"\n"}{"\n"}
His soul's escaping, through this hole that is gaping{"\n"}
This world is mine for the taking{"\n"}
Make me king, as we move toward a New World Order{"\n"}
A normal life is borin', but super stardom's close to post mortem{"\n"}
It only grows harder, only grows hotter{"\n"}
He blows, it's all over, these hoes is all on him{"\n"}
Coast to coast shows, he's known as the Globetrotter{"\n"}
Lonely roads, God only knows, he's grown farther from home, he's no father{"\n"}
He goes home and barely knows his own daughter{"\n"}
But hold your nose 'cause here goes the cold water{"\n"}
These hoes don't want him no mo', he's cold product{"\n"}
They moved on to the next schmo who flows, he nose dove and sold nada{"\n"}
So the soap opera is told and unfolds, I suppose it's old partna, but the beat goes on{"\n"}
Da-da-dum, da-dum, da-da{"\n"}{"\n"}
You better lose yourself in the music, the moment{"\n"}
You own it, you better never let it go{"\n"}
You only get one shot, do not miss your chance to blow{"\n"}
This opportunity comes once in a lifetime{"\n"}{"\n"}
You better lose yourself in the music, the moment{"\n"}
You own it, you better never let it go{"\n"}
You only get one shot, do not miss your chance to blow{"\n"}
This opportunity comes once in a lifetime{"\n"}
You better{"\n"}{"\n"}
No more games, I'ma change what you call rage{"\n"}
Tear this motherfuckin' roof off like two dogs caged{"\n"}
I was playin' in the beginnin', the mood all changed{"\n"}
I been chewed up and spit out and booed off stage{"\n"}
But I kept rhymin' and stepped right in the next cypher{"\n"}
Best believe somebody's payin' the Pied Piper{"\n"}
All the pain inside amplified by the{"\n"}
Fact that I can't get by with my nine to{"\n"}
Five and I can't provide the right type of{"\n"}
Life for my family 'cause man, these goddamn food stamps don't buy diapers{"\n"}
And its no movie, there's no Mekhi Phifer{"\n"}
This is my life and these times are so hard{"\n"}
And it's getting even harder tryna feed and water my seed, plus{"\n"}
Teeter totter, caught up between bein' a father and a prima donna{"\n"}
Baby mama drama, screamin' on her, too much{"\n"}
For me to wanna stay in one spot, another day of monotony's{"\n"}
Gotten me to the point, I'm like a snail I've got{"\n"}
To formulate a plot or end up in jail or shot{"\n"}
Success is my only motherfuckin' option, failure's not{"\n"}
Mom, I love you, but this trailer's got to go, I cannot grow old in Salem's Lot{"\n"}
So here I go, is my shot{"\n"}
Feet, fail me not, this may be the only opportunity that I got{"\n"}{"\n"}
You better lose yourself in the music, the moment{"\n"}
You own it, you better never let it go{"\n"}
You only get one shot, do not miss your chance to blow{"\n"}
This opportunity comes once in a lifetime{"\n"}{"\n"}
You better lose yourself in the music, the moment{"\n"}
You own it, you better never let it go{"\n"}
You only get one shot, do not miss your chance to blow{"\n"}
This opportunity comes once in a lifetime{"\n"}
You better{"\n"}
You can do anything you set your mind to, man</Text>
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
