import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import image from '../assets/backgrounds/Bg.png';
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomButton from '../components/CustomButton';
import CustomInput from '../components/CustomInput';

// const image = {uri: '/assets/backgrounds/Bg.png'};

export const SignInScreen = () => {
  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <SafeAreaView>
        <View style={styles.container}>
          {/* <Text style={styles.text}>SignInScreen</Text> */}
          {/* <View style={styles.homeIndicator} /> */}
          <View style={styles.logoContainer}>
            <Text>CryptoShit</Text>
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
    // flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,.93)',
  },
  logoContainer: {
    height: '50%',
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
  // text: {
  //   color: '#FFF',
  // },
  container: {
    // display: 'flex',
    // flexDirection: 'column-reverse',
    // flex: 1,
    height: '100%',
    color: '#fff',
  },
  // homeIndicator: {
  //   height: 34,
  //   backgroundColor: 'red',
  // },
});

/* Bg */

// position: absolute;
// left: -0.27%;
// right: 0.27%;
// top: 0%;
// bottom: 0%;

// /* Rectangle 141 */

// position: absolute;
// left: -0.27%;
// right: 0.27%;
// top: 0%;
// bottom: 0%;

// background: #C4C4C4;

// /* SL-051919-20420-10-[преобразованный] 1 */

// position: absolute;
// left: 107.73%;
// right: -225.33%;
// top: 0%;
// bottom: 46.31%;

// background: url(SL-051919-20420-10-[преобразованный].png);
// opacity: 0.2;
// transform: rotate(90deg);

// /* Ellipse 8 */

// position: absolute;
// left: -56.53%;
// right: 84%;
// top: 1.35%;
// bottom: 65.15%;

// /* Linear */
// background: linear-gradient(90deg, #D69821 0%, #FCC201 100%);
// opacity: 0.3;
// filter: blur(200px);

// /* Ellipse 10 */

// position: absolute;
// left: -20.27%;
// right: 80.27%;
// top: 87.44%;
// bottom: -8.25%;

// /* Linear */
// background: linear-gradient(90deg, #D69821 0%, #FCC201 100%);
// opacity: 0.2;
// filter: blur(200px);

// /* Ellipse 9 */

// position: absolute;
// left: 70.13%;
// right: -42.67%;
// top: 57.91%;
// bottom: 21.28%;

// /* Linear */
// background: linear-gradient(90deg, #D69821 0%, #FCC201 100%);
// opacity: 0.4;
// filter: blur(200px);
// transform: rotate(-20.94deg);
