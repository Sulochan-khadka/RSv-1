import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React, {useState} from 'react';
import CustomInput from '../../../components/CustomInput/CustomInput';
import CustomButton from '../../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';

const ForgotPasswordScreen = () => {
  const [username, setUsername] = useState('');

  // const navigation = useNavigation();

  const onSignInPressed = () => {
    // navigation.navigate('SignIn');
  };
  const onSendPressed = () => {
    // navigation.navigate('NewPassword');
  };
  return (
    <ScrollView style={styles.screen}>
      {/* <View style={styles.screen}> */}
      <View style={styles.root}>
        <Text style={styles.title}>Reset your Password</Text>
        <CustomInput
          placeholder="Username"
          value={username}
          setValue={setUsername}
        />
        <CustomButton text="Send" onPress={onSendPressed} type="Primary" />
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
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    margin: 10,
  },
});

export default ForgotPasswordScreen;
