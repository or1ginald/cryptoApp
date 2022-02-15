import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import image from '../assets/backgrounds/Bg.png';
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomButton from '../components/CustomButton';
import CustomInput from '../components/CustomInput';

export const SignInScreen = () => {
  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <SafeAreaView>
        <View style={styles.container}>
          <View style={styles.logoContainer}>
            <Text style={styles.text}>CRYPTOSTEP</Text>
          </View>
          <View style={styles.signInContainer}>
            <CustomInput placeholderName={'Login'} />
            <CustomInput placeholderName={'Password'} />
            <CustomButton />
            <Text>Забыли пароль?</Text>
          </View>
          <View style={styles.infoBlock}>
            <Text style={styles.text}>Информация о нас</Text>
            <Text style={styles.text}>Связаться с нами</Text>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,.93)',
  },
  logoContainer: {
    height: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  signInContainer: {
    height: '30%',
  },
  infoBlock: {
    height: '10%',
    color: '#fff',
  },
  text: {
    color: '#fff',
  },
  container: {
    height: '100%',
    color: '#fff',
  },
});
