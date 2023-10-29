import {View, Text, StyleSheet, Pressable} from 'react-native';
import React from 'react';

const CustomButton = ({onPress, text, type = 'Primary'}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.container, styles[`container_${type}`]]}>
      <Text style={[styles.text, styles[`text_${type}`]]}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 20,
    alignItems: 'center',
    borderRadius: 10,
  },
  container_Primary: {
    marginVertical: 40,
    backgroundColor: 'black',
    borderWidth: 3, // Increased border width
    borderColor: 'white',
  },
  container_Secondary: {
    marginVertical: 10,
    backgroundColor: '#999999',
  },
  container_Tertiary: {
    marginVertical: 60,
    backgroundColor: 'black',
  },
  container_Fourth: {
    backgroundColor: 'grey',
  },
  text: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 18, // Adjust the text size as needed
  },
  text_Primary: {
    fontWeight: 'bold',
  },
  text_Secondary: {
    fontWeight: 'bold',
    color: 'red',
  },
  text_Tertiary: {
    color: 'white',
  },
  text_fourth: {
    color: 'black',
  },
});

export default CustomButton;
