// import {View, Text, StyleSheet, Dimensions} from 'react-native';
// import React, {useState, useEffect} from 'react';
// import OrderMap from '../../components/OrderMap';
// import {useRoute} from '@react-navigation/native';
// import {getOrder, getCar} from '../../graphql/queries';
// import {API, graphqlOperation} from 'aws-amplify';
// import {onOrderUpdated, onCarUpdated} from './subscriptions';

// const OrderScreen = props => {
//   const [car, setCar] = useState(null);
//   const [order, setOrder] = useState(null);

//   const route = useRoute();
//   console.log(route.params?.id);
//   //Fetch order on initial render
//   // useEffect(() => {
//   //   const fetchOrder = async () => {
//   //     try {
//   //       const orderData = await API.graphql(
//   //         graphqlOperation(getOrder, {id: route.params.id}),
//   //       );
//   //       // console.log(orderData);

//   //       setOrder(orderData.data.getOrder);
//   //     } catch (error) {
//   //       console.error(error);
//   //     }
//   //   };
//   //   fetchOrder();
//   // }, []);

//   useEffect(() => {
//     const fetchOrder = async () => {
//       try {
//         const orderData = await API.graphql(
//           graphqlOperation(getOrder, {id: route.params.id}),
//         );
//         setOrder(orderData.data.getOrder);
//       } catch (e) {}
//     };
//     fetchOrder();
//   }, []);

//   //Subscribe to order updates
//   // useEffect(() => {
//   //   const subscription = API.graphql(
//   //     graphqlOperation(onOrderUpdated, {id: route.params.id}),
//   //   ).subscribe({
//   //     next: ({value}) => setOrder(value.data.onOrderUpdated),
//   //     error: error => console.warn(error),
//   //   });
//   //   return () => subscription.unsubscribe;
//   // }, []);

//   useEffect(() => {
//     const subscription = API.graphql(
//       graphqlOperation(onOrderUpdated, {id: route.params.id}),
//     ).subscribe({
//       next: ({value}) => setOrder(value.data.onOrderUpdated),
//       error: error => console.warn(error),
//     });

//     return () => subscription.unsubscribe();
//   }, []);

//   //Fetch car data when order is updated
//   // useEffect(() => {
//   //   console.log('before condition of carid to 1');
//   //   console.log(order.carID);
//   //   if (!order?.carID || order.carID === '1') return;
//   //   const fetchCar = async () => {
//   //     console.log('before try block');
//   //     try {
//   //       console.log('Try block', order);
//   //       const carData = await API.graphql(
//   //         graphqlOperation(getCar, {id: order.carID}),
//   //       );
//   //       // console.log(orderData);

//   //       setCar(carData.data.getCar);
//   //     } catch (error) {
//   //       console.error(error);
//   //     }
//   //   };
//   //   fetchCar();
//   // }, [order]);

//   useEffect(() => {
//     if (!order?.carId || order.carId === '1') {
//       return;
//     }

//     const fetchCar = async () => {
//       try {
//         const carData = await API.graphql(
//           graphqlOperation(getCar, {id: order.carId}),
//         );
//         console.log(carData);
//         setCar(carData.data.getCar);
//       } catch (e) {}
//     };
//     fetchCar();
//   }, [order]);
//   // console.log(order);
//   // console.warn(route.params?.id);

//   //Subscribe to car Updates
//   useEffect(() => {
//     if (!order?.carId || order.carId === '1') {
//       return;
//     }

//     const subscription = API.graphql(
//       graphqlOperation(onCarUpdated, {id: order.carId}),
//     ).subscribe({
//       next: ({value}) => setCar(value.data.onCarUpdated),
//       error: error => console.warn(error),
//     });

//     return () => subscription.unsubscribe();
//   }, [order]);

//   return (
// <View style={styles.screen}>
//       {/* <Text style={{color: 'white'}}>index</Text> */}
//       <View style={{height: Dimensions.get('window').height - 400}}>
//         <OrderMap car={car} />
//       </View>
//       <View>
//         <Text>Order status: {order?.status}</Text>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   screen: {
//     flex: 1,
//     backgroundColor: 'white',
//   },
// });
// export default OrderScreen;

import React, {useState, useEffect} from 'react';
import {View, Dimensions, Text, StyleSheet} from 'react-native';
import OrderMap from '../../components/OrderMap';
import {useRoute} from '@react-navigation/native';
import {API, graphqlOperation} from 'aws-amplify';
import {getOrder, getCar} from '../../graphql/queries';
import {onOrderUpdated, onCarUpdated} from './subscriptions';

const OrderScreen = props => {
  const [car, setCar] = useState(null);
  const [order, setOrder] = useState(null);

  const route = useRoute();
  console.log(route.params.id);

  // Fetch order on initial render
  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const orderData = await API.graphql(
          graphqlOperation(getOrder, {id: route.params.id}),
        );
        setOrder(orderData.data.getOrder);
      } catch (e) {}
    };
    fetchOrder();
  }, []);

  // Subscribe to order updates
  useEffect(() => {
    const subscription = API.graphql(
      graphqlOperation(onOrderUpdated, {id: route.params.id}),
    ).subscribe({
      next: ({value}) => setOrder(value.data.onOrderUpdated),
      error: error => console.warn(error),
    });

    return () => subscription.unsubscribe();
  }, []);

  // Fetch Car data when order is updated
  useEffect(() => {
    if (!order?.carID || order.carID === '1') {
      return;
    }

    const fetchCar = async () => {
      try {
        const carData = await API.graphql(
          graphqlOperation(getCar, {id: order.carID}),
        );
        // console.log(carData);
        setCar(carData.data.getCar);
      } catch (e) {}
    };
    fetchCar();
  }, [order]);

  // Subscribe to car updates
  useEffect(() => {
    if (!order?.carID || order.carID === '1') {
      return;
    }
    console.log('Subscribed car updates');
    console.log(order.carID);
    const subscription = API.graphql(
      graphqlOperation(onCarUpdated, {id: order.carID}),
    ).subscribe({
      next: ({value}) => setCar(value.data.onCarUpdated),
      error: error => console.warn(error),
    });

    return () => subscription.unsubscribe();
  }, [order]);

  return (
    <View style={styles.screen}>
      <View style={{height: Dimensions.get('window').height - 400}}>
        <OrderMap car={car} />
      </View>
      <View>
        <Text>Order status: {order?.status}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default OrderScreen;
