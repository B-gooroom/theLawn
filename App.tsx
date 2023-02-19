/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
// import type {PropsWithChildren} from 'react';
// import {
//   // SafeAreaView,
//   // ScrollView,
//   // StatusBar,
//   // StyleSheet,
//   // Text,
//   useColorScheme,
//   View,
// } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/Home';
import BackScreen from './src/screens/Back';
import Header from './src/screens/components/Header';

function App(): JSX.Element {
  // const isDarkMode = useColorScheme() === 'dark';

  const Stack = createNativeStackNavigator();

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? '#383c40' : '#fff',
  // };

  return (
    <NavigationContainer>
      <Header />
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Home'}}
        />
        <Stack.Screen name="Back" component={BackScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
