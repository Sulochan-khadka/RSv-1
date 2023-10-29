import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React, {useState} from 'react';
import CustomInput from '../../../components/CustomInput/CustomInput';
import CustomButton from '../../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';

const ConfirmEmailScreen = () => {
  const [code, setCode] = useState('');

  // const navigation = useNavigation();

  const onSignInPressed = () => {
    // navigation.navigate('SignIn');
  };
  const onConfirmPressed = () => {
    // navigation.navigate('Home');
  };
  const onResendPressed = () => {
    console.warn('terms');
  };
  return (
    <ScrollView style={styles.screen}>
      {/* <View style={styles.screen}> */}
      <View style={styles.root}>
        <Text style={styles.title}>Create an account</Text>
        <CustomInput
          placeholder="Enter your confirmation code"
          value={code}
          setValue={setCode}
        />
        <CustomButton
          text="Confirm"
          onPress={onConfirmPressed}
          type="Primary"
        />
        <CustomButton
          text="Resend Code"
          onPress={onResendPressed}
          type="Fourth"
        />
        <CustomButton
          text="Back to SignIn"
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
export default ConfirmEmailScreen;
