import React, {useState} from 'react';
import {View, Dimensions, Alert} from 'react-native';
import {API, graphqlOperation, Auth} from 'aws-amplify';
import RouteMap from '../../components/RouteMap';
import VehicleTypes from '../../components/VehicleTypes';
import {createOrder} from '../../graphql/mutations';

import {useRoute, useNavigation} from '@react-navigation/native';

const SearchResults = props => {
  const typeState = useState(null);
  const route = useRoute();
  const navigation = useNavigation();

  const {originPlace, destinationPlace} = route.params;

  const onSubmit = async () => {
    const [type] = typeState;
    if (!type) {
      return;
    }

    //submit to server
    try {
      const userInfo = await Auth.currentAuthenticatedUser();
      const date = new Date();
      console.log(
        'The origin place latitude is :',
        originPlace.details.geometry.location.lat,
      );
      const input = {
        createdAt: date.toISOString(),
        type,
        originLatitude: originPlace.details.geometry.location.lat,
        originLongitude: originPlace.details.geometry.location.lng,

        destLatitude: destinationPlace.details.geometry.location.lat,
        destLongitude: destinationPlace.details.geometry.location.lng,

        userID: userInfo.attributes.sub,
        carID: '1',

        status: 'NEW',
      };
      const response = await API.graphql(
        graphqlOperation(createOrder, {
          input: input,
        }),
      );
      navigation.navigate('OrderPage', {id: response.data.createOrder.id});
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <View style={{display: 'flex', justifyContent: 'space-between'}}>
      <View style={{height: Dimensions.get('window').height - 500}}>
        <RouteMap origin={originPlace} destination={destinationPlace} />
      </View>

      <View style={{height: 400}}>
        <VehicleTypes typeState={typeState} onSubmit={onSubmit} />
      </View>
    </View>
  );
};

export default SearchResults;
