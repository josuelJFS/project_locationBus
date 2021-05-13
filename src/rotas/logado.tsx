import { createStackNavigator,CardStyleInterpolators } from '@react-navigation/stack';
import React from 'react';
import tela_home from '../telas/home';

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

        {/* <Stack.Screen name="config" component={tela_config} 
          options={{
            title: 'Configuração',
            headerStyle: {
              backgroundColor: '#0EC1CA',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold'
              
            },
          }}
        /> */}

        


      </Stack.Navigator>
  
    );
}

export default Logado;