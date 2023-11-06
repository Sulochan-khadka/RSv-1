/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import {Amplify, API, Auth, graphqlOperation} from 'aws-amplify';
import awsExports from './src/aws-exports';
Amplify.configure(awsExports);
import {
  withAuthenticator,
  useAuthenticator,
} from '@aws-amplify/ui-react-native';
import {getCarId} from './src/graphql/queries';
import {createCar} from './src/graphql/mutations';

const App: () => React$Node = () => {
  // Auth.signOut();
  useEffect(() => {
    const updateUserCar = async () => {
      // console.log('This is the test log');
      try {
        const authenticatedUser = await Auth.currentAuthenticatedUser({
          bypassCache: true,
        });
        // console.log(authenticatedUser);
        if (!authenticatedUser) return;
        const carData = await API.graphql(
          graphqlOperation(getCarId, {id: authenticatedUser.attributes.sub}),
        );
        console.log(carData);
        if (carData?.data?.getCar) {
          console.log('User already has a car assigned');
          return;
        }
        const newCar = {
          id: authenticatedUser.attributes.sub,
          type: 'Basic',
          carUserId: authenticatedUser.attributes.sub,
        };
        await API.graphql(graphqlOperation(createCar, {input: newCar}));
      } catch (error) {
        console.log('The error is :', error);
      }
    };
    updateUserCar();
  }, []);
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <HomeScreen />
      </SafeAreaView>
    </>
  );
};

export default withAuthenticator(App);
