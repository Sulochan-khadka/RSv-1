import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React, {useState} from 'react';
import CustomInput from '../../../components/CustomInput';
import CustomButton from '../../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';

const SignUpScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [number, setNumber] = useState('');

  // const navigation = useNavigation();

  const onSignInPressed = () => {
    // navigation.navigate('SignIn');
  };
  const onSignUpPressed = () => {
    // navigation.navigate('ConfirmEmail');
  };
  const onTermsOfUsePressed = () => {
    // console.warn('terms');
  };
  const onPrivacyPress = () => {
    // console.warn('privacy');
  };
  return (
    <ScrollView style={styles.screen}>
      {/* <View style={styles.screen}> */}
      <View style={styles.root}>
        <Text style={styles.title}>Create an account</Text>
        <CustomInput
          placeholder="First Name"
          value={firstName}
          setValue={setFirstName}
        />
        <CustomInput
          placeholder="Last Name"
          value={lastName}
          setValue={setLastName}
        />
        <CustomInput placeholder="email" value={email} setvalue={setEmail} />
        <CustomInput
          placeholder="Phone Number"
          value={number}
          setValue={setNumber}
        />
        <CustomInput
          placeholder="Password"
          value={password}
          setValue={setPassword}
          secureTextEntry
        />
        <CustomInput
          placeholder="Confirm Password"
          value={confirmPassword}
          setValue={setConfirmPassword}
          secureTextEntry
        />
        <CustomButton text="sign Up" onPress={onSignUpPressed} type="Primary" />
        <Text style={styles.policy}>
          By Signing Up, you accept our{' '}
          <Text
            style={[styles.link, styles.whiteUnderline]}
            onPress={onTermsOfUsePressed}>
            Terms of Use
          </Text>{' '}
          and{' '}
          <Text
            style={[styles.link, styles.whiteUnderline]}
            onPress={onPrivacyPress}>
            Privacy Policy.
          </Text>
        </Text>
        <CustomButton
          text="Already have an account?"
          onPress={onSignInPressed}
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
  title: {
    paddingVertical: 30,
    marginTop: 10,
    fontSize: 41,
    fontWeight: 'bold',
    color: 'white',
    margin: 10,
  },
  link: {
    color: 'grey', // Set the color for other links to grey
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  policy: {
    color: 'white',
  },
  whiteUnderline: {
    color: 'white',
    textDecorationLine: 'underline',
  },
});

export default SignUpScreen;
