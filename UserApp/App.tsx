import React, {useEffect, useState} from 'react';
import AuthContextProvider from './src/contexts/AuthContext';
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
import Router from './src/navigation/Root';
// import Navigation from './src/navigation';
navigator.geolocation = require('@react-native-community/geolocation');

import {Amplify, Auth, API, graphqlOperation} from 'aws-amplify';
import awsExports from './src/aws-exports';
Amplify.configure(awsExports);

import {getUser} from './src/graphql/queries';
import {createUser} from './src/graphql/mutations';

// let name = '';
// let ratings = 5;
const App: () => React.ReactNode = () => {
  useEffect(() => {
    const syncUser = async () => {
      const authUser = await Auth.currentAuthenticatedUser({bypassCache: true});
      // console.log(authUser);
      try {
        const userData = await API.graphql(
          graphqlOperation(getUser, {id: authUser?.attributes?.sub}),
        );
        // console.log(userData);
        if (userData?.data?.getUser) {
          console.log('User already exists in database');
          return;
        }
        const newUser = {
          id: authUser.attributes.sub,
          email: authUser.attributes.email,
          name: authUser.attributes.name,
          phone_number: authUser.attributes.phone_number,
          // preferred_username: authUser.attributes.preferred_username,
          ratings: 5,
        };
        const newUserResponse = await API.graphql(
          graphqlOperation(createUser, {input: newUser}),
        );
      } catch (error) {
        console.log('Error is ', error);
      }
    };
    syncUser();
  }, []);
  // const [users, setUsers] = useState([]);
  // useEffect(() => {
  //   API.graphql(graphqlOperation(listUsers)).then(result => {
  //     // console.log(result);
  //     console.log('The name of the user is:', result.data.listUsers.items.name);
  //     setUsers(result.data?.listUsers?.items);
  //   });
  // }, []);
  // useEffect(() => {
  //   if (Platform.OS === 'android') {
  //     SplashScreen.hide();
  //   }
  // }, []);
  // useEffect(() => {
  //   const removeListner = Hub.listen('auth', data => {
  //     console.log(JSON.stringify(data, null, 2));
  //     // if (data.payload.event === 'signIn') {
  //     //   const userInfo = data.payload.data.attributes;
  //     //   console.log(JSON.stringify(userInfo, null, 2));

  //     //   // DataStore.save(new User({id: userInfo.sub, name: userInfo.name}))
  //     //   const newUser = {
  //     //     id: userInfo.sub,
  //     //     name: userInfo.name,
  //     //     phone_number: userInfo.phone_number,
  //     //     email: userInfo.email,
  //     //     preferred_username: userInfo.preferred_username,
  //     //   };
  //     //   await API.graphql({
  //     //     query: CreateUserMutation,
  //     //     variables: {
  //     //       input: newUser,
  //     //     },
  //     //   });
  //     //   console.log('User saved in database');
  //     // }
  //   });
  //   return () => {
  //     removeListner();
  //   };
  // }, []);
  // useEffect(() => {
  //   const syncUser = async () => {
  //     const authUser = await Auth.currentAuthenticatedUser({bypassCache: true});
  //     console.log(authUser);
  //   };
  //   syncUser();
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
      {/* <AuthContextProvider> */}
      <Router />
      {/* </AuthContextProvider> */}
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
