import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import tela_login from '../telas/login';
const Stack = createStackNavigator();

 const Livre = ()=>{
    return (
      <Stack.Navigator >
        <Stack.Screen name="login" component={tela_login} 
            options={{
                headerShown:false,
                
            }}
        />
      </Stack.Navigator>
  
    );
}

export default Livre;