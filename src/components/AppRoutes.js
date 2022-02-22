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
import {SignInScreen} from '../screens/SignInScreen';
import PasswordScreen from '../screens/PasswordScreen';
import {NavigationContainer} from '@react-navigation/native';
import BottomTab from './BottomTab';

const AppRoutes = () => {
  const Stack = createStackNavigator();
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          {false ? (
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
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};
// const styles = StyleSheet.create({});

export default AppRoutes;
