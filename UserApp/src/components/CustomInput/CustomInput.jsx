import {View, Text, TextInput, StyleSheet} from 'react-native';
import React from 'react';

const CustomInput = ({
  value,
  setValue,
  placeholder,
  secureTextEntry = false,
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={setValue} // Changed 'onChange' to 'onChangeText'
        placeholder={placeholder}
        style={styles.input}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '100%',
    height: 60, // Adjust the height as needed

    borderColor: '#e8e8e8',
    borderWidth: 1,
    borderRadius: 15,

    paddingHorizontal: 10,
    marginVertical: 10,
  },
  input: {
    fontSize: 18, // Adjust the font size as needed
    height: '100%', // Make the input take up the full height of the container
  },
});

export default CustomInput;
