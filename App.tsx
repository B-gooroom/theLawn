/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/Home';
import DiaryScreen from './src/screens/Diary';
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
          // options={{
          //   title: 'Home',
          //   headerLeft: ({onPress}: any) => (
          //     <TouchableOpacity onPress={onPress}>
          //       <Text>Left</Text>
          //     </TouchableOpacity>
          //   ),
          //   headerTitle: () => <View />,
          //   // headerTitle: ({children}: any) => (
          //   //   <View>
          //   //     <Text>{children}</Text>
          //   //   </View>
          //   // ),
          //   headerRight: () => (
          //     <View>
          //       <Text>Right</Text>
          //     </View>
          //   ),
          // }}
        />
        <Stack.Screen
          name="Diary"
          component={DiaryScreen}
          options={{title: 'Diary'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
