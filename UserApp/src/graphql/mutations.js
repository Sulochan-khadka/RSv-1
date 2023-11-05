/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createOrder = /* GraphQL */ `
  mutation CreateOrder(
    $input: CreateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    createOrder(input: $input, condition: $condition) {
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
export const updateOrder = /* GraphQL */ `
  mutation UpdateOrder(
    $input: UpdateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    updateOrder(input: $input, condition: $condition) {
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
export const deleteOrder = /* GraphQL */ `
  mutation DeleteOrder(
    $input: DeleteOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    deleteOrder(input: $input, condition: $condition) {
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
export const createCar = /* GraphQL */ `
  mutation CreateCar(
    $input: CreateCarInput!
    $condition: ModelCarConditionInput
  ) {
    createCar(input: $input, condition: $condition) {
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
export const updateCar = /* GraphQL */ `
  mutation UpdateCar(
    $input: UpdateCarInput!
    $condition: ModelCarConditionInput
  ) {
    updateCar(input: $input, condition: $condition) {
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
export const deleteCar = /* GraphQL */ `
  mutation DeleteCar(
    $input: DeleteCarInput!
    $condition: ModelCarConditionInput
  ) {
    deleteCar(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
