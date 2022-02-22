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
import {SignInScreen} from './src/screens/SignInScreen';
import PasswordScreen from './src/screens/PasswordScreen';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  const Stack = createStackNavigator();
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          {
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
          }
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//     // fontFamily: 'Palanquin-Bold',
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//     fontFamily: 'Palanquin-Bold',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '700',
//     fontFamily: 'Palanquin-Bold',
//   },
//   highlight: {
//     fontWeight: '700',
//   },

export default App;
