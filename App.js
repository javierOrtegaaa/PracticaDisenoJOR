import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/paginas/LoginScreen';
import RegisterScreen from './src/paginas/RegisterScreen';
import TabScreen from './src/paginas/TabScreen';  // Asegúrate de que esta ruta sea correcta

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './src/paginas/firebase-cnfig';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        {/* Oculta la cabecera en LoginScreen */}
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{ headerShown: false }}  // Oculta la cabecera en LoginScreen
        />
        
        {/* Oculta la cabecera en RegisterScreen */}
        <Stack.Screen 
          name="Register" 
          component={RegisterScreen} 
          options={{ headerShown: false }}  // Oculta la cabecera en RegisterScreen
        />

        {/* Oculta la cabecera en TabScreen */}
        <Stack.Screen 
          name="TabScreen" 
          component={TabScreen} 
          options={{ headerShown: false }}  // Oculta la cabecera en TabScreen
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
