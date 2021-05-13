
import MapView from 'react-native-maps';
import { Marker,AnimatedRegion } from 'react-native-maps';
import React, { useState, useEffect,useRef } from 'react';
import { Animated,Platform, Text, View, StyleSheet,Alert } from 'react-native';
import * as Location from 'expo-location';





const App:React.FC = ()=> {
  const [region,setRegion] =useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  

  const _map = useRef(null);

  const [locationTime, setLocalTime] = useState(0);

 

  useEffect(() => {
   
    async function go() {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        //setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({}); //capitura a localizacao

      
      setRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.00288,
        longitudeDelta: 0.00288,
      })
  
       

     
      setTimeout(() => {
        setLocalTime(locationTime+1);
      }, 5000);
    }

    go();
   
  }, [locationTime]);






  return (
    <MapView
        style={{flex:1}}
        region={region}
          ref={_map}
          showsUserLocation={true}
      >
       <Marker
       
       style={{width:10,height:10}}
        coordinate={region}
        title="ur2 opsional"
      />

      </MapView>
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


export default App;
