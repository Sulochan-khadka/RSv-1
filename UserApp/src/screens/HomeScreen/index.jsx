import {View, Text, StyleSheet, Dimensions} from 'react-native';
import React from 'react';
import HomeMap from '../../components/HomeMap';
import HomeSearch from '../../components/HomeSearch';

const HomeScreen = () => {
  return (
    <View style={styles.screen}>
      {/* <Text style={{color: 'white'}}>index</Text> */}
      <View style={{height: Dimensions.get('window').height - 400}}>
        <HomeMap />
      </View>
      <HomeSearch />
      {/* Bottom Components */}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
  },
});
export default HomeScreen;
