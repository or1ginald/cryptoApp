/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
// import {StyleSheet} from 'react-native';
import {SignInScreen} from './src/screens/SignInScreen';
import PasswordScreen from './src/screens/PasswordScreen';
// import HomeScreen from './src/screens/HomeScreen';
// import EducationScreen from './src/screens/EducationScreen';
// import EventsScreen from './src/screens/EventsScreen';
// import DeFiScreen from './src/screens/DeFiScreen';
// import ProfileScreen from './src/screens/ProfileScreen';
import BottomTab from './src/components/BottomTab';

const App = () => {
  const Stack = createStackNavigator();
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          {true ? (
            <>
              <Stack.Screen
                name="SignIn"
                component={SignInScreen}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="RecoveryPassword"
                component={PasswordScreen}
                options={{headerShown: false}}
              />
            </>
          ) : (
            <>
              <Stack.Screen
                name="Home"
                component={BottomTab}
                options={{headerShown: false}}
              />
              {/* <Stack.Screen
                name="Education"
                component={EducationScreen}
                // options={{headerShown: false}}
              />
              <Stack.Screen
                name="Events"
                component={EventsScreen}
                // options={{headerShown: false}}
              />
              <Stack.Screen
                name="DeFi"
                component={DeFiScreen}
                // options={{headerShown: false}}
              />
              <Stack.Screen
                name="Profile"
                component={ProfileScreen}
                // options={{headerShown: false}}
              /> */}
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

// const styles = StyleSheet.create({});

export default App;
