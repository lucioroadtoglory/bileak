import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View 
} from 'react-native';
import Home from './src/pages/Home';
import { useFonts, 
  Poppins_300Light, 
  Poppins_400Regular, 
  Poppins_600SemiBold 
} from '@expo-google-fonts/poppins'
import AppLoading from 'expo-app-loading'

export default function App() {

  let [fontsLoaded] = useFonts({
    Poppins_300Light, Poppins_400Regular, Poppins_600SemiBold
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <StatusBar style="light" backgroundColor="black"/>
      <Home />
    </>
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
