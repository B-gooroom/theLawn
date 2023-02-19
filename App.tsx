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
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/Home';
import BackScreen from './src/screens/Back';

function App(): JSX.Element {
  // const isDarkMode = useColorScheme() === 'dark';

  const Stack = createNativeStackNavigator();
  // const Tab = createBottomTabNavigator();

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Home'}}
        />
        <Stack.Screen name="Back" component={BackScreen} />
      </Stack.Navigator>
      {/* <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Back" component={BackScreen} />
      </Tab.Navigator> */}
    </NavigationContainer>
  );
}

export default App;
