import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View,Image,SafeAreaView,TextInput } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
//@ts-ignore





export default function App() {
 
  
  return (
    <>
        <View style={styles.container}>
          <View style={{alignItems:"center"}}>
              <Image style={styles.logo} source={require('../img/logo.png')} />
              <View>
                  <TextInput placeholderTextColor="#fff" placeholder="LOGIN" style={styles.input} />
                  <TextInput placeholderTextColor="#fff" placeholder="SENHA" style={styles.input} />
              </View>
          </View>
        </View>
        <Image style={styles.imgFundo} source={require('../img/loginBackground.jpg')} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:"#1c1c1ce3"
  },
  fundo:{
    backgroundColor:"#1C1C1C",
   
  },
  imgFundo:{
    width:wp(100),
    height:"150%",
    position:"absolute",
    zIndex:-9999999999
    
  },
  logo:{
    width:wp(45),
    height:wp(45),
    resizeMode: 'contain',
    marginBottom:wp(6)
  },
  input:{
    backgroundColor:"#2b2b2bdb",
    width:wp(90),
    padding:wp(4),
    borderRadius:7,
    marginBottom:wp(5),
    fontSize:wp(5),
    color:"#FFF"
  }
});
