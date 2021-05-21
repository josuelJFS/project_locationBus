import { StatusBar } from 'expo-status-bar';
import React,{useEffect, useState} from 'react';
import { Platform, StyleSheet, Text, View,PermissionsAndroid } from 'react-native';
import MapView from 'react-native-maps';
import { WebView } from 'react-native-webview';
import {infosModal} from './home';
import {useAutenticacaoContext} from '../contexts/autenticacao';



interface props  {
  route:any
}
const PlayVideo:React.FC<props> = ({route})=> {
  const {filmes} =  route.params;
  const [filmeInfoes,setFilmesInfos] = useState<infosModal>(filmes);
  const {setRotation} = useAutenticacaoContext();
  
  useEffect(()=>{
    setRotation(false);
  },[])
  

  return (
   
   <WebView
    style={{flex:1}}
      javaScriptEnabled={true}
      allowsFullscreenVideo={true}
      domStorageEnabled={true}
      
      source={{uri:  filmeInfoes.url_video }}
                    
    />
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default PlayVideo;
