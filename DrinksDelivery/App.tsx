import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './src/views/Home/Home';
import { RegisterScreen } from './src/views/Register/Register';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen} //Componente Asignado.
          options={{ headerShown: false }}
        />
      <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={{ title: 'Registro', headerShown: false }}
          
  />
        {/* <Stack.Screen name="Profile" component={ProfileScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;