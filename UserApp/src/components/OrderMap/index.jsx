import React, {useState, useEffect} from 'react';
import {Image, FlatList} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
// import {API, graphqlOperation, DataStore} from 'aws-amplify';
// import {listCars} from '../../graphql/queries';
// import {Car} from '../../models';

// import cars from '../../assets/data/cars';

const OrderMap = ({car}) => {
  // console.log(car.latitude);
  // console.log(car.longitude);
  // const [cars, setCars] = useState([]);

  const getImage = type => {
    if (type === 'Basic') {
      return require('../../assets/images/top-UberXL.png');
    }
    if (type === 'Economic') {
      return require('../../assets/images/top-UberX.png');
    }
    return require('../../assets/images/top-Comfort.png');
  };

  return (
    <MapView
      style={{width: '100%', height: '100%'}}
      provider={PROVIDER_GOOGLE}
      showsUserLocation={true}
      initialRegion={{
        latitude: 22.80278,
        longitude: 86.18545,
        latitudeDelta: 0.222,
        longitudeDelta: 0.121,
      }}>
      {car && (
        <Marker
          key={car.id}
          coordinate={{latitude: car.latitude, longitude: car.longitude}}>
          <Image
            style={{
              width: 70,
              height: 70,
              resizeMode: 'contain',
              transform: [{rotate: `${car.heading}deg`}],
            }}
            source={getImage(car.type)}
          />
        </Marker>
      )}
    </MapView>
  );
};

export default OrderMap;
