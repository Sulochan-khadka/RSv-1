import React, {useEffect} from 'react';
import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  PermissionsAndroid,
} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import {
  withAuthenticator,
  useAuthenticator,
} from '@aws-amplify/ui-react-native';

Geolocation.getCurrentPosition(info => console.log(info));
// import SplashScreen from 'react-native-splash-screen';
import 'react-native-gesture-handler';
import SignUpScreen from './src/screens/AuthenticationUI/SignUpScreen/SignUpScreen';
import NewPasswordScreen from './src/screens/AuthenticationUI/NewPasswordScreen';
import ConfirmEmailScreen from './src/screens/AuthenticationUI/ConfirmEmailScreen';
import ForgotPasswordScreen from './src/screens/AuthenticationUI/ForgotPasswordScreen';
import SignInScreen from './src/screens/AuthenticationUI/SignInScreen/SignInScreen';
import HomeScreen from './src/screens/HomeScreen';
import DestinationSearch from './src/screens/DestinationSearch';
import VehicleTypes from './src/components/VehicleTypes';
import HomeMap from './src/components/HomeMap';
import SearchResults from './src/screens/SearchResults';
import HomeSearch from './src/components/HomeSearch';
import Router from './src/navigation/Root';
// import Navigation from './src/navigation';
navigator.geolocation = require('@react-native-community/geolocation');

import {Amplify} from 'aws-amplify';
import awsExports from './src/aws-exports';
Amplify.configure(awsExports);

const App: () => React.ReactNode = () => {
  // useEffect(() => {
  //   if (Platform.OS === 'android') {
  //     SplashScreen.hide();
  //   }
  // }, []);
  const androidPermissions = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Hey, Photo App Camera Permission',
          message:
            'Cool RideShare needs access to your Location ' +
            'so you can take awesome Rides.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the Location');
      } else {
        console.log('Location permission denied');
      }
    } catch (err) {
      console.warn(err);
    }

    useEffect(() => {
      if (Platform.OS === 'android') {
        androidPermissions();
      } else {
        Geolocation.requestAuthorization();
      }
    }, []);
  };
  return (
    <SafeAreaView style={styles.root}>
      <StatusBar barStyle="dark-content" />
      {/* <Navigation /> */}
      {/* <SignInScreen /> */}
      {/* <SignUpScreen /> */}
      {/* <ConfirmEmailScreen /> */}
      {/* <ForgotPasswordScreen /> */}
      {/* <NewPasswordScreen /> */}
      {/* <HomeScreen /> */}
      {/* <HomeSearch /> */}
      {/* <DestinationSearch /> */}
      {/* <HomeMap /> */}
      {/* <VehicleTypes /> */}
      {/* <SearchResults /> */}
      {/* <DestinationSearch /> */}
      <Router />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'smokewhite',
  },
});
export default withAuthenticator(App);
