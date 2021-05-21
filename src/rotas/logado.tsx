import { createStackNavigator,CardStyleInterpolators } from '@react-navigation/stack';
import React from 'react';
import tela_home from '../telas/home';
import playVideo from '../telas/playVideo';

const Stack = createStackNavigator();

 const Logado = ()=>{
    return (
      <Stack.Navigator
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
      }}
      >
      
        <Stack.Screen name="home" component={tela_home} 
            options={{
                headerShown:false,
            }}
        />

        <Stack.Screen name="playvideo" component={playVideo} 
          options={{
            title: 'Nome',
            headerStyle: {
              backgroundColor: '#000000',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold'
              
            },
          }}
        />

        


      </Stack.Navigator>
  
    );
}

export default Logado;