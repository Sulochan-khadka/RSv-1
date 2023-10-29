import {
  View,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import Logo from '../../../assets/images/Rideshare.png';
import CustomInput from '../../../components/CustomInput';
import CustomButton from '../../../components/CustomButton';
// import {useNavigation} from '@react-navigation/native';

const SignInScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {height} = useWindowDimensions();
  // const navigation = useNavigation();

  const onSignInPressed = () => {
    // navigation.navigate('Home');
  };
  const onForgotPasswordPressed = () => {
    // navigation.navigate('ForgotPassword');
  };
  const onSignUpPressed = () => {
    // navigation.navigate('SignUp');
  };
  return (
    <ScrollView styles={styles.screen}>
      {/* <View styles={styles.screen}> */}
      <View style={styles.root}>
        <Image
          source={Logo}
          style={[styles.logo, {height: height * 0.3}]}
          resizeMode="contain"
        />
        <CustomInput placeholder="email" value={email} setvalue={setEmail} />
        <CustomInput
          placeholder="Password"
          value={password}
          setValue={setPassword}
          secureTextEntry
        />
        <CustomButton text="sign In" onPress={onSignInPressed} type="Primary" />
        <CustomButton
          text="Forgot Password"
          onPress={onForgotPasswordPressed}
          type="Secondary"
        />
        <CustomButton
          text="New to RideShare? "
          onPress={onSignUpPressed}
          type="Tertiary"
        />
      </View>
      {/* </View> */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'black',
  },
  root: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'black',
  },
  logo: {
    width: '80%',
    maxWidth: 300,
    maxHeight: 200,
  },
});

export default SignInScreen;
