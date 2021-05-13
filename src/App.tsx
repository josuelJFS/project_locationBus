import 'react-native-gesture-handler';
import {AutenticacaoProvider,useAutenticacaoContext}   from './contexts/autenticacao';
import  Routas from './rotas/index';
import { NavigationContainer } from '@react-navigation/native';
import * as Updates from 'expo-updates';
import * as ScreenOrientation from 'expo-screen-orientation';
import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, useRef,useContext } from 'react';
import {Alert} from 'react-native';




function App() {
  

 
 
useEffect(()=>{

  async function updateApp(){
   try {
    const {isAvailable} = await Updates.checkForUpdateAsync();
    if(isAvailable){
     
      Alert.alert(
        "UPDATE ",
        "Nova Atualização Disponivel",
        [
          { text: "ATUALIZAR", onPress: async() => { 
            await Updates.fetchUpdateAsync();
            await Updates.reloadAsync();
            
          } }
        ],
        { cancelable: false }
      );
      
       
    }
   } catch (error) {
     console.log('error update nao pode verificar no expo cliente')
   }
      
   
  }
  updateApp()
},[])




  async function changeScreenOrientation() {
    await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
  }
  changeScreenOrientation();


  return (
    
  <NavigationContainer>  
    <AutenticacaoProvider>
      <Routas />
    </AutenticacaoProvider>
    <StatusBar   style="light" />
  </NavigationContainer> 
    
  );
}




export default App;



