/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onOrderUpdated = /* GraphQL */ `
  subscription OnOrderUpdated($id: ID!) {
    onOrderUpdated(id: $id) {
      id
      createdAt
      type
      status
      originLatitude
      originLongitude
      destLatitude
      destLongitude
      userID
      carID
      updatedAt
      __typename
    }
  }
`;
export const onCarUpdated = /* GraphQL */ `
  subscription OnCarUpdated($id: ID!) {
    onCarUpdated(id: $id) {
      id
      type
      latitude
      longitude
      heading
      isActive
      Orders {
        nextToken
        __typename
      }
      User {
        id
        name
        phone_number
        email
        ratings
        createdAt
        updatedAt
        userCarId
        __typename
      }
      createdAt
      updatedAt
      carUserId
      __typename
    }
  }
`;
export const onCreateOrder = /* GraphQL */ `
  subscription OnCreateOrder($filter: ModelSubscriptionOrderFilterInput) {
    onCreateOrder(filter: $filter) {
      id
      createdAt
      type
      status
      originLatitude
      originLongitude
      destLatitude
      destLongitude
      userID
      carID
      updatedAt
      __typename
    }
  }
`;
export const onUpdateOrder = /* GraphQL */ `
  subscription OnUpdateOrder($filter: ModelSubscriptionOrderFilterInput) {
    onUpdateOrder(filter: $filter) {
      id
      createdAt
      type
      status
      originLatitude
      originLongitude
      destLatitude
      destLongitude
      userID
      carID
      updatedAt
      __typename
    }
  }
`;
export const onDeleteOrder = /* GraphQL */ `
  subscription OnDeleteOrder($filter: ModelSubscriptionOrderFilterInput) {
    onDeleteOrder(filter: $filter) {
      id
      createdAt
      type
      status
      originLatitude
      originLongitude
      destLatitude
      destLongitude
      userID
      carID
      updatedAt
      __typename
    }
  }
`;
export const onCreateCar = /* GraphQL */ `
  subscription OnCreateCar($filter: ModelSubscriptionCarFilterInput) {
    onCreateCar(filter: $filter) {
      id
      type
      latitude
      longitude
      heading
      isActive
      Orders {
        nextToken
        __typename
      }
      User {
        id
        name
        phone_number
        email
        ratings
        createdAt
        updatedAt
        userCarId
        __typename
      }
      createdAt
      updatedAt
      carUserId
      __typename
    }
  }
`;
export const onUpdateCar = /* GraphQL */ `
  subscription OnUpdateCar($filter: ModelSubscriptionCarFilterInput) {
    onUpdateCar(filter: $filter) {
      id
      type
      latitude
      longitude
      heading
      isActive
      Orders {
        nextToken
        __typename
      }
      User {
        id
        name
        phone_number
        email
        ratings
        createdAt
        updatedAt
        userCarId
        __typename
      }
      createdAt
      updatedAt
      carUserId
      __typename
    }
  }
`;
export const onDeleteCar = /* GraphQL */ `
  subscription OnDeleteCar($filter: ModelSubscriptionCarFilterInput) {
    onDeleteCar(filter: $filter) {
      id
      type
      latitude
      longitude
      heading
      isActive
      Orders {
        nextToken
        __typename
      }
      User {
        id
        name
        phone_number
        email
        ratings
        createdAt
        updatedAt
        userCarId
        __typename
      }
      createdAt
      updatedAt
      carUserId
      __typename
    }
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
      id
      name
      phone_number
      email
      Orders {
        nextToken
        __typename
      }
      ratings
      Car {
        id
        type
        latitude
        longitude
        heading
        isActive
        createdAt
        updatedAt
        carUserId
        __typename
      }
      createdAt
      updatedAt
      userCarId
      __typename
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
      id
      name
      phone_number
      email
      Orders {
        nextToken
        __typename
      }
      ratings
      Car {
        id
        type
        latitude
        longitude
        heading
        isActive
        createdAt
        updatedAt
        carUserId
        __typename
      }
      createdAt
      updatedAt
      userCarId
      __typename
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
      id
      name
      phone_number
      email
      Orders {
        nextToken
        __typename
      }
      ratings
      Car {
        id
        type
        latitude
        longitude
        heading
        isActive
        createdAt
        updatedAt
        carUserId
        __typename
      }
      createdAt
      updatedAt
      userCarId
      __typename
    }
  }
`;
