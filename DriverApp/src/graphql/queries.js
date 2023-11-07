export const getCarId = /* GraphQL */ `
  query GetCar($id: ID!) {
    getCar(id: $id) {
      id
    }
  }
`;

export const getCar = /* GraphQL */ `
  query GetCar($id: ID!) {
    getCar(id: $id) {
      id
      type
      latitude
      longitude
      heading
      isActive
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

export const listOrders = /* GraphQL */ `
  query ListOrders(
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
