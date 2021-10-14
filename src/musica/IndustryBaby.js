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
        <Image style={estilo.img} source={{ uri: 'https://portalpopline.com.br/wp-content/uploads/2021/04/lil-nas-x-instagram.jpg',}}/><Text style={estilo.artistatxt}>Lil Nas X{"\n"}Industry Baby</Text></View>
        

          <View style={estilo.centro}>
 
          </View>          
          
          <View style={estilo.box}>
          <Text style={estilo.subtitulo}>Letra da Música:</Text>
          <Text style={estilo.letra}>
                                    Baby back, ayy{"\n"}
                                    Couple racks, ayy{"\n"}
                                    Couple Grammys on him{"\n"}
                                    Couple plaques, ayy{"\n"}
                                    That's a fact, ayy{"\n"}
                                    Throw it back, ayy{"\n"}
                                    Throw it back, ayy{"\n"}{"\n"}
                                    And this one is for the champions{"\n"}
                                    I ain't lost since I began, yeah{"\n"}
                                    Funny how you said it was the end, yeah{"\n"}
                                    Then I went did it again, yeah{"\n"}{"\n"}
                                    I told you long ago, on the road{"\n"}
                                    I got what they waitin' for{"\n"}
                                    I don't run from nothin', dog{"\n"}
                                    Get your soldiers, tell 'em I ain't layin' low{"\n"}{"\n"}
                                    You was never really rootin' for me anyway{"\n"}
                                    When I'm back up at the top I wanna hear you say{"\n"}
                                    He don't run from nothin', dog{"\n"}
                                    Get your soldiers, tell 'em that the break is over{"\n"}
                                    Uh, need to, uh{"\n"}
                                    Need to get this album done{"\n"}
                                    Need a couple number ones{"\n"}
                                    Need a plaque on every song{"\n"}
                                    Need me like one with Nicki now{"\n"}
                                    Tell a rap nigga, "I don't see ya", ha{"\n"}
                                    I'm a pop nigga like Bieber, ha{"\n"}
                                    I don't fuck bitches, I'm queer, ha{"\n"}
                                    But these niggas bitches like Madea{"\n"}
                                    Yeah, yeah, yeah (yeah){"\n"}
                                    Ayy, oh, let's do it{"\n"}
                                    I ain't fall off, I just ain't release my new shit{"\n"}
                                    I blew up now everybody tryna sue me{"\n"}
                                    You call me Nas, but the hood call me Doobie, yeah{"\n"}{"\n"}
                                    And this one is for the champions{"\n"}
                                    I ain't lost since I began, yeah{"\n"}
                                    Funny how you said it was the end, yeah{"\n"}
                                    Then I went did it again, yeah{"\n"}{"\n"}
                                    I told you long ago, on the road{"\n"}
                                    I got what they waitin' for (I got what they waitin' for){"\n"}
                                    I don't run from nothin', dog{"\n"}
                                    Get your soldiers, tell 'em I ain't layin' low{"\n"}
                                    (Bitch, I ain't runnin' from no one){"\n"}
                                    You was never really rootin' for me anyway (like, ooh-ooh){"\n"}
                                    When I'm back up at the top I wanna hear you say (like, ooh-ooh){"\n"}
                                    He don't run from nothin', dog{"\n"}
                                    Get your soldiers, tell 'em that the break is over{"\n"}
                                    My track record so clean{"\n"}{"\n"}
                                    They couldn't wait to just bash me{"\n"}
                                    I must be gettin' too flashy{"\n"}
                                    Y'all shouldn't have let the world gas me (woo){"\n"}
                                    It's too late 'cause I'm here to stay{"\n"}
                                    And these girls know that I'm nasty (mm){"\n"}
                                    I sent her back to her boyfriend{"\n"}
                                    With my handprint on her ass cheek{"\n"}
                                    City talkin', we takin' notes{"\n"}
                                    Tell 'em all to keep makin' posts{"\n"}
                                    Wish he could but he can't get close{"\n"}
                                    OG so proud of me that he chokin' up while he makin' toasts{"\n"}
                                    I'm the type that you can't control{"\n"}
                                    Said I would then I made it so (so){"\n"}
                                    I don't clear up rumors (ayy){"\n"}
                                    Where's y'all sense of humor? (Ayy){"\n"}
                                    I'm done makin' jokes 'cause they got old like baby boomers{"\n"}
                                    Turn my haters to consumers{"\n"}
                                    I make vets feel like they juniors (juniors){"\n"}
                                    Say your time is comin' soon but just like Oklahoma (mm){"\n"}
                                    Mine is comin' sooner (mm){"\n"}
                                    I'm just a late bloomer (mm){"\n"}
                                    I didn't peak in high school, I'm still out here gettin' cuter (woo){"\n"}
                                    All these social networks and computers{"\n"}
                                    Got these pussies walkin' 'round like they ain't losers (losers){"\n"}{"\n"}
                                    I told you long ago, on the road{"\n"}
                                    I got what they waitin' for (I got what they waitin' for){"\n"}
                                    I don't run from nothin', dog{"\n"}
                                    Get your soldiers, tell 'em I ain't layin' low{"\n"}
                                    (Bitch, I ain't runnin' from no one){"\n"}
                                    You was never really rootin' for me anyway (like, ooh-ooh){"\n"}
                                    When I'm back up at the top I wanna hear you say (like, ooh-ooh){"\n"}
                                    He don't run from nothin', dog{"\n"}
                                    Get your soldiers, tell 'em that the break is over{"\n"}{"\n"}
                                    Yeah{"\n"}
                                    I'm the industry baby, mm{"\n"}
                                    I'm the industry baby{"\n"}
                                    Yeah</Text>
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

